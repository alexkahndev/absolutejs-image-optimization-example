import * as $ from 'svelte/internal/server';

export default function Nav($$renderer, $$props) {
	let { cssPath } = $$props;

	$.head('1czb8we', $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>AbsoluteJS Image Optimization - Svelte</title>`);
		});

		$$renderer.push(`<meta charset="utf-8"/> <meta name="description" content="Image optimization with Svelte, powered by AbsoluteJS."/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <link rel="icon" href="/assets/ico/favicon.ico"/> `);

		if (cssPath) {
			$$renderer.push('<!--[0-->');
			$$renderer.push(`<link rel="stylesheet" type="text/css"${$.attr('href', cssPath)}/>`);
		} else {
			$$renderer.push('<!--[-1-->');
		}

		$$renderer.push(`<!--]-->`);
	});

	$$renderer.push(`<header><a class="logo" href="/"><img alt="AbsoluteJS" height="24" src="/assets/png/absolutejs-temp.png"/> AbsoluteJS</a> <nav><a href="/">React</a> <a class="active" href="/svelte">Svelte</a> <a href="/vue">Vue</a> <a href="/angular">Angular</a> <a href="/html">HTML</a></nav></header>`);
}