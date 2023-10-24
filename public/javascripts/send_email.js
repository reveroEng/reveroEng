function checkRequired (inputs) {

    let emptyInputs = Array.from(inputs).filter(input => input.value == "" && input.required)


    console.log(emptyInputs)

    if(emptyInputs.length > 0) {
      
        emptyInputs.map(el => {

            el.style.border = "3px solid #bb1212;"

            let p = document.createElement('p')
            p.setAttribute('class', 'alert-inputs')
            p.innerHTML = 'Entrada obrigatória!'

            el.after(p)
        })

        return false

    }

    return true
}

const checkEmailPattern = (email) => {

    if(!String(email.value)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {

        email.style.border = "5px solid #bb1212;"

        let p = document.createElement('p')
        p.setAttribute('class', 'alert-inputs')
        p.innerHTML = 'Email inválido!'

        email.after(p)

        return false
    }

    return true
  };
  

function replaceCharacters(value) {

    return value.split('\n').join('<br>')

}

function sendEmail(element) {

    element.disabled = true
    element.innerHTML = '<img src="/static/icons/loading.gif" width="20%"></img>'

    const sendEmailDiv = document.getElementById('email-div'), 
            inputs = sendEmailDiv.querySelectorAll('input, textarea');

    const emailInput = sendEmailDiv.querySelector('#email')

    if (!checkRequired(inputs)) return;
    if (!checkEmailPattern(emailInput)) return;

    let form = new FormData()

    inputs.forEach(el => {
        form.append(el.id, replaceCharacters(el.value))
    })

    fetch(`/send-email`, {
        method: 'POST', 
        body: form
    }).then(response => {

        if(response.ok) return response.json();
        alert('Erro ao encaminhar o email. Tente novamente mais tarde.')
        window.location.reload()


    }).then(data => {

        element.innerHTML = "Email encaminhado!"
        element.disabled = true

    })

}