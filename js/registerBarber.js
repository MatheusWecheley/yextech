let  buttonRegister = document.getElementById('submit')

function addBarber() {
    let nameBarber = document.querySelector(".name").value
    let barber = document.querySelector(".barber").value
    let cellBarber = document.querySelector(".tell").value
    let emailBarber = document.querySelector(".email").value
    let imageBarber = document.querySelector("input[name='image']")
    let allValue = confirm("Nome da Barbearia: " + nameBarber + "\nNome do Barbeiro: " + barber + "\nTelefone: " + cellBarber + "\nEmail: " + emailBarber )

    if(allValue == true) {
        document.getElementsByClassName('choose-barber')[0].appendChild(document.createElement('div'))
        
    } else {
        alert('Usuario nao cadastrado!')
    }
}

buttonRegister.addEventListener("click", addBarber)