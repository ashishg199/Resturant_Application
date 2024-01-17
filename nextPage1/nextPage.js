const overview = document.getElementById('overview')
const contact = document.getElementById('contact')







document.querySelector('#overview').onclick = () => {
    overview.classList.toggle('active')

}

document.querySelector('#contact').onclick = () => {
    contact.classList.toggle('active')
}
