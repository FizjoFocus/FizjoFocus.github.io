//NAWIGACJA
const burger = document.getElementById('nav-icon2')
const nav = document.querySelector('.navbar_nav')

burger.addEventListener('click', () => {
	burger.classList.toggle('open')
	nav.classList.toggle('show-menu')
})

const closeMenu = () => {
	nav.classList.remove('show-menu')
	burger.classList.remove('open')
}

document.querySelectorAll('#nav-link, #home-img').forEach(el => {
	el.addEventListener('click', closeMenu)
})

//BACK TO TOP
const backToTop = document.querySelector('.back-to-top')
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
	const scrollY = window.scrollY || window.pageYOffset
	const headerHeight = header.offsetHeight

	if (scrollY > headerHeight) {
		backToTop.classList.add('is-visible')
	} else {
		backToTop.classList.remove('is-visible')
	}
})

// DLACZEGO JA?
const whyItems = document.querySelectorAll('.why_container-item')

whyItems.forEach(item => {
	item.addEventListener('click', e => {
		if (!e.target.closest('.why_container-item-btn')) {
			item.querySelector('.why_container-item-btn').click()
		}
	})
})

document.addEventListener('DOMContentLoaded', () => {
	const whyItems = document.querySelectorAll('.why_container-item')
	let offsetMobile = 60
	let offsetDesktop = 96

	const getOffset = () => (window.innerWidth >= 768 ? offsetDesktop : offsetMobile)

	const scrollToWhyContainer = () => {
		const container = document.getElementById('whyContainer')
		if (container) {
			const offset = getOffset()
			const top = container.getBoundingClientRect().top + window.scrollY - offset
			window.scrollTo({
				top: top,
				behavior: 'smooth',
			})
		}
	}

	whyItems.forEach(item => {
		const btn = item.querySelector('.why_container-item-btn')
		const text = item.nextElementSibling

		btn.addEventListener('click', () => {
			const isOpen = text.classList.contains('open')
			const currentlyOpen = document.querySelector('.why_container-item-text.open')

			scrollToWhyContainer()

			if (isOpen) {
				text.classList.remove('open')
				text.style.height = '0'
				btn.classList.remove('rotate-arrow')
			} else {
				if (currentlyOpen) {
					const currentlyItem = currentlyOpen.previousElementSibling
					const currentlyBtn = currentlyItem.querySelector('.why_container-item-btn')
					currentlyOpen.classList.remove('open')
					currentlyOpen.style.height = '0'
					if (currentlyBtn) currentlyBtn.classList.remove('rotate-arrow')
				}
				text.classList.add('open')
				text.style.height = text.scrollHeight + 'px'
				btn.classList.add('rotate-arrow')
			}
		})

		window.addEventListener('resize', () => {
			if (text.classList.contains('open')) {
				text.style.height = text.scrollHeight + 'px'
			}
		})
	})
})

//O MNIE
const aboutMeCard = document.getElementById('aboutMeCard')
const closeBtn = aboutMeCard.querySelector('.about-close')
const overlayContent = aboutMeCard.querySelector('.about-me_overlay-content')

aboutMeCard.addEventListener('click', () => {
	aboutMeCard.classList.add('active')
})

closeBtn.addEventListener('click', e => {
	e.stopPropagation()
	aboutMeCard.classList.remove('active')
	overlayContent.scrollTop = 0
})

const startYear = 2018
const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - startYear
document.getElementById('experience-years').textContent = yearsOfExperience

// METODY
document.addEventListener('DOMContentLoaded', () => {
	const servicesItems = document.querySelectorAll('.services-item')

	// Stwórz modal w DOM
	const modalOverlay = document.createElement('div')
	modalOverlay.className = 'modal-overlay'

	const modal = document.createElement('div')
	modal.className = 'modal'

	const modalHeader = document.createElement('h3')
	modalHeader.className = 'modal-header'

	const closeBtn = document.createElement('button')
	closeBtn.className = 'modal-close'
	closeBtn.innerHTML = '&times;'

	modal.appendChild(closeBtn)
	modalOverlay.appendChild(modal)
	document.body.appendChild(modalOverlay)

	// Funkcja otwierająca modal
	const openModal = (content, title) => {
		modal.innerHTML = '' // wyczyść zawartość
		closeBtn.style.display = 'block'

		const header = document.createElement('div')
		header.className = 'modal-header'
		header.textContent = title

		header.appendChild(closeBtn) // przycisk w tym samym wierszu co tytuł
		modal.appendChild(header)

		const contentWrapper = document.createElement('div')
		contentWrapper.className = 'modal-content'
		contentWrapper.appendChild(content.cloneNode(true))
		modal.appendChild(contentWrapper)

		modalOverlay.style.display = 'flex'
		document.body.style.overflow = 'hidden' // blokada scrolla strony
	}

	// Funkcja zamykająca modal
	const closeModal = () => {
		modalOverlay.style.display = 'none'
		closeBtn.style.display = 'none'
		document.body.style.overflow = '' // odblokuj scroll
	}

	closeBtn.addEventListener('click', closeModal)
	modalOverlay.addEventListener('click', e => {
		if (e.target === modalOverlay) closeModal()
	})

	// Obsługa kliknięcia nagłówków
	servicesItems.forEach(item => {
		const serviceId = item.getAttribute('data-service')
		const content = document.getElementById(serviceId)

		item.addEventListener('click', () => {
			if (content) openModal(content, item.textContent.trim())
		})
	})
})

//OPINIE

const track = document.querySelector('.carousel-track')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const dotsContainer = document.querySelector('.carousel-dots')

const originalSlides = Array.from(track.children)

originalSlides.forEach((_, i) => {
	const dot = document.createElement('span')
	dot.classList.add('carousel-dot')
	if (i === 0) dot.classList.add('active')

	dot.addEventListener('click', () => {
		index = i + 1 // +1 bo pierwszy prawdziwy slajd
		updateCarousel()
	})

	dotsContainer.appendChild(dot)
})

const dots = document.querySelectorAll('.carousel-dot')

const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true)
track.insertBefore(lastClone, originalSlides[0])
const firstClone = originalSlides[0].cloneNode(true)
track.appendChild(firstClone)
const slides = Array.from(track.children)
const totalSlides = slides.length

let index = 1
let auto
let isAnimating = false

function updateCarousel(animate = true) {
	track.style.transition = animate ? 'transform 0.6s ease' : 'none'
	track.style.transform = `translateX(-${index * 100}%)`

	dots.forEach(dot => dot.classList.remove('active'))
	dots[index - 1]?.classList.add('active')
}

function nextSlide() {
	if (isAnimating) return
	isAnimating = true
	index++
	updateCarousel(true)
}

function prevSlide() {
	if (isAnimating) return
	isAnimating = true
	index--
	updateCarousel(true)
}

track.addEventListener('transitionend', () => {
	if (index === totalSlides - 1) {
		index = 1
		updateCarousel(false)
	}

	if (index === 0) {
		index = totalSlides - 2
		updateCarousel(false)
	}

	track.offsetHeight
	isAnimating = false
})

function startAuto() {
	clearInterval(auto)
	auto = setInterval(nextSlide, 10000)
}

function stopAuto() {
	clearInterval(auto)
}

nextBtn.addEventListener('click', () => {
	stopAuto()
	nextSlide()
	startAuto()
})

prevBtn.addEventListener('click', () => {
	stopAuto()
	prevSlide()
	startAuto()
})

updateCarousel(false)
startAuto()

//FOOTER
document.getElementById('year').textContent = new Date().getFullYear()

//GALERIA


