let caixa1 = document.getElementById("caixa1")
let caixa2 = document.getElementById("caixa2")
let btn = document.getElementById("btn_copiar")
let todosCursos = [...document.getElementsByClassName("curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        let cursos = evt.target
       cursos.classList.toggle("selecionado")
    })
})

btn.addEventListener("click",()=>{
    let cursosSelecionados = [...document.getElementsByClassName("selecionado")]
    let cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    console.log(cursosNaoSelecionados)
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})