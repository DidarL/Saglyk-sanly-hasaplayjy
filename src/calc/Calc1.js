import React  from 'react';

const Calc1 = () =>{
	return (
		<div className="Calc1Section"><div>
			<div className="Calc1">
				<h2 className="CalcH2">Horlanmak üçin kaloriý sanyny hasaplamak</h2>
				<div className="CalcDiv"><div>Boýy (sm)</div><input type="text" name="Height" id="Height1" className="CalcInput" maxLength="3"/></div>
				<div className="CalcDiv"><div>Agramy (kg)</div><input type="text" name="Weight" id="Weight1" className="CalcInput" maxLength="3"/></div>
				<div className="CalcDiv"><div>Ýaşy </div><input type="text" name="Age" id="Age1" className="CalcInput" maxLength="3"/></div>
				<div className="Sex1">
					<input type="radio" name="Calc1" id="men1" className="CalcInput1" value="1" defaultChecked/>
					<div>Erkek (oglan)</div>
					<input type="radio" name="Calc1" id="girl1" className="CalcInput1" value="1"/>
					<div>Aýal (gyz)</div>
				</div>
				<div className="CalcDiv"><div>Işjeňlik</div><select className="CalcInput2" id="selectCalc1">
					<option value="1.2">fiziki işjeňligi ýok</option>
					<option value="1.375">hepdede 3 gezek sport bilen meşgullanmak</option>
					<option value="1.4625">hepdede 5 gezek sport bilen meşgullanmak</option>
					<option value="1.55">hepdede 5 gezek güýçli türgenleşmek</option>
					<option value="1.6375">gündelik sport türgenleşigi</option>
					<option value="1.725">günde iki gezek sport türgenleşigi</option>
					<option value="1.9">gündelik sport türgenlişigi bilen bilelikde fiziki iş bilen meşgullanmak</option>
				</select></div>
			</div></div>
			<div className="Calc11">
				<div className="Calc1">
					<div>
				 		<div className="SubmitButton" onClick={()=>{let t = 0;
  							let in_height = document.querySelector('#Height1').value;
							  let in_weight = document.querySelector('#Weight1').value;
							  let in_age = document.querySelector('#Age1').value;
							  if(in_height<1 | in_height>250){
							  	t=1;
							  	document.querySelector('#Height1').classList.add('in_red');}
							  else{
  								document.querySelector('#Height1').classList.remove('in_red');}
							  if(in_weight<1 | in_weight>300){t=1;
							  	document.querySelector('#Weight1').classList.add('in_red');}
							  else{
  								document.querySelector('#Weight1').classList.remove('in_red'); }
							  if(in_age<1 | in_age>130){t=1;
							  	document.querySelector('#Age1').classList.add('in_red');}
							  else{
  								document.querySelector('#Age1').classList.remove('in_red');}
							  if(t==0){
  								document.querySelector('#Weight1').classList.remove('in_red');
  								document.querySelector('#Age1').classList.remove('in_red');
  								document.querySelector('#Height1').classList.remove('in_red');
							  let in_sex = 0;
							  if(document.querySelector('#men1').checked){
							      in_sex = 1;  
							  }
							  let in_activity = document.querySelector('#selectCalc1').value;
							  document.querySelector('.OutputC11').textContent="";
							  document.querySelector('.OutputC12').textContent="";
							  document.querySelector('.OutputC13').textContent="";
							  document.querySelector('.OutputC14').textContent="";
							  let dock = document.querySelectorAll('.OutputText11');
							  dock[0].classList.add('OT11');
							  dock[1].classList.add('OT11');
							  dock[2].classList.add('OT11');
							  dock[3].classList.add('OT11');
							  let out_dci = document.querySelector('.OutputC11');
							  let out_txtrez_safe = document.querySelector('.OutputC12');
							  let out_txtrez_quick = document.querySelector('.OutputC13');
							  let out_txtrez_urgently = document.querySelector('.OutputC14');
							  let norma = 0;if ( in_sex === 1 ) {
							norma = in_activity * ( ( 10 * in_weight ) + ( 6.25 * in_height ) - ( 5 * in_age ) + 5 ); }
							else {
							norma = in_activity * ( ( 10 * in_weight ) + ( 6.25 * in_height ) - ( 5 * in_age )  - 161); }

							let def_safe = norma * 0.15;
							let potr_safe = Math.round( norma - def_safe );
							let week_safe = Math.round( ( def_safe * 7 ) / 77 ) / 100;
							let month_safe = Math.round( ( def_safe * 30 ) / 77 ) / 100;

							let def_quick = norma * 0.25;
							let potr_quick = Math.round( norma - def_quick );
							let week_quick = Math.round( ( def_quick * 7 ) / 77 ) / 100;
							let month_quick = Math.round( ( def_quick * 30 ) / 77 ) / 100;

							let def_urgently = norma * 0.4;
							let potr_urgently = Math.round( norma - def_urgently );
							let week_urgently = Math.round( ( def_urgently * 7 ) / 77 ) / 100;
							let month_urgently = Math.round( ( def_urgently * 30 ) / 77 ) / 100;
							document.querySelector('.Calc1Section').classList.add('CalcAR');
							out_dci.textContent += ` ${norma} kkal` ;
							out_txtrez_safe.textContent += ` ${potr_safe}  kkal çenli. Bir hepdäniň içinde   ${week_safe}  kg, bir aýda bolsa   ${month_safe}  kg horlanarsyňyz` ;
							out_txtrez_quick.textContent += ` ${potr_quick}   kkal çenli. Bir hepdäniň içinde   ${week_quick}  kg, bir aýda bolsa   ${month_quick}  kg horlanarsyňyz `;
							out_txtrez_urgently.textContent += ` ${potr_urgently}  kkal çenli. Bir hepdäniň içinde   ${week_urgently}   kg, bir aýda bolsa   ${month_urgently}   kg horlanarsyňyz` ;
							}}}>Hasaplamak</div>
			    	</div>
			    </div>
			</div>
			<div className="Calc12">
				<div className="Calc1">
					<div className="OutputText11">Mifflin-San-Jeoryň formulasy boýunça gündelik kaloriý sany (kkal)</div>
					<div className="OutputC11 OC11"></div>
					<div className="OutputText11">Horlanmak üçin saglyga zyýan ýetirmän iýmitde kaloriý sanyny azaltmaly</div>
			    	<div className="OutputC12 OC11"></div>
					<div className="OutputText11">Çalt horlanmak üçin iýmitiň normasyny azaltmaly</div>
			    	<div className="OutputC13 OC11"></div>
					<div className="OutputText11">Gyssagly horlanmak üçin iýmitiň normasyny azaltmaly</div>
			    	<div className="OutputC14 OC11"></div>
			    </div>
			</div>
		</div>
	)
}

export default Calc1;