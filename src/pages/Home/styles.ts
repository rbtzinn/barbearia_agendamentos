import styled from 'styled-components';

export const Hero = styled.section`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  h1 {
    font-size: 2rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    max-width: 55ch;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 1.1rem;
  }
`;

export const HeroActions = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: center;

  a {
    width: 100%;
    max-width: 240px;
  }

  button {
    width: 100%;
  }
`;

export const Features = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

export const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  h3 {
    margin: ${({ theme }) => theme.spacing.sm} 0;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.95rem;
  }
`;

export const CTA = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xl};
  text-align: center;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: 1.6rem;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.muted};
  }

  a {
    display: inline-block;
    max-width: 260px;
    width: 100%;
  }

  button {
    width: 100%;
  }
`;
