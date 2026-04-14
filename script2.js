function forzarDescarga(url, nombreArchivo) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const urlBlob = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = urlBlob;
            a.download = nombreArchivo; // Aquí obligamos el nombre y la extensión
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(urlBlob);
        })
        .catch(() => alert('Error al intentar descargar el archivo'));
}