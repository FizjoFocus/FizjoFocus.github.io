//NAWIGACJA
const burger = document.getElementById('nav-icon2')
const nav = document.querySelector('.navbar_nav')

burger.addEventListener('click', () => {
	burger.classList.toggle('open')
	nav.classList.toggle('show')
})

const closeMenu = () => {
	nav.classList.remove('show')
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
		backToTop.classList.add('show')
	} else {
		backToTop.classList.remove('show')
	}
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
const serviceItems = document.querySelectorAll('.services-item')

serviceItems.forEach(item => {
	item.addEventListener('click', e => {
		if (!e.target.closest('.services-btn')) {
			item.querySelector('.services-btn').click()
		}
	})
})

document.addEventListener('DOMContentLoaded', () => {
	const serviceItems = document.querySelectorAll('.services-item')
	let offsetMobile = 60
	let offsetDesktop = 96

	const getOffset = () => (window.innerWidth >= 768 ? offsetDesktop : offsetMobile)

	serviceItems.forEach(item => {
		const btn = item.querySelector('.services-btn')
		const text = item.nextElementSibling

		btn.addEventListener('click', () => {
			const isOpen = text.classList.contains('open')
			const currentlyOpen = document.querySelector('.services-text.open')

			if (isOpen) {
				text.classList.remove('open')
				text.style.height = '0'
				btn.classList.remove('rotate-arrow')
				return
			}

			if (currentlyOpen) {
				const currentlyItem = currentlyOpen.previousElementSibling
				const y = currentlyItem.getBoundingClientRect().top + window.pageYOffset - getOffset()
				window.scrollTo({ top: y, behavior: 'smooth' })

				const currentlyBtn = currentlyItem.querySelector('.services-btn')
				currentlyOpen.classList.remove('open')
				currentlyOpen.style.height = '0'
				if (currentlyBtn) currentlyBtn.classList.remove('rotate-arrow')

				setTimeout(() => {
					const newY = item.getBoundingClientRect().top + window.pageYOffset - getOffset()
					window.scrollTo({ top: newY, behavior: 'smooth' })

					setTimeout(() => {
						text.classList.add('open')
						text.style.height = text.scrollHeight + 'px'
						btn.classList.add('rotate-arrow')
					}, 350)
				}, 600)
			} else {
				const newY = item.getBoundingClientRect().top + window.pageYOffset - getOffset()
				window.scrollTo({ top: newY, behavior: 'smooth' })

				setTimeout(() => {
					text.classList.add('open')
					text.style.height = text.scrollHeight + 'px'
					btn.classList.add('rotate-arrow')
				}, 350)
			}
		})

		window.addEventListener('resize', () => {
			if (text.classList.contains('open')) {
				text.style.height = text.scrollHeight + 'px'
			}
		})
	})
})

//OPINIE
const track = document.querySelector('.carousel-track')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const originalSlides = Array.from(track.children)
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

	// helper to open lightbox for index
	function openAt(index) {
		if (index < 0 || index >= thumbs.length) return
		currentIndex = index
		const thumb = thumbs[index]
		const full = thumb.dataset.full || thumb.src
		const alt = thumb.getAttribute('alt') || ''
		// Show intermediate low-res quickly (optional)
		lbImg.src = thumb.src
		lbImg.alt = alt
		showLightbox()
		// preload full size
		const pre = new Image()
		pre.onload = () => {
			// only set if still the same index (avoid race)
			if (currentIndex === index) {
				lbImg.src = pre.src
			}
		}
		pre.src = full
		// update aria
		lightbox.setAttribute('aria-hidden', 'false')
	}

	function showLightbox() {
		lightbox.classList.add('is-open')
		document.body.style.overflow = 'hidden' // prevent scroll
		isOpen = true
		// focus for keyboard
		closeBtn.focus()
	}

	function closeLightbox() {
		lightbox.classList.remove('is-open')
		document.body.style.overflow = ''
		isOpen = false
		lightbox.setAttribute('aria-hidden', 'true')
		// return focus to current thumbnail
		if (thumbs[currentIndex]) thumbs[currentIndex].focus()
		currentIndex = -1
	}

	function showNext() {
		if (thumbs.length === 0) return
		const next = (currentIndex + 1) % thumbs.length
		openAt(next)
	}
	function showPrev() {
		if (thumbs.length === 0) return
		const prev = (currentIndex - 1 + thumbs.length) % thumbs.length
		openAt(prev)
	}

	// attach click on thumbnails
	thumbs.forEach((t, i) => {
		t.setAttribute('tabindex', '0') // make focusable
		t.addEventListener('click', () => openAt(i))
		t.addEventListener('keydown', e => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault()
				openAt(i)
			}
		})
	})

	// close handlers
	closeBtn.addEventListener('click', closeLightbox)
	lightbox.addEventListener('click', e => {
		// close only if clicking outside image (on overlay)
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

	// keyboard navigation
	window.addEventListener('keydown', e => {
		if (!isOpen) return
		if (e.key === 'Escape') closeLightbox()
		if (e.key === 'ArrowRight') showNext()
		if (e.key === 'ArrowLeft') showPrev()
	})

	// simple touch support for swipe
	let touchStartX = 0
	let touchEndX = 0
	const threshold = 40 // px

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

	lightbox.addEventListener('touchend', () => {
		const dx = touchEndX - touchStartX
		if (Math.abs(dx) > threshold) {
			if (dx < 0) showNext()
			else showPrev()
		}
		touchStartX = 0
		touchEndX = 0
	})

	// Optional: prefetch the next image after opening to make transitions instant
	function prefetchNext() {
		if (currentIndex < 0) return
		const nextIdx = (currentIndex + 1) % thumbs.length
		const nextFull = thumbs[nextIdx].dataset.full
		if (nextFull) {
			const img = new Image()
			img.src = nextFull
		}
	}

	// call prefetch after each open
	const origOpenAt = openAt
	openAt = function (index) {
		origOpenAt(index)
		// slight delay so current has chance to load
		setTimeout(prefetchNext, 250)
	}

	// expose (optional) in case developer wants to open programmatically
	window.simpleGallery = {
		openAt,
		closeLightbox,
	}
}

GALLERY()
