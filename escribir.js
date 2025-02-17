document.getElementById('enviarTexto').addEventListener('click', () => {
    const texto = document.getElementById('entradaTexto').value;
    const respuestaDiv = document.getElementById('respuesta');
  
    if (texto.trim()) {
      // Mostrar el texto ingresado mientras se espera la respuesta
      respuestaDiv.innerHTML = 'Enviando tu mensaje...';
  
      // Llamada a la API de Cohere
      fetch('https://api.cohere.ai/v1/generate', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer DRcnSSshbhN4EXm0UY2qYPeqbZ4VlfkyI8IKHeIE', // Sustituye por tu clave de API
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: texto,
          model: 'command-xlarge-nightly', // Asegúrate de usar el modelo correcto
          max_tokens: 100,
          temperature: 0.7,
        })
      })
      .then(response => response.json())
      .then(data => {
        // Mostrar la respuesta de la IA
        if (data && data.text) {
          respuestaDiv.innerHTML = '<strong>Respuesta de la IA:</strong> ' + data.text;
        } else {
          respuestaDiv.innerHTML = 'Hubo un error al obtener la respuesta de la IA.';
        }
      })
      .catch(error => {
        console.error('Error al conectar con la API:', error);
        respuestaDiv.innerHTML = 'Hubo un error en la conexión con la API.';
      });
    } else {
      respuestaDiv.innerHTML = 'Por favor, escribe algo antes de enviar.';
    }
  });
  