var inputs = document.getElementsByClassName("formulario_input");
for (var i=0; i< inputs.length-1; i++){
	inputs[i].addEventListener("keyup",function(){
		if(this.value.length>=1){
			this.nextElementSibling.classList.add("fijar");
		}else{
			this.nextElementSibling.classList.remove("fijar");
		}
	});
}
