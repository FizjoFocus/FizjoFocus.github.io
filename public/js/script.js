//NAWIGACJA

const burger = document.getElementById('nav-icon2')
const nav = document.querySelector('.navbar_nav')

burger?.addEventListener('click', () => {
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
//FLOATING BUTTON

const backToTop = document.querySelector('.back-to-top')
const floatingBtn = document.querySelector('.float-contact')
const header = document.querySelector('.header')
const headerHeight = header?.offsetHeight || 0

let ticking = false

window.addEventListener(
	'scroll',
	() => {
		if (!ticking) {
			requestAnimationFrame(() => {
				const scrollY = window.scrollY

				backToTop?.classList.toggle('is-visible', scrollY >= headerHeight)
				floatingBtn?.classList.toggle('is-visible', scrollY > 60)

				ticking = false
			})
			ticking = true
		}
	},
	{ passive: true }
)

// WHY ME?

document.addEventListener('DOMContentLoaded', () => {
	const whyItems = document.querySelectorAll('.why_container-item')
	const offsetMobile = 60
	const offsetDesktop = 96

	const getOffset = () => (window.innerWidth >= 768 ? offsetDesktop : offsetMobile)

	const scrollToWhy = () => {
		if (window.innerWidth >= 768) return
		const container = document.getElementById('whyContainer')
		if (!container) return

		const top = container.getBoundingClientRect().top + window.scrollY - getOffset()
		window.scrollTo({ top })
	}

	whyItems.forEach(item => {
		const btn = item.querySelector('.why_container-item-btn')
		const text = item.nextElementSibling

		item.addEventListener('click', e => {
			if (!e.target.closest('.why_container-item-btn')) btn.click()
		})

		btn.addEventListener('click', () => {
			const openText = document.querySelector('.why_container-item-text.open')

			scrollToWhy()

			if (text.classList.contains('open')) {
				text.classList.remove('open')
				text.style.height = '0'
				btn.classList.remove('rotate-arrow')
				return
			}

			if (openText) {
				const prevBtn = openText.previousElementSibling?.querySelector('.why_container-item-btn')
				openText.classList.remove('open')
				openText.style.height = '0'
				prevBtn?.classList.remove('rotate-arrow')
			}

			text.classList.add('open')
			text.style.height = text.scrollHeight + 'px'
			btn.classList.add('rotate-arrow')
		})
	})
})

window.addEventListener('resize', () => {
	document.querySelectorAll('.why_container-item-text.open').forEach(text => {
		text.style.height = text.scrollHeight + 'px'
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
if (track) {
    const nextBtn = document.querySelector('.next')
    const prevBtn = document.querySelector('.prev')
    const dotsContainer = document.querySelector('.carousel-dots')
    const originalSlides = Array.from(track.children)

    originalSlides.forEach((_, i) => {
        const dot = document.createElement('span')
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '')
        dot.addEventListener('click', () => {
            index = i + 1
            update(false)
        })
        dotsContainer.appendChild(dot)
    })

    const dots = document.querySelectorAll('.carousel-dot')
    const firstClone = originalSlides[0].cloneNode(true)
    const lastClone = originalSlides.at(-1).cloneNode(true)

    track.append(firstClone)
    track.prepend(lastClone)

    const slides = Array.from(track.children)
    let index = 1
    let animating = false
    let auto

    const update = (animate = true) => {
        track.style.transition = animate ? 'transform .6s ease' : 'none'
        track.style.transform = `translateX(-${index * 100}%)`
        dots.forEach(d => d.classList.remove('active'))
        dots[index - 1]?.classList.add('active')
    }

    const next = () => {
        if (!animating) {
            index++
            animating = true
            update()
        }
    }

    const prev = () => {
        if (!animating) {
            index--
            animating = true
            update()
        }
    }

    track.addEventListener('transitionend', () => {
        if (index === slides.length - 1) index = 1, update(false)
        if (index === 0) index = slides.length - 2, update(false)
        animating = false
    })

    const startAuto = () => {
        clearInterval(auto)
        auto = setInterval(next, 10000)
    }

    const stopAuto = () => clearInterval(auto)

    nextBtn?.addEventListener('click', () => {
        stopAuto()
        next()
        startAuto()
    })

    prevBtn?.addEventListener('click', () => {
        stopAuto()
        prev()
        startAuto()
    })

    update(false)
    startAuto()
}

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
		if (thumbs.length === 0) return
		const next = (currentIndex + 1) % thumbs.length
		openAt(next)
	}
	function showPrev() {
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
