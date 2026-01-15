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
		const textWrapper = item.nextElementSibling
		const scrollContent = textWrapper.querySelector('.scroll-container')
		let thumb = textWrapper.querySelector('.fake-scroll-thumb')

		if (!thumb) {
			thumb = document.createElement('span')
			thumb.className = 'fake-scroll-thumb'
			textWrapper.appendChild(thumb)
		}

		const updateThumb = () => {
			const contentHeight = scrollContent.scrollHeight
			const visibleHeight = scrollContent.clientHeight
			const scrollTop = scrollContent.scrollTop

			if (contentHeight <= visibleHeight + 1) {
				thumb.style.display = 'none'
				scrollContent.style.overflowY = 'hidden'
				scrollContent.scrollTop = 0
				textWrapper.style.height = scrollContent.scrollHeight + 'px'
				textWrapper.classList.add('hide-after')
				return
			}

			scrollContent.style.overflowY = 'auto'
			thumb.style.display = 'block'
			textWrapper.classList.remove('hide-after')

			const trackHeight = textWrapper.clientHeight - 16
			const thumbHeight = Math.max((trackHeight * visibleHeight) / contentHeight, 24)
			const scrollRatio = scrollTop / (contentHeight - visibleHeight)
			thumb.style.height = `${thumbHeight}px`
			thumb.style.top = `${8 + scrollRatio * (trackHeight - thumbHeight)}px`
		}

		scrollContent.addEventListener('scroll', updateThumb)
		window.addEventListener('resize', updateThumb)

		item.addEventListener('click', e => {
			if (!e.target.closest('.why_container-item-btn')) btn.click()
		})

		btn.addEventListener('click', () => {
			const openText = document.querySelector('.why_container-item-text.open')
			scrollToWhy()

			if (textWrapper.classList.contains('open')) {
				textWrapper.classList.remove('open')
				textWrapper.style.height = '0'
				btn.classList.remove('rotate-arrow')
				return
			}

			if (openText) {
				const prevBtn = openText.previousElementSibling?.querySelector('.why_container-item-btn')
				openText.classList.remove('open')
				openText.style.height = '0'
				prevBtn?.classList.remove('rotate-arrow')
			}

			textWrapper.classList.add('open')
			btn.classList.add('rotate-arrow')

			const contentHeight = scrollContent.scrollHeight
			const wrapperHeight = scrollContent.clientHeight

			if (contentHeight > wrapperHeight) {
				textWrapper.style.height = contentHeight + 'px'
			} else {
				textWrapper.style.height = 'auto'
			}

			let running = true
			const animateThumb = () => {
				if (!running) return
				updateThumb()
				requestAnimationFrame(animateThumb)
			}
			requestAnimationFrame(animateThumb)

			const onTransitionEnd = e => {
				if (e.propertyName !== 'height') return
				running = false
				updateThumb()
				textWrapper.removeEventListener('transitionend', onTransitionEnd)
			}
			textWrapper.addEventListener('transitionend', onTransitionEnd)
		})
	})
})

window.addEventListener('resize', () => {
	document.querySelectorAll('.why_container-item-text.open').forEach(wrapper => {
		const scrollContent = wrapper.querySelector('.scroll-container')
		const thumb = wrapper.querySelector('.fake-scroll-thumb')
		const contentHeight = scrollContent.scrollHeight
		const visibleHeight = scrollContent.clientHeight

		if (contentHeight > visibleHeight) {
			wrapper.style.height = contentHeight + 'px'
			scrollContent.style.overflowY = 'auto'
			updateThumb(wrapper, scrollContent, thumb)
		} else {
			wrapper.style.height = 'auto'
			scrollContent.style.overflowY = 'hidden'
			if (thumb) thumb.style.display = 'none'
		}
	})

	function updateThumb(wrapper, scrollContent, thumb) {
		const contentHeight = scrollContent.scrollHeight
		const visibleHeight = scrollContent.clientHeight
		const scrollTop = scrollContent.scrollTop

		if (contentHeight <= visibleHeight) {
			if (thumb) thumb.style.display = 'none'
			scrollContent.scrollTop = 0
			return
		}

		if (!thumb) return
		thumb.style.display = 'block'
		const trackHeight = wrapper.clientHeight - 16
		const thumbHeight = Math.max((trackHeight * visibleHeight) / contentHeight, 24)
		const scrollRatio = scrollTop / (contentHeight - visibleHeight)
		thumb.style.height = `${thumbHeight}px`
		thumb.style.top = `${8 + scrollRatio * (trackHeight - thumbHeight)}px`
	}
})

//O MNIE

const aboutMeCard = document.getElementById('aboutMeCard')
const closeBtn = aboutMeCard.querySelector('.about-close')
const content = document.querySelector('.about-me_overlay-content')

aboutMeCard.addEventListener('click', () => {
	aboutMeCard.classList.add('active')
	initFakeScrollbar()
})

closeBtn.addEventListener('click', e => {
	e.stopPropagation()
	aboutMeCard.classList.remove('active')
	content.scrollTop = 0
})

// lata doświadczenia
const startYear = 2018
const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - startYear
document.getElementById('experience-years-mobile').textContent = yearsOfExperience
document.getElementById('experience-years-tablet').textContent = yearsOfExperience

let fakeThumb = null
let isDragging = false
let startY = 0
let startScrollTop = 0

function initFakeScrollbar() {
	const scrollHeight = content.scrollHeight
	const clientHeight = content.clientHeight

	// jeśli szerokość > 900px lub treść się mieści → ukryj scrollbar
	if (window.innerWidth > 900 || scrollHeight <= clientHeight) {
		content.classList.add('hide-after')
		if (fakeThumb) fakeThumb.style.display = 'none'
		return
	}

	content.classList.remove('hide-after')

	// tworzenie fake thumb tylko raz
	if (!fakeThumb) {
		fakeThumb = document.createElement('div')
		fakeThumb.classList.add('fake-scroll-thumb')
		content.appendChild(fakeThumb)

		fakeThumb.addEventListener('mousedown', e => {
			isDragging = true
			startY = e.clientY
			startScrollTop = content.scrollTop
			document.body.classList.add('no-select')
			e.preventDefault()
		})

		document.addEventListener('mouseup', () => {
			if (isDragging) {
				isDragging = false
				document.body.classList.remove('no-select')
			}
		})

		document.addEventListener('mousemove', e => {
			if (!isDragging) return

			const scrollHeight = content.scrollHeight
			const clientHeight = content.clientHeight
			const trackHeight = clientHeight - 16
			const thumbHeight = fakeThumb.offsetHeight
			const maxThumbMove = trackHeight - thumbHeight
			const maxScroll = scrollHeight - clientHeight

			const deltaY = e.clientY - startY
			const scrollDelta = (deltaY / maxThumbMove) * maxScroll
			content.scrollTop = startScrollTop + scrollDelta
			updateThumbPosition()
		})
	}

	fakeThumb.style.display = 'block'

	const trackHeight = clientHeight - 16 // padding top + bottom
	const thumbHeight = Math.max((trackHeight * clientHeight) / scrollHeight, 24)

	fakeThumb.style.height = `${thumbHeight}px`

	updateThumbPosition()
}

// aktualizacja pozycji thumba przy scrollowaniu
function updateThumbPosition() {
	if (!fakeThumb) return

	const scrollTop = content.scrollTop
	const scrollHeight = content.scrollHeight
	const clientHeight = content.clientHeight

	// jeśli nie trzeba scrollować → ukryj
	if (scrollHeight <= clientHeight) {
		fakeThumb.style.display = 'none'
		return
	}

	const trackHeight = clientHeight - 16
	const thumbHeight = fakeThumb.offsetHeight
	const maxScroll = scrollHeight - clientHeight
	const maxThumbMove = trackHeight - thumbHeight

	const thumbTop = 8 + (scrollTop / maxScroll) * maxThumbMove
	fakeThumb.style.top = `${thumbTop}px`
}

// aktualizacja przy scroll
content.addEventListener('scroll', updateThumbPosition)

// aktualizacja przy resize
window.addEventListener('resize', () => {
	initFakeScrollbar()
	updateThumbPosition()
})

// METODY

document.addEventListener('DOMContentLoaded', () => {
	const servicesItems = document.querySelectorAll('.services-item')

	/* ================= MODAL ================= */

	const modalOverlay = document.createElement('div')
	modalOverlay.className = 'modal-overlay'

	const modal = document.createElement('div')
	modal.className = 'modal'

	const closeBtn = document.createElement('button')
	closeBtn.className = 'modal-close'
	closeBtn.innerHTML = '&times;'

	modal.appendChild(closeBtn)
	modalOverlay.appendChild(modal)
	document.body.appendChild(modalOverlay)

	let modalContent = null
	let vTrack = null
	let vThumb = null
	const padding = 8

	/* ================= PIONOWY SCROLL ================= */

	const initVerticalScrollbar = () => {
		if (!modalContent) return

		vTrack?.remove()
		vThumb?.remove()

		const visible = modalContent.clientHeight
		const total = modalContent.scrollHeight
		if (total <= visible) return

		vTrack = document.createElement('div')
		vThumb = document.createElement('div')

		Object.assign(vTrack.style, {
			position: 'absolute',
			top: modalContent.offsetTop + padding + 'px',
			right: '6px',
			width: '4px',
			height: visible - padding * 2 + 'px',
			background: 'rgba(0,123,255,.15)',
			borderRadius: '4px',
			zIndex: 5,
		})

		Object.assign(vThumb.style, {
			position: 'absolute',
			right: '6px',
			width: '4px',
			background: 'rgba(0,123,255,.9)',
			borderRadius: '4px',
			cursor: 'pointer',
			zIndex: 6,
		})

		modal.append(vTrack, vThumb)

		let thumbHeight = 0

		const update = () => {
			thumbHeight = Math.max(30, visible * (visible / total))
			const maxThumbMove = visible - padding * 2 - thumbHeight
			const ratio = modalContent.scrollTop / (total - visible)

			vThumb.style.height = thumbHeight + 'px'
			vThumb.style.top = modalContent.offsetTop + padding + ratio * maxThumbMove + 'px'
		}

		modalContent.addEventListener('scroll', update)
		update()

		let startY = 0
		let startScroll = 0
		let dragging = false

		vThumb.addEventListener('mousedown', e => {
			dragging = true
			startY = e.clientY
			startScroll = modalContent.scrollTop
			document.body.style.userSelect = 'none'
		})

		document.addEventListener('mousemove', e => {
			if (!dragging) return

			const delta = e.clientY - startY
			const maxThumbMove = visible - padding * 2 - thumbHeight
			const maxScroll = total - visible

			modalContent.scrollTop = startScroll + (delta / maxThumbMove) * maxScroll
		})

		document.addEventListener('mouseup', () => {
			dragging = false
			document.body.style.userSelect = ''
		})
	}

	/* ================= POZIOMY SCROLL (TABELA) ================= */

	const initTableScrollbar = table => {
		const visible = table.clientWidth
		const total = table.scrollWidth
		if (total <= visible) return

		const track = document.createElement('div')
		const thumb = document.createElement('div')

		Object.assign(track.style, {
			position: 'sticky',
			bottom: '8px',
			marginLeft: '12px',
			marginRight: '12px',
			height: '4px',
			background: 'rgba(0,123,255,.15)',
			borderRadius: '4px',
			zIndex: 5,
		})

		Object.assign(thumb.style, {
			position: 'absolute',
			left: '0',
			height: '4px',
			background: 'rgba(0,123,255,.9)',
			borderRadius: '4px',
			cursor: 'pointer',
			zIndex: 6,
		})

		track.appendChild(thumb)
		modalContent.appendChild(track)

		let thumbWidth = 0

		const update = () => {
			const trackWidth = track.clientWidth
			thumbWidth = Math.max(30, trackWidth * (visible / total))
			const maxThumbMove = trackWidth - thumbWidth
			const ratio = table.scrollLeft / (total - visible)
			thumb.style.width = thumbWidth + 'px'
			thumb.style.transform = `translateX(${ratio * maxThumbMove}px)`
		}

		table.addEventListener('scroll', update)
		update()

		/* ===== DRAG ===== */

		let startX = 0
		let startScroll = 0
		let dragging = false

		thumb.addEventListener('mousedown', e => {
			dragging = true
			startX = e.clientX
			startScroll = table.scrollLeft
			document.body.style.userSelect = 'none'
		})

		document.addEventListener('mousemove', e => {
			if (!dragging) return

			const delta = e.clientX - startX
			const maxThumbMove = visible - thumbWidth
			const maxScroll = total - visible

			table.scrollLeft = startScroll + (delta / maxThumbMove) * maxScroll
		})

		document.addEventListener('mouseup', () => {
			dragging = false
			document.body.style.userSelect = ''
		})
	}

	/* ================= MODAL OPEN / CLOSE ================= */

	const openModal = (content, title) => {
		modal.innerHTML = ''

		const header = document.createElement('div')
		header.className = 'modal-header'
		header.textContent = title
		header.appendChild(closeBtn)

		modal.appendChild(header)

		modalContent = document.createElement('div')
		modalContent.className = 'modal-content'
		modalContent.appendChild(content.cloneNode(true))
		modal.appendChild(modalContent)

		modalOverlay.style.display = 'flex'
		document.body.style.overflow = 'hidden'

		initVerticalScrollbar()

		modalContent.querySelectorAll('.table').forEach(initTableScrollbar)
	}

	const closeModal = () => {
		modalOverlay.style.display = 'none'
		document.body.style.overflow = ''
		vTrack?.remove()
		vThumb?.remove()
		modalContent = null
	}

	closeBtn.addEventListener('click', closeModal)

	modalOverlay.addEventListener('click', e => {
		if (e.target === modalOverlay) closeModal()
	})

	/* ================= SERVICES ================= */

	servicesItems.forEach(item => {
		const id = item.dataset.service
		const content = document.getElementById(id)

		item.addEventListener('click', () => {
			const title = item.querySelector('h3')?.textContent || ''
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
		if (index === slides.length - 1) (index = 1), update(false)
		if (index === 0) (index = slides.length - 2), update(false)
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
