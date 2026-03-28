import 'svelte/internal/disclose-version';

SvelteImageDemo[$.FILENAME] = 'src/frontend/svelte/pages/SvelteImageDemo.js';

import * as $ from 'svelte/internal/client';
import Image from "@absolutejs/absolute/svelte/components/Image.js";
import Nav from "../components/Nav.js";

var root = $.add_locations(
	$.from_html(
		`<!> <main><div class="page-title"><img src="/assets/svg/svelte-logo.svg" height="32" alt="Svelte"/> <h1>Svelte</h1> <span class="badge">Image Optimization</span></div> <h2 class="section-title">Responsive Images</h2> <p class="section-desc">Each image below uses the &lt;Image&gt; component with width, height, and
    sizes. The component generates responsive srcset attributes and serves
    optimized images through the /_absolute/image endpoint.</p> <div class="image-grid"><div class="image-card"><div class="image-wrapper"><!></div> <div class="card-body"><div class="card-title">Landscape</div> <div class="card-desc">1200×800 with responsive sizes. Browser picks the best variant.</div></div> <div class="card-meta"><span>src: <code>/assets/jpg/landscape.jpg</code></span></div></div> <div class="image-card"><div class="image-wrapper"><!></div> <div class="card-body"><div class="card-title">Portrait</div> <div class="card-desc">600×900 portrait orientation. Aspect ratio preserved via width/height.</div></div> <div class="card-meta"><span>src: <code>/assets/jpg/portrait.jpg</code></span></div></div> <div class="image-card"><div class="image-wrapper"><!></div> <div class="card-body"><div class="card-title">Square</div> <div class="card-desc">800×800 square image. CLS prevented by width/height attributes.</div></div> <div class="card-meta"><span>src: <code>/assets/jpg/square.jpg</code></span></div></div></div> <h2 class="section-title">Priority (Preloaded)</h2> <p class="section-desc">This image has priority=true which adds a &lt;link rel="preload"&gt; tag
    and sets loading="eager" + fetchPriority="high" for above-the-fold images.</p> <div class="image-grid"><div class="image-card"><div class="image-wrapper"><!></div> <div class="card-body"><div class="card-title">Priority Image</div> <div class="card-desc">Preloaded with &lt;link rel="preload"&gt;. Check the network tab
          — this loads before other images.</div></div> <div class="card-meta"><span>priority: <code>true</code></span></div></div></div> <h2 class="section-title">Fill Mode</h2> <p class="section-desc">Fill mode makes the image fill its parent container with object-fit: cover.
    No width/height needed — the parent controls the dimensions.</p> <div class="fill-demo"><!></div> <h2 class="section-title">Unoptimized</h2> <p class="section-desc">Setting unoptimized=true bypasses the optimization endpoint entirely.
    The original image is served as-is.</p> <div class="image-grid"><div class="image-card"><div class="image-wrapper"><!></div> <div class="card-body"><div class="card-title">Unoptimized</div> <div class="card-desc">Original JPG served directly. No srcset, no format conversion.</div></div> <div class="card-meta"><span>unoptimized: <code>true</code></span></div></div></div> <p class="footer"><img src="/assets/png/absolutejs-temp.png" alt=""/> Powered by <a href="https://absolutejs.com" target="_blank" rel="noopener noreferrer">AbsoluteJS</a></p></main>`,
		1
	),
	SvelteImageDemo[$.FILENAME],
	[
		[
			14,
			0,
			[
				[15, 2, [[16, 4], [17, 4], [18, 4]]],
				[21, 2],
				[22, 2],
				[
					28,
					2,
					[
						[
							29,
							4,
							[
								[30, 6],
								[39, 6, [[40, 8], [41, 8]]],
								[45, 6, [[46, 8, [[46, 19]]]]]
							]
						],

						[
							50,
							4,
							[
								[51, 6],
								[60, 6, [[61, 8], [62, 8]]],
								[66, 6, [[67, 8, [[67, 19]]]]]
							]
						],

						[
							71,
							4,
							[
								[72, 6],
								[81, 6, [[82, 8], [83, 8]]],
								[87, 6, [[88, 8, [[88, 19]]]]]
							]
						]
					]
				],
				[93, 2],
				[94, 2],
				[
					99,
					2,
					[
						[
							100,
							4,
							[
								[101, 6],
								[111, 6, [[112, 8], [113, 8]]],
								[118, 6, [[119, 8, [[119, 24]]]]]
							]
						]
					]
				],
				[124, 2],
				[125, 2],
				[130, 2],
				[139, 2],
				[140, 2],
				[
					145,
					2,
					[
						[
							146,
							4,
							[
								[147, 6],
								[156, 6, [[157, 8], [158, 8]]],
								[162, 6, [[163, 8, [[163, 27]]]]]
							]
						]
					]
				],
				[168, 2, [[169, 4], [171, 4]]]
			]
		]
	]
);

function SvelteImageDemo($$anchor, $$props) {
	$.check_target(new.target);
	$.push($$props, true, SvelteImageDemo);

	var $$exports = { ...$.legacy_api() };
	var fragment = root();
	var node = $.first_child(fragment);

	$.add_svelte_meta(
		() => Nav(node, {
			get cssPath() {
				return $$props.cssPath;
			}
		}),
		'component',
		SvelteImageDemo,
		12,
		0,
		{ componentTag: 'Nav' }
	);

	var main = $.sibling(node, 2);
	var div = $.sibling($.child(main), 6);
	var div_1 = $.child(div);
	var div_2 = $.child(div_1);
	var node_1 = $.child(div_2);

	$.add_svelte_meta(
		() => Image(node_1, {
			alt: 'Landscape photo',
			height: 800,
			sizes: '(max-width: 640px) 100vw, 340px',
			src: '/assets/jpg/landscape.jpg',
			width: 1200
		}),
		'component',
		SvelteImageDemo,
		31,
		8,
		{ componentTag: 'Image' }
	);

	$.reset(div_2);
	$.next(4);
	$.reset(div_1);

	var div_3 = $.sibling(div_1, 2);
	var div_4 = $.child(div_3);
	var node_2 = $.child(div_4);

	$.add_svelte_meta(
		() => Image(node_2, {
			alt: 'Portrait photo',
			height: 900,
			sizes: '(max-width: 640px) 100vw, 340px',
			src: '/assets/jpg/portrait.jpg',
			width: 600
		}),
		'component',
		SvelteImageDemo,
		52,
		8,
		{ componentTag: 'Image' }
	);

	$.reset(div_4);
	$.next(4);
	$.reset(div_3);

	var div_5 = $.sibling(div_3, 2);
	var div_6 = $.child(div_5);
	var node_3 = $.child(div_6);

	$.add_svelte_meta(
		() => Image(node_3, {
			alt: 'Square photo',
			height: 800,
			sizes: '(max-width: 640px) 100vw, 340px',
			src: '/assets/jpg/square.jpg',
			width: 800
		}),
		'component',
		SvelteImageDemo,
		73,
		8,
		{ componentTag: 'Image' }
	);

	$.reset(div_6);
	$.next(4);
	$.reset(div_5);
	$.reset(div);

	var div_7 = $.sibling(div, 6);
	var div_8 = $.child(div_7);
	var div_9 = $.child(div_8);
	var node_4 = $.child(div_9);

	$.add_svelte_meta(
		() => Image(node_4, {
			alt: 'Priority landscape',
			height: 800,
			priority: true,
			sizes: '(max-width: 640px) 100vw, 50vw',
			src: '/assets/jpg/landscape.jpg',
			width: 1200
		}),
		'component',
		SvelteImageDemo,
		102,
		8,
		{ componentTag: 'Image' }
	);

	$.reset(div_9);
	$.next(4);
	$.reset(div_8);
	$.reset(div_7);

	var div_10 = $.sibling(div_7, 6);
	var node_5 = $.child(div_10);

	$.add_svelte_meta(
		() => Image(node_5, {
			alt: 'Fill mode landscape',
			fill: true,
			sizes: '100vw',
			src: '/assets/jpg/landscape.jpg'
		}),
		'component',
		SvelteImageDemo,
		131,
		4,
		{ componentTag: 'Image' }
	);

	$.reset(div_10);

	var div_11 = $.sibling(div_10, 6);
	var div_12 = $.child(div_11);
	var div_13 = $.child(div_12);
	var node_6 = $.child(div_13);

	$.add_svelte_meta(
		() => Image(node_6, {
			alt: 'Unoptimized square',
			height: 800,
			src: '/assets/jpg/square.jpg',
			unoptimized: true,
			width: 800
		}),
		'component',
		SvelteImageDemo,
		148,
		8,
		{ componentTag: 'Image' }
	);

	$.reset(div_13);
	$.next(4);
	$.reset(div_12);
	$.reset(div_11);
	$.next(2);
	$.reset(main);
	$.append($$anchor, fragment);

	return $.pop($$exports);
}

if (typeof window !== "undefined") {
  if (!window.__SVELTE_HMR_ACCEPT__) window.__SVELTE_HMR_ACCEPT__ = {};
  var __hmr_accept = function(cb) { window.__SVELTE_HMR_ACCEPT__["/@src/src/frontend/svelte/pages/SvelteImageDemo.svelte"] = cb; };
	SvelteImageDemo = $.hmr(SvelteImageDemo);

	__hmr_accept((module) => {
		SvelteImageDemo[$.HMR].update(module.default);
	});
}

export default SvelteImageDemo;