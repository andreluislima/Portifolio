
function abrir(){
    alert('SEJA BEM-VINDO AO MEU PORTIFÓLIO! \n' + 
           'ATENÇÃO SITE EM CONSTRUÇÃO!')
}


const menu = document.getElementById("menu-list")
const btnToggle = document.getElementById("menu-toggle")
const pagina = document.getElementById("section-sobre")

function exibirMenu(){
    btnToggle.style.display = 'none'
    menu.style.display = 'block'
}

function exibirMenus(){
    pagina.style.display = 'none'
    menu.style.display = 'block'

}