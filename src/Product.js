import React  from 'react';
import {useParams,NavLink} from "react-router-dom"

const Product = (props) =>{
	const {id} = useParams();

	let ob = props.ob;
	let num = props.ob[id-1].num;
	let id1 = id;
	let id2 = +id1 - 1;
	let id3 = +id1 + 1;
	if(id2<1){
		id2= ob.length;
	}
	if(id3>32){
		id3 = 1;
	}
	const power = () =>{
		let col2 = document.querySelectorAll('.col3');
		let PCI = document.querySelector('.product-calc-input').value;
		if (PCI === '') {PCI = 100;}
		document.querySelector('.col2 .dhfhfhd').textContent = PCI;
		
		num.map(el => {
			col2[el].textContent = Math.round(props.ob[id-1].Psoder[el] * 1000 * PCI) / 1000;
		})
	}
	const power1 = () =>{
		document.querySelector('.product-calc-input').value = '';
		power();
	}
	return (
		<div className="product-wrap">
			<div className="product-container">
				<div className="product-con-wrap">
					<NavLink className="product-con-1" to={`/Catalog/${id2}`} onClick={power1}><div>ÖŇKI ÖNÜM</div></NavLink>
					<NavLink className="product-con-2" to={`/Catalog/${id3}`} onClick={power1}><div>INDIKI ÖNÜM</div></NavLink>
				</div>
				<div className="product-img"><img src={props.ob[id-1].img} alt="" /></div>
				<div className="product-name">{props.ob[id-1].name}</div>
				<div className="product-calc">
					<div className="product-calc-data">
						<div>Saklanyş möhleti: -</div>
						<div className="product-calc-data1">Ölçeg birligi: -</div>
					</div>
					<div className="product-calc-input-wrap">
						Önümiň agramy:<input type="text" className="product-calc-input" placeholder="100 gr"/>
					</div>
					<div className="product-calc-button" onClick={power}>Hasaplamak</div>
				</div>
				<div className="product-description">IÝMITLENIŞ GYMMATY, KALORIÝA DÜZÜMI WE ÖNÜMIŇ HIMIKI DÜZÜMI (WITAMINLER, MIKROELEMENTLER)</div>
				<div className="col-wrap">
					<div className="col"><div className="col1 col4">Görkezijiniň ady</div><div className="col2 col4 col5"><div className="dhfhfhd">100</div> <div>gram önüme ýokumly maddalar</div></div></div>
					{
						props.ob[id-1].num.map(el => <div className="col" key={el} ><div className="col1">{props.ob[id-1].Pname[el]}</div><div className="col2 col3" >{Math.round(props.ob[id-1].Psoder[el] * 1000 * 100) / 1000}</div></div>)
					}
				</div>
			</div>
		</div>
	)
}


export default Product;