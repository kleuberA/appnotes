import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const AnimacaoCard = keyframes`
    from{
        transform: translateY(0px);
    }
    to{
        transform: translateY(-5px);
    }
`

const AnimationFade = keyframes`
    from{
        filter: opacity(0);
    }
    to{
        filter: opacity(1);
    }
`;

const AnimationRotate = keyframes`
    from{
        transform: rotate3d(1, 1, 1, 0deg) scale3d(-1, 1, 1);
    }
    to{
        transform: rotate3d(1, 1, 1, 360deg) scale3d(1, 1, 1);
    }
`;

const ContainerElementHome = styled.div`
    height: 90vh;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;
const TitleElementHome = styled.h1`
    color: #a7e9c5;
    font-family: monospace,sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 50px;
    margin: 0;
    transition: 1s;
    padding: 8px 10px;
    cursor: pointer;
    animation: ${AnimationFade} 10s ease;
    &:hover{
        background-color: rgba(167, 233, 197, 0.12);
    }
`;
const InfoElementHome = styled.span`
    color: #A0AEC0;
    text-align: center;
    font-size: 22px;
    width: 550px;
    font-family: monospace, sans-serif;
    background: #171923;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: #2D3748;
    transition: all 1s ease 0s;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
    border-radius: 0.5rem;
    padding: 8px;
    animation: ${AnimationRotate} 3s alternate ease;
    &:hover{
        transition: animation .5s;
    }
`;

// transform: translateY(-10px);
const ButtonElementHome = styled.button`
    background: rgba(129, 230, 217, 0.16);
    border: none;
    padding: 8px 10px;
    border-radius: 3px;
    cursor: pointer;
    color: #81E6D9;
    font-weight: 600;
    font-size: 16px;
    font-family: monospace;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: .5s;
    animation: ${AnimationFade} 20s ease;
    &:hover{
        background: rgba(129, 230, 217, 0.3);
        color: #2C7A7B;
    }
`;
const ContainerHome = () =>{
    return(
        <ContainerElementHome>
            <TitleElementHome>Notes App</TitleElementHome>
            <InfoElementHome>Deseja criar suas notas, clique no botão abaixo para ser redirecionado para a pagina de criar as notas.</InfoElementHome>
            <Link to='/notas'><ButtonElementHome>Criar Notas</ButtonElementHome></Link>
        </ContainerElementHome>
    )
}


export default ContainerHome;