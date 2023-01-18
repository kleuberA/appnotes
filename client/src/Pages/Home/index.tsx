import { useState } from "react";
import ContainerHome from "../../components/ContainerHome";
import Loading from "../../components/Loading";



const Home = () =>{

    const [open, setOpen] = useState(false);

    setTimeout(() => {
        setOpen(true);
    }, 5000);

    return(
        <div className="teste">
            {
                open == true ? <ContainerHome/> : <Loading/>
            }
        </div>
        
    )
}

export default Home;
