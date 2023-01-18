import styled from 'styled-components';
import Notes from '../assets/notes.svg';


const ContainerLoading = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
`;

const Loading = () =>{
    return(
        <ContainerLoading>
            <img src={Notes} alt="" className='iconNotes'/>
            <div className="minimalistic-container">
                <div className="container1">N</div>
                <div className="container2">o</div>
                <div className="container3">t</div>
                <div className="container4">e</div>
                <div className="container5">s</div>
                <div className="container6">A</div>
                <div className="container7">p</div>
                <div className="container8">p</div>
            </div>

        </ContainerLoading>
    )
}


export default Loading;