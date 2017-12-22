function plus(num1, num2){
		return Number(num1) + Number(num2);	
	}

	function minus(num1, num2){
		return Number(num1) - Number(num2);	
	}

	function multiplication(num1, num2){
		return Number(num1) * Number(num2);	
	}

	function division(num1, num2){
		return Number(num1) / Number(num2);	
	}

	function getVelueOfTag(tagIdNum){
		return document.getElementById(tagIdNum).value;
	}

	function getOptionValue(selectTagIdName){
		var target = document.getElementById(selectTagIdName);
		return Number(target.options[target.selectedIndex].value);
	}

	function printResult(outputTagIdName, resultNum){
		document.getElementById(outputTagIdName).innerHTML = resultNum;	
	}