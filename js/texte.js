const listDays = document.getElementById('listdays')
let data = new Date()
let semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let day1 = `${semana[data.getDay()]}\n\n ${data.getDate()}/0${data.getMonth() +1}`
let day2 = `${semana[data.getDay()+1]}\n\n ${data.getDate()+1}/0${data.getMonth() +1}`
let day3 = `${semana[data.getDay()+2]}\n\n ${data.getDate()+2}/0${data.getMonth() +1}`
let day4 = `${semana[data.getDay()+3]}\n\n ${data.getDate()+3}/0${data.getMonth() +1}`
let day5 = `${semana[data.getDay()-3]}\n\n ${data.getDate()+4}/0${data.getMonth() +1}`
const days = [day1, day2, day3, day4, day5]


function addDays() {

    for(let i = 0; i < days.length;i ++) {
        let list = document.createElement('li')
        list.classList.add('listday')
        list.innerText = days[i]
        listDays.appendChild(list)
    }
}

function teste() {
    console.log('teste')
}

console.log(days[1])

listDays.addEventListener('click', teste)
addDays()










