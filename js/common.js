function plus(num1,num2){
	var resultNumber = num1 + num2;
	return resultNumber;	
}

function minus(num1,num2){
	return num1 - num2;	
}

function multiplication(num1,num2){
	return num1 * num2;	
}

function division(num1,num2){
	return num1 / num2;	
}

function getVelueOfTag(tagIdName){
	return Number(document.getElementById(tagIdName).value);
}

function getOptionValue(selectTagIdName){
	var target = document.getElementById(selectTagIdName);
	return Number(target.options[target.selectedIndex].value);
}

function printResult(outputTagIdName,resultNum){
	document.getElementById(outputTagIdName).innerHTML = resultNum;	
}