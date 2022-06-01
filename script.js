const mainElement = document.getElementsByTag('body')

const headline = document.createElement('h1')
headline.innerText = "Esse é um título"
mainElement.prepend(headline)

const description = document.createElement('p')
description.innerText = "Esse é um texto"