import { __legacyDecorateClassTS as __legacyDecorateClassTS_3r173x8m } from "bun:wrap";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

export class AngularImageDemoComponent {
}
AngularImageDemoComponent = __legacyDecorateClassTS_3r173x8m([
  Component({
    imports: [CommonModule],
    selector: "angular-page",
    standalone: true,
    template: `<header>
  <a href="/" class="logo">
    <img src="/assets/png/absolutejs-temp.png" height="24" alt="AbsoluteJS" />
    AbsoluteJS
  </a>
  <nav>
    <a href="/">React</a>
    <a href="/svelte">Svelte</a>
    <a href="/vue">Vue</a>
    <a href="/angular" class="active">Angular</a>
    <a href="/html">HTML</a>
  </nav>
</header>

<main>
  <div class="page-title">
    <img src="/assets/svg/angular.svg" height="32" alt="Angular" />
    <h1>Angular</h1>
    <span class="badge">Image Optimization</span>
  </div>

  <h2 class="section-title">Responsive Images</h2>
  <p class="section-desc">
    Angular pages render standard &lt;img&gt; tags pointing at the /_absolute/image
    endpoint. The optimization happens server-side — the component just builds the right URLs.
  </p>

  <div class="image-grid">
    <div class="image-card">
      <div class="image-wrapper">
        <img
          alt="Landscape photo"
          src="/_absolute/image?url=%2Fassets%2Fjpg%2Flandscape.jpg&w=1200&q=75"
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="card-body">
        <div class="card-title">Landscape</div>
        <div class="card-desc">
          1200×800 served via the optimization endpoint.
        </div>
      </div>
      <div class="card-meta">
        <span>src: <code>/assets/jpg/landscape.jpg</code></span>
      </div>
    </div>

    <div class="image-card">
      <div class="image-wrapper">
        <img
          alt="Portrait photo"
          src="/_absolute/image?url=%2Fassets%2Fjpg%2Fportrait.jpg&w=640&q=75"
          width="600"
          height="900"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="card-body">
        <div class="card-title">Portrait</div>
        <div class="card-desc">
          600×900 portrait, optimized and served as WebP when supported.
        </div>
      </div>
      <div class="card-meta">
        <span>src: <code>/assets/jpg/portrait.jpg</code></span>
      </div>
    </div>

    <div class="image-card">
      <div class="image-wrapper">
        <img
          alt="Square photo"
          src="/_absolute/image?url=%2Fassets%2Fjpg%2Fsquare.jpg&w=828&q=75"
          width="800"
          height="800"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="card-body">
        <div class="card-title">Square</div>
        <div class="card-desc">
          800×800 square image. Width/height prevent layout shift.
        </div>
      </div>
      <div class="card-meta">
        <span>src: <code>/assets/jpg/square.jpg</code></span>
      </div>
    </div>
  </div>

  <h2 class="section-title">Fill Mode</h2>
  <p class="section-desc">
    Fill mode makes the image fill its parent container with object-fit: cover.
  </p>

  <div class="fill-demo">
    <img
      alt="Fill mode landscape"
      src="/_absolute/image?url=%2Fassets%2Fjpg%2Flandscape.jpg&w=1920&q=75"
      loading="lazy"
      decoding="async"
    />
  </div>

  <p class="footer">
    <img src="/assets/png/absolutejs-temp.png" alt="" />
    Powered by
    <a href="https://absolutejs.com" target="_blank" rel="noopener noreferrer">AbsoluteJS</a>
  </p>
</main>
`
  })
], AngularImageDemoComponent);
