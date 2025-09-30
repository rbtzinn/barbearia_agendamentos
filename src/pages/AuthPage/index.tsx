import { useState } from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { useAuthStore } from '@/stores/auth';
import { Navigate } from 'react-router-dom';
import * as S from './styles';
import PasswordInput from '@/components/PasswordInput';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/services/firebase';

export default function AuthPage() {
  const { user, role, ready, login, register } = useAuthStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localRole, setLocalRole] = useState<'client' | 'barber'>('client');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (user) {
    const redirectRole = role || localRole;
    return (
      <Navigate
        to={redirectRole === 'barber' ? '/barber/dashboard' : '/client/bookings'}
        replace
      />
    );
  }

  async function handleSubmit() {
    try {
      setError(null);
      setLoading(true);

      if (isRegister) {
        if (!name.trim()) {
          setError('Informe seu nome');
          return;
        }
        if (password !== confirmPassword) {
          setError('As senhas não conferem');
          return;
        }
        await register(email, password, { name, role: localRole });
      } else {
        await login(email, password);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword() {
    if (!email.trim()) {
      setError('Informe seu e-mail para recuperar a senha.');
      return;
    }
    try {
      setError(null);
      await sendPasswordResetEmail(auth, email);
      alert('Enviamos um link de redefinição para o seu e-mail.');
    } catch (e: any) {
      setError(e.message);
    }
  }

  return (
    <Container>
      <Card>
        <h2>{isRegister ? 'Criar conta' : 'Entrar'}</h2>
        <S.FormGrid>
          {isRegister && (
            <>
              <input
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <S.RoleSelect
                value={localRole}
                onChange={(e) =>
                  setLocalRole(e.target.value as 'client' | 'barber')
                }
              >
                <option value="client">Sou Cliente</option>
                <option value="barber">Sou Barbeiro</option>
              </S.RoleSelect>
            </>
          )}

          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />

          {isRegister && (
            <PasswordInput
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme sua senha"
            />
          )}

          {!isRegister && (
            <S.ForgotLink type="button" onClick={handleForgotPassword}>
              Esqueci minha senha
            </S.ForgotLink>
          )}

          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

          <Button onClick={handleSubmit} loading={loading} disabled={loading}>
            {isRegister ? 'Cadastrar' : 'Entrar'}
          </Button>
          <Button
            variant="ghost"
            onClick={() => setIsRegister((s) => !s)}
            disabled={loading}
          >
            {isRegister ? 'Já tenho conta' : 'Ainda não tenho conta'}
          </Button>
        </S.FormGrid>
      </Card>
    </Container>
  );
}
