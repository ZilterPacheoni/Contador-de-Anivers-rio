function atualizarContador() {
    const dataAniversario = new Date(new Date().getFullYear(), 10, 17, 19, 0, 0);
    const agora = new Date();
    if (agora > dataAniversario) {
        dataAniversario.setFullYear(agora.getFullYear() + 1);
    }
    const diferenca = dataAniversario - agora;
    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();

document.getElementById("confirmarPresenca").addEventListener("click", function() {
    this.textContent = "Presença Confirmada!";
    this.style.backgroundColor = "#28a745";
    this.style.color = "#ffffff";
});