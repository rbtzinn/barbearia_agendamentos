import 'styled-components';
import { theme } from './styles/theme';

// Pega o tipo do nosso objeto de tema
type Theme = typeof theme;

// Estende a interface DefaultTheme do styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
