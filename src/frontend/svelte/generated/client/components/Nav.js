import 'svelte/internal/disclose-version';

Nav[$.FILENAME] = 'src/frontend/svelte/components/Nav.js';

import * as $ from 'svelte/internal/client';

var root_2 = $.add_locations($.from_html(`<link rel="stylesheet" type="text/css"/>`), Nav[$.FILENAME], [[16, 4]]);
var root_1 = $.add_locations($.from_html(`<meta charset="utf-8"/> <meta name="description" content="Image optimization with Svelte, powered by AbsoluteJS."/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <link rel="icon" href="/assets/ico/favicon.ico"/> <!>`, 1), Nav[$.FILENAME], [[10, 2], [12, 2], [13, 2], [14, 2]]);

var root = $.add_locations($.from_html(`<header><a class="logo" href="/"><img alt="AbsoluteJS" height="24" src="/assets/png/absolutejs-temp.png"/> AbsoluteJS</a> <nav><a href="/">React</a> <a class="active" href="/svelte">Svelte</a> <a href="/vue">Vue</a> <a href="/angular">Angular</a> <a href="/html">HTML</a></nav></header>`), Nav[$.FILENAME], [
	[
		20,
		0,
		[
			[21, 2, [[22, 4]]],
			[25, 2, [[26, 4], [27, 4], [28, 4], [29, 4], [30, 4]]]
		]
	]
]);

function Nav($$anchor, $$props) {
	$.check_target(new.target);
	$.push($$props, true, Nav);

	var $$exports = { ...$.legacy_api() };
	var header = root();

	$.head('1czb8we', ($$anchor) => {
		var fragment = root_1();
		var node = $.sibling($.first_child(fragment), 8);

		{
			var consequent = ($$anchor) => {
				var link = root_2();

				$.template_effect(() => $.set_attribute(link, 'href', $$props.cssPath));
				$.append($$anchor, link);
			};

			$.add_svelte_meta(
				() => $.if(node, ($$render) => {
					if ($$props.cssPath) $$render(consequent);
				}),
				'if',
				Nav,
				15,
				2
			);
		}

		$.effect(() => {
			$.document.title = 'AbsoluteJS Image Optimization - Svelte';
		});

		$.append($$anchor, fragment);
	});

	$.append($$anchor, header);

	return $.pop($$exports);
}

if (typeof window !== "undefined") {
  if (!window.__SVELTE_HMR_ACCEPT__) window.__SVELTE_HMR_ACCEPT__ = {};
  var __hmr_accept = function(cb) { window.__SVELTE_HMR_ACCEPT__["/@src/src/frontend/svelte/components/Nav.svelte"] = cb; };
	Nav = $.hmr(Nav);

	__hmr_accept((module) => {
		Nav[$.HMR].update(module.default);
	});
}

export default Nav;