
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTOS
    ========================================= */

    const categoryButtons =
        document.querySelectorAll(".categorias button");

    const productCards =
        document.querySelectorAll(".product-card");

    const orderButtons =
        document.querySelectorAll(".order-button");


    /* =========================================
       FILTRO DE PRODUTOS
    ========================================= */

    categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedCategory =
                button.dataset.category;


            /* Atualiza botão ativo */

            categoryButtons.forEach(btn => {
                btn.classList.remove("active-category");
            });

            button.classList.add("active-category");


            /* Filtra produtos */

            productCards.forEach(card => {

                const cardCategory =
                    card.dataset.category;

                const shouldShow =
                    selectedCategory === "todos" ||
                    cardCategory === selectedCategory;


                if (shouldShow) {

                    card.style.display = "block";

                    requestAnimationFrame(() => {
                        card.classList.add("show-card");
                    });

                } else {

                    card.classList.remove("show-card");

                    setTimeout(() => {

                        if (!card.classList.contains("show-card")) {
                            card.style.display = "none";
                        }

                    }, 300);

                }

            });

        });

    });


    /* =========================================
       PEDIDOS PELO WHATSAPP
    ========================================= */

    orderButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".product-card");

            if (!card) return;


            const productName =
                card.querySelector("h3")?.textContent.trim();


            if (!productName) return;


            const phone =
                "5573991996701";


            const message =
                `Olá! Tenho interesse no produto "${productName}". 🌷`;


            const whatsappURL =
                `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        });

    });


    /* =========================================
       ANIMAÇÃO DOS CARDS
    ========================================= */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "show-card"
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );


    productCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.06}s`;


        observer.observe(card);

    });


    /* =========================================
       ACESSIBILIDADE DOS LINKS EXTERNOS
    ========================================= */

    document
        .querySelectorAll('a[target="_blank"]')
        .forEach(link => {

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });

});
