document.addEventListener('DOMContentLoaded', function() {
    const linkNubank = document.getElementById('linkNubank');
    const memeContainer = document.getElementById('memeContainer');
    const urlNubank = linkNubank.getAttribute('href'); // Guarda o URL do Nubank

    linkNubank.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o redirecionamento imediato

        memeContainer.style.display = 'block'; // Mostra o meme

        // Redireciona para o Nubank após alguns segundos (ex: 3 segundos)
        setTimeout(function() {
            window.location.href = urlNubank;
        }, 3000); // 3000 milissegundos = 3 segundos
    });
});