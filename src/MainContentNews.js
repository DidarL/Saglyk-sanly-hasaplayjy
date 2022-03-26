import React  from 'react';
import {NavLink} from "react-router-dom";
const MainContentNews = (props) =>{
	return (
		<div className="MainContentNews">
			<div className="container">
			<div className="newses">
				{
					props.ob.map( el => (el.id!=0)?<NavLink to={'/News/'+el.id} key={el.id+10}><div className="news" onClick={()=>{window.scrollBy(-1*window.pageXOffset, -1*window.pageYOffset);}}>
					<div className="news_img"><img src={el.img} alt="ss" /></div>
					<div><div className="news_name">{el.name}</div>
					<div className="news_data">{el.date}</div>
					<div className="news_text1">{el.description1}</div>
				</div></div></NavLink>:<div key={el.id+10}></div>)
				}
			</div>
			</div>
		</div>
	)
}

export default MainContentNews;