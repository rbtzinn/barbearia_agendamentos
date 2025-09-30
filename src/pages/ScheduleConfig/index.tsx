import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { setWeeklySchedule, WeeklySchedule } from '@/services/firestore';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DayToggle from '@/components/DayToggle';
import * as S from './styles';

export default function ScheduleConfig() {
  const [params] = useSearchParams();
  const shopId = params.get('shopId') || '';
  const [weekly, setWeekly] = useState<WeeklySchedule>({});
  const [start, setStart] = useState('09:00');
  const [end, setEnd] = useState('18:00');
  const [interval, setInterval] = useState<number | ''>(''); 
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null); // 👈 estado de erro
  const navigate = useNavigate();

  const days = [
    ['mon', 'Segunda'],
    ['tue', 'Terça'],
    ['wed', 'Quarta'],
    ['thu', 'Quinta'],
    ['fri', 'Sexta'],
    ['sat', 'Sábado'],
    ['sun', 'Domingo'],
  ] as const;

  function generateSlots() {
    setError(null);

    if (interval === '' || interval <= 0) {
      setError('Informe um intervalo válido em minutos.');
      return;
    }

    const slots: string[] = [];
    let [h, m] = start.split(':').map(Number);
    const [endH, endM] = end.split(':').map(Number);

    while (h < endH || (h === endH && m < endM)) {
      const hh = String(h).padStart(2, '0');
      const mm = String(m).padStart(2, '0');
      slots.push(`${hh}:${mm}`);

      m += interval;
      while (m >= 60) {
        h++;
        m -= 60;
      }
    }

    const newWeekly = { ...weekly };
    selectedDays.forEach((day) => {
      newWeekly[day] = slots;
    });
    setWeekly(newWeekly);
  }

  async function save() {
    setError(null);

    if (interval === '' || interval <= 0) {
      setError('Informe um intervalo válido em minutos.');
      return;
    }

    try {
      await setWeeklySchedule(shopId, weekly);
      navigate('/barber/share?shopId=' + shopId);
    } catch (e: any) {
      setError('Erro ao salvar: ' + e.message);
    }
  }

  const handleDayToggle = (dayKey: string) => {
    setSelectedDays((prev) =>
      prev.includes(dayKey)
        ? prev.filter((d) => d !== dayKey)
        : [...prev, dayKey],
    );
  };

  return (
    <Container>
      <Card>
        <h2>Configurar horários</h2>
        <p>
          Defina o horário de início, fim, intervalo entre cortes e os dias da
          semana.
        </p>

        <S.FormGrid>
          <S.InputGroup>
            <label>Início</label>
            <input
              type="time"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label>Fim</label>
            <input
              type="time"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label>Intervalo (min)</label>
            <input
              type="number"
              value={interval}
              min={5}
              step={5}
              placeholder="Ex: 30"
              onChange={(e) =>
                setInterval(e.target.value === '' ? '' : Number(e.target.value))
              }
            />
          </S.InputGroup>
        </S.FormGrid>

        <S.DaysSelector>
          <p>Dias da semana:</p>
          <div className="days-grid">
            {days.map(([k, label]) => (
              <DayToggle
                key={k}
                label={label}
                selected={selectedDays.includes(k)}
                onClick={() => handleDayToggle(k)}
              />
            ))}
          </div>
        </S.DaysSelector>

        {error && (
          <p style={{ color: 'red', marginTop: 12, fontSize: '0.9rem' }}>
            {error}
          </p>
        )}

        <S.Actions>
          <Button onClick={generateSlots}>Gerar horários</Button>
          <Button onClick={save}>Salvar</Button>
        </S.Actions>

        {Object.keys(weekly).length > 0 && (
          <S.Preview>
            <h3>Pré-visualização</h3>
            {days.map(([k, label]) =>
              weekly[k]?.length ? (
                <S.DayPreview key={k}>
                  <strong>{label}:</strong>
                  <S.TimeSlotsGrid>
                    {weekly[k].map((t) => (
                      <S.TimeSlot key={t}>{t}</S.TimeSlot>
                    ))}
                  </S.TimeSlotsGrid>
                </S.DayPreview>
              ) : null,
            )}
          </S.Preview>
        )}
      </Card>
    </Container>
  );
}
