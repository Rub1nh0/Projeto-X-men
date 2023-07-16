
// Passo 1  - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem')

// Passo 2 - adicionar a classe selecionado no personagem que o usuário passar o curso do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter' , ( ) =>  {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: "smooth"})
        }

        // Passo 3 - verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele 
        const personagemSelecionado = document.querySelector('.selecionado');

        personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado');



        // Passo 4 - pegar o elemento do personagem grande para adicionar as informações nele
        const imgPersonagemGrande = document.querySelector('.personagem-grande');
        console.log(imgPersonagemGrande);

        // Passo 5 - alterar a imagem do personagem 
        const idPersonagem = personagem.attributes.id.value;
        imgPersonagemGrande.src = `./src/images/card-${idPersonagem}.png`;

        // Passo 6  - alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // Passo 7  - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');


    })
})

