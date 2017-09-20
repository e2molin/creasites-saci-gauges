//Button Actions
var ctrlLecturaLOG;
var ctrlMonitorizacionLOG;
var lastValueShown;
var monitorization;
var file4process=null;
var reader=null;
var readerTime=1000;

var timeFilter=4;
var poolVolume=40;
var timeDayWork=10;
var nombreMachine;




function  evalMachine(){
    var cabal;

    //console.log("Valor volumen: " + poolVolume + " m3");
    //console.log("Valor tiempo: " + timeFilter + " h");
    
    cabal=poolVolume/timeFilter;
    if (cabal<=15.7){
        nombreMachine="WINNER 75";
    } else if (cabal>15.7 && cabal<=19.2) {
        nombreMachine="WINNER 100";
    } else if (cabal>19.2 && cabal<=22.2) {
        nombreMachine="WINNER 150";
    } else if (cabal>22.2) {
        nombreMachine="WINNER 200";
    }
    console.log("Máquina: " + nombreMachine);
    
    
    if (nombreMachine=="WINNER 75"){
        referenceGauge1 = (-0.7361*cabal*cabal) + (35.191*cabal) + 397.68;                              //Potencia
        referenceGauge2 = cabal;                                                                        //Cabal
        referenceGauge3 = (-0.0368*cabal*cabal)+ (0.1741*cabal) + 15.569;                               //Presión
        referenceGauge4 = (0.0102*cabal*cabal*cabal)-(0.0637*cabal*cabal)-(9.3479*cabal)+2896.7;        //Velocidad
    }    
    if (nombreMachine=="WINNER 100"){
        referenceGauge1 = (-0.0341*cabal*cabal*cabal) + (0.7189*cabal*cabal) + (25.403*cabal) + 494.31; //Potencia
        referenceGauge2 = cabal;                                                                        //Cabal
        referenceGauge3 = (-0.0276*cabal*cabal)+ (0.2102*cabal) + 15.968;                               //Presión
        referenceGauge4 = (0.008*cabal*cabal*cabal)-(0.1271*cabal*cabal)-(5.8393*cabal) + 2906.7;       //Velocidad
    }
    if (nombreMachine=="WINNER 150"){
        referenceGauge1 = (-0.3523*cabal*cabal) + (38.46*cabal) + 567.97;                               //Potencia
        referenceGauge2 = cabal;                                                                        //Cabal
        referenceGauge3 = (-0.0271*cabal*cabal)+ (0.2201*cabal) + 19.26;                                //Presión
        referenceGauge4 = (0.0558*cabal*cabal)-(4.2698*cabal) + 2942.9                                  //Velocidad
    }
    if (nombreMachine=="WINNER 200"){
        referenceGauge1 = (-0.0371*cabal*cabal) + (30.29*cabal) + 817.75;                               //Potencia
        referenceGauge2 = cabal;                                                                        //Cabal
        referenceGauge3 = (-0.0129*cabal*cabal)+ (0.08*cabal) + 19.562;                                 //Presión
        referenceGauge4 = (0.0026*cabal*cabal*cabal) - (0.088*cabal*cabal) - 1.6237*cabal + 2940;       //Velocidad
    }    
    referenceGauge1=Math.round(referenceGauge1 * 100) / 100;
    referenceGauge2=Math.round(referenceGauge2 * 100) / 100;
    referenceGauge3=Math.round(referenceGauge3 * 100) / 100;
    referenceGauge4=Math.round(referenceGauge4);
    
    $("#ref1").text(referenceGauge1);
    $("#ref2").text(referenceGauge2);
    $("#ref3").text(referenceGauge3);
    $("#ref4").text(referenceGauge4);  

    gaugeWin1.setValue(referenceGauge1);
    gaugeWin2.setValue(referenceGauge2);
    gaugeWin3.setValue(referenceGauge3);
    gaugeWin4.setValue(referenceGauge4);

    $("#nomMachine1").text(nombreMachine);
    $("#nomMachine2").text(nombreMachine);
    $("#nomMachine3").text(nombreMachine);
    $("#nomMachine4").text(nombreMachine);
    $("#nomMachineD").text(nombreMachine);
    $("#nomMachineA").text(nombreMachine);
    $("#paramEnergy3").text(Math.round(referenceGauge1 / 1000*1000)/1000);
    
}

$("#btnFullScreen").click(function() {
    var docElm = document.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    }
    else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    }
    else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
});


$("#btnShowConfig").click(function() {
    if($("#modalConfiguration").is(":visible") ){return;}
    $("#modalConfiguration").modal("show");
});
/*
document.getElementById('file').onchange = function(){
	  //alert("leo");
  	var file = this.files[0];

  	var reader = new FileReader();
  	reader.onload = function(progressEvent){
    	// Entire file
    	//console.log(this.result);
    	// By lines
    	var lines = this.result.split('\n');
    	console.log("Se van a monitorizar " + lines.length + " valores");
    	var partes;
    	var valores = [];
    	var numLinea=0;
    	var ctrlLectura;
		function setGauges(numLectura){
					if (numLectura>=lines.length-1){
						clearInterval(ctrlLectura);
						console.log("Lectura terminada");
						return;
					}
					partes = lines[numLectura].split(";");
					console.log(lines[numLectura]);
		      		console.log("c1:" + partes[0] + "/" + "c2:" + partes[1] + "/" + "c3:" + partes[2] + "/" + "c4:" + partes[3]);
		      		gauge1.setValue( partes[0]);
		      		gauge2.setValue( partes[1]);
		      		gauge3.setValue( partes[2]);
		      		gauge4.setValue( partes[3]);

		}

		ctrlLectura = setInterval(function() {
    			console.log(numLinea);
    			numLinea=numLinea+1;
    			setGauges(numLinea);
		}, 500);
  	};
  	reader.readAsText(file);
};
*/
/*
Rutinas proceso de ficheros LOG
*/

$("#btnStartProcessFile").click(function() {
    $("#modalConfiguration").modal("hide");
    $("#showOn").hide();
    $("#showOff").hide();   
  	var file4process = document.getElementById('fileBrowser').files[0];
  	var reader = new FileReader();
  	reader.onload = function(progressEvent){
    	var lines = null;
        lines = this.result.split('\n');
    	//console.log("Se van a monitorizar " + lines.length + " valores");
    	var partes;
    	var valores = [];
    	var numLinea=0;
    	
		function setGauges(numLectura){
					if (numLectura>=lines.length-1){
                        if ($("#optRepeat").prop('checked')==true){
                            //console.log("Lectura terminada y repetiré");
                            numLinea=0;
                        }else{
                            //console.log("Lectura terminada y pararé");
                            clearInterval(ctrlMonitorizacionLOG);
                            monitorization=false;
                        }
						return;
					}
					partes = lines[numLectura].split(";");
					//console.log(lines[numLectura]);
		      		//console.log("c1:" + partes[0] + "/" + "c2:" + partes[1] + "/" + "c3:" + partes[2] + "/" + "c4:" + partes[3]);
		      		gauge1.setValue( partes[0]);
                    gaugeSav1.setValue(referenceGauge1-partes[0]);
		      		gauge2.setValue( partes[1]);
                    gaugeSav2.setValue(referenceGauge2-partes[1]);
		      		gauge3.setValue( partes[2]);
                    gaugeSav3.setValue(referenceGauge3-partes[2]);
                    gauge4.setValue( partes[3]);
                    gaugeSav4.setValue(referenceGauge4-partes[3]);
                    var paramEnergy1=partes[0]/1000;
                    var valEnergy1=paramEnergy1*timeDayWork;
                    var valEnergy2=partes[0]/1000*timeDayWork*365;
                    var valEnergy3=referenceGauge1/1000*timeFilter;
                    var valEnergy4=referenceGauge1/1000*timeFilter*365;   
                    var valEnergy5=(1-(valEnergy2/valEnergy4))*100;
                            
                    $("#paramEnergy1").text(Math.round(paramEnergy1*1000)/1000);
                    $("#numEnergy1").text(Math.round(valEnergy1*1000)/1000);
                    $("#numEnergy2").text(Math.round(valEnergy2*100)/100);
                    $("#numEnergy3").text(Math.round(valEnergy3*1000)/1000);
                    $("#numEnergy4").text(Math.round(valEnergy4*100)/100);     
                    $("#numEnergy5").text(Math.round(valEnergy5*100)/100);            
                    lastValueShown=numLectura;

		}

		ctrlMonitorizacionLOG = setInterval(function() {
    			console.log(numLinea);
    			numLinea=numLinea+1;
    			setGauges(numLinea);
                monitorization=true;
		}, 500);

  	};
  	reader.readAsText(file4process);    
});

$("#btnStopProcessFile").click(function() {
   $("#modalConfiguration").modal("hide");
    $("#showOn").hide();
    $("#showOff").hide();    
    clearInterval(ctrlMonitorizacionLOG);
    monitorization=false;
});


/*
-----------------------------------------------------------------------------------------------------------------------------------------
Monitorización de los valores de un fichero
Cada 5000ms se evalua si se están monitorizando valores
    ->Sí: continúa la monitorización
    ->No: se relee el fichero y se continúa la monitorización a a partir de la última línea monitorizada
-----------------------------------------------------------------------------------------------------------------------------------------
*/
/*
function monitorizacionVariables(){
    var numLinea;
    var lines = null;
  	file4process = document.getElementById('fileBrowser').files[0];
    console.log(document.getElementById('fileBrowser').files[0]);
  	reader = new FileReader();
  	reader.onloadend  = function(progressEvent){
    	
        lines = this.result.split('\n');
    	console.log("Se van a monitorizar " + lines.length + " valores.");
    	var partes;
    	var valores = [];
    	numLinea=lastValueShown;
    	console.log("Empezamos en la línea" + lastValueShown);
		function setGauges(numLectura){
					if (numLectura>=lines.length-1){
                        clearInterval(ctrlMonitorizacionLOG);
                        console.log("Lectura terminada. Paro de monitorizar. Última lectura: " + lastValueShown);
                        monitorization=false;
						return;
					}
					partes = lines[numLectura].split(";");
					//console.log(lines[numLectura]);
		      		//console.log("c1:" + partes[0] + "/" + "c2:" + partes[1] + "/" + "c3:" + partes[2] + "/" + "c4:" + partes[3]);
		      		gauge1.setValue( partes[0]);
		      		gauge2.setValue( partes[1]);
		      		gauge3.setValue( partes[2]);
		      		gauge4.setValue( partes[3]);
                    lastValueShown = numLectura;

		}
        console.log("Arranco monitorización en línea " + numLinea);
		ctrlMonitorizacionLOG = setInterval(function() {
    			console.log(numLinea);
    			numLinea=numLinea+1;
                monitorization=true;
    			setGauges(numLinea);
		}, 500);

  	};
  	//reader.readAsText(file4process);    
    reader.readAsText(new File([""], "http://localhost:1976/test/gauge/logfile.txt"));
    //console.log("YYYYYYYYYYYYYYYY;" + lines.length);
    
}
*/

/*
Función para monitorizar su fichero LOG con una línea de datos
*/
function monitorizacionVariablesMono(){
    var numLinea;
    var lines = null;
    $.ajax({
                    url: 'logfile.txt',
                    cache: false,
                        success: function(resultsRequest){
                            lines = resultsRequest.split('\n');
                            console.log(resultsRequest);
                            var partes;
                            var valores = [];
                            partes = resultsRequest.split(";");
                            
                            console.log("Valores presentes en log " + partes.length);
                            gauge1.setValue( partes[0]);
                            gaugeSav1.setValue(referenceGauge1-partes[0]);
                            gauge2.setValue( partes[1]/10);                         //Divido entre 10 porque me mandan bares en vez de m.c.a.
                            gaugeSav2.setValue(referenceGauge2-partes[1]/10);       //Divido entre 10 porque me mandan bares en vez de m.c.a.
                            gauge3.setValue( partes[2]);
                            gaugeSav3.setValue(referenceGauge3-partes[2]);
                            gauge4.setValue( partes[3]);
                            gaugeSav4.setValue(referenceGauge4-partes[3]);

                            //Si nosm mandan dos valores más
                            if (partes.length==6){
                                var reEvaluar=false;
                                if (partes[4]!=poolVolume){
                                    poolVolume= partes[4];
                                    //sliderVol.setValue(parseInt(poolVolume));//Con esto cambiamos el slider de volumen
                                    console.log("Cambio poolVolume");
                                    reEvaluar=true;

                                }
                                if (partes[5]/60!= timeDayWork){
                                    timeDayWork=  partes[5]/60;
                                    //sliderDayWorkTime.setValue(timeDayWork);//Con esto cambiamos el slider de tiempo diario de filtrado
                                    console.log("Cambio timeDayWork");
                                    reEvaluar=true;
                                }
                                if (reEvaluar==true){
                                    evalMachine();
                                    console.log("El LOG reevalua valores");
                                }else{
                                    console.log("El LOG mantiene valores");
                                }
                            }

                            
                            var paramEnergy1=partes[0]/1000;
                            var valEnergy1=paramEnergy1*timeDayWork;
                            var valEnergy2=partes[0]/1000*timeDayWork*365;
                            var valEnergy3=referenceGauge1/1000*timeFilter;
                            var valEnergy4=referenceGauge1/1000*timeFilter*365;   
                            var valEnergy5=(1-(valEnergy2/valEnergy4))*100;
                            
                            $("#paramEnergy1").text(Math.round(paramEnergy1*1000)/1000);
                            $("#numEnergy1").text(Math.round(valEnergy1*1000)/1000);
                            $("#numEnergy2").text(Math.round(valEnergy2*100)/100);
                            $("#numEnergy3").text(Math.round(valEnergy3*1000)/1000);
                            $("#numEnergy4").text(Math.round(valEnergy4*100)/100);     
                            $("#numEnergy5").text(Math.round(valEnergy5*100)/100);

                        },
                    error: function(e){
                        console.log(e.responseText);
                    }
                });
}

function monitorizacionVariables(){
    var numLinea;
    var lines = null;
    $.ajax({
                    url: 'logfile.txt',
                    cache: false,
                        success: function(resultsRequest){
                            lines = resultsRequest.split('\n');
    	                    console.log("Se van a monitorizar " + lines.length + " valores.");
                            var partes;
                            var valores = [];
                            numLinea=lastValueShown;
                            console.log("Empezamos en la línea" + lastValueShown);
                            function setGauges(numLectura){
                                        if (numLectura>=lines.length-1){
                                            clearInterval(ctrlMonitorizacionLOG);
                                            console.log("Lectura terminada. Paro de monitorizar. Última lectura: " + lastValueShown);
                                            monitorization=false;
                                            return;
                                        }
                                        partes = lines[numLectura].split(";");
                                        gauge1.setValue( partes[0]);
                                        gaugeSav1.setValue(referenceGauge1-partes[0]);
                                        gauge2.setValue( partes[1]);
                                        gaugeSav2.setValue(referenceGauge2-partes[1]);
                                        gauge3.setValue( partes[2]);
                                        gaugeSav3.setValue(referenceGauge3-partes[2]);
                                        gauge4.setValue( partes[3]);
                                        gaugeSav4.setValue(referenceGauge4-partes[3]);
                                        lastValueShown = numLectura;

                            }
                            console.log("Arranco monitorización en línea " + numLinea);
                            ctrlMonitorizacionLOG = setInterval(function() {
                                    console.log(numLinea);
                                    numLinea=numLinea+1;
                                    monitorization=true;
                                    setGauges(numLinea);
                                    setGauges(0);//Cambio para fichero con una única línea
                            }, 500);

                        },
                error: function(e){
                console.log(e.responseText);
                }
                });
}





$("#btnStartProcessFileContinuo").click(function() {
    $("#modalConfiguration").modal("hide");
    lastValueShown=0;
    monitorizacionVariablesMono();
    console.log("Arranco lecturas");
    //$("#showOn").show();
    //$("#showOff").hide();
    ctrlLecturaLOG = setInterval(function() {
    			if (monitorization==true){
                    console.log("Monitorización en marcha. Van por la línea " + lastValueShown);
                }else{
                    console.log("La monitorización ha terminado");
                    file4process=null;
                    reader=null;
                    monitorizacionVariablesMono();
                    //console.log("XXXXXXXXXXXXXXX");
                }
    }, readerTime);
    
});

$("#btnSopProcessFileContinuo").click(function() {
    $("#modalConfiguration").modal("hide");
    //$("#showOn").hide();
    //$("#showOff").show();
    gauge1.clear();	//Con esto ponemos a cero el contador
    gauge2.clear();
    gauge3.clear();
    gauge4.clear();
    gaugeWin1.clear();	//Con esto ponemos a cero el contador
    gaugeWin2.clear();
    gaugeWin3.clear();
    gaugeWin4.clear();    
    gaugeSav1.setValue(0);
    gaugeSav2.setValue(0);
    gaugeSav3.setValue(0);
    gaugeSav4.setValue(0);    
    clearInterval(ctrlMonitorizacionLOG);
    clearInterval(ctrlLecturaLOG);
});

/*
document.getElementById('fileBrowser').onchange = function(){
};
*/
