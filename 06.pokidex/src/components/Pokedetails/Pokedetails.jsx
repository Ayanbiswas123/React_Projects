import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Pokedetails(){

    const {id} = useParams();
    console.log(id);
    async function Download(){
        const resource = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        
        console.log(resource);
    }


    useEffect(() =>{
        Download();
    },[])


    return <>Details </>
}

export default Pokedetails;