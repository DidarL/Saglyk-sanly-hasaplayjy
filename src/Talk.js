import React, {useState,useEffect} from 'react';
import Logo1 from './img/house-chimney-solid.svg'
import Logo2 from './img/calculator-solid.svg'
import Logo3 from './img/newspaper-solid.svg'
import {NavLink} from "react-router-dom";
import Logo4 from './img/Saglyk_free-file.png'
import Logo5 from './img/arrow-right-long-solid.svg'
import db from './DB/db.js'

const Talk = (props) =>{
	let tof = 0;
	const [mess,setMess]= useState([]);
	const [col,setCol]= useState([]);
	useEffect(()=>{
		db.collection(`${props.ob}`).onSnapshot(s =>{
			setMess(s.docs.map(d=>d.data()))
		})
		db.collection(`collections`).onSnapshot(s =>{
			setCol(s.docs.map(d=>d.data()))
		})
	},[])

	let messa = [];

	for (let i = 0; i <mess.length; i++) {
		for (let i1 = 0; i1 <mess.length; i1++)
			if(mess[i1].no===i+1){
				messa[i] = mess[i1];
				break;
			}
	}

	let t = 0;
	const sendMessage = async () => {
		if (document.querySelector('#talkI').value !== '') {
	  		sendMessage1();
	  		if (mess.length === 0) {
		  		db.collection("collections").add({
		  			col: props.ob
		  		})
	  		}
	  		document.querySelector('#talkI').value = '';
	  		document.querySelector('.talk-content').scrollTop += document.querySelector('.talk-content').scrollHeight;
	  	}
	}
	const sendMessage1 = async () => {
		let alphaStr = ` aAbB0c!%Cd9&DeE;~2fF-gÇç8G(.,hH3+iIäÄj7J*kK4l'LžŽm6M}n5)No#ňŇOpPq"1QöÖ/rRs{SşŞtT:uU$üÜvVw@WxýÝXyYzZ`;
		let inStr = document.querySelector('#talkI').value;
		let keyArr = [0,74,1,22,43,94,40];
		let outStr = ``;
		let keyP = 0;
		for(let i = 0;i < inStr.length;i ++){keyP++;
			let pam = 0;
			if(inStr[i] === alphaStr[0]){
				outStr += alphaStr[keyArr[keyP]];
				i++;
				if(keyP===6)keyP=0;
				keyP++;
				console.log('1');
			}
			for(let j = 1;j < alphaStr.length ;j ++){
				if(inStr[i]===alphaStr[j]){
					pam = j;
					break;
				}
			}
			if(pam === 0){
				outStr = document.querySelector('#talkI').value;
				break;
			}
			let oPam = 0;
			if (pam + keyArr[keyP] > alphaStr.length - 1) {
				oPam = (pam + keyArr[keyP]) - (alphaStr.length - 1);
			}else {
				oPam = pam + keyArr[keyP];
			}
			outStr += alphaStr[oPam] 
			if(keyP===6)keyP=0;
		}
		let d = new Date();
  		db.collection(`${props.ob}`).add({
  			uid:1,
  			no: mess.length +1,
  			text: document.querySelector('#talkI').value,
  			text1: outStr,
  			time: `${(d.getHours()>9)?'':"0"}${d.getHours()}:${(d.getMinutes()>9)?'':"0"}${d.getMinutes()}`
  		})
  		console.log(outStr)
  		document.querySelector('#talkI').value = '';
	}
	console.log(tof);

	let mI1 = React.createRef(); 
	let tM = React.createRef();
	let mCNP1 = React.createRef();
	let mCNP2 = React.createRef();
	let mCNP3 = React.createRef();
	const tMMIR = () =>{t++;
		if (t%2===1) {mI1.current.classList.add('active3');tM.current.classList.add('active2');}
		else {	tM.current.classList.remove('active2');mI1.current.classList.remove('active3');}
	}
	const tMMIR1 = () =>{
		if (t%2===1) {mCNP1.current.classList.add('talk-MCNPA-wrap');mCNP2.current.classList.add('talk-MCNPA-wrap');mCNP3.current.classList.add('talk-MCNPA-wrap');}
		else {mCNP1.current.classList.remove('talk-MCNPA-wrap');mCNP2.current.classList.remove('talk-MCNPA-wrap');mCNP3.current.classList.remove('talk-MCNPA-wrap')};
	}
	const tMMIR2 = () =>{
		tMMIR();
		tMMIR1();
	}
	const tMMIR3 = () =>{t=3;
		tMMIR();
		tMMIR1();
	}
	return (
		<div className="talk-wrap-w_1">
			<div className="talk-wrap">
				<div className="talk-menu" ref={tM}>
					<div className="talk-MCNPM-wrap">
						<img src={Logo4} alt="" />
						<div className="menu_icon1" onClick={tMMIR2} ref={mI1}>
							<span></span>
						</div>
					</div>
					<NavLink to="/" onClick={tMMIR}>
						<div className="talk-MCNP-wrap MCNP1" ref={mCNP1}>
							<img src={Logo1} alt="" />
							<div>Bas sahypa</div>
						</div>
					</NavLink>
					<NavLink to="/Calc" onClick={tMMIR}>
						<div className="talk-MCNP-wrap MCNP2" ref={mCNP2}>
							<img src={Logo2} alt="" />
							<div>Hasaplayjylar</div>
						</div>
					</NavLink>
					<NavLink to="/News" onClick={tMMIR}>
						<div className="talk-MCNP-wrap MCNP3" ref={mCNP3}>
							<img src={Logo3} alt="" />
							<div>Habarlar</div>
						</div>
					</NavLink>
				</div>
				<div className="talk-content-wrap" onClick={tMMIR3}>
					<div className="talk-header"></div>
					<div className="talk-content">
						<div className="talk-message-wrap talk-message-wrap1">
							<div className="talk-message-tt talk-message-tt1">
								<div className="talk-message-logo talk-message-logo1">
									<div className="talk-message-time talk-message-time1">{props.Time}</div>
								</div>
								<div className="talk-message-text talk-message-text1">Salam. Meniň kömegim gerekmi?</div>
							</div>
						</div>
					{messa.map(el =>(el.uid!==1)?<Message1 text={el.text} time={el.time} key={+el.time*(Math.floor(Math.random() * 1000) + 1)}/> : <Message2 text={el.text} time={el.time} key={+el.time*(Math.floor(Math.random() * 1000) + 1)}/>)}
					</div>
					<div className="talk-footer">
						<div className="talk-input">
							<input type="text" id="talkI" onKeyPress={(e) => e.key === 'Enter' && sendMessage()}/>
						</div>
						<div className="talk-submit" onClick={sendMessage}><img src={Logo5} alt="" /></div>
					</div>
				</div>
			</div>
			<div className="talk-wrap-w">
			</div>
		</div>
	)
}
const Message1 = (props) =>{
	return (
		<div className="talk-message-wrap talk-message-wrap1">
			<div className="talk-message-tt talk-message-tt1">
				<div className="talk-message-logo talk-message-logo1">
					<div className="talk-message-time talk-message-time1">{props.time}</div>
				</div>
				<div className="talk-message-text talk-message-text1">{props.text}</div>
			</div>
		</div>
	)
}
const Message2 = (props) =>{
	return (
		<div className="talk-message-wrap">
			<div className="talk-message-tt">
				<div className="talk-message-text">{props.text}</div>
				<div className="talk-message-logo">{props.time}</div>
			</div>
		</div>
	)
}

export default Talk;