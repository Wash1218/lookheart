async function obtenerRespuestaIA(textoUsuario) {
    const apiKey = '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'; // Asegúrate de que esta clave sea correcta

    try {
        if (!textoUsuario) {
            document.getElementById('respuesta').innerText = "Por favor, ingresa un texto.";
            return;
        }

        // Hacemos la solicitud a la API de OpenAI
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: textoUsuario }]
            })
        });

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error al hacer la solicitud: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Respuesta de OpenAI:", data); 

        if (data.choices && data.choices.length > 0) {
            const aiResponse = data.choices[0].message.content;
            console.log("Respuesta de la IA:", aiResponse);
            document.getElementById('respuesta').innerText = aiResponse;
        } else {
            document.getElementById('respuesta').innerText = "No se pudo obtener una respuesta válida.";
        }
    } catch (error) {
        console.error('Error:', error); 
        document.getElementById('respuesta').innerText = 'Ocurrió un error. Por favor, intenta de nuevo.';
    }
}

async function enviarTexto() {
    const textoUsuario = document.getElementById('inputTexto').value;
    await obtenerRespuestaIA(textoUsuario);
}
