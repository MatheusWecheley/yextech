let gettoday = document.querySelector('span')
let today = moment().format("DD/MM/YYYY")

gettoday.innerText = `HOJE: ${today}`