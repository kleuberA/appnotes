import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const AnimationFade = keyframes`
    from{
        filter: opacity(0);
    }
    to{
        filter: opacity(1);
    }
`;

const ButtonCriarNotaElement = styled.button`
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 0.125rem;
    border: none;
    font-size: 35px;
    cursor: pointer;
    color: #81E6D9;
    animation: ${AnimationFade} 4s ease;
    background: rgba(129,230,217,0.16);
    &:hover{
        background: rgba(129, 230, 217, 0.3);
        color: #2C7A7B;
    }
`;

const ButtonCriarNota = () =>{
    return(
        <Link to='/criarNota'><ButtonCriarNotaElement>+</ButtonCriarNotaElement></Link>
    )
}

export default ButtonCriarNota;