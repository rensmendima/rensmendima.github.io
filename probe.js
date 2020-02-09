var input = document.getElementById('input');
var result = document.getElementById('result');
var side_a = document.getElementById('side_a');
var side_b = document.getElementById('side_b');
var inputTypeValue,resultTypeValue;

/*
input.addEventListener("keyup", myResult);

function myResult(){
	result.value = input.value;
}
*/

//now add listener
input.addEventListener("keyup",myResult);
side_a.addEventListener("change",myResult);
side_b.addEventListener("change",myResult); 

	  
//taking initial value
inputTypeValue = side_a.value;
resultTypeValue = side_b.value;

function myResult(){	

inputTypeValue = side_a.value;
resultTypeValue = side_b.value;

//now compare the input and resultType value and add formula 

console.log(inputTypeValue)
console.log(resultTypeValue)

if(inputTypeValue.toLowerCase() === resultTypeValue.toLowerCase()){
//meter to meter
result.value = input.value;

//KATEGORIE LÄNGE//KATEGORIE LÄNGE//KATEGORIE LÄNGE//KATEGORIE LÄNGE//KATEGORIE LÄNGE//KATEGORIE LÄNGE//KATEGORIE LÄNGE

}else if(inputTypeValue.toLowerCase() === "Zentimeter".toLowerCase() && resultTypeValue.toLowerCase() === "Millimeter".toLowerCase()){
//zentimeter to millimeter
result.value = Number(input.value)*10;
}else if(inputTypeValue.toLowerCase() === "Millimeter".toLowerCase() && resultTypeValue.toLowerCase() === "Zentimeter".toLowerCase()){
//millimeter to zentimeter
result.value = Number(input.value)/10;
}else if(inputTypeValue.toLowerCase() === "Meter".toLowerCase() && resultTypeValue.toLowerCase() === "Millimeter".toLowerCase()){
//meter to millimeter
result.value = Number(input.value)*1000;
}else if(inputTypeValue.toLowerCase() === "Meter".toLowerCase() && resultTypeValue.toLowerCase() === "Zentimeter".toLowerCase()){
//meter to zentimeter
result.value = Number(input.value)*100;
}else if(inputTypeValue.toLowerCase() === "Millimeter".toLowerCase() && resultTypeValue.toLowerCase() === "Meter".toLowerCase()){
//millimeter to meter 
result.value = Number(input.value)/1000;
}else if(inputTypeValue.toLowerCase() === "Zentimeter".toLowerCase() && resultTypeValue.toLowerCase() === "Meter".toLowerCase()){
//zentimeter to meter
result.value = Number(input.value)/100;
}else if(inputTypeValue.toLowerCase() === "Kilometer".toLowerCase() && resultTypeValue.toLowerCase() === "Millimeter".toLowerCase()){
//kilometer to millimeter
result.value = Number(input.value)*100000;
}else if(inputTypeValue.toLowerCase() === "Millimeter".toLowerCase() && resultTypeValue.toLowerCase() === "Kilometer".toLowerCase()){
//millimeter to killometer
result.value = Number(input.value)/100000;
}else if(inputTypeValue.toLowerCase() === "Kilometer".toLowerCase() && resultTypeValue.toLowerCase() === "Zentimeter".toLowerCase()){
//kilometer to zentimeter
result.value = Number(input.value)*10000;
}else if(inputTypeValue.toLowerCase() === "Zentimeter".toLowerCase() && resultTypeValue.toLowerCase() === "Kilometer".toLowerCase()){
//zentimeter to kilometer
result.value = Number(input.value)/10000;
}else if(inputTypeValue.toLowerCase() === "Kilometer".toLowerCase() && resultTypeValue.toLowerCase() === "Meter".toLowerCase()){
//kilometer to meter
result.value = Number(input.value)*1000;
}else if(inputTypeValue.toLowerCase() === "Meter".toLowerCase() && resultTypeValue.toLowerCase() === "Kilometer".toLowerCase()){
//meter to kilometer
result.value = Number(input.value)/1000;
}else if(inputTypeValue.toLowerCase() === "Fuß".toLowerCase() && resultTypeValue.toLowerCase() === "Millimeter".toLowerCase()){
//fuß to millimeter
result.value = Number(input.value)*305;
}else if(inputTypeValue.toLowerCase() === "Fuß".toLowerCase() && resultTypeValue.toLowerCase() === "Zentimeter".toLowerCase()){
//fuß to zentimeter
result.value = Number(input.value)*30.48;
}else if(inputTypeValue.toLowerCase() === "Zentimeter".toLowerCase() && resultTypeValue.toLowerCase() === "Fuß".toLowerCase()){
//zentimeter to fuß
result.value = Number(input.value)/30.48;
}else if(inputTypeValue.toLowerCase() === "Millimeter".toLowerCase() && resultTypeValue.toLowerCase() === "Fuß".toLowerCase()){
//millimeter to fuß
result.value = Number(input.value)/305;
}else if(inputTypeValue.toLowerCase() === "Fuß".toLowerCase() && resultTypeValue.toLowerCase() === "Meter".toLowerCase()){
//fuß to meter
result.value = Number(input.value)/3.281;
}else if(inputTypeValue.toLowerCase() === "Fuß".toLowerCase() && resultTypeValue.toLowerCase() === "Kilometer".toLowerCase()){
//fuß to kilometer
result.value = Number(input.value)/32080.84;
}else if(inputTypeValue.toLowerCase() === "Meter".toLowerCase() && resultTypeValue.toLowerCase() === "Fuß".toLowerCase()){
//meter to fuß
result.value = Number(input.value)*3.281;
}else if(inputTypeValue.toLowerCase() === "Kilometer".toLowerCase() && resultTypeValue.toLowerCase() === "Fuß".toLowerCase()){
//kilometer to fuß
result.value = Number(input.value)*3280.84;

//KATEGORIE ZEIT//KATEGORIE ZEIT//KATEGORIE ZEIT//KATEGORIE ZEIT//KATEGORIE ZEIT//KATEGORIE ZEIT//KATEGORIE ZEIT

}else if(inputTypeValue.toLowerCase() === "Sekunde".toLowerCase() && resultTypeValue.toLowerCase() === "Tag".toLowerCase()){
//sekunde to tag
result.value = Number(input.value)/86400;
}else if(inputTypeValue.toLowerCase() === "Tag".toLowerCase() && resultTypeValue.toLowerCase() === "Sekunde".toLowerCase()){
//tag to sekunde
result.value = Number(input.value)*86400;
}else if(inputTypeValue.toLowerCase() === "Stunde".toLowerCase() && resultTypeValue.toLowerCase() === "Sekunde".toLowerCase()){
//stunde to sekunde
result.value = Number(input.value)*3600;
}else if(inputTypeValue.toLowerCase() === "Stunde".toLowerCase() && resultTypeValue.toLowerCase() === "Tag".toLowerCase()){
//stunde to tag
result.value = Number(input.value)/24;
}else if(inputTypeValue.toLowerCase() === "Sekunde".toLowerCase() && resultTypeValue.toLowerCase() === "Stunde".toLowerCase()){
//sekunde to tag
result.value = Number(input.value)/3600;
}else if(inputTypeValue.toLowerCase() === "Tag".toLowerCase() && resultTypeValue.toLowerCase() === "Stunde".toLowerCase()){
//tag to stunde
result.value = Number(input.value)*24;
}else if(inputTypeValue.toLowerCase() === "Minute".toLowerCase() && resultTypeValue.toLowerCase() === "Sekunde".toLowerCase()){
//minute to sekunde
result.value = Number(input.value)*60;
}else if(inputTypeValue.toLowerCase() === "Minute".toLowerCase() && resultTypeValue.toLowerCase() === "Tag".toLowerCase()){
//minute to tag
result.value = Number(input.value)*1440;
}else if(inputTypeValue.toLowerCase() === "Minute".toLowerCase() && resultTypeValue.toLowerCase() === "Stunde".toLowerCase()){
//minute to tag
result.value = Number(input.value)*60;
}else if(inputTypeValue.toLowerCase() === "Sekunde".toLowerCase() && resultTypeValue.toLowerCase() === "Minute".toLowerCase()){
//sekunde to minute
result.value = Number(input.value)/60;
}else if(inputTypeValue.toLowerCase() === "Tag".toLowerCase() && resultTypeValue.toLowerCase() === "Minute".toLowerCase()){
//tag to minute
result.value = Number(input.value)/1440;
}else if(inputTypeValue.toLowerCase() === "Stunde".toLowerCase() && resultTypeValue.toLowerCase() === "Minute".toLowerCase()){
//stunde to minute
result.value = Number(input.value)/60;
}else if(inputTypeValue.toLowerCase() === "Kalendarjahr".toLowerCase() && resultTypeValue.toLowerCase() === "Stunde".toLowerCase()){
//kalendarjahr to stunde
result.value = Number(input.value)*8760;
}else if(inputTypeValue.toLowerCase() === "Kalendarjahr".toLowerCase() && resultTypeValue.toLowerCase() === "Minute".toLowerCase()){
//kalendarjahr to minute
result.value = Number(input.value)*525600;
}else if(inputTypeValue.toLowerCase() === "Kalendarjahr".toLowerCase() && resultTypeValue.toLowerCase() === "Tag".toLowerCase()){
//kalendarjahr to tag
result.value = Number(input.value)*365;
}else if(inputTypeValue.toLowerCase() === "Kalendarjahr".toLowerCase() && resultTypeValue.toLowerCase() === "Sekunde".toLowerCase()){
//kalendarjahr to sekunde
result.value = Number(input.value)*3.1540000000;
}else if(inputTypeValue.toLowerCase() === "Stunde".toLowerCase() && resultTypeValue.toLowerCase() === "Kalendarjahr".toLowerCase()){
//stunde to kalendarjahr
result.value = Number(input.value)/8760;
}else if(inputTypeValue.toLowerCase() === "Minute".toLowerCase() && resultTypeValue.toLowerCase() === "Kalendarjahr".toLowerCase()){
//minute to kalendarjahr
result.value = Number(input.value)/525600;
}else if(inputTypeValue.toLowerCase() === "Tag".toLowerCase() && resultTypeValue.toLowerCase() === "Kalendarjahr".toLowerCase()){
//tag to kalendarjahr
result.value = Number(input.value)/365;
}else if(inputTypeValue.toLowerCase() === "Sekunde".toLowerCase() && resultTypeValue.toLowerCase() === "Kalendarjahr".toLowerCase()){
//sekunde to kalendarjahr
result.value = Number(input.value)/3.1540000000;

//KATEGORIE MASSE//KATEGORIE MASSE//KATEGORIE MASSE//KATEGORIE MASSE//KATEGORIE MASSE//KATEGORIE MASSE//KATEGORIE MASSE

}else if(inputTypeValue.toLowerCase() === "Mikrogramm".toLowerCase() && resultTypeValue.toLowerCase() === "Milligramm".toLowerCase()){
//mikrogramm to milligramm
result.value = Number(input.value)/1000;
}else if(inputTypeValue.toLowerCase() === "Miligramm".toLowerCase() && resultTypeValue.toLowerCase() === "Mikrogramm".toLowerCase()){
//milligramm to mikrogramm
result.value = Number(input.value)*1000;
}else if(inputTypeValue.toLowerCase() === "Gramm".toLowerCase() && resultTypeValue.toLowerCase() === "Milligramm".toLowerCase()){
//gramm to milligramm
result.value = Number(input.value)*1000;
}else if(inputTypeValue.toLowerCase() === "Gramm".toLowerCase() && resultTypeValue.toLowerCase() === "Mikrogramm".toLowerCase()){
//gramm to mikrogramm
result.value = Number(input.value)*1000000;
}else if(inputTypeValue.toLowerCase() === "Mikrogramm".toLowerCase() && resultTypeValue.toLowerCase() === "Gramm".toLowerCase()){
//mikrogramm to gramm
result.value = Number(input.value)/1000000;
}else if(inputTypeValue.toLowerCase() === "Milligramm".toLowerCase() && resultTypeValue.toLowerCase() === "Gramm".toLowerCase()){
//milligramm to gramm
result.value = Number(input.value)/1000;
}else if(inputTypeValue.toLowerCase() === "Kilogramm".toLowerCase() && resultTypeValue.toLowerCase() === "Gramm".toLowerCase()){
//kilogramm to gramm
result.value = Number(input.value)*1000;
}else if(inputTypeValue.toLowerCase() === "Kilogramm".toLowerCase() && resultTypeValue.toLowerCase() === "Mikrogramm".toLowerCase()){
//killogramm to mikrogramm
result.value = Number(input.value)*1000000000;
}else if(inputTypeValue.toLowerCase() === "Kilogramm".toLowerCase() && resultTypeValue.toLowerCase() === "Milligramm".toLowerCase()){
//kilogramm to milligramm
result.value = Number(input.value)*1000000;
}else if(inputTypeValue.toLowerCase() === "Gramm".toLowerCase() && resultTypeValue.toLowerCase() === "Kilogramm".toLowerCase()){
//
result.value = Number(input.value)/1000;
}else if(inputTypeValue.toLowerCase() === "Mikrogramm".toLowerCase() && resultTypeValue.toLowerCase() === "Kilogramm".toLowerCase()){
//
result.value = Number(input.value)/1000000000;
}else if(inputTypeValue.toLowerCase() === "Miligramm".toLowerCase() && resultTypeValue.toLowerCase() === "Kilogramm".toLowerCase()){
//
result.value = Number(input.value)/1000000;
}else if(inputTypeValue.toLowerCase() === "Tonne".toLowerCase() && resultTypeValue.toLowerCase() === "Mikrogramm".toLowerCase()){
//
result.value = Number(input.value)*1000000000000;
}else if(inputTypeValue.toLowerCase() === "Tonne".toLowerCase() && resultTypeValue.toLowerCase() === "Milligramm".toLowerCase()){
//
result.value = Number(input.value)*1000000000;
}else if(inputTypeValue.toLowerCase() === "Tonne".toLowerCase() && resultTypeValue.toLowerCase() === "Gramm".toLowerCase()){
//
result.value = Number(input.value)*1000000;
}else if(inputTypeValue.toLowerCase() === "Tonne".toLowerCase() && resultTypeValue.toLowerCase() === "Kilogramm".toLowerCase()){
//
result.value = Number(input.value)*1000;
}else if(inputTypeValue.toLowerCase() === "Mikrogramm".toLowerCase() && resultTypeValue.toLowerCase() === "Tonne".toLowerCase()){
//
result.value = Number(input.value)/1000000000000;
}else if(inputTypeValue.toLowerCase() === "Milligramm".toLowerCase() && resultTypeValue.toLowerCase() === "Tonne".toLowerCase()){
//
result.value = Number(input.value)/1000000000;
}else if(inputTypeValue.toLowerCase() === "Gramm".toLowerCase() && resultTypeValue.toLowerCase() === "Tonne".toLowerCase()){
//
result.value = Number(input.value)/1000000;
}else if(inputTypeValue.toLowerCase() === "Kilogramm".toLowerCase() && resultTypeValue.toLowerCase() === "Tonne".toLowerCase()){
//
result.value = Number(input.value)/1000;

//KATEGORIE VOLUMEN//KATEGORIE VOLUMEN//KATEGORIE VOLUMEN//KATEGORIE VOLUMEN//KATEGORIE VOLUMEN//KATEGORIE VOLUMEN

}else if(inputTypeValue.toLowerCase() === "Kubikmeter".toLowerCase() && resultTypeValue.toLowerCase() === "Kubikmillimeter".toLowerCase()){
//
result.value = Number(input.value)*1000000000;
}else if(inputTypeValue.toLowerCase() === "Kubikmillimeter".toLowerCase() && resultTypeValue.toLowerCase() === "Kubikmeter".toLowerCase()){
//
result.value = Number(input.value)/1000000000;
}else if(inputTypeValue.toLowerCase() === "Amerikanischer Cup".toLowerCase() && resultTypeValue.toLowerCase() === "Kubikmeter".toLowerCase()){
//
result.value = Number(input.value)/4226,753;
}else if(inputTypeValue.toLowerCase() === "Amerikanischer Cup".toLowerCase() && resultTypeValue.toLowerCase() === "Kubikmillimeter".toLowerCase()){
//
result.value = Number(input.value)/250000;
//
}else if(inputTypeValue.toLowerCase() === "Kubikmeter".toLowerCase() && resultTypeValue.toLowerCase() === "Amerikanischer Cup".toLowerCase()){
//
result.value = Number(input.value)*4226,753;
}else if(inputTypeValue.toLowerCase() === "Kubikmillimeter".toLowerCase() && resultTypeValue.toLowerCase() === "Amerikanischer Cup".toLowerCase()){
//
result.value = Number(input.value)*250000;

}else if(inputTypeValue.toLowerCase() === "Milligramm".toLowerCase() && resultTypeValue.toLowerCase() === "Tonne".toLowerCase()){
//
result.value = Number(input.value)/1000000000;
}else if(inputTypeValue.toLowerCase() === "Gramm".toLowerCase() && resultTypeValue.toLowerCase() === "Tonne".toLowerCase()){
//
result.value = Number(input.value)/1000000;
}else if(inputTypeValue.toLowerCase() === "Kilogramm".toLowerCase() && resultTypeValue.toLowerCase() === "Tonne".toLowerCase()){
//
result.value = Number(input.value)/1000;
}else if(inputTypeValue.toLowerCase() === "Liter".toLowerCase() && resultTypeValue.toLowerCase() === "Kubikmeter".toLowerCase()){
//
result.value = Number(input.value)/1000;
}else if(inputTypeValue.toLowerCase() === "Liter".toLowerCase() && resultTypeValue.toLowerCase() === "Kubikmillimeter".toLowerCase()){
//
result.value = Number(input.value)*1000000;
}else if(inputTypeValue.toLowerCase() === "Liter".toLowerCase() && resultTypeValue.toLowerCase() === "Amerikanischer Cup".toLowerCase()){
//
result.value = Number(input.value)*4,167;
}else if(inputTypeValue.toLowerCase() === "Amerikanischer Cup".toLowerCase() && resultTypeValue.toLowerCase() === "Liter".toLowerCase()){
//
result.value = Number(input.value)/4,167;
}else if(inputTypeValue.toLowerCase() === "Kubikmeter".toLowerCase() && resultTypeValue.toLowerCase() === "Liter".toLowerCase()){
//
result.value = Number(input.value)*1000;
}else if(inputTypeValue.toLowerCase() === "Kubikmillimeter".toLowerCase() && resultTypeValue.toLowerCase() === "Liter".toLowerCase()){
//
result.value = Number(input.value)/1000000;
}else if(inputTypeValue.toLowerCase() === "Milliliter".toLowerCase() && resultTypeValue.toLowerCase() === "Kubikmeter".toLowerCase()){
//
result.value = Number(input.value)/1000000;
}else if(inputTypeValue.toLowerCase() === "Milliliter".toLowerCase() && resultTypeValue.toLowerCase() === "Kubikmillimeter".toLowerCase()){
//
result.value = Number(input.value)/0.001;
}else if(inputTypeValue.toLowerCase() === "Milliliter".toLowerCase() && resultTypeValue.toLowerCase() === "Amerikanischer Cup".toLowerCase()){
//
result.value = Number(input.value)/240;
}else if(inputTypeValue.toLowerCase() === "Milliliter".toLowerCase() && resultTypeValue.toLowerCase() === "Liter".toLowerCase()){
//
result.value = Number(input.value)/1000;
}else if(inputTypeValue.toLowerCase() === "Kubikmeter".toLowerCase() && resultTypeValue.toLowerCase() === "Milliliter".toLowerCase()){
//
result.value = Number(input.value)/1000000000;
}else if(inputTypeValue.toLowerCase() === "Kubikmillimeter".toLowerCase() && resultTypeValue.toLowerCase() === "Milliliter".toLowerCase()){
//
result.value = Number(input.value)*0.001;
}else if(inputTypeValue.toLowerCase() === "Amerikanischer Cup".toLowerCase() && resultTypeValue.toLowerCase() === "Milliliter".toLowerCase()){
//
result.value = Number(input.value)*240;
}else if(inputTypeValue.toLowerCase() === "Liter".toLowerCase() && resultTypeValue.toLowerCase() === "Milliliter".toLowerCase()){
//
result.value = Number(input.value)*1000;

//KATEGORIE KRAFT//KATEGORIE KRAFT//KATEGORIE KRAFT//KATEGORIE KRAFT//KATEGORIE KRAFT//KATEGORIE KRAFT//KATEGORIE KRAFT

}else if(inputTypeValue.toLowerCase() === "Newton".toLowerCase() && resultTypeValue.toLowerCase() === "Meganewton".toLowerCase()){
//
result.value = Number(input.value)/1000000;
}else if(inputTypeValue.toLowerCase() === "Meganewton".toLowerCase() && resultTypeValue.toLowerCase() === "Newton".toLowerCase()){
//
result.value = Number(input.value)*1000000;
}else if(inputTypeValue.toLowerCase() === "Kilonewton".toLowerCase() && resultTypeValue.toLowerCase() === "Meganewton".toLowerCase()){
//
result.value = Number(input.value)/1000;
}else if(inputTypeValue.toLowerCase() === "Kilonewton".toLowerCase() && resultTypeValue.toLowerCase() === "Newton".toLowerCase()){
//
result.value = Number(input.value)*1000;
}else if(inputTypeValue.toLowerCase() === "Newton".toLowerCase() && resultTypeValue.toLowerCase() === "Kilonewton".toLowerCase()){
//
result.value = Number(input.value)/1000;
}else if(inputTypeValue.toLowerCase() === "Meganewton".toLowerCase() && resultTypeValue.toLowerCase() === "Kilonewton".toLowerCase()){
//
result.value = Number(input.value)*1000;
}else if(inputTypeValue.toLowerCase() === "Sthène".toLowerCase() && resultTypeValue.toLowerCase() === "Meganewton".toLowerCase()){
//
result.value = Number(input.value)*0.001;
}else if(inputTypeValue.toLowerCase() === "Sthène".toLowerCase() && resultTypeValue.toLowerCase() === "Newton".toLowerCase()){
//
result.value = Number(input.value)*1000;
}else if(inputTypeValue.toLowerCase() === "Sthène".toLowerCase() && resultTypeValue.toLowerCase() === "Kilonewton".toLowerCase()){
//
result.value = input.value;
}else if(inputTypeValue.toLowerCase() === "Meganewton".toLowerCase() && resultTypeValue.toLowerCase() === "Sthène".toLowerCase()){
//
result.value = Number(input.value)*0.001;
}else if(inputTypeValue.toLowerCase() === "Newton".toLowerCase() && resultTypeValue.toLowerCase() === "Sthène".toLowerCase()){
//
result.value = Number(input.value)/1000;
}else if(inputTypeValue.toLowerCase() === "Kilonewton".toLowerCase() && resultTypeValue.toLowerCase() === "Sthène".toLowerCase()){
//
result.value = input.value;
}else if(inputTypeValue.toLowerCase() === "Dyn".toLowerCase() && resultTypeValue.toLowerCase() === "Meganewton".toLowerCase()){
//
result.value = Number(input.value)/99999999999.99998;
}else if(inputTypeValue.toLowerCase() === "Dyn".toLowerCase() && resultTypeValue.toLowerCase() === "Newton".toLowerCase()){
//
result.value = Number(input.value)/100000;
}else if(inputTypeValue.toLowerCase() === "Dyn".toLowerCase() && resultTypeValue.toLowerCase() === "Kilonewton".toLowerCase()){
//
result.value = Number(input.value)/100000000;
}else if(inputTypeValue.toLowerCase() === "Dyn".toLowerCase() && resultTypeValue.toLowerCase() === "Sthène".toLowerCase()){
//
result.value = Number(input.value)/100000000;
}else if(inputTypeValue.toLowerCase() === "Meganewton".toLowerCase() && resultTypeValue.toLowerCase() === "Dyn".toLowerCase()){
//
result.value = Number(input.value)*99999999999.99998;
}else if(inputTypeValue.toLowerCase() === "Newton".toLowerCase() && resultTypeValue.toLowerCase() === "Dyn".toLowerCase()){
//
result.value = Number(input.value)*100000;
}else if(inputTypeValue.toLowerCase() === "Kilonewton".toLowerCase() && resultTypeValue.toLowerCase() === "Dyn".toLowerCase()){
//
result.value = Number(input.value)*100000000;
}else if(inputTypeValue.toLowerCase() === "Sthène".toLowerCase() && resultTypeValue.toLowerCase() === "Dyn".toLowerCase()){
//
result.value = Number(input.value)*100000000;
}
}

//ENDE BERECHNUNG//ENDE BERECHNUNG//ENDE BERECHNUNG//ENDE BERECHNUNG//ENDE BERECHNUNG//ENDE BERECHNUNG//ENDE BERECHNUNG
