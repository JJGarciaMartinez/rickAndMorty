import { NavLink } from "react-router-dom";

export default function Card(props) {
    return(
        <div>
           <button onClick={props.onClose}>X</button>
           <NavLink to={`/detail/${props.id}`}>
           <h2>{props.name}</h2>
           </NavLink>
           <h2>{props.status}</h2>
           <h2>{props.species}</h2>
           <h2>{props.gender}</h2>
            <h2 className="card-name">{props.origin.name}</h2>
           <img src={props.image} alt='' />
        </div>
    )
}