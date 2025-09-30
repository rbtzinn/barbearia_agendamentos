import styled from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.surface}; 
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 14px 16px;

  @media (max-width: 768px) {
    padding: 12px 14px;
  }
`;

export const Brand = styled.div`
  font-weight: 800;
  letter-spacing: 0.5px;
  text-align: center;

  a {
    color: var(--text);
  }
`

export const Nav = styled.nav<{ open?: boolean }>`
  display: flex;
  gap: 16px;
  align-items: center;

  a {
    padding: 8px 12px;
    border-radius: 999px;
    color: var(--muted);
    border: 1px solid transparent;

    &[data-active='true'] {
      color: var(--text);
      border-color: var(--border);
      background: var(--soft);
    }

    &:hover {
      color: var(--text);
      background: var(--soft);
    }
  }

  /* === Desktop Nav === */
  &[data-desktop] {
    flex: 1;
    @media (max-width: 768px) {
      display: none;
    }
  }

  /* === Mobile Nav === */
  &[data-mobile] {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      background: #000;
      border-right: 1px solid var(--border);
      width: 280px;
      padding: 24px;
      gap: 16px;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
      transition: transform 0.3s ease;
      z-index: 30;

      a {
        width: 100%;
        font-size: 16px;
        padding: 12px 16px;
      }
    }
  }
`;


export const NavHeader = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--border);

    .brand-in-menu {
      font-weight: 800;
      letter-spacing: 0.5px;
      a {
        color: var(--text);
        &:hover {
          background: none;
        }
      }
    }
  }
`

export const Actions = styled.div`
 display: flex;
  gap: 12px;
  align-items: center;
  flex: 1;
  justify-content: flex-end;

  span {
    font-size: 14px;
    color: var(--muted);
    @media (max-width: 768px) {
      display: none;
    }
  }

  a,
  button {
    cursor: pointer;
    padding: 8px 14px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--soft);
    color: var(--text);
  }
`

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text);
  font-size: 24px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const MenuOverlay = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* Overlay só fora do menu */
  background: rgba(0, 0, 0, 0.6);
  z-index: 4;

  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transition: opacity 0.35s ease;
`
