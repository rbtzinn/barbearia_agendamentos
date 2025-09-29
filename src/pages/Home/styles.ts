import styled from 'styled-components';

// Adicionado para o H1
export const Header = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

// Adicionado para o parágrafo de introdução
export const IntroText = styled.p`
  text-align: center;
  max-width: 50ch; /* Limita a largura para melhor leitura */
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.muted};
`;

// Lista de funcionalidades totalmente refeita
export const FeatureList = styled.ul`
  list-style: none; /* Remove as bolinhas padrão */
  padding: 0;
  margin: ${({ theme }) => theme.spacing.xl} 0;

  li {
    display: flex;
    align-items: flex-start;
    line-height: 1.6;
    font-size: 1.05rem; /* Leve aumento para destaque */

    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacing.md};
    }

    /* Adiciona o ícone antes de cada item */
    &::before {
      display: inline-block;
      font-size: 1.2rem;
      margin-right: ${({ theme }) => theme.spacing.md};
      margin-top: 1px; /* Ajuste fino de alinhamento vertical */
    }

    /* Ícone para o primeiro item (Clientes) */
    &:first-child::before {
      content: '👤';
    }

    /* Ícone para o segundo item (Barbeiros) */
    &:nth-child(2)::before {
      content: '💈';
    }
  }
`;
// Botão com mais espaçamento
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) =>
    theme.spacing.xl}; /* Mais margem para separar a ação */
`;
