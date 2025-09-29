import styled from 'styled-components';

export const StyledContainer = styled.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;
