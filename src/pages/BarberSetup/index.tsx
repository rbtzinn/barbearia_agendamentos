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

  async function handleCreate() {
    if (!user) return;
    setLoading(true);
    try {
      const { id } = await createShop(user.uid, name, location);
      navigate('/barber/schedule?shopId=' + id);
    } catch (e: any) {
      alert(e.message);
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
          <Button onClick={handleCreate} disabled={loading || !name}>
            Salvar
          </Button>
        </S.FormGrid>
      </Card>
    </Container>
  );
}
