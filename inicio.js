//Determina que o código seja executado apenas quando a página for carregada
document.addEventListener("DOMContentLoaded", () => {

    //Define todas as ocorrências da classe contador como uma constante
    const contadores = document.querySelectorAll(".contador");

    //Para cada número do contador...
    contadores.forEach(contador => {
        //...inicie como 0
        contador.innerText = "0";

        //Cria uma função atualizarContador através da seta (=>)
        const atualizarContador = () => {
            //Importa o atributo "data-alvo" (número final da contagem) e o converte em número
            const alvo = +contador.getAttribute("data-alvo");
            //Transforma o valor atual do contador (innerText) em número e o define na constante contagem
            const contagem = +contador.innerText;
            //Divide o valor atual do alvo por 1000
            const incremento = alvo / 1000

            //Enquanto a contagem for menor que o alvo...
            if (contagem < alvo) {
                //Arredonda o valor do contador para um número inteiro
                contador.innerText = Math.ceil(contagem + incremento);
                //Define um atraso entre a troca entre um número e outro, gerando o efeito contador
                setTimeout(atualizarContador, 10);
            }
            else {
                //Quando o número final for alcançado, define o valor do html pela constante alvo
                contador.innerText = alvo
            }
        };
        //Chama a função para iniciar o efeito contador
        atualizarContador();
    })
})

// Função do modo escuro
function darkMode() {
    //Ativa no HTML as classes "dark-mode" do CSS
    document.body.classList.toggle("dark-mode")
}

// ---------- MENU HAMBURGER ----------
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

//Aguarda o evento de um clique na classe "hamburger-menu"
hamburgerMenu.addEventListener('click', () => {
    //Habilita a classe "menu.active" no responsivo, abrindo o menu hamburger
    menu.classList.toggle('active');
});











