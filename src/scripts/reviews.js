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
		if (index === slides.length - 1) ((index = 1), update(false))
		if (index === 0) ((index = slides.length - 2), update(false))
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