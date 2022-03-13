const login = document.querySelector(".btn");
const form = document.querySelector("form");
const text = document.querySelector("h2");
const loading = document.querySelector('img')
const register = document.querySelector('p')
        
    login.addEventListener("click", event => {
        event.preventDefault();
            form.classList.add("form-hide");
            loading.classList.add('loading');
            text.classList.add('text');
            text.innerText = 'Carregando!'  
            

    })
