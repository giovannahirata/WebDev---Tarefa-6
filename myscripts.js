let branco = document.querySelector("#branco");

let p = document.querySelector("#p");

let l1 = document.querySelector("#lista1");

let a = document.querySelector(".a");

let a2 = document.querySelector(".a2");

let a3 = document.querySelector(".a3");

let a4 = document.querySelector(".a4");

let p1 = document.querySelector("#paragrafo1");

let p2 = document.querySelector("#paragrafo2");

let lista2 = document.querySelector("#lista2");

let lista3 = document.querySelector("#lista3");

let ime = document.querySelector("#ime");

let botao = document.querySelector("#botao");

let u = document.querySelector("#usuario");

let n = document.querySelector("#nome_span");

let b = document.querySelector("#bio_span");



function mode(){
    var element = document.body; element.classList.toggle("white");
    p.classList.toggle("white");
    l1.classList.toggle("white");
    a.classList.toggle("link");
    a2.classList.toggle("link");
    a3.classList.toggle("link");
    a4.classList.toggle("link");
    p1.classList.toggle("white");
    p2.classList.toggle("white");
    lista2.classList.toggle("white");
    lista3.classList.toggle("white");
    u.classList.toggle("white");
    n.classList.toggle("white");
    b.classList.toggle("white");
    ime.classList.toggle("white");
    botao.classList.toggle("botao");
    branco.classList.toggle("#white");
}


function busca() {
    const username = document.querySelector("#user_input").value;
    const url = 'https://api.github.com/users/'+ username;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const img = document.querySelector("#img");
        const nome = document.querySelector("#nome_span");
        const bio = document.querySelector("#bio_span");

        img.src = data.avatar_url;
        nome.innerText = data.name || "Não fornecido";
        bio.innerText = data.bio || "Não fornecida";
      })
      .catch((error) => {
        console.error("Ocorreu um erro na busca:", error);
      });
  }

