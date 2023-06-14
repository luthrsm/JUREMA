/*pagina de login*/
function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "estudante" && senha == "estudante") {
        alert('sucesso')
        location.href = "estudante.html";
    }
    else {
        if (login == "doador" && senha == "doador") {
            alert('sucesso');
            location.href = "doador.html";
        }
        else {
            alert('Usuário ou senha incorretos');
        }
    }

}

/*validar cep*/
const cep = document.querySelector("input[name=cep]");

cep.addEventListener('blur', e => {
    const value = cep.value.replace(/[^0-9]+/, '');
    const url = `https://viacep.com.br/ws/${value}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            if (json.logradouro) {
                document.querySelector('input[name=rua]').value = json.logradouro;
                document.querySelector('input[name=bairro]').value = json.bairro;
                document.querySelector('input[name=cidade]').value = json.localidade;
                document.querySelector('input[name=estado]').value = json.uf;
            }
        })
})

//mascara pra numero de telefone e para cpf

function mascara(i) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}
$("#number").inputmask({
    mask: "(99)99999-9999",
});

//redirecionar pag

function HabiDsabi() {
    if (document.getElementById('declaracao').checked == true) {
        document.getElementById('continuar').disabled = ""
    }
    if (document.getElementById('declaracao').checked == false) {
        document.getElementById('continuar').disabled = "disabled"
    }

}

//validar form
// const form = document.getElementById('form');
// const campos = document.querySelectorAll('.required');
// const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// //validacao do nome
// function nameValidate() {
//     if (campos[1].value < 3) {
//         console.log('nome deve ter pelo menos 3 caracteres')
//     }
//     else {
//         console.log('validado com sucesso')
//     }
// }

