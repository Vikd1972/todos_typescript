import 'styled-components';
import { DefaultTheme } from 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
      borderRadius: string;
      colors: {
        font: string;
        backrgaund: string;
        active: string;
      };
  }
}

const myTheme: DefaultTheme = {
  borderRadius: '10px',
    colors: {
      font: '#424242',
      backrgaund: '#fff3e0',
      active: 'gold'
    },
};

export { myTheme };