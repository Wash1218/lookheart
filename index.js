const nombreUsuarioSpan = document.getElementById('nombreUsuario');
const nombreGuardado = localStorage.getItem('nombreUsuario');

if (nombreGuardado) {
  nombreUsuarioSpan.textContent = nombreGuardado;
} else {
  // Si no hay un nombre guardado, redirigir al registro
  window.location.href = 'registro.html';
}
