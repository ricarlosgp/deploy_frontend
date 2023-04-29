//tudo que estiver dentro do global.js, as estilizações serão compartilhado para todas as páginas. Ex: vamos supor que todas as minhas páginas terão as mesmas cores de fundo

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
    }

    border-style, :-ms-input-placeholder, :no-button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;

    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }


`;