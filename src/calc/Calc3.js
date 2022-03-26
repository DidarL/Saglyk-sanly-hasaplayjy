import React  from 'react';

const Calc3 = () =>{
	return (
		<div className="Calc1Section"><div>
			<div className="Calc1">
				<h2 className="CalcH2">Kadaly agram hasaplaýjy</h2>
				<div className="CalcDiv"><div>Boýy (sm)</div><input type="text" name="Height" id="Height3" className="CalcInput"/></div>
				<div className="CalcDiv"><div>Ýaşy</div><input type="text" name="Age" id="Age3" className="CalcInput"/></div>
				<div className="CalcDiv"><div>Bedeniň görnüşi</div><select className="CalcInput2" id="selectCalc3">
					<option value="1">Asteniki (inçe sünkli)</option>
					<option value="2">Normosteniki (kadaly)</option>
					<option value="3">Gipersteniki (iri süňkli)</option>
				</select></div>
			</div></div>
			<div className="Calc11">
				<div className="Calc1">
					<div>
				 		<div className="SubmitButton" onClick={()=>{let t3=0;
				 			let in_height3 = document.querySelector('#Height3').value;
				 			let in_Age3 = document.querySelector('#Age3').value;
				 			if(in_height3<1 | in_height3>250){ t3=1; document.querySelector('#Height3').classList.add('in_red'); }
							  else{ document.querySelector('#Height3').classList.remove('in_red'); }
							  if(in_Age3<1 | in_Age3>130){t3=1; document.querySelector('#Age3').classList.add('in_red'); }
							  else{ document.querySelector('#Age3').classList.remove('in_red'); }
				 			  if(t3==0){
				 			  let in_selectCalc3 = document.querySelector('#selectCalc3').value;
				 			  let p = 110;
				 			  if(in_Age3>=40)p=100;
				 			  let r = in_height3 - p;
				 			  if(in_selectCalc3==1)r=r-(r/10);
				 			  if(in_selectCalc3==3){ r=r+(r/10); }
				 			  r=Math.round(r);
				 			  document.querySelector('.OutputText22').classList.add('OT11');
							  document.querySelector('.CalcA').classList.add('CalcAR');
  							  document.querySelector('.OC33').textContent=`${r} kilogramm`; 
				 		}}}>Hasaplamak</div>
			    	</div>
			    </div>
			</div>
			<div className="Calc12">
				<div className="Calc1">
					<div className="OutputText11 OutputText22">Siziň kadaly agramyňyz:</div>
					<div className="OutputC11 OC33"></div>
					<div className="CalcA">Brok-Brukşyň formulasy esasynda kadaly agramy hasaplamak üçin adamyň boýy, ýaşy we beden gurlyşy baradaky maglumatlar girizilýär. 40 ýaşa ýetmedik normosteniki beden gurluşly adamyň kadaly agramyny hasaplamak üçin onuň buýundan 110 aýyrylýar, 40 ýaşdan geçen bolsa - 100 aýyrylýar. Asteniki (inçe süňkli) beden gurluşly adamyň netijesi 10% azaltmaly, gipersteniki (iri süňkli) beden gurluşly bolsa netijä 10% goşmaly.</div>
			    </div>
			</div>
			
		</div>
	)


	
}

export default Calc3;