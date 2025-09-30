import { NavLink, useLocation } from 'react-router-dom';
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

  if (!ready) {
    return (
      <header style={{ padding: 16, textAlign: 'center' }}>
        <span>Carregando...</span>
      </header>
    );
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <MenuOverlay open={menuOpen} onClick={closeMenu} />

      <Container>
        {/* Botão menu mobile */}
        <MenuButton onClick={() => setMenuOpen((s) => !s)}>
          <FiMenu />
        </MenuButton>

        {/* NAV DESKTOP */}
        <Nav data-desktop>
          <NavLink
            to="/"
            end
            data-active={pathname === '/'}
            onClick={closeMenu}
          >
            Início
          </NavLink>

          {role === 'client' && (
            <>
              <NavLink
                to="/client"
                end
                data-active={pathname === '/client'}
                onClick={closeMenu}
              >
                Buscar Barbearias
              </NavLink>
              <NavLink
                to="/client/bookings"
                data-active={pathname.startsWith('/client/bookings')}
                onClick={closeMenu}
              >
                Meus Agendamentos
              </NavLink>
            </>
          )}

          {role === 'barber' && (
            <>
              <NavLink
                to="/barber/dashboard"
                data-active={pathname.startsWith('/barber/dashboard')}
                onClick={closeMenu}
              >
                Painel
              </NavLink>
              <NavLink
                to="/barber/profile"
                data-active={pathname.startsWith('/barber/profile')}
                onClick={closeMenu}
              >
                Minha Barbearia
              </NavLink>
            </>
          )}
        </Nav>

        {/* NAV MOBILE */}
        <Nav open={menuOpen} data-mobile>
          <NavHeader>
            <div className="brand-in-menu">
              <NavLink to="/" end onClick={closeMenu}>
                BarberBook
              </NavLink>
            </div>
            <MenuButton onClick={closeMenu}>
              <FiX />
            </MenuButton>
          </NavHeader>

          <NavLink to="/" end data-active={pathname === '/'} onClick={closeMenu}>
            Início
          </NavLink>

          {role === 'client' && (
            <>
              <NavLink
                to="/client"
                end
                data-active={pathname === '/client'}
                onClick={closeMenu}
              >
                Buscar Barbearias
              </NavLink>
              <NavLink
                to="/client/bookings"
                data-active={pathname.startsWith('/client/bookings')}
                onClick={closeMenu}
              >
                Meus Agendamentos
              </NavLink>
            </>
          )}

          {role === 'barber' && (
            <>
              <NavLink
                to="/barber/dashboard"
                data-active={pathname.startsWith('/barber/dashboard')}
                onClick={closeMenu}
              >
                Painel
              </NavLink>
              <NavLink
                to="/barber/profile"
                data-active={pathname.startsWith('/barber/profile')}
                onClick={closeMenu}
              >
                Minha Barbearia
              </NavLink>
            </>
          )}
        </Nav>

        {/* Brand */}
        <Brand>
          <NavLink to="/" end onClick={closeMenu}>
            BarberBook
          </NavLink>
        </Brand>

        {/* Actions */}
        <Actions>
          {user ? (
            <>
              <span>Olá, {user.displayName || user.email}</span>
              <button
                onClick={async () => {
                  await signOut();
                  window.location.href = '/';
                }}
              >
                Sair
              </button>
            </>
          ) : (
            <NavLink to="/auth">Entrar</NavLink>
          )}
        </Actions>
      </Container>
    </>
  );
}
