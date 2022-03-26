import React  from 'react';
import logo from './img/Saglyk_free-file.png'
import {NavLink} from "react-router-dom";
import db from './DB/db.js'

const Header = () =>{
	let b = 0;
	let mI = React.createRef();
	let HNBar = React.createRef();
	const hMMIR = () =>{b++;
		if (b%2==1) {mI.current.classList.add('active1');HNBar.current.classList.add('active');document.querySelector('body').classList.add('lock');}
    	else {mI.current.classList.remove('active1');HNBar.current.classList.remove('active');document.querySelector('body').classList.remove('lock');}
	}
	const hMMIR1 = () =>{
		window.scrollBy(-1*window.pageXOffset, -1*window.pageYOffset);HNBar.current.classList.remove('active');mI.current.classList.remove('active1');document.querySelector('body').classList.remove('lock');
	}
	return (
		<header className="header" id="header">
			<div className="header_container">
				<div className="HHLOGO">
					<NavLink to="/">
						<div className="header_logo">
							<img src={logo} alt="Saglyk" />
						</div>
					</NavLink>
				</div>
				<div className="menu_icon" onClick={hMMIR} ref={mI}>
					<span></span>
				</div>
				<div className="HNBar" ref={HNBar}>
					<NavLink to="/">
						<div className="HNA2" onClick={hMMIR1}>Baş sahypa</div>
					</NavLink>
					<NavLink to="/News">
						<div className="HNA2" onClick={hMMIR1}>Habarlar</div>
					</NavLink>
					<NavLink to="/Calc">
						<div className="HNA2" onClick={hMMIR1}>Hasaplayjylar</div>
					</NavLink>
					<NavLink to="Catalog">
						<div className="HNA2" onClick={hMMIR1}>Kaloriya katalogy</div>
					</NavLink>
					<NavLink to="/talk">
						<div className="HNA2" onClick={hMMIR1}>Lukmanyn maslahaty</div>
					</NavLink>
					<a href="https://firebasestorage.googleapis.com/v0/b/chat-saglyk.appspot.com/o/app-release.apk?alt=media&token=54fbfc78-c954-4623-bc97-567855a1c635" download="" className="HNA2 HNA3">Programmamyzy yükläp alyň</a>
				</div>	
			</div>
			<div className="soz">
				<div className="span1">Eziz	watandaşlar! Häzirki wagtda howada tozan bölejikleriniň kadadan artmagy bilen baglanyşykly agyz-burun örtüklerini ulanmaklygy, 2 metr araçägi berjaý etmegi, elleri arassa saklamagy, şeýle hem  gyş paslynda günüň dowamynda  howanyň derejesiniň üýtgeýändigini nazara alyp paslyň aýratynlyklaryna laýyklykda geýinmegi  maslahat berýäris.
				</div>
			</div>
		</header>
	)
}
export default Header;