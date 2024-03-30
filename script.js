// funcion para agregar el texto que apretemos de la calculadora
function agregar(valor) {
    document.getElementById('display').value += valor 
}

// funcion para borrar el contenido de la pantalla
function borrar() {
    document.getElementById('display').value = ''
}

// funcion para hacer los calculos de la pantalla
function calcular() {
    const valorPantalla = document.getElementById('display').value
    const resultado = eval(valorPantalla)
    document.getElementById('display').value = resultado
}