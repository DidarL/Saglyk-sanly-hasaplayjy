import React  from 'react';
import {NavLink} from "react-router-dom"

const Catalog = (props) =>{
	return (
		<div className="catalog-wrap">
			<div className="catalog-container">
				{
					props.ob.map( el => <div key={el.id-1}>
					<a href={`#popup${el.id}`}><div className="catalog-div">
						<div className="catalog-div-img"> <img src={props.ob[el.id-1].img1} alt="" /> </div>
						<div className="catalog-div-name-wrap">
							<div className="catalog-div-name">
								<div className="catalog-div-wn">{props.ob[el.id-1].name}</div>
							</div>
							<div className="catalog-count">{el.num.length}</div>
						</div>
					</div></a><Popup ob={props.ob} po={el.id-1}/></div>)
				}	
			</div>
		</div>
	)
}

const Popup = (props) =>{
	return (
		<div className="popup" id={`popup${props.po+1}`}>
			<a href="#header" className="popup-close1" />
			<div className="popup-wrap">
				<div className="popup-container">
					<div className="popup-NC">
						<div className="popup-name">{props.ob[props.po].name}</div>
						<a href="#header" className="popup-close"><div className="popup-close-c1"></div><div className="popup-close-c2"></div></a>
					</div>
					<div className="popup-img"><img src={props.ob[props.po].img2} alt="" /></div>
					<div className="popup-buttons">
						{
							props.ob[props.po].num.map(el => <NavLink to={`${props.ob[props.po].href[el]}`} key={el} onClick={()=>{window.scrollBy(-1*window.pageXOffset, -1*window.pageYOffset);}}><div className="popup-button">
								{props.ob[props.po].buttons[el]}
							</div></NavLink>)
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Catalog;