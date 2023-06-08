const target = document.querySelectorAll("[data-target]")
const content = document.querySelectorAll("[data-content]")

target.forEach(target =>{
    target.addEventListener('click', () => {

        content.forEach(c => {
            c.classList.remove("act")
        })

        const t = document.querySelector(target.dataset.target)
        t.classList.add('act')
    })
})