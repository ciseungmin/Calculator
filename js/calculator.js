	function solve(){
		var inputNum01 = document.getElementById('input01').value;
		var inputNum02 = document.getElementById('input02').value;
		console.log('inputNum01 : ' + inputNum01);
		console.log('inputNum02 : ' + inputNum02);
		
		var opt = document.getElementById('option').value;


		var plus = Number(inputNum01) + Number(inputNum02);
		var minus = Number(inputNum01) - Number(inputNum02);
		var multiplication = Number(inputNum01) * Number(inputNum02);
		var division = Number(inputNum01) / Number(inputNum02);

		if (opt == 1) {
			document.getElementById('output').innerHTML = plus;
		} else if (opt == 2) {
			document.getElementById('output').innerHTML = minus;
		} else if (opt == 3) {
			document.getElementById('output').innerHTML = multiplication;
		} else if (opt == 4) {
			document.getElementById('output').innerHTML = division;
		}
	}