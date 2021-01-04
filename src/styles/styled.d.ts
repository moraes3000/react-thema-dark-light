import 'styled-components';

declare module 'styled-componentes' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secundary: string;

            background: string;
            text: string;
        }
    }
}