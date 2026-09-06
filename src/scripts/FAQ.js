// FAQ

document.addEventListener('DOMContentLoaded', () => {
	const faqItems = document.querySelectorAll('.faq_container-item')
	const offsetMobile = 60
	const offsetTablet = 156
	const offsetDesktop = 96

	let isAnimating = false

	const getOffset = () => {
		if (window.innerWidth >= 1100) return offsetDesktop
		if (window.innerWidth >= 900) return offsetTablet
		return offsetMobile
	}

	const scrollTofaq = () => {
		if (window.innerWidth >= 768) return

		const container = document.getElementById('faqContainer')
		if (!container) return

		const top = container.getBoundingClientRect().top + window.scrollY - getOffset()

		window.scrollTo({
			top,
			behavior: 'smooth',
		})
	}

	faqItems.forEach(item => {
		const btn = item.querySelector('.faq_container-item-btn')
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
			if (!e.target.closest('.faq_container-item-btn')) btn.click()
		})

		btn.addEventListener('click', () => {
			if (isAnimating) return
			isAnimating = true

			const openText = document.querySelector('.faq_container-item-text.open')
			scrollTofaq()

			// Zamykanie aktualnie otwartego
			if (textWrapper.classList.contains('open')) {
				textWrapper.classList.remove('open')
				textWrapper.style.height = '0'
				btn.classList.remove('rotate-arrow')

				const onCloseEnd = e => {
					if (e.propertyName !== 'height') return

					isAnimating = false
					textWrapper.removeEventListener('transitionend', onCloseEnd)
				}

				textWrapper.addEventListener('transitionend', onCloseEnd)
				return
			}

			// Zamknięcie poprzedniego
			if (openText) {
				const prevBtn = openText.previousElementSibling?.querySelector('.faq_container-item-btn')

				openText.classList.remove('open')
				openText.style.height = '0'
				prevBtn?.classList.remove('rotate-arrow')
			}

			// Otwarcie nowego
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
				isAnimating = false

				textWrapper.removeEventListener('transitionend', onTransitionEnd)
			}

			textWrapper.addEventListener('transitionend', onTransitionEnd)
		})
	})
})

window.addEventListener('resize', () => {
	document.querySelectorAll('.faq_container-item-text.open').forEach(wrapper => {
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
