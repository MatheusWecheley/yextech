const login = document.querySelector(".btn");
const form = document.querySelector("form");
const text = document.querySelector("h2");
const loading = document.querySelector('img')
const register = document.querySelector('p')
        
    login.addEventListener("click", event => {
        event.preventDefault();
            form.classList.add("form-hide");
            register.innerText = ("")
            loading.classList.add('loading');
            text.innerText = 'Carregando!'  
            textLoading.classList.add('text-loading');

    })
