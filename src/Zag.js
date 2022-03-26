import React  from 'react';
import {useParams} from "react-router-dom"

const Zag = (props) =>{
	const {id} = useParams();
	return (
		<div className="CalcHeader"><div className="header_container"><div className="CalcHeaderP">
			<h1 className="CHH1">{props.ob[id].name}</h1>
			<div className="CHDescription">{props.ob[id].description}</div>
		</div></div></div>
	)
}

export default Zag;