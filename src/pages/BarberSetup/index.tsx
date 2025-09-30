import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { useAuthStore } from '@/stores/auth';
import { createShop } from '@/services/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export default function BarberSetup() {
  const { user } = useAuthStore();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [instagram, setInstagram] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'error' | 'success'; msg: string } | null>(null);

  async function handleCreate() {
    if (!user) return;
    setLoading(true);
    setFeedback(null);
    try {
      const { id } = await createShop(user.uid, name, location, phone, instagram);
      setFeedback({ type: 'success', msg: 'Barbearia cadastrada com sucesso! ✅' });
      setTimeout(() => {
        navigate('/barber/schedule?shopId=' + id);
      }, 1200);
    } catch (e: any) {
      setFeedback({ type: 'error', msg: e.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Card>
        <h2>Cadastrar Barbearia</h2>
        <S.FormGrid>
          <input
            placeholder="Nome da barbearia"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Localização (bairro, cidade)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            placeholder="Telefone (WhatsApp)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            placeholder="Instagram (@barbearia)"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />

          {feedback && (
            <p
              style={{
                color: feedback.type === 'error' ? 'red' : 'green',
                fontSize: '0.9rem',
                marginTop: 8,
              }}
            >
              {feedback.msg}
            </p>
          )}

          <Button onClick={handleCreate} disabled={loading || !name}>
            {loading ? 'Salvando...' : 'Salvar'}
          </Button>
        </S.FormGrid>
      </Card>
    </Container>
  );
}
