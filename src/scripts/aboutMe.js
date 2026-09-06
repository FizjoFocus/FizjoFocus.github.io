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