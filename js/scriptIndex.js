const login = document.querySelector('.btn');
const form  = document.querySelector('form');
const textLogin = document.querySelector('h2')
const imgLogin = document.querySelector('img')
const register = document.querySelector('.registro')
const invisible = document.querySelector('p')
const remove = document.querySelector('h3')

login.addEventListener('click', event => {
    event.preventDefault();
    form.classList.add('form-hide');
    textLogin.classList.add('text-login');
    textLogin.innerText = "ENTRANDO";
    imgLogin.classList.add('img-login');
    register.classList.add('login-register');
    invisible.classList.add('invisible')
    remove.classList.add('registerInv')
})

function databr(data) {
    let newDate = new Date(data)
    let day = 1
    if (newDate.getMonth() < 10 ) {
        newDate.setMonth(newDate.getMonth() + day)
    }
    let daysofweek = `${newDate.getDate()}/${newDate.getMonth()}`
    const listdays = document.createElement('div')
    listdays.innerHTML = daysofweek
    
}
