var gauge1;
var gauge2;
var gauge3;
var gauge4;
var gaugeSav1;
var gaugeSav2;
var gaugeSav3;
var gaugeSav4;
var gaugeWin1;
var gaugeWin2;
var gaugeWin3;
var gaugeWin4;

var referenceGauge1;
var referenceGauge2;
var referenceGauge3;
var referenceGauge4;

var gauge_auto1;
var gauge_auto2;
var gauge_auto3;
var gauge_auto4;
var gauge_auto5;

function init_gauges(){

	gauge1 = new Gauge({
			renderTo    : 'gauge1',
			width       : 300,
			height      : 300,
			glow        : true,
			units       : 'w',
			title       : 'Power',//false,
			minValue    : 0,
			maxValue    : 3000,
			majorTicks  : ['0','500','1000','1500','2000','2500','3000'],
			/*minorTicks  : 2,*/
            valueFormat : { int : 4, dec : 0 },
			strokeTicks : false,
			highlights  : [
				{ from : 0,   to : 1500, color : 'rgba(178,   198, 25, .95)' },
				{ from : 1500, to : 2500, color : 'rgba(128, 189, 0, .95)' },
				{ from : 2500, to : 3000, color : 'rgba(1, 138,  0, .95)' }
			],
			/*highlights : false,*/
			colors      : {
				plate      : '#222',
				majorTicks : '#f5f5f5',
				minorTicks : '#ddd',
				title      : '#fff',
				units      : '#ccc',
				numbers    : '#eee',
				needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
			},
            /*Círculos externos del gauge que dan el relieve*/
            circles: {
                outerVisible: true,
                middleVisible: true,
                innerVisible: true
            },
            updateValueOnAnimation : true   /*Con esto podemos hacer que entre transiciones de la aguja el contador numérico se actualice. Si estyá en falso, se actualiza por saltos*/
	});

	gauge2 = new Gauge({
			renderTo  : 'gauge2',
			width     : 300,
			height    : 300,
			glow      : true,
			units     : 'm3/h',
			title     : 'Flow',
			minValue    : 0,
			maxValue    : 35,
			strokeTicks : false,
			majorTicks  : ['0','5','10','15','20','25','30','35'],
            valueFormat : { int : 2, dec : 2 },
			highlights : [{
				from  : 0,
				to    : 20,
				color : 'rgba(178,   198, 25, .95)'/*'PaleGreen'*/
			}, {
				from  : 20,
				to    : 30,
				color : 'rgba(128, 189, 0, .95)'/*'PaleGreen'*/
			}, {
				from  : 30,
				to    : 35,
				color : 'rgba(1, 138,  0, .95)'/*'PaleGreen'*/
			}],
			animation : {
				delay : 10,
				duration: 300,
				fn : 'bounce'
			},
            colors      : {
				plate      : '#222',
				majorTicks : '#f5f5f5',
				minorTicks : '#ddd',
				title      : '#fff',
				units      : '#ccc',
				numbers    : '#eee',
				needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
			}
	});

	gauge3 = new Gauge({
			renderTo  : 'gauge3',
			width     : 250,
			height    : 250,
			glow      : true,
			units     : 'm.c.a.',
			title     : 'Pressure',
			minValue    : 0,
			maxValue    : 30,
			strokeTicks : false,
			majorTicks  : ['0','5','10','15','20','25','30'],
            valueFormat : { int : 2, dec : 2 },
			highlights : [{
				from  : 0,
				to    : 15,
				color : 'rgba(178,   198, 25, .95)'/*'PaleGreen'*/
			}, {
				from  : 15,
				to    : 25,
				color : 'rgba(128, 189, 0, .95)'/*'Khaki'*/
			}, {
				from  : 25,
				to    : 30,
				color : 'rgba(1, 138,  0, .95)'/*'LightSalmon'*/
			}],
			animation : {
				delay : 10,
				duration: 300,
				fn : 'bounce'
			},
            colors : {
				plate      : '#222',
				majorTicks : '#f5f5f5',
				minorTicks : '#ddd',
				title      : '#fff',
				units      : '#ccc',
				numbers    : '#eee',
				needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
			}        
	});

	gauge4 = new Gauge({
			renderTo  : 'gauge4',
			width     : 250,
			height    : 250,
			glow      : true,
			units     : 'rpm',
			title     : 'Speed',
			minValue    : 0,
			maxValue    : 3500,
			strokeTicks : false,
			majorTicks  : ['0','500','1000','1500','2000','2500','3000','3500'],
			minorTicks  : 10,
			valueFormat : { int : 4, dec : 0 },
			highlights : [{
				from  : 0,
				to    : 2000,
				color : 'rgba(178,   198, 25, .95)'/*'PaleGreen'*/
			}, {
				from  : 2000,
				to    : 3000,
				color : 'rgba(128, 189, 0, .95)'/*'Khaki'*/
			}, {
				from  : 3000,
				to    : 3500,
				color : 'rgba(1, 138,  0, .95)'/*'LightSalmon'*/
			}],
			animation : {
				delay : 10,
				duration: 300,
				fn : 'bounce'
			},
            colors : {
				plate      : '#222',
				majorTicks : '#f5f5f5',
				minorTicks : '#ddd',
				title      : '#fff',
				units      : '#ccc',
				numbers    : '#eee',
				needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
			}
	});

	gaugeSav1 = new Gauge({
			renderTo    : 'gauge-sav1',
			width       : 300,
			height      : 300,
			glow        : true,
			units       : 'w',
			title       : 'Power',
            valueFormat : { int : 4, dec : 0 },
			minValue    : -3000,
			maxValue    : 3000,
			majorTicks  : ['-3000','-2500','-2000','-1500','-1000','0','1000','1500','2000','2500','3000'],
			minorTicks  : 5,
			strokeTicks : false,
			highlights  : [
				{ from : -3000, to : 0, color : 'rgba(176, 177, 172, .90)' },
				{ from : 0, to : 3000, color : 'rgba(129, 127, 132, .75)' }
			],
			colors      : {
				plate      : '#c6c4c5',
				majorTicks : '#000',
				minorTicks : '#222',
				title      : '#222',
				units      : '#666',
				numbers    : '#222',
				needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
			},
			animation : {
				delay : 25,
				duration: 500,
				fn : 'bounce'
			}
	});

	gaugeSav2 = new Gauge({
			renderTo    : 'gauge-sav2',
			width       : 300,
			height      : 300,
			glow        : true,
			units       : 'm3/h',
			title       : 'Flow',
            valueFormat : { int : 2, dec : 2 },
			minValue    : -25,
			maxValue    : 25,
			majorTicks  : ['-25','-20','-15','-10','-5','0','5','10','15','20','25'],
			minorTicks  : 5,
			strokeTicks : false,
			highlights  : [
				{ from : -25, to : 0, color : 'rgba(176, 177, 172, .90)' },
				{ from : 0, to : 25, color : 'rgba(129, 127, 132, .75)' }
			],
			colors      : {
				plate      : '#c6c4c5',
				majorTicks : '#000',
				minorTicks : '#222',
				title      : '#222',
				units      : '#666',
				numbers    : '#222',
				needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
			},
			animation : {
				delay : 25,
				duration: 500,
				fn : 'bounce'
			}
	});
    
	gaugeSav3 = new Gauge({
			renderTo    : 'gauge-sav3',
			width       : 250,
			height      : 250,
			glow        : true,
			units       : 'm.c.a.',
			title       : 'Pressure',
            valueFormat : { int : 2, dec : 2 },
			minValue    : -25,
			maxValue    : 25,
			majorTicks  : ['-25','-20','-15','-10','-5','0','5','10','15','20','25'],
			minorTicks  : 5,
			strokeTicks : false,
			highlights  : [
				{ from : -25, to : 0, color : 'rgba(176, 177, 172, .90)' },
				{ from : 0, to : 25, color : 'rgba(129, 127, 132, .75)' }
			],
			colors      : {
				plate      : '#c6c4c5',
				majorTicks : '#000',
				minorTicks : '#222',
				title      : '#222',
				units      : '#666',
				numbers    : '#222',
				needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
			},
			animation : {
				delay : 25,
				duration: 500,
				fn : 'bounce'
			}
	});     

    gaugeSav4 = new Gauge({
			renderTo    : 'gauge-sav4',
			width       : 250,
			height      : 250,
			glow        : true,
			units       : 'rpm',
			title       : 'Speed',
            valueFormat : { int : 4, dec : 0 },
			minValue    : -2500,
			maxValue    : 2500,
			majorTicks  : ['-2500','-2000','-1500','-1000','-500','0','500','1000','1500','2000','2500'],
			minorTicks  : 5,
			strokeTicks : false,
			highlights  : [
				{ from : -2500, to : 0, color : 'rgba(176, 177, 172, .90)' },
				{ from : 0, to : 2500, color : 'rgba(129, 127, 132, .75)' }
			],
			colors      : {
				plate      : '#c6c4c5',
				majorTicks : '#000',
				minorTicks : '#222',
				title      : '#222',
				units      : '#666',
				numbers    : '#222',
				needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
			},
			animation : {
				delay : 25,
				duration: 500,
				fn : 'bounce'
			}
	});   
    
    
gaugeWin1 = new Gauge({
			renderTo    : 'gaugeWin1',
			width       : 300,
			height      : 300,
			glow        : true,
			units       : 'w',
			title       : 'Power',//false,
			minValue    : 0,
			maxValue    : 3000,
			majorTicks  : ['0','500','1000','1500','2000','2500','3000'],
			/*minorTicks  : 2,*/
            valueFormat : { int : 4, dec : 0 },
			strokeTicks : false,
			highlights  : [
				{ from : 0,   to : 1500, color : 'rgba(176, 177, 172, .75)' },
				{ from : 1500, to : 2500, color : 'rgba(178, 175, 183, 0.9)' },
				{ from : 2500, to : 3000, color : 'rgba(129, 127, 132, .90)' }
			],
			/*highlights : false,*/
			colors      : {
				plate      : '#c6c4c5',
				majorTicks : '#000',
				minorTicks : '#222',
				title      : '#222',
				units      : '#666',
				numbers    : '#222',
				needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
			},
            /*Círculos externos del gauge que dan el relieve*/
            circles: {
                outerVisible: true,
                middleVisible: true,
                innerVisible: true
            },
            updateValueOnAnimation : true   /*Con esto podemos hacer que entre transiciones de la aguja el contador numérico se actualice. Si estyá en falso, se actualiza por saltos*/
	});

	gaugeWin2 = new Gauge({
			renderTo  : 'gaugeWin2',
			width     : 300,
			height    : 300,
			glow      : true,
			units     : 'm3/h',
			title     : 'Flow',
			minValue    : 0,
			maxValue    : 35,
			strokeTicks : false,
			majorTicks  : ['0','5','10','15','20','25','30','35'],
            valueFormat : { int : 2, dec : 2 },
			highlights : [{
				from  : 0,
				to    : 20,
				color : 'rgba(176, 177, 172, .75)'/*'PaleGreen'*/
			}, {
				from  : 20,
				to    : 30,
				color : 'rgba(178, 175, 183, 0.9)'/*'PaleGreen'*/
			}, {
				from  : 30,
				to    : 35,
				color : 'rgba(129, 127, 132, .90)'/*'PaleGreen'*/
			}],
			animation : {
				delay : 10,
				duration: 300,
				fn : 'bounce'
			},
            colors      : {
				plate      : '#c6c4c5',
				majorTicks : '#000',
				minorTicks : '#222',
				title      : '#222',
				units      : '#666',
				numbers    : '#222',
				needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
			}
	});

	gaugeWin3 = new Gauge({
			renderTo  : 'gaugeWin3',
			width     : 250,
			height    : 250,
			glow      : true,
			units     : 'm.c.a.',
			title     : 'Pressure',
			minValue    : 0,
			maxValue    : 30,
			strokeTicks : false,
			majorTicks  : ['0','5','10','15','20','25','30'],
            valueFormat : { int : 2, dec : 2 },
			highlights : [{
				from  : 0,
				to    : 15,
				color : 'rgba(176, 177, 172, .75)'/*'PaleGreen'*/
			}, {
				from  : 15,
				to    : 25,
				color : 'rgba(178, 175, 183, 0.9)'/*'PaleGreen'*/
			}, {
				from  : 25,
				to    : 30,
				color : 'rgba(129, 127, 132, .90)'/*'PaleGreen'*/
			}],
			animation : {
				delay : 10,
				duration: 300,
				fn : 'bounce'
			},
            colors : {
				plate      : '#c6c4c5',
				majorTicks : '#000',
				minorTicks : '#222',
				title      : '#222',
				units      : '#666',
				numbers    : '#222',
				needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
			}        
	});

	gaugeWin4 = new Gauge({
			renderTo  : 'gaugeWin4',
			width     : 250,
			height    : 250,
			glow      : true,
			units     : 'rpm',
			title     : 'Speed',
			minValue    : 0,
			maxValue    : 3500,
			strokeTicks : false,
			majorTicks  : ['0','500','1000','1500','2000','2500','3000','3500'],
			minorTicks  : 10,
			valueFormat : { int : 4, dec : 0 },
			highlights : [{
				from  : 0,
				to    : 2000,
				color : 'rgba(176, 177, 172, .75)'/*'PaleGreen'*/
			}, {
				from  : 2000,
				to    : 3000,
				color : 'rgba(178, 175, 183, 0.9)'/*'PaleGreen'*/
			}, {
				from  : 3000,
				to    : 3500,
				color : 'rgba(129, 127, 132, .90)'/*'PaleGreen'*/
			}],
			animation : {
				delay : 10,
				duration: 300,
				fn : 'bounce'
			},
            colors : {
				plate      : '#c6c4c5',
				majorTicks : '#000',
				minorTicks : '#222',
				title      : '#222',
				units      : '#666',
				numbers    : '#222',
				needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
			}
	});    

	gauge1.draw();
	gauge2.draw();
	gauge3.draw();
	gauge4.draw();
	gaugeSav1.draw();
    gaugeSav2.draw();
    gaugeSav3.draw();
    gaugeSav4.draw();
	gaugeWin1.draw();
    gaugeWin2.draw();
    gaugeWin3.draw();
    gaugeWin4.draw();    
    gauges_reset();
    //Establecemos valores referencia por defecto
    referenceGauge1=1500;
    referenceGauge2=15;
    referenceGauge3=15;
    referenceGauge4=2000;
    $("#ref1").text(referenceGauge1);
    $("#ref2").text(referenceGauge2);
    $("#ref3").text(referenceGauge3);
    $("#ref4").text(referenceGauge4);    
    
    
}

function gauges_auto_on(){
    $("#modalConfiguration").modal("hide");
	console.log("Arranco gauges");
    $("#showOn").hide();
    $("#showOff").hide(); 

    
	//gauge2.onready = function() {	
		gauge_auto1 = setInterval( function() {
            var val1=Math.random() * 3000;
			gauge1.setValue(val1);
            gaugeSav1.setValue( referenceGauge1-val1);
            
            var paramEnergy1=val1/1000;
            var valEnergy1=paramEnergy1*timeDayWork;
            var valEnergy2=val1/1000*timeDayWork*365;
            var valEnergy3=referenceGauge1/1000*timeFilter;
            var valEnergy4=referenceGauge1/1000*timeFilter*365;   
            var valEnergy5=(1-(valEnergy2/valEnergy4))*100;
                            
            $("#paramEnergy1").text(Math.round(paramEnergy1*1000)/1000);
            $("#numEnergy1").text(Math.round(valEnergy1*1000)/1000);
            $("#numEnergy2").text(Math.round(valEnergy2*100)/100);
            $("#numEnergy3").text(Math.round(valEnergy3*1000)/1000);
            $("#numEnergy4").text(Math.round(valEnergy4*100)/100);     
            $("#numEnergy5").text(Math.round(valEnergy5*100)/100);

/*            
            
            var paramEnergy1=Math.round(val1/1000*1000)/1000;
            var paramEnergy3=Math.round(referenceGauge1/1000*1000)/1000;
            var valEnergy1=Math.round(paramEnergy1*timeDayWork*1000)/1000;
            var valEnergy2=Math.round(val1/1000*timeDayWork*365*100)/100;
            var valEnergy3=Math.round((referenceGauge1)/1000*timeFilter*1000)/1000;
            var valEnergy4=Math.round((referenceGauge1)/1000*timeFilter*365*100)/100;   
            var valEnergy5=Math.round(1-(valEnergy2/valEnergy4)*100)/100;   
            $("#paramEnergy1").text(paramEnergy1);
            $("#paramEnergy3").text(paramEnergy3);
            $("#numEnergy1").text(valEnergy1);
            $("#numEnergy2").text(valEnergy2);
            $("#numEnergy3").text(valEnergy3);
            $("#numEnergy4").text(valEnergy4);            
            $("#numEnergy5").text(valEnergy5);     
  */          
		}, 500);
	//};

	gauge_auto2 = setInterval( function() {
            var val2=Math.random() * 35;
			gauge2.setValue(val2);
            gaugeSav2.setValue( referenceGauge2-val2);
	}, 500);

	gauge_auto3 = setInterval( function() {
            var val3=Math.random() * 35;
			gauge3.setValue( val3);
            gaugeSav3.setValue( referenceGauge3-val3);
	}, 500);
	
	gauge_auto4 =  setInterval( function() {
            var val4=Math.random() * 3300;
			gauge4.setValue(val4);
            gaugeSav4.setValue( referenceGauge4-val4);
	}, 500);

    
}

function gauges_auto_off(){
    $("#modalConfiguration").modal("hide");
    $("#showOn").hide();
    $("#showOff").hide();     
	console.log("detengo gauges");
	clearInterval(gauge_auto1);
	clearInterval(gauge_auto2);
	clearInterval(gauge_auto3);
	clearInterval(gauge_auto4);
	/*clearInterval(gauge_auto5);*/
}

function gauges_reset(){
    $("#modalConfiguration").modal("hide");
	console.log("reset gauges");
    gauges_auto_off();
	gauge1.clear();	//Con esto ponemos a cero el contador
    gauge2.clear();
    gauge3.clear();
    gauge4.clear();
    gaugeSav1.setValue(0);
    gaugeSav2.setValue(0);
    gaugeSav3.setValue(0);
    gaugeSav4.setValue(0);
	gaugeWin1.clear();	//Con esto ponemos a cero el contador
    gaugeWin2.clear();
    gaugeWin3.clear();
    gaugeWin4.clear();
}

function getLog() {
    $.ajax({
        url: 'logfile.txt',
        dataType: 'text',
        success: function(text) {
            $("#containerDiv").text(text);
            setTimeout(getLog, 30000); // refresh every 30 seconds
        }
    })
}






