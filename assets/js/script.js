
function abrir(){
    alert('SEJA BEM-VINDO AO MEU PORTIFÓLIO! \n' + 
           'ATENÇÃO SITE EM CONSTRUÇÃO!')
}


const menu = document.getElementById("menu-list")
const btnToggle = document.getElementById("menu-toggle")
// const pagina = document.getElementById("section-sobre")

// HOME
function exibirMenuHome(){
    btnToggle.style.display = 'none'
    menu.style.display = 'block'

}

// function exibirMenus(){

//     // let home;
//     let sobre;
//     let resume;
//     let portifolio;
//     let contatos;

//     menu.style.display = 'block'

//     sobre = document.getElementById("section-sobre")
//     sobre.style.display = 'none';

//     resume = document.getElementById("section-resume")
//     resume.style.display = 'none';

//     portifolio = document.getElementById("section-portifolio")
//     portifolio.style.display = 'none';

//     contatos = document.getElementById("section-contatos")
//     contatos.style.display = 'none';

// }

function hideSobre(){
    menu.style.display = 'block'

    let sobre;

    sobre = document.getElementById("section-sobre")
    sobre.style.display = 'none';

}


function hideResume(){
    menu.style.display = 'block'

    let resume;

    resume = document.getElementById("section-resume")
    resume.style.display = 'none';

}
function hidePortifolio(){
    menu.style.display = 'block'

    let portifolio;

    portifolio = document.getElementById("section-portifolio")
    portifolio.style.display = 'none';

}
function hideContatos(){
    menu.style.display = 'block'

    let contatos;

    contatos = document.getElementById("section-contatos")
    contatos.style.display = 'none';
}

function enviar(){
    var nome = document.getElementById("nome")
    
    if(nome.value != ""){
        alert("Obrigado Sr(a)" + nome.value + " " + "Sua mensagem foi encaminhada com sucesso!")
    }
}

