function SymetricNumbers(num){
	var n = Number(num[0]);
	var symetricNumbers = [];
	for (var i = 1; i <= n; i++){
		var reversedN = String(i).split("").reverse().join("");		
		if (reversedN == i){
			symetricNumbers.push(i);
		}		
	}
	console.log(symetricNumbers.join(" "));
}

SymetricNumbers(['100']);