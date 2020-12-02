

var dm=Math.floor(Math.random() * 100);
function FunctionA() {

     
		  document.getElementById('desgasteMotor').value =  dm + ' %';
		if (dm>70){
		document.getElementById('desgasteMotor').style.color = "red";
		document.getElementById('probabilidadeFalha').style.color = "red";
		document.getElementById('estadoMotor').style.color = "red";
		
		
		  document.getElementById('probabilidadeFalha').value =  80 + ' %';
		   document.getElementById('estadoMotor').value =  'RUIM';
	
	}
		if (70>dm && dm>30){
		document.getElementById('desgasteMotor').style.color = "yellow";
			document.getElementById('probabilidadeFalha').style.color = "yellow";
			document.getElementById('estadoMotor').style.color = "yellow";
	
				  document.getElementById('probabilidadeFalha').value = 50 + ' %';
				  document.getElementById('estadoMotor').value =  'BOM';
	}
		if (dm<30){
			document.getElementById('probabilidadeFalha').style.color = "green";
		document.getElementById('desgasteMotor').style.color = "green";
		document.getElementById('estadoMotor').style.color = "green";
		
			  document.getElementById('probabilidadeFalha').value =  20 + ' %';
			   document.getElementById('estadoMotor').value =  'OTIMO';
	}
}

