function carregar() {
    var msg = document.getElementById('msg');
    var imagem = document.getElementById('imagem-dia-noite');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        imagem.src = 'manha.png';
        document.body.style.background = '#E6BD4F'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'pordosol.png';
        document.body.style.background = '#F25C05'
    } else {
        imagem.src = 'noite.png'
        document.body.style.background = '#647677'
    }
}
