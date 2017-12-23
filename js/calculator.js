	function solve(){
		
		var inputNum01 = getVelueOfTag('input01');
		var inputNum02 = getVelueOfTag('input02');	
		var opt = getOptionValue('option');
		

		var result = 9999999999;
		if (opt == 1) {
			result = plus(inputNum01, inputNum02);
			console.log("result in if : " + result);
		} else if (opt == 2) {
			result = minus(inputNum01, inputNum02);
		} else if (opt == 3) {
			result = multiplication(inputNum01, inputNum02);
		} else if (opt == 4) {
			result = division(inputNum01, inputNum02);
		} 
		

		printResult('result',result);
	}