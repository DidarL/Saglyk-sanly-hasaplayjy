import React  from 'react';

const Calc2 = () =>{
	return (
		<div className="Calc1Section"><div>
			<div className="Calc1">
				<h2 className="CalcH2">Beden agram indeksiniň hasaplaýjy</h2>
				<div className="CalcDiv"><div>Boýy (sm)</div><input type="text" name="Height" id="Height2" className="CalcInput" maxLength="3" /></div>
				<div className="CalcDiv"><div>Agramy (kg)</div><input type="text" name="Weight" id="Weight2" className="CalcInput" maxLength="3"/></div>
				<div className="Sex1">
					<input type="radio" name="Calc1" id="men2" className="CalcInput1" defaultChecked/>
					<div>Erkek (oglan)</div>
					<input type="radio" name="Calc1" id="girl2" className="CalcInput1"/>
					<div>Aýal (gyz)</div>
				</div>
			</div></div>
			<div className="Calc11">
				<div className="Calc1">
					<div>
				 		<div className="SubmitButton SubmitButton2" onClick={()=>{
				 			  let s1 = "";let t1=0;
  							let in_height = document.querySelector('#Height2').value;
  							let in_weight = document.querySelector('#Weight2').value;
  							if(in_height<1 | in_height>250){t1=1;
  								document.querySelector('#Height2').classList.add('in_red');}
  							else{
  								document.querySelector('#Height2').classList.remove('in_red');}
							 if(in_weight<1 | in_weight>300){t1=1;
  								document.querySelector('#Weight2').classList.add('in_red');}
							 else{
  								document.querySelector('#Weight2').classList.remove('in_red');}
  							if(t1===0){
  								document.querySelector('#Height2').classList.remove('in_red');
  								document.querySelector('#Weight2').classList.remove('in_red');
 							    document.querySelector('.OutputText22').classList.add('OT11');
  							    document.querySelector('.OC22').textContent="";
							    let imt = Math.round((in_weight /((in_height/100)*(in_height/100)))* 100) / 100;
  							    if(imt < 16){ s1="(Beden agramynyň çenden aşa ýetmezçiligi)"; }
							    if(imt >=16 && imt <=18.49){ s1="(Beden agramynyň ýetmezçiligi)"; }
							    if(imt > 18.49 && imt<=24.99){ s1="(Kadaly agram)"; }
							    if(imt > 24.99 && imt<=29.99){ s1="(Kadadan agyrlanan)"; }
							    if(imt > 29.99 && imt<=34.99){ s1="(I derejeli semizlik)"; } 
							    if(imt >35 && imt<=39.99){ s1="(II derejeli semizlik)"; }
							    if (imt>=40) {s1="(II derejeli semizlik)";}
							    document.querySelector('.CalcA').classList.add('CalcAR');
							    document.querySelector('.OC22').textContent= ` ${imt}  ${s1}`;
				 		}}}>Hasaplamak</div>
			    	</div>
			    </div>
			</div>
			<div className="Calc12">
				<div className="Calc1">
					<div className="OutputText11 OutputText22">Siziň beden massaňyzyň indeksi (BAI) :</div>
					<div className="OutputC11 OC22"></div>
					<div className="CalcA">Koeffisiýent (BAI) bedeniň agramynyň kadalydygyny, ýeterlik däldigini ýa-da artykmaçdygyny kesgitlemäge mümkinçilik berýär.Bedeniň agram indeksi (BAI) formulasy Adolfom Ketle tarapyndan 150 ýyl mundan bäri işlenip düzüldi we häzirki wagtda hem ulanylýar.</div>
			    </div>
			</div>
		</div>
	)


	
}

export default Calc2;