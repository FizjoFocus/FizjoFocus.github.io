import { execFileSync } from 'node:child_process'
import { readdirSync } from 'node:fs'
import { relative, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

const SITE = 'https://www.fizjofocus.com'
const pagesDir = fileURLToPath(new URL('./src/pages', import.meta.url))

function walk(dir) {
	return readdirSync(dir, { withFileTypes: true }).flatMap(e =>
		e.isDirectory() ? walk(join(dir, e.name)) : join(dir, e.name)
	)
}

// Real commit date per page, so lastmod means something to a crawler
const lastmod = new Map()
for (const file of walk(pagesDir).filter(f => f.endsWith('.astro'))) {
	const route = relative(pagesDir, file).replaceAll('\\', '/').replace(/\.astro$/, '')
	const url = route === 'index' ? `${SITE}/` : `${SITE}/${route}/`
	try {
		const date = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
			encoding: 'utf8',
		}).trim()
		if (date) lastmod.set(url, date)
	} catch {
		// no git history available (shallow clone, tarball) — skip lastmod
	}
}

export default defineConfig({
	site: SITE,
	integrations: [
		sitemap({
			serialize: item => ({ ...item, lastmod: lastmod.get(item.url) }),
		}),
	],
})
