import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { useAuthStore } from '@/stores/auth';

export default function Home() {
  const { user, role } = useAuthStore();

  return (
    <Container>
      <Card>
        <S.Header>Bem-vindo ao BarberBook ✂️</S.Header>
        <S.IntroText>
          O BarberBook é a plataforma ideal para conectar barbearias e clientes
          de forma simples e moderna.
        </S.IntroText>

        <S.FeatureList>
          <li>
            <strong>Clientes</strong>: encontram barbearias, agendam horários e
            gerenciam suas reservas em um só lugar.
          </li>
          <li>
            <strong>Barbeiros</strong>: gerenciam sua agenda, divulgam seu
            trabalho e compartilham links de agendamento de forma prática.
          </li>
        </S.FeatureList>

        <p>
          Para começar, basta criar sua conta ou fazer login. O processo é
          rápido e unificado para todos os usuários.
        </p>

        <S.ButtonGroup>
          {!user ? (
            <Link to="/auth">
              <Button>Criar conta / Entrar</Button>
            </Link>
          ) : role === 'client' ? (
            <Link to="/client/bookings">
              <Button>Meus Agendamentos</Button>
            </Link>
          ) : (
            <Link to="/barber/dashboard">
              <Button>Ir para o Painel</Button>
            </Link>
          )}
        </S.ButtonGroup>
      </Card>
    </Container>
  );
}
