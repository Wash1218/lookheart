const nombreUsuarioSpan = document.getElementById('nombreUsuario');
const nombreGuardado = localStorage.getItem('nombreUsuario');

if (nombreGuardado) {
  nombreUsuarioSpan.textContent = nombreGuardado;
} else {
  
  window.location.href = 'registro.html';
}
