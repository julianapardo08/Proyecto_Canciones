function cargar() {

	let peticion = new XMLHttpRequest();
	peticion.open('GET', 'http://127.0.0.1:5500/datos.json');

	peticion.onload = function () {
		if (peticion.status == 200) {
			let datos = JSON.parse(peticion.response)
			let canciones = datos.canciones
			canciones.sort(function (a,b){
				return b.reproducciones - a.reproducciones
			});
			for (let i = 0; i < 3; i++) {
				document.getElementById("contenido").innerHTML += `
				<tr>
				<td class="text-primary names">${canciones[i].nombre}</td>
				<td class="audio">
					<audio controls>
						<source src="/canciones/${canciones[i].ruta}" type="audio/mp3" />
					</audio>
				</td>
				</tr>
				`
			}
		}
	};
	peticion.send();
};
cargar()

function canciones() {

	let peticion = new XMLHttpRequest();
	peticion.open('GET', 'http://127.0.0.1:5500/datos.json');

	peticion.onload = function () {
		if (peticion.status == 200) {
			let datos = JSON.parse(peticion.response)
			let canciones = datos.canciones
			for (let i = 0; i < 3; i++) {
				document.getElementById("cards").innerHTML += `
					<div class="card">
						<img class="size" src="/imagenes/icon_${canciones[i].icono}.svg" alt="Card image cap">
						<div class="card-body">
							<h5 class="card-title">${canciones[i].nombre}</h5>
							<div>
								<audio controls class="audio">
									<source src="/canciones/${canciones[i].ruta}" type="audio/mp3" />
								</audio>
							</div>
						</div>
					</div>
				`
			}
			for (let i = 3; i < 6; i++) {
				document.getElementById("cardss").innerHTML += `
					<div class="card">
						<div class="size">
							<img  src="/imagenes/icon_${canciones[i].icono}.svg" alt="Card image cap">
						</div>
						<div class="card-body">
							<h5 class="card-title">${canciones[i].nombre}</h5>
							<p>
								<audio controls class="audio">
									<source src="/canciones/${canciones[i].ruta}" type="audio/mp3" />
								</audio>
							</p>
						</div>
					</div>
				`
			}
			for (let i = 6; i < 10; i++) {
				document.getElementById("cardsss").innerHTML += `
					<div class="card">
						<img class="size" src="/imagenes/icon_${canciones[i].icono}.svg" alt="Card image cap">
						<div class="card-body">
							<h5 class="card-title">${canciones[i].nombre}</h5>
							<p>
								<audio controls class="audio">
									<source src="/canciones/${canciones[i].ruta}" type="audio/mp3" />
								</audio>
							</p>
						</div>
					</div>
				`
			}
		}
	};
	peticion.send();
};
canciones()



function validar(formulario) {

	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(formulario.email.value)) {
		document.getElementById("valor").innerHTML = "Email inválido"
		return false;
	}else{
		document.getElementById("valor").innerHTML = "";
	}


	if (formulario.contrasena.value.trim().length < 8) {
		document.getElementById("valor2").innerHTML = "Contraseña inválida, mínimo 8 caracteres"
		return false;
	}else{
		document.getElementById("valor2").innerHTML = "";
	}


	if (formulario.contrasena.value != formulario.confirmacion.value) {
		document.getElementById("valor3").innerHTML = "Confirmación no coincide con la contraseña";
		return false;
	}else{
		document.getElementById("valor3").innerHTML = "";
	}


	if (formulario.genero.value == "") {
		document.getElementById("valor4").innerHTML = "Debe seleccionar un género";
		return false;
	}else{
		document.getElementById("valor4").innerHTML = "";
	}


	if (formulario.edad.value == "") {
		document.getElementById("valor5").innerHTML = "Debe seleccionar un rango de edad";
		return false;
	}else{
		document.getElementById("valor5").innerHTML = "";
	}


	if (!formulario.terminos.checked) {
		document.getElementById("valor6").innerHTML = "Debes aceptar los términos";
		return false;
	}else{
		document.getElementById("valor6").innerHTML = "";
	}

	alert("Registro exitoso")
	return false;
}
function menuHamburguesa() {
	document.getElementById("menu-hamburguesa").innerHTML += `
				<div class="col-7 text-center">
					<ul class="nav justify-content-center mt-2">
						<li class="nav-item">
							<a class="nav-link nav-items" href="index.html">Inicio</a>
						</li>
						<li class="nav-item">
							<a class="nav-link nav-items" href="canciones.html">Canciones</a>
						</li>
					</ul>
				</div>
				<div class="col-3 text-center">
					<button class="btn btn-primary mt-2"  type="button" data-toggle="modal" data-target="#ventana">Contacto</button>
						<div class="modal" tabindex="-1" role="dialog" id="ventana">
							<div class="modal-dialog" role="document">
								<div class="modal-content">

								<div class="modal-header">
									<h5 class="modal-title">Contacto</h5>
									<button type="button" class="close" data-dismiss="modal">
									<span aria-hidden="true">&times;</span>
									</button>
								</div>

								<div class="modal-body">
									<p>info@contactame.com</p>
									<p class="text-primary">+57 315555555</p>
								</div>

								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
								</div>

							</div>
						</div>
					</div>

				</div>
		`
};
