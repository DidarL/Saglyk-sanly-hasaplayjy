import React  from 'react';
import {NavLink} from "react-router-dom";

const Calc = (props) =>{
	return (
		<div className="AllCalc">
			<Zag1 ob={props.ob}/>
			<div className="header1_container"><div className="cartsw">

			<div className="carts">
				<NavLink to="/Calc/3">
					<div className="cart"  onClick={()=>{window.scrollBy(-1*window.pageXOffset, -1*window.pageYOffset);}}>
						<div className="cart_img"><img src="https://pustoy-project.web.app/ljmhngfbfd546yrte3ergtt5re3efrghtj.jpg" alt="ss" /></div>
						<div className="cart_text">Kadaly agram hasaplaýjy</div>
					</div>
				</NavLink>
				<NavLink to="/Calc/1">
					<div className="cart" onClick={()=>{window.scrollBy(-1*window.pageXOffset, -1*window.pageYOffset);}}>
						<div className="cart_img"><img src="https://pustoy-project.web.app/cxvcbvngcbxgfdf456543tg.jpg" alt="ss" /></div>
						<div className="cart_text">Horlanmagyň hasaplaýjysy 
					</div>
					</div>
				</NavLink><NavLink to="/Calc/2">
					<div className="cart" onClick={()=>{window.scrollBy(-1*window.pageXOffset, -1*window.pageYOffset);}}>
						<div className="cart_img"><img src="https://pustoy-project.web.app/scdfbgnjd5633333333c3c4cft5.jpg" alt="ss" /></div>
						<div className="cart_text">Beden agram indeksiniň hasaplaýjysy</div>
					</div>
				</NavLink>
			</div></div>
			</div>
			
			<div>
			</div>
		</div>
	)


	
}

const Zag1 = (props) =>{
	return (
		<div className="CalcHeader"><div className="header_container"><div className="CalcHeaderP">
			<h1 className="CHH1">{props.ob[0].name}</h1>
			<div className="CHDescription">{props.ob[0].description}</div>
		</div></div></div>
	)
}

export default Calc;