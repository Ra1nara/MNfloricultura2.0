const categoryButtons = document.querySelectorAll('.categorias button')
const productCards = document.querySelectorAll('.product-card')

categoryButtons.forEach(button => {

    button.addEventListener('click', () => {

        const category = button.dataset.category

        categoryButtons.forEach(btn => {
            btn.classList.remove('active-category')
        })

        button.classList.add('active-category')

        productCards.forEach(card => {

            const cardCategory = card.dataset.category

            if(category === 'todos'){
                card.style.display = 'block'
                return
            }

            if(category === 'todos' || cardCategory === category){

    card.style.opacity = '0'

    setTimeout(() => {

        card.style.display = 'block'

        setTimeout(() => {
            card.style.opacity = '1'
        }, 50)

    }, 200)

} else {

    card.style.opacity = '0'

    setTimeout(() => {
        card.style.display = 'none'
    }, 200)

}

        })

    })

})

const orderButtons = document.querySelectorAll('.price-content button')

orderButtons.forEach(button => {

    button.addEventListener('click', () => {

        const card = button.closest('.product-card')

        const productName = card.querySelector('h3').textContent

        const message = `Olá! Tenho interesse no produto: ${productName} 🌸`

        const phone = '5573991996701'

        const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

        window.open(whatsappURL, '_blank')

    })

})

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

       if(entry.isIntersecting){
    entry.target.classList.add('show-card')
    observer.unobserve(entry.target)
}

    })

}, {
    threshold: 0.12
})

productCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`

    observer.observe(card)

})