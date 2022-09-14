
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

function exibirMenus(){

    let home;
    let sobre;
    let resume;
    let portifolio;
    let contatos;

    menu.style.display = 'block'

    sobre = document.getElementById("section-sobre")
    sobre.style.display = 'none'

    resume = document.getElementById("section-resume")
    resume.style.display = 'none'

    portifolio = document.getElementById("section-portifolio")
    portifolio.style.display = 'none'

    contatos = document.getElementById("section-contatos")
    contatos.style.display = 'none'
}
