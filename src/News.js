import React  from 'react';
import {useParams,NavLink} from "react-router-dom"

const News = (props) =>{
	const {id} = useParams();
	return (
		<div className="MainNewsPage">
			<div className="header2_container">
				<div>
					<div className="MNewsName">{props.ob[id].name}</div>
					<div className="MNewsDate">{props.ob[id].date}</div>
					<div className="MNewsImg"><img src={props.ob[id].img} alt={props.ob[id].name} /></div>
					<div className="MNewsText">{props.ob[id].description}</div>
				</div>
				<div className="MNnewsW">
					{
					props.ob.map( el => (el.id!=id && el.id!=0)?<NavLink to={'/News/'+el.id} key={el.id+10}><div className="MNnews" onClick={()=>{window.scrollBy(-1*window.pageXOffset, -1*window.pageYOffset);}}>
					<div className="MNnews_img"><img src={el.img} alt="ss" /></div>
					<div className="MNnews_data">{el.date}</div>
					<div><div className="MNnews_name">{el.name}</div>
				</div></div></NavLink>:<div key={el.id+10}></div>)
				}
				</div>
			</div>
		</div>
	)
}


export default News;