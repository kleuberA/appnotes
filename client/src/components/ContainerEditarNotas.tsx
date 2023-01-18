import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";


const FormCriarNotas = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
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

const ContainerEditarNotas = ({edit, setOpen}:any) =>{

    const {idnota, titulonota, textonota} = edit;
    const formRef = useRef<HTMLFormElement>(null);
    
    const handleSubmit = async (element: any) =>{
        element.preventDefault();

        const notas = formRef.current!;
        console.log(idnota)
        if (edit) {
            await axios.put(`https://notes-app-back-end-ten.vercel.app/${idnota}`, {
                titulonota: notas.titulonota.value,
                textonota: notas.textonota.value,
            })
            // .then(({ data }) => toast.success(data))
            // .catch(({ data }) => toast.error(data));
            setOpen(false);
            window.location.reload()
        }

    }
    
    return(
        <FormCriarNotas ref={formRef} onSubmit={(element) => handleSubmit(element)}>
            <LabelCriarNotas>Titulo</LabelCriarNotas>
            <TextAreaCriarNotas name='titulonota' rows={1} cols={80} maxLength={55} defaultValue={titulonota}></TextAreaCriarNotas>
            <LabelCriarNotas>Texto</LabelCriarNotas>
            <TextAreaCriarNotas name='textonota' rows={20} cols={80} maxLength={400} defaultValue={textonota}></TextAreaCriarNotas>
            <ButtonCriarNotas type="submit">Salvar</ButtonCriarNotas>
        </FormCriarNotas>
    )
}

export default ContainerEditarNotas;