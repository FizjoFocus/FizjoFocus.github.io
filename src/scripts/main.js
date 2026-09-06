// NAWIGACJA

// 1. Zmienne
const burger = document.getElementById('nav-icon2')
const navbar = document.querySelector('.navbar')
const navContainer = document.querySelector('.navbar_nav-container')
const dropdownItems = document.querySelectorAll('.navbar_dropdown')
const dropdownMenu = document.querySelectorAll('.navbar_dropdown-menu')
const dropdownMenuBtn = document.querySelectorAll('.li-content-button')

// 2. Funkcje pomocnicze
const isHomePage = () => {
	const path = window.location.pathname
	return path.includes('index.html') || path === '/' || path.endsWith('/')
}

// Funkcja zamykająca - umieszczona na górze, aby była dostępna wszędzie
const closeMenu = () => {
	navContainer.classList.remove('show-menu', 'sub-menu-active')
	burger?.classList.remove('open')
	document.body.classList.remove('menu-open')
	navbar.classList.remove('navbar-desktop-show-navbar')
	document.body.classList.remove('desktop-menu-open')

	dropdownMenu.forEach(menu => {
		menu.classList.remove('slide-left')
	})
}

// 3. Burger
burger?.addEventListener('click', () => {
	const isMenuOpen = navContainer.classList.contains('show-menu')
	const isUnderMenuOpen = navContainer.classList.contains('sub-menu-active')

	if (isMenuOpen || isUnderMenuOpen) {
		closeMenu()
	} else {
		burger.classList.add('open')
		navContainer.classList.add('show-menu')
		document.body.classList.add('menu-open')
	}
})

// 4. Obsługa dropdownów
dropdownItems.forEach(item => {
	const btn = item.querySelector('.navbar_dropdown-btn')
	const menu = item.querySelector('.navbar_dropdown-menu')
	const backBtn = item.querySelector('.navbar_dropdown-back-btn')

	btn?.addEventListener('click', e => {
		if (window.innerWidth < 900) {
			e.preventDefault()
			navContainer.classList.remove('show-menu')
			menu.classList.add('slide-left')
			setTimeout(() => {
				navContainer.classList.add('sub-menu-active')
			}, 350)
		} else {
			if (isHomePage()) closeMenu()
		}
	})

	backBtn?.addEventListener('click', e => {
		e.stopPropagation()
		menu.classList.remove('slide-left')
		navContainer.classList.remove('sub-menu-active')
		navContainer.classList.remove('show-menu')
		setTimeout(() => {
			navContainer.classList.add('show-menu')
		}, 350)
	})
})

const listArrow = document.querySelectorAll('.li-content button img')

// Obsługa list
dropdownMenuBtn.forEach(item => {
	item.addEventListener('click', e => {
		e.preventDefault()

		const parentLi = item.closest('li')
		const clickedList = parentLi.querySelector('.li-content-button-list')
		const clickedImg = item.querySelector('img')

		const allLists = item.closest('.navbar_dropdown-menu').querySelectorAll('.li-content-button-list')
		const allButtons = item.closest('.navbar_dropdown-menu').querySelectorAll('.li-content-button')

		// Zamknij wszystkie inne listy i wyprostuj ich strzałki
		allLists.forEach(list => {
			if (list !== clickedList) {
				list.classList.remove('li-content-button-show-list')
			}
		})

		allButtons.forEach(btn => {
			if (btn !== item) {
				btn.classList.remove('open')
			}
		})

		item.classList.toggle('open')

		// Przełącz klikniętą listę i strzałkę
		if (clickedList) {
			clickedList.classList.toggle('li-content-button-show-list')
			clickedImg.classList.toggle('rotate-img')
		}
	})
})

// 6. Obsługa linków
document.querySelectorAll('.navbar_nav-link, .navbar_dropdown-link, #home-img').forEach(el => {
	el.addEventListener('click', () => {
		const targetUrl = el.getAttribute('href') || ''

		if (targetUrl.includes('#')) {
			closeMenu()
		} else {
			// Jeśli przechodzimy na inną stronę, resetujemy stan wizualny
			document.querySelectorAll('.navbar_dropdown-menu').forEach(m => m.classList.remove('slide-left'))
			navContainer.classList.remove('sub-menu-active')
		}
	})
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
	{ passive: true },
)

document.addEventListener('DOMContentLoaded', function () {
	const tables = document.querySelectorAll('.table')

	function checkTableOverflow() {
		tables.forEach(table => {
			// Sprawdza, czy treść w środku jest szersza niż sam kontener .table
			if (table.scrollWidth > table.clientWidth) {
				table.classList.add('is-overflowing')
			} else {
				table.classList.remove('is-overflowing')
			}
		})
	}

	// Uruchom przy załadowaniu strony
	checkTableOverflow()

	// Uruchom ponownie, jeśli użytkownik zmieni rozmiar okna lub obróci ekran
	window.addEventListener('resize', checkTableOverflow)
})

document.getElementById('year').textContent = new Date().getFullYear()