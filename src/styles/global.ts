import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.dark.background};
        color: ${props => props.theme.dark.text};
        font: 400 16px Roboto, sans-serif;
    }
`;

// implementar cores em variáveis depois
