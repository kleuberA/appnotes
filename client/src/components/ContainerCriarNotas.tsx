import axios from "axios";
import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const AnimationFade = keyframes`
    from{
        filter: opacity(0);
    }
    to{
        filter: opacity(1);
    }
`;

const FormCriarNotas = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    transition: .5s;
    animation: ${AnimationFade} 6s ease;
`;
const LabelCriarNotas = styled.label`
    display: flex;
    width: 585px;
    align-items: center;
    font-size: 22px;
    font-family: monospace, sans-serif;
    letter-spacing: 3px;
    flex-wrap: wrap;
    color: #A0AEC0;
`;
const TextAreaCriarNotas = styled.textarea`
    resize: none;
    outline: none;
    background: transparent;
    border-radius: 5px;
    border: 1px solid #2D3748;
    color: white;
    width: 570px;
    font-size: 14px;
    padding: 20px 20px;
    letter-spacing: 2px;
`;
const ButtonCriarNotas = styled.button`
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
    &:hover{
        background: rgba(129, 230, 217, 0.3);
        color: #2C7A7B;
    }
`;

const ElementoCriarNotaLinkReturn = styled.div`
    background: rgba(129, 230, 217, 0.16);
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 10px 15px;
    border-radius: 3px;
    font-size: 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    font-family: monospace;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: .5s;
    z-index: 3;
    animation: ${AnimationFade} 8s ease;
    &:hover{
        background: rgba(129, 230, 217, 0.3);
    }
    svg{
        color: #81E6D9;
    }
    svg:hover{
        color: #2C7A7B;
    }
`;



const ContainerCriarNotas = ({  }) =>{
    const navigate = useNavigate();

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async(e: any) =>{
        e.preventDefault();

        const notas = formRef.current!;
        await axios.post("https://notes-app-back-end-ten.vercel.app/", {
            titulonota: notas.titulonota.value,
            textonota: notas.textonota.value,
        })

        notas.titulonota.value = '';
        notas.textonota.value = '';
        navigate('/notas')
    }

    return(
        <div className="container">
            <Link to="/notas">
                <ElementoCriarNotaLinkReturn>
                    <FaArrowLeft/>
                </ElementoCriarNotaLinkReturn>
            </Link>
            <FormCriarNotas ref={formRef} onSubmit={(e) => handleSubmit(e)}>
                <LabelCriarNotas>Titulo</LabelCriarNotas>
                <TextAreaCriarNotas name='titulonota' rows={1} cols={80} maxLength={55}></TextAreaCriarNotas>
                <LabelCriarNotas>Texto</LabelCriarNotas>
                <TextAreaCriarNotas name='textonota' rows={20} cols={80} maxLength={400}></TextAreaCriarNotas>
                <ButtonCriarNotas type="submit">Criar Nota</ButtonCriarNotas>
            </FormCriarNotas>
        </div>
    )
}

export default ContainerCriarNotas;