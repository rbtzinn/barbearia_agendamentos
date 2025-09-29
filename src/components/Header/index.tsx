import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  Nav,
  Brand,
  Actions,
  MenuButton,
  MenuOverlay,
  NavHeader,
} from './styles';
import { useAuthStore } from '@/stores/auth';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const { pathname } = useLocation();
  const { user, role, signOut, ready } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  if (!ready) return null;

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <MenuOverlay open={menuOpen} onClick={closeMenu} />

      <Container>
        {/* Para o mobile, o MenuButton será posicionado corretamente com CSS */}
        <MenuButton onClick={() => setMenuOpen((s) => !s)}>
          <FiMenu />
        </MenuButton>

        


        {/* NAV DESKTOP */}
<Nav data-desktop>
  <Link to="/" data-active={pathname === '/'} onClick={closeMenu}>
    Início
  </Link>

  {role === 'client' && (
    <>
      <Link
        to="/client"
        data-active={pathname.startsWith('/client')}
        onClick={closeMenu}
      >
        Buscar Barbearias
      </Link>
      <Link
        to="/client/bookings"
        data-active={pathname.startsWith('/client/bookings')}
        onClick={closeMenu}
      >
        Meus Agendamentos
      </Link>
    </>
  )}

  {role === 'barber' && (
    <Link
      to="/barber/dashboard"
      data-active={pathname.startsWith('/barber')}
      onClick={closeMenu}
    >
      Barbeiro
    </Link>
  )}
</Nav>

{/* NAV MOBILE */}
<Nav open={menuOpen} data-mobile>
  <NavHeader>
    <div className="brand-in-menu">
      <Link to="/" onClick={closeMenu}>
        BarberBook
      </Link>
    </div>
    <MenuButton onClick={closeMenu}>
      <FiX />
    </MenuButton>
  </NavHeader>

  <Link to="/" data-active={pathname === '/'} onClick={closeMenu}>
    Início
  </Link>

  {role === 'client' && (
    <>
      <Link
        to="/client"
        data-active={pathname.startsWith('/client')}
        onClick={closeMenu}
      >
        Buscar Barbearias
      </Link>
      <Link
        to="/client/bookings"
        data-active={pathname.startsWith('/client/bookings')}
        onClick={closeMenu}
      >
        Meus Agendamentos
      </Link>
    </>
  )}

  {role === 'barber' && (
    <Link
      to="/barber/dashboard"
      data-active={pathname.startsWith('/barber')}
      onClick={closeMenu}
    >
      Barbeiro
    </Link>
  )}
</Nav>
<Brand>
          <Link to="/" onClick={closeMenu}>
            BarberBook
          </Link>
        </Brand>
<Actions>
          {user ? (
            <>
              <span>Olá, {user.displayName || user.email}</span>
              <button onClick={signOut}>Sair</button>
            </>
          ) : (
            <Link to="/auth">Entrar</Link>
          )}
        </Actions>

      </Container>
    </>
  );
}