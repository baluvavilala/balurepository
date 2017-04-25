window.onload = function(){
	console.log("inside form");

	function fun1(){
		console.log("inside fn1");
		var inputArray = document.querySelectorAll('input[type="number"]');
		if(inputArray.length != 0){
			for(i=0;i<inputArray.length;i++){
				console.log(inputArray[i])
				inputArray[i].style.borderColor = "red"; 
			}
		}
	}
	
	var formSubmit = document.querySelector('input[type="submit"]');
	formSubmit.addEventListener(onclick,fun1);

}