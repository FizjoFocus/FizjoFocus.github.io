const hotspotLinks = {
	glowa: '/dolegliwosci/rehabilitacja-glowy-i-karku-wroclaw/',

	kregoslup: '/dolegliwosci/rehabilitacja-kregoslupa-wroclaw/',

	bark_p: '/dolegliwosci/rehabilitacja-barku-i-lokcia-wroclaw/',
	bark_l: '/dolegliwosci/rehabilitacja-barku-i-lokcia-wroclaw/',

	lokiec_p: '/dolegliwosci/rehabilitacja-barku-i-lokcia-wroclaw/',
	lokiec_l: '/dolegliwosci/rehabilitacja-barku-i-lokcia-wroclaw/',

	reka_p: '/dolegliwosci/rehabilitacja-reki-wroclaw/',
	reka_l: '/dolegliwosci/rehabilitacja-reki-wroclaw/',

	miednica: '/dolegliwosci/rehabilitacja-biodra-i-miednicy-wroclaw/',

	kolano_p: '/dolegliwosci/rehabilitacja-kolana-wroclaw/',
	kolano_l: '/dolegliwosci/rehabilitacja-kolana-wroclaw/',

	stopa_p: '/dolegliwosci/rehabilitacja-stopy-i-podudzia-wroclaw/',
	stopa_l: '/dolegliwosci/rehabilitacja-stopy-i-podudzia-wroclaw/',
}

const bodyInfo = document.querySelector('.body-info')

const infoTitle = bodyInfo.querySelector('h3')
const infoText = bodyInfo.querySelector('p')
const infoLink = bodyInfo.querySelector('a')
const closeButton = document.querySelector('.body-info-close')

const bodyParts = {
	glowa: {
		title: 'Rehabilitacja głowy\u00A0i\u00A0karku',
		text: 'Terapia problemów w obrębie głowy, szyi i karku. Pomoc przy dolegliwościach bólowych oraz ograniczeniach ruchomości.',
		url: '/dolegliwosci/rehabilitacja-glowy-i-karku-wroclaw/',
	},

	kregoslup: {
		title: 'Rehabilitacja kręgosłupa',
		text: 'Terapia bólu kręgosłupa, przeciążeń oraz problemów związanych z ograniczoną ruchomością.',
		url: '/dolegliwosci/rehabilitacja-kregoslupa-wroclaw/',
	},

	bark_p: {
		title: 'Rehabilitacja barku\u00A0i\u00A0łokcia',
		text: 'Pomoc przy bólu barku, ograniczeniu ruchu, przeciążeniach oraz urazach kończyny górnej.',
		url: '/dolegliwosci/rehabilitacja-barku-i-lokcia-wroclaw/',
	},

	bark_l: {
		title: 'Rehabilitacja barku\u00A0i\u00A0łokcia',
		text: 'Pomoc przy bólu barku, ograniczeniu ruchu, przeciążeniach oraz urazach kończyny górnej.',
		url: '/dolegliwosci/rehabilitacja-barku-i-lokcia-wroclaw/',
	},

	lokiec_p: {
		title: 'Rehabilitacja barku\u00A0i\u00A0łokcia',
		text: 'Terapia dolegliwości łokcia, przeciążeń oraz urazów narządu ruchu.',
		url: '/dolegliwosci/rehabilitacja-barku-i-lokcia-wroclaw/',
	},

	lokiec_l: {
		title: 'Rehabilitacja barku\u00A0i\u00A0łokcia',
		text: 'Terapia dolegliwości łokcia, przeciążeń oraz urazów narządu ruchu.',
		url: '/dolegliwosci/rehabilitacja-barku-i-lokcia-wroclaw/',
	},

	reka_p: {
		title: 'Rehabilitacja ręki',
		text: 'Terapia problemów dłoni, nadgarstka oraz pozostałych struktur kończyny górnej.',
		url: '/dolegliwosci/rehabilitacja-reki-wroclaw/',
	},

	reka_l: {
		title: 'Rehabilitacja ręki',
		text: 'Terapia problemów dłoni, nadgarstka oraz pozostałych struktur kończyny górnej.',
		url: '/dolegliwosci/rehabilitacja-reki-wroclaw/',
	},

	miednica: {
		title: 'Rehabilitacja biodra\u00A0i\u00A0miednicy',
		text: 'Terapia dolegliwości biodra, miednicy oraz okolicznych struktur odpowiedzialnych za ruch.',
		url: '/dolegliwosci/rehabilitacja-biodra-i-miednicy-wroclaw/',
	},

	kolano_p: {
		title: 'Rehabilitacja kolana',
		text: 'Pomoc przy bólu kolana, urazach, przeciążeniach oraz ograniczeniach funkcji kończyny dolnej.',
		url: '/dolegliwosci/rehabilitacja-kolana-wroclaw/',
	},

	kolano_l: {
		title: 'Rehabilitacja kolana',
		text: 'Pomoc przy bólu kolana, urazach, przeciążeniach oraz ograniczeniach funkcji kończyny dolnej.',
		url: '/dolegliwosci/rehabilitacja-kolana-wroclaw/',
	},

	stopa_p: {
		title: 'Rehabilitacja stopy\u00A0i\u00A0podudzia',
		text: 'Terapia problemów stopy, stawu skokowego oraz podudzia.',
		url: '/dolegliwosci/rehabilitacja-stopy-i-podudzia-wroclaw/',
	},

	stopa_l: {
		title: 'Rehabilitacja stopy\u00A0i\u00A0podudzia',
		text: 'Terapia problemów stopy, stawu skokowego oraz podudzia.',
		url: '/dolegliwosci/rehabilitacja-stopy-i-podudzia-wroclaw/',
	},
}

Object.entries(bodyParts).forEach(([id, data]) => {
	const hotspot = document.querySelector(`#${id}`)

	if (!hotspot) {
		console.warn(`Nie znaleziono: ${id}`)
		return
	}

	hotspot.addEventListener('click', () => {
		if (window.innerWidth >= 900) {
			window.location.href = data.url
			return
		}

		infoTitle.textContent = data.title
		infoText.textContent = data.text
		infoLink.href = data.url

		bodyInfo.classList.add('active')
	})
})

document.addEventListener('click', e => {
	if (!e.target.closest('.hotspot') && !e.target.closest('.body-info')) {
		bodyInfo.classList.remove('active')
	}
})

closeButton.addEventListener('click', () => {
	bodyInfo.classList.remove('active')
})

const regions = {
	glowa: ['glowa'],

	kregoslup: ['kregoslup'],

	bark: ['bark_p', 'bark_l', 'lokiec_p', 'lokiec_l'],

	reka: ['reka_p', 'reka_l'],

	miednica: ['miednica'],

	kolano: ['kolano_p', 'kolano_l'],

	stopa: ['stopa_p', 'stopa_l'],
}

document.querySelectorAll('.body-links a').forEach(link => {
	link.addEventListener('mouseenter', () => {
		const region = link.dataset.region

		regions[region].forEach(id => {
			document.getElementById(id)?.classList.add('active')
		})

		link.classList.add('active')
	})

	link.addEventListener('mouseleave', () => {
		const region = link.dataset.region

		regions[region].forEach(id => {
			document.getElementById(id)?.classList.remove('active')
		})

		link.classList.remove('active')
	})
})

Object.entries(regions).forEach(([region, ids]) => {
	ids.forEach(id => {
		const hotspot = document.getElementById(id)

		hotspot?.addEventListener('mouseenter', () => {
			document.querySelector(`[data-region="${region}"]`)?.classList.add('active')
		})

		hotspot?.addEventListener('mouseleave', () => {
			document.querySelector(`[data-region="${region}"]`)?.classList.remove('active')
		})
	})
})
