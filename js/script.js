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

// JavaScript
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

const aboutMeCard = document.getElementById('aboutMeCard');
const closeBtn = aboutMeCard.querySelector('.about-close');
const overlayContent = aboutMeCard.querySelector('.about-me_overlay-content');

aboutMeCard.addEventListener('click', () => {
	aboutMeCard.classList.add('active');
});

closeBtn.addEventListener('click', e => {
	e.stopPropagation();
	aboutMeCard.classList.remove('active');
	overlayContent.scrollTop = 0;
});


// const aboutMeHeader = document.querySelector('.about-me-header h2')
// const aboutMeText = document.querySelector('.about-me_container-text')
// const aboutMePhoto = document.querySelector('.about-me_container-photo img')
// const aboutMeContainer = document.querySelector('.about-me_container')

// function PhotoBtn() {
// 	if (window.innerWidth < 768) {
// 		aboutMeText.classList.toggle('about-me_container-text-show')
// 		aboutMePhoto.classList.toggle('about-me_container-photo-close')

// 		// OTWARCIE
// 		if (aboutMeText.classList.contains('about-me_container-text-show')) {
// 			const h = aboutMeText.scrollHeight
// 			aboutMeContainer.style.height = h + 'px'
// 		} else {
// 			// ZAMKNIĘCIE
// 			aboutMeContainer.style.removeProperty('height')
// 		}

// 		return
// 	}

// 	if (window.innerWidth >= 768) {
// 		const isOpen = aboutMeText.classList.contains('about-me_container-text-show')
// 		const isClosed = aboutMeText.classList.contains('about-me_container-text-close')

// 		if (isOpen) {
// 			aboutMeText.classList.remove('about-me_container-text-show')
// 			aboutMeText.classList.add('about-me_container-text-close')

// 			aboutMePhoto.classList.remove('about-me_container-photo-close')
// 			aboutMePhoto.classList.add('about-me_container-photo-show')

// 			return
// 		}

// 		if (isClosed || (!isOpen && !isClosed)) {
// 			aboutMeText.classList.remove('about-me_container-text-close')
// 			aboutMeText.classList.add('about-me_container-text-show')

// 			aboutMePhoto.classList.remove('about-me_container-photo-show')
// 			aboutMePhoto.classList.add('about-me_container-photo-close')

// 			return
// 		}
// 	}
// }

// aboutMeHeader.addEventListener('click', PhotoBtn)
// aboutMePhoto.addEventListener('click', PhotoBtn)
// aboutMeText.addEventListener('click', PhotoBtn)

const startYear = 2018
const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - startYear
document.getElementById('experience-years').textContent = yearsOfExperience

//METODY
// const pdtrBtn = document.querySelector('#PDTR')
// const neuroseminarsBtn = document.querySelector('#NeuroSeminars')
// const dnsBtn = document.querySelector('#DNS')
// const pnfBtn = document.querySelector('#PNF')
// const mtgBtn = document.querySelector('#MTG')
// const otherBtn = document.querySelector('#Other')

// function showPdtrContent() {
// 	const content = document.getElementById('pdtr-text')
// 	const contentHeight = content.scrollHeight
//   const pdtrArrow = document.querySelector('.pdtr-btn')

//   pdtrArrow.classList.toggle('rotate-arrow')

// 	if (content.style.height === '0px' || content.style.height === '') {
// 		content.style.height = contentHeight + 'px'
// 	} else {
// 		content.style.height = '0px'
// 	}
// }

// function showNeuroseminarsContent() {
// 	const content = document.getElementById('neuroseminars-text')
// 	const contentHeight = content.scrollHeight
//    const neuroseminarsArrow = document.querySelector('.neuroseminars-btn')

//   neuroseminarsArrow.classList.toggle('rotate-arrow')

// 	if (content.style.height === '0px' || content.style.height === '') {
// 		content.style.height = contentHeight + 'px'
// 	} else {
// 		content.style.height = '0px'
// 	}
// }

// function showDnsContent() {
// 	const content = document.getElementById('dns-text')
// 	const contentHeight = content.scrollHeight
//    const dnsArrow = document.querySelector('.dns-btn')

//   dnsArrow.classList.toggle('rotate-arrow')

// 	if (content.style.height === '0px' || content.style.height === '') {
// 		content.style.height = contentHeight + 'px'
// 	} else {
// 		content.style.height = '0px'
// 	}
// }

// function showPnfContent() {
// 	const content = document.getElementById('pnf-text')
// 	const contentHeight = content.scrollHeight
//    const pnfArrow = document.querySelector('.pnf-btn')

//   pnfArrow.classList.toggle('rotate-arrow')

// 	if (content.style.height === '0px' || content.style.height === '') {
// 		content.style.height = contentHeight + 'px'
// 	} else {
// 		content.style.height = '0px'
// 	}
// }

// function showMtgContent() {
// 	const content = document.getElementById('mtg-text')
// 	const contentHeight = content.scrollHeight
//    const mtgArrow = document.querySelector('.mtg-btn')

//   mtgArrow.classList.toggle('rotate-arrow')

// 	if (content.style.height === '0px' || content.style.height === '') {
// 		content.style.height = contentHeight + 'px'
// 	} else {
// 		content.style.height = '0px'
// 	}
// }

// function showOtherContent() {
// 	const content = document.getElementById('other-text')
// 	const contentHeight = content.scrollHeight
//    const otherArrow = document.querySelector('.other-btn')

//   otherArrow.classList.toggle('rotate-arrow')

// 	if (content.style.height === '0px' || content.style.height === '') {
// 		content.style.height = contentHeight + 'px'
// 	} else {
// 		content.style.height = '0px'
// 	}
// }

// pdtrBtn.addEventListener('click', showPdtrContent)
// neuroseminarsBtn.addEventListener('click', showNeuroseminarsContent)
// dnsBtn.addEventListener('click', showDnsContent)
// pnfBtn.addEventListener('click', showPnfContent)
// mtgBtn.addEventListener('click', showMtgContent)
// otherBtn.addEventListener('click', showOtherContent)

// const serviceButtons = document.querySelectorAll('.services-btn')

// serviceButtons.forEach(btn => {
// 	btn.addEventListener('click', () => {
// 		const item = btn.closest('.services-item')
// 		const text = item.nextElementSibling

// 		const isOpen = text.classList.contains('active')

// 		// zamknij wszystkie
// 		document.querySelectorAll('.services-text').forEach(el => {
// 			el.style.height = '0'
// 			el.classList.remove('active')
// 		})

// 		document.querySelectorAll('.services-btn').forEach(b => {
// 			b.classList.remove('rotate-arrow')
// 		})

// 		// jeśli kliknięty był zamknięty → otwórz
// 		if (!isOpen) {
// 			text.classList.add('active')
// 			text.style.height = text.scrollHeight + 'px'
// 			btn.classList.add('rotate-arrow')
// 		}
// 	})
// })

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
	const transitionDuration = 350 // ms, dopasuj do CSS
	const offset = 60 // wysokość navbar

	serviceItems.forEach(item => {
		const btn = item.querySelector('.services-btn')
		const text = item.nextElementSibling

		btn.addEventListener('click', () => {
			const isOpen = text.classList.contains('open')
			const currentlyOpen = document.querySelector('.services-text.open')

			if (isOpen) {
				// Kliknięta sekcja już otwarta -> zamknij ją
				text.classList.remove('open')
				text.style.height = '0'
				btn.classList.remove('rotate-arrow')
				return
			}

			if (currentlyOpen) {
				// Najpierw scroll do aktualnie otwartej sekcji
				const currentlyItem = currentlyOpen.previousElementSibling
				const y = currentlyItem.getBoundingClientRect().top + window.pageYOffset - offset
				window.scrollTo({ top: y, behavior: 'smooth' })

				// Zamknięcie aktualnie otwartej sekcji
				const currentlyBtn = currentlyItem.querySelector('.services-btn')
				currentlyOpen.classList.remove('open')
				currentlyOpen.style.height = '0'
				if (currentlyBtn) currentlyBtn.classList.remove('rotate-arrow')

				// Otwórz klikniętą sekcję
				setTimeout(() => {
					text.classList.add('open')
					text.style.height = text.scrollHeight + 'px'
					btn.classList.add('rotate-arrow')

					// Scroll do nowej sekcji

					const newY = item.getBoundingClientRect().top + window.pageYOffset - offset
					window.scrollTo({ top: newY, behavior: 'smooth' })
				}, transitionDuration)
			} else {
				// Jeśli żadna sekcja nie jest otwarta -> otwórz klikniętą
				text.classList.add('open')
				text.style.height = text.scrollHeight + 'px'
				btn.classList.add('rotate-arrow')

				// Scroll do nowej sekcji
				const newY = item.getBoundingClientRect().top + window.pageYOffset - offset
				window.scrollTo({ top: newY, behavior: 'smooth' })
			}
		})

		// Dopasowanie wysokości przy resize
		window.addEventListener('resize', () => {
			if (text.classList.contains('open')) {
				text.style.height = text.scrollHeight + 'px'
			}
		})
	})
})

//OPINIE
const track = document.querySelector('.carousel-track')

// najpierw klon
const firstClone = track.children[0].cloneNode(true)
track.appendChild(firstClone)

// dopiero teraz pobieramy aktualną listę
const slides = Array.from(track.children)

let index = 0
let auto
const totalSlides = slides.length

function updateCarousel(animate = true) {
	track.style.transition = animate ? 'transform 0.6s ease' : 'none'
	track.style.transform = `translateX(-${index * 100}%)`
}

function nextSlide() {
	index++
	updateCarousel()

	// reset gdy jesteś na klonie (ostatni element)
	if (index === totalSlides - 1) {
		setTimeout(() => {
			index = 0
			updateCarousel(false)
		}, 600)
	}
}

function startAuto() {
	auto = setInterval(nextSlide, 10000)
}

function stopAuto() {
	clearInterval(auto)
}

const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

nextBtn.addEventListener('click', () => {
	stopAuto()
	nextSlide()
	startAuto()
})

prevBtn.addEventListener('click', () => {
	stopAuto()
	index = (index - 1 + totalSlides) % totalSlides
	updateCarousel()
	startAuto()
})

auto = startAuto()

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
