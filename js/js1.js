
function calcular() {
	let formulario = document.getElementById("formulario");

	let sexo = formulario.sexo.value;
	let altura = formulario.altura.value;
	let peso = formulario.peso.value;

	let imc = peso/(altura*altura);

	if (sexo === 'masculino') {
		formulario.imc.value = imc.toFixed(2);
		let rImc = formulario.imc.value;

		if (rImc < 20.7) {
			alert('Abaixo do peso');
		} else if (rImc >= 20.7 || rImc < 26.4){
			alert('Peso normal');
		} else if (rImc >= 26.4 || rImc < 27.8) {
			alert('Um pouco acima do peso ideal');
		} else if (rImc >= 27.8 || rImc < 32.3) {
			alert('Acima do peso ideal');
		} else if (rImc >= 32.3) {
			alert('Obeso');
		}

	} else if (sexo === 'feminino') {
		formulario.imc.value = imc.toFixed(2);
		let rImc = formulario.imc.value;

		if (rImc < 19.1) {
			alert('Abaixo do peso');
		} else if (rImc >= 19.1 || rImc < 25.8){
			alert('Peso normal');
		} else if (rImc >= 25.8 || rImc < 27.3) {
			alert('Um pouco acima do peso ideal');
		} else if (rImc >= 27.3 || rImc < 31.1) {
			alert('Acima do peso ideal');
		} else if (rImc >= 31.1) {
			alert('Obesa');
		}
	}



}
