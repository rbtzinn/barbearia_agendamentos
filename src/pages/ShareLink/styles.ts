// pages/ShareLink/styles.ts
import styled from 'styled-components';

export const ShareCode = styled.code`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.soft};
  border-radius: ${({ theme }) => theme.borderRadius};
  word-break: break-all;
`;
