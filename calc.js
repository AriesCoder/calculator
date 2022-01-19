const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	console.log('num1', num1);
	console.log('num2', num2);

	if (mathSymbol === "√"){
		console.log("Square root of num1: ", Math.sqrt(num1))
		console.log("Square root of num2: ", Math.sqrt(num2))
	}
	else if (mathSymbol === "-"){
		console.log("The result of subtraction: ", num1-num2)
	}
	else if (mathSymbol === "/"){
		console.log("The result of division: ", num1/num2)
	}
	else if (mathSymbol === "*"){
		console.log("The result of multiplication: ", num1*num2)
	}
	else{
		console.log("Please input (√ - / *) only")
	}


	// This line closes the connection to the command line interface.
	reader.close()

});
