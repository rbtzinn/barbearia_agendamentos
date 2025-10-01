import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/stores/auth';
import { FiUsers, FiScissors } from 'react-icons/fi';
import * as S from './styles';

export default function Home() {
  const { user, role } = useAuthStore();

  return (
    <Container>
      <Card>
        {/* Hero Section */}
        <S.Hero>
          <h1>Agende seu corte em segundos ✂️</h1>
          <p>
            BarberBook conecta <strong>clientes</strong> e <strong>barbeiros</strong> em uma plataforma moderna e fácil de usar.
          </p>
          <S.HeroActions>
            {!user ? (
              <Link to="/auth">
                <Button>Começar agora</Button>
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
          </S.HeroActions>
        </S.Hero>

        {/* Features */}
        <S.Features>
          <S.FeatureCard>
            <FiUsers size={32} />
            <h3>Para Clientes</h3>
            <p>Encontre barbearias próximas, agende horários e acompanhe seus cortes facilmente.</p>
          </S.FeatureCard>

          <S.FeatureCard>
            <FiScissors size={32} />
            <h3>Para Barbeiros</h3>
            <p>Gerencie sua agenda, compartilhe links de agendamento e organize seus clientes.</p>
          </S.FeatureCard>
        </S.Features>

        {/* CTA final */}
        {!user && (
          <S.CTA>
            <h2>Pronto para começar?</h2>
            <p>Crie sua conta e agende seu próximo corte agora mesmo.</p>
            <Link to="/auth">
              <Button>Cadastre-se grátis</Button>
            </Link>
          </S.CTA>
        )}
      </Card>
    </Container>
  );
}
