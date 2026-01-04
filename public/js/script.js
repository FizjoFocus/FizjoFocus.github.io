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

//FLOATING BUTTON

const floatingBtn = document.querySelector('.float-contact')

window.addEventListener('scroll', () => {
	const scrollY = window.scrollY || window.pageYOffset
	const headerHeight = header.offsetHeight

	if (scrollY > 60) {
		floatingBtn.classList.add('is-visible')
	} else {
		floatingBtn.classList.remove('is-visible')
	}
})

// WHY ME?

document.addEventListener('DOMContentLoaded', () => {
	const whyItems = document.querySelectorAll('.why_container-item')

	const offsetMobile = 60
	const offsetDesktop = 96

	const getOffset = () => (window.innerWidth >= 768 ? offsetDesktop : offsetMobile)

	const scrollToWhyContainer = () => {
		if (window.innerWidth >= 768) return

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
		item.addEventListener('click', e => {
			if (!e.target.closest('.why_container-item-btn')) {
				item.querySelector('.why_container-item-btn').click()
			}
		})

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
	overlayContent.scrollTop = 0
})

closeBtn.addEventListener('click', e => {
	e.stopPropagation()
	aboutMeCard.classList.remove('active')
	overlayContent.scrollTop = 0
})

const startYear = 2018
const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - startYear
document.getElementById('experience-years-mobile').textContent = yearsOfExperience
document.getElementById('experience-years-tablet').textContent = yearsOfExperience

// METODY

document.addEventListener('DOMContentLoaded', () => {
	const servicesItems = document.querySelectorAll('.services-item')

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

	const openModal = (content, title) => {
		modal.innerHTML = ''
		closeBtn.style.display = 'block'

		const header = document.createElement('div')
		header.className = 'modal-header'
		header.textContent = title

		header.appendChild(closeBtn)
		modal.appendChild(header)

		const contentWrapper = document.createElement('div')
		contentWrapper.className = 'modal-content'
		contentWrapper.appendChild(content.cloneNode(true))
		modal.appendChild(contentWrapper)

		modalOverlay.style.display = 'flex'
		document.body.style.overflow = 'hidden'
	}

	const closeModal = () => {
		modalOverlay.style.display = 'none'
		closeBtn.style.display = 'none'
		document.body.style.overflow = ''
	}

	closeBtn.addEventListener('click', closeModal)
	modalOverlay.addEventListener('click', e => {
		if (e.target === modalOverlay) closeModal()
	})

	servicesItems.forEach(item => {
		const serviceId = item.getAttribute('data-service')
		const content = document.getElementById(serviceId)

		item.addEventListener('click', () => {
			const h3 = item.querySelector('h3')
			const title = h3 ? h3.textContent.trim() : ''
			if (content) openModal(content, title)
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
		index = i + 1
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

function GALLERY() {
	const gallery = document.getElementById('gallery')
	if (!gallery) return

	const thumbs = Array.from(gallery.querySelectorAll('.thumb'))
	const lightbox = document.getElementById('lightbox')
	const lbImg = lightbox.querySelector('.lightbox__img')
	const closeBtn = lightbox.querySelector('.lightbox__close')
	const prevBtn = lightbox.querySelector('.lightbox__nav--prev')
	const nextBtn = lightbox.querySelector('.lightbox__nav--next')

	let currentIndex = -1
	let isOpen = false

	function openAt(index) {
		if (index < 0 || index >= thumbs.length) return
		currentIndex = index
		const thumb = thumbs[index]
		const full = thumb.dataset.full || thumb.src
		const alt = thumb.getAttribute('alt') || ''

		lbImg.src = thumb.src
		lbImg.alt = alt
		showLightbox()

		const pre = new Image()
		pre.onload = () => {
			if (currentIndex === index) {
				lbImg.src = pre.src
			}
		}
		pre.src = full
		lightbox.setAttribute('aria-hidden', 'false')
	}

	function showLightbox() {
		lightbox.classList.add('is-open')
		document.body.style.overflow = 'hidden'
		isOpen = true
		closeBtn.focus()
	}

	function closeLightbox() {
		lightbox.classList.remove('is-open')
		document.body.style.overflow = ''
		isOpen = false
		lightbox.setAttribute('aria-hidden', 'true')

		if (thumbs[currentIndex]) thumbs[currentIndex].focus()
		currentIndex = -1
	}

	function showNext() {
		console.log('y')

		if (thumbs.length === 0) return
		const next = (currentIndex + 1) % thumbs.length
		openAt(next)
	}
	function showPrev() {
		console.log('X')
		if (thumbs.length === 0) return
		const prev = (currentIndex - 1 + thumbs.length) % thumbs.length
		openAt(prev)
	}

	thumbs.forEach((t, i) => {
		t.setAttribute('tabindex', '0') 
		t.addEventListener('click', () => openAt(i))
		t.addEventListener('keydown', e => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault()
				openAt(i)
			}
		})
	})

	closeBtn.addEventListener('click', closeLightbox)
	lightbox.addEventListener('click', e => {
		if (e.target === lightbox || e.target === lightbox.querySelector('.lightbox__stage')) {
			closeLightbox()
		}
	})

	prevBtn.addEventListener('click', e => {
		e.stopPropagation()
		showPrev()
	})
	nextBtn.addEventListener('click', e => {
		e.stopPropagation()
		showNext()
	})

	window.addEventListener('keydown', e => {
		if (!isOpen) return
		if (e.key === 'Escape') closeLightbox()
		if (e.key === 'ArrowRight') showNext()
		if (e.key === 'ArrowLeft') showPrev()
	})

	let touchStartX = 0
	let touchEndX = 0
	const threshold = 40 

	lightbox.addEventListener(
		'touchstart',
		e => {
			if (e.touches && e.touches.length === 1) {
				touchStartX = e.touches[0].clientX
			}
		},
		{ passive: true }
	)

	lightbox.addEventListener(
		'touchmove',
		e => {
			if (e.touches && e.touches.length === 1) {
				touchEndX = e.touches[0].clientX
			}
		},
		{ passive: true }
	)

	function prefetchNext() {
		if (currentIndex < 0) return
		const nextIdx = (currentIndex + 1) % thumbs.length
		const nextFull = thumbs[nextIdx].dataset.full
		if (nextFull) {
			const img = new Image()
			img.src = nextFull
		}
	}

	const origOpenAt = openAt
	openAt = function (index) {
		origOpenAt(index)
		setTimeout(prefetchNext, 250)
	}

	window.simpleGallery = {
		openAt,
		closeLightbox,
	}
}

GALLERY()
