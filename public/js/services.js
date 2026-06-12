// NAWIGACJA

const burger = document.getElementById('nav-icon2')
const navContainer = document.querySelector('.navbar_nav-container')
const navList = document.querySelector('.navbar_nav')
const dropdownBtn = document.querySelector('.navbar_dropdown-btn')
const backBtn = document.querySelector('.navbar_dropdown-back-btn')

// Funkcja cofająca przesunięcie menu mobilnego (czyszczenie stanu)
const resetMenuSliding = () => {
	navList.classList.remove('slide-left')
}

// Funkcja zamykająca całe menu po kliknięciu w link końcowy lub logo
const closeMenu = () => {
	navContainer.classList.remove('show-menu')
	burger?.classList.remove('open')
	resetMenuSliding()
}

// Otwieranie / Zamykanie menu przez burgera
burger?.addEventListener('click', () => {
	burger.classList.toggle('open')
	navContainer.classList.toggle('show-menu')

	// Reset pozycji menu przy całkowitym zamknięciu
	if (!navContainer.classList.contains('show-menu')) {
		resetMenuSliding()
	}
})

// Inteligentne kliknięcie w "metody" (link-przycisk)
dropdownBtn?.addEventListener('click', e => {
	if (window.innerWidth < 768) {
		// Na telefonie: jeśli podmenu NIE jest jeszcze otwarte, zablokuj skok do sekcji i wysuń podmenu
		if (!navList.classList.contains('slide-left')) {
			e.preventDefault()
			navList.classList.add('slide-left')
		} else {
			// Na telefonie: jeśli podmenu BYŁO już otwarte i użytkownik kliknął "metody" ponownie
			// Jeśli jesteśmy na podstronie, pozwalamy mu przejść do index.php#services bez animacji zamykania
			if (
				window.location.pathname.includes('index.php') ||
				window.location.pathname === '/' ||
				window.location.pathname.endsWith('/')
			) {
				closeMenu()
			}
		}
	} else {
		// Na komputerze (desktop): zamykamy menu tylko jeśli nawigujemy w obrębie tej samej strony
		if (
			window.location.pathname.includes('index.php') ||
			window.location.pathname === '/' ||
			window.location.pathname.endsWith('/')
		) {
			closeMenu()
		}
	}
})

// Kliknięcie w "Wróć" -> przesuń w prawo do menu głównego (tylko do 768px)
backBtn?.addEventListener('click', () => {
	if (window.innerWidth < 768) {
		navList.classList.remove('slide-left')
	}
})

// Rejestracja zdarzeń dla wszystkich standardowych linków, podlinków oraz logo
document.querySelectorAll('.navbar_nav-link, .navbar_dropdown-link, #home-img').forEach(el => {
	el.addEventListener('click', e => {
		const targetUrl = el.getAttribute('href')
		const currentPath = window.location.pathname

		// Sprawdzamy, czy jesteśmy na stronie głównej (index.php lub czysty ukośnik '/')
		const isHomePage = currentPath.includes('index.php') || currentPath === '/' || currentPath.endsWith('/')

		if (targetUrl.includes('#') && !targetUrl.startsWith('index.php')) {
			// Link to zwykła kotwica (np. na podstronie) -> zamknij menu płynnie
			closeMenu()
		} else if (targetUrl.startsWith('index.php#') && isHomePage) {
			// Jesteśmy na głównej i link kieruje na główną -> zamknij menu, żeby zobaczyć płynny scroll
			closeMenu()
		} else {
			// Przechodzimy na zupełnie inną stronę (np. z podstrony na główną albo odwrotnie).
			// NIE zamykamy menu skryptem, pozwalamy przeglądarce natychmiast przeładować stronę.
			// Po przeładowaniu nowa strona i tak wyrenderuje się z zamkniętym menu.
			resetMenuSliding()
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
