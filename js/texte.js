const listDays = document.getElementById('listdays')
let data = new Date()
let sday= new Date();
const days = []
const semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

for(let i = 0; i < 7; i++) {
    sday.setDate(data.getDate()+i)
    let day = `${semana[sday.getDay()]}\n\n ${data.getDate()+i}/0${data.getMonth() +1}`
    days.push(day)
    if(i == 7){
        break
    }
}


function addDays() {

    for(let i = 0; i < days.length;i ++) {
        let list = document.createElement('li')
        list.classList.add(`listday${i}`)
        list.innerText = days[i]
        listDays.appendChild(list)
    }
}

addDays()

const eventclick = document.querySelector('.listday0')
const horarios = document.querySelector('.quarta')

eventclick.addEventListener('click', addclass => {
    horarios.classList.add('teste')
})








