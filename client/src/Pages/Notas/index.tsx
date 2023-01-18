import styled, { keyframes } from "styled-components";
import ButtonCriarNota from "../../components/ButtonCriarNota";
import { FaEdit, FaTrash } from "react-icons/fa";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from "react";
import axios from "axios";
import ContainerEditarNotas from "../../components/ContainerEditarNotas";
import Loading from "../../components/Loading";

const ContainerNotas = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    overflow-y: scroll;
    height: 97vh;
    align-content: flex-start;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const ContainerNotasElement = styled.div`
    height: 97vh;
`;

const AnimationFade = keyframes`
    from{
        filter: opacity(0);
    }
    to{
        filter: opacity(1);
    }
`;

const ContainerNotaElementItem = styled.div`
    color: #A0AEC0;
    width: 410px;
    font-family: monospace,sans-serif;
    background: #171923;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: #2D3748;
    transition: all 1s ease 0s;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
    border-radius: 0.5rem;
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    animation: ${AnimationFade} 4s ease;
`;



const ContainerElementNotaItem = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 380px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 90px;
    justify-content: space-evenly;
`;

const ContainerElementNotaItemSecond = styled.div`
    display: flex;
    gap: 5px;
    Button{
        color: #81E6D9;
        background: rgba(129, 230, 217, 0.16);
    }
    Button:hover{
        background: rgba(129, 230, 217, 0.3);
        color: #2C7A7B;
    }
`;

const TitleElementNotaItem = styled.h1`
    margin: 0;
    font-family: monospace, sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 20px;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const TextElementNotaItem = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
`;

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: '#171923',
    boxShadow: 24,
    p: 4,
};

type notasList = {
    idnota: string,
    titulonota: string,
    textonota: string
}

const Notas = () =>{
    let [edit, setOnEdit] = useState(null);
    const [open, setOpen] = useState(false);
    const handleOpen = (elemento: any) => {
        setOpen(true);
        edit = elemento;
        setOnEdit(edit);
    };
    const handleClose = () => setOpen(false);

    const [notas, setNotas] = useState<notasList[]>([]);
    

    const getNotas = async () =>{
        try{
            const res = await axios.get("https://notes-app-back-end-ten.vercel.app/");
            setNotas(res.data);
        }catch(error){
            console.log(error);
        }
    }

    const handleDelete = async (id: any) => {
        await axios.delete("https://notes-app-back-end-ten.vercel.app/" + id).then(({ data }) => {
            const newArray = notas.filter((user) => user.idnota !== id);
            setNotas(newArray);
            // toast.success(data);
        }).catch(({ data }) => console.log(data));
        setOnEdit(null)
    };

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getNotas();
    },[setNotas]);

    setTimeout(() => {
        setLoading(true);
    }, 5000);

    return(
        <ContainerNotasElement>
            {
                loading == true ?  
                <div className="containerNotas">
                <ContainerNotas>
                {notas?.map((item, i) =>{
                    return(
                        <ContainerNotaElementItem key={i}>
                            <ContainerElementNotaItem>
                                <TitleElementNotaItem>{item.titulonota}</TitleElementNotaItem>
                                <TextElementNotaItem>{item.textonota}</TextElementNotaItem>
                            </ContainerElementNotaItem>
                            <ContainerElementNotaItemSecond>
                                <Button onClick={() => handleOpen(item)}><FaEdit/></Button>
                                <Button onClick={() => handleDelete(item.idnota)}><FaTrash/></Button>
                            </ContainerElementNotaItemSecond>
                        </ContainerNotaElementItem>
                    )
                })}
            </ContainerNotas>
                <ButtonCriarNota/>
            </div>
            : <Loading/>
            }
            

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ContainerEditarNotas edit={edit} setOpen={setOpen}/>
                </Box>
            </Modal>
        </ContainerNotasElement>
    );
}

export default Notas;