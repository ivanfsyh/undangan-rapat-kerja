function downloadLocalPDF(data, fileName) {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Fungsi untuk menangani klik tombol
function handleDownload() {
    fetch('dist/file/rundown-acara.pdf')
        .then((response) => response.blob())
        .then((blobData) => {
            downloadLocalPDF(blobData, 'file.pdf');
        })
        .catch((error) => {
            console.error('Gagal mengunduh file PDF:', error);
        });
}