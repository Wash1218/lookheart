document.getElementById('enviarTexto').addEventListener('click', () => {
    const texto = document.getElementById('entradaTexto').value;
    const respuestaDiv = document.getElementById('respuesta');
  
    if (texto.trim()) {
      respuestaDiv.innerHTML = 'Enviando tu mensaje...';
  
      fetch('https://api.cohere.ai/v1/generate', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer DRcnSSshbhN4EXm0UY2qYPeqbZ4VlfkyI8IKHeIE', 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: texto,
          model: 'command-xlarge-nightly', 
          max_tokens: 100,
          temperature: 0.7,
        })
      })
      .then(response => response.json())
      .then(data => {
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
  
