/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: NicsMusic
Aluno 1: Nycolas Berocco - RA: 251191
Aluno 2: Nicolas Gomes - RA: 251141
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const btnTopo = document.querySelector("#btnTopo");

if (btnTopo) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            btnTopo.classList.add("mostrar");
        } else {
            btnTopo.classList.remove("mostrar");
        }

    });

    btnTopo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ==========================================
   TEMA CLARO / ESCURO
========================================== */

const btnTema = document.querySelector("#btnTema");

if (btnTema) {

    btnTema.addEventListener("click", () => {

        document.body.classList.toggle("tema-escuro");

        if (document.body.classList.contains("tema-escuro")) {
            btnTema.innerHTML = "☀️ Tema";
        } else {
            btnTema.innerHTML = "🌙 Tema";
        }

    });

}

/* ==========================================
   VALIDAÇÃO DO FORMULÁRIO
========================================== */

const formulario = document.querySelector("#formContato");

if (formulario) {

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        const nome = document.querySelector("#nome").value.trim();
        const email = document.querySelector("#email").value.trim();
        const mensagem = document.querySelector("#mensagem").value.trim();

        if (
            nome === "" ||
            email === "" ||
            mensagem === ""
        ) {

            alert("Por favor, preencha todos os campos obrigatórios.");

            return;
        }

        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    });

}

/* ==========================================
   DESTAQUE NOS CARDS
========================================== */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("card-destaque-js");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("card-destaque-js");

    });

});

/* ==========================================
   ANIMAÇÃO AO CARREGAR
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});