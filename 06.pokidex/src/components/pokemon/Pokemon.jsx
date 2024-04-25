import { Link } from "react-router-dom";

function Pokemon({name,image,id}){
    return(
        <div>
            <Link to={`/pokemon/${id}`}>
            <div>{name}</div>
            <div><img src ={image}></img></div>
            <div>{id}</div>
            </Link>
        </div>
    )
}

export default Pokemon;