// MENU MOBILE

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (btn && nav) {

    btn.addEventListener("click", function () {

        nav.classList.toggle("open");

    });

}


// ANIMAÇÃO DOS CARDS

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.08
    }

);


document
    .querySelectorAll(".reveal")
    .forEach(function (element) {

        observer.observe(element);

    });


// FORMULÁRIO

document
    .querySelectorAll("form")
    .forEach(function (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const mensagem =
                form.querySelector(".form-msg");

            if (mensagem) {

                mensagem.textContent =
                    "Mensagem registrada para demonstração do projeto.";

                form.reset();

            }

        });

    });