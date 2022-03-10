let data = new Date()
let listdays = document.getElementById('listdays')


class daysWeek {
    constructor(day, month ) {
        this.day = day
        this.month = month
    }

}

function databr(data) {
    let newDate = new Date(data)
    let day = 1
    if (newDate.getMonth() < 10 ) {
        newDate.setMonth(newDate.getMonth() + day)
    }
    let daysofweek = `${newDate.getDate()}/${newDate.getMonth()}`
    return daysofweek    
}

function days() {
    let chosenDay = new Date()
    do {
        chosenDay.setDate(chosenDay.getDate() + 1)
        let dates = document.createElement('li')
        dates.appendChild(chosenDay)
        document.body.insertBefore(dates, listdays)
    } while(chosenDay < 5)
    
}

let a = days

console.log(a)


=============================================

const listDays = document.getElementById('listdays')
const days = []
let data = new Date()


const today = {
    day1(data) {
        let day = data.getDay() -1
        let month = data.getMonth() + 1
        return `Dia ${day}/0${month}`
    },

    day2(data) {
        let day = data.getDay() -1
        let month = data.getMonth() + 1
        let todays = `Dia ${day+1}/0${month}`
        return todays
    },

    day3(data) {
        CC
    },

    day4(data) {
        let day = data.getDay() -1
        let month = data.getMonth() + 1
        let todays = `Dia ${day+3}/0${month}`
        return todays 
    },

    day5(data) {
        let day = data.getDay() -1
        let month = data.getMonth(  ) + 1
        let todays = `Dia ${day+4}/0${month}`
        return todays
    }
}

days.push(today.day1(data))
days.push(today.day2(data))
days.push(today.day3(data))
days.push(today.day4(data))
days.push(today.day5(data))


function addDays() {

    for(let i = 0; i < days.length();i ++) {
        days[i] = document.createElement('li')
        let dats = document.createTextNode(days[i])
        days[i].appendChild(dats)
        listDays.appendChild(days[i])
        console.log([i])
    }
}

addDays()

console.log(days)
