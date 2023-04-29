//o cabeçalho com foto irá se repetir em todas as outras páginas
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header `
    grid-area: header; //vai deixar o cabeçalho fixo ao rolar a tela

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between; //foto e botão de ligar vai ficar em lugares diferente um no canto esquerdo e outro no canto direito

    padding: 0 80px;

`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img { //esse sinal de > garante que posso estilizar a img lá do profile
        width: 60px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};            
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};            
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }
`;