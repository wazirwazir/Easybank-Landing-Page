const tab = document.querySelector('.tabBtn')
const ul = document.getElementsByTagName('ul')[0]
const opened = document.querySelector('.open')
const closed = document.querySelector('.close')

function tabFun() {
    opened.classList.toggle('hide')
    closed.classList.toggle('hide')
    ul.classList.toggle('hide')
}

tab.onclick = tabFun
