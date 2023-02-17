function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    //busca a imagem
    const img = document.querySelector("#profile img")

//altera a imagem de modo light para dark
    if(html.classList.contains("light")){

        img.setAttribute("src", "./assets/avatar-light.png")
    }else{
        img.setAttribute("src", "./assets/avatar.png")
    }
}