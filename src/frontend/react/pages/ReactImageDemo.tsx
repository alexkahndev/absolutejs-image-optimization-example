import { Image } from "@absolutejs/absolute/react/components";
import { Head } from "../components/Head";
import { Nav } from "../components/Nav";

type ImageDemoProps = {
  cssPath?: string;
};

const ImageDemoApp = () => (
  <main>
    <div className="page-title">
      <img alt="React" height={32} src="/assets/svg/react.svg" />
      <h1>React</h1>
      <span className="badge">Image Optimization</span>
    </div>

    <h2 className="section-title">Responsive Images</h2>
    <p className="section-desc">
      Each image below uses the {"<Image>"} component with width, height, and
      sizes. The component generates responsive srcset attributes and serves
      optimized images through the /_absolute/image endpoint.
    </p>

    <div className="image-grid">
      <div className="image-card">
        <div className="image-wrapper">
          <Image
            alt="Landscape photo"
            height={800}
            sizes="(max-width: 640px) 100vw, 340px"
            src="/assets/jpg/landscape.jpg"
            width={1200}
          />
        </div>
        <div className="card-body">
          <div className="card-title">Landscape</div>
          <div className="card-desc">
            1200×800 with responsive sizes. Browser picks the best variant.
          </div>
        </div>
        <div className="card-meta">
          <span>
            src: <code>/assets/jpg/landscape.jpg</code>
          </span>
        </div>
      </div>

      <div className="image-card">
        <div className="image-wrapper">
          <Image
            alt="Portrait photo"
            height={900}
            sizes="(max-width: 640px) 100vw, 340px"
            src="/assets/jpg/portrait.jpg"
            width={600}
          />
        </div>
        <div className="card-body">
          <div className="card-title">Portrait</div>
          <div className="card-desc">
            600×900 portrait orientation. Aspect ratio preserved via width/height.
          </div>
        </div>
        <div className="card-meta">
          <span>
            src: <code>/assets/jpg/portrait.jpg</code>
          </span>
        </div>
      </div>

      <div className="image-card">
        <div className="image-wrapper">
          <Image
            alt="Square photo"
            height={800}
            sizes="(max-width: 640px) 100vw, 340px"
            src="/assets/jpg/square.jpg"
            width={800}
          />
        </div>
        <div className="card-body">
          <div className="card-title">Square</div>
          <div className="card-desc">
            800×800 square image. CLS prevented by width/height attributes.
          </div>
        </div>
        <div className="card-meta">
          <span>
            src: <code>/assets/jpg/square.jpg</code>
          </span>
        </div>
      </div>
    </div>

    <h2 className="section-title">Priority (Preloaded)</h2>
    <p className="section-desc">
      This image has priority=true which adds a {"<link rel=\"preload\">"} tag
      and sets loading="eager" + fetchPriority="high" for above-the-fold images.
    </p>

    <div className="image-grid">
      <div className="image-card">
        <div className="image-wrapper">
          <Image
            alt="Priority landscape"
            height={800}
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
            src="/assets/jpg/landscape.jpg"
            width={1200}
          />
        </div>
        <div className="card-body">
          <div className="card-title">Priority Image</div>
          <div className="card-desc">
            Preloaded with {"<link rel=\"preload\">"}. Check the network tab
            — this loads before other images.
          </div>
        </div>
        <div className="card-meta">
          <span>
            priority: <code>true</code>
          </span>
        </div>
      </div>
    </div>

    <h2 className="section-title">Fill Mode</h2>
    <p className="section-desc">
      Fill mode makes the image fill its parent container with object-fit: cover.
      No width/height needed — the parent controls the dimensions.
    </p>

    <div className="fill-demo">
      <Image
        alt="Fill mode landscape"
        fill
        sizes="100vw"
        src="/assets/jpg/landscape.jpg"
      />
    </div>

    <h2 className="section-title">Unoptimized</h2>
    <p className="section-desc">
      Setting unoptimized=true bypasses the optimization endpoint entirely.
      The original image is served as-is — useful for SVGs or already-optimized images.
    </p>

    <div className="image-grid">
      <div className="image-card">
        <div className="image-wrapper">
          <Image
            alt="Unoptimized square"
            height={800}
            src="/assets/jpg/square.jpg"
            unoptimized
            width={800}
          />
        </div>
        <div className="card-body">
          <div className="card-title">Unoptimized</div>
          <div className="card-desc">
            Original JPG served directly. No srcset, no format conversion.
          </div>
        </div>
        <div className="card-meta">
          <span>
            unoptimized: <code>true</code>
          </span>
        </div>
      </div>
    </div>

    <p className="footer">
      <img alt="" src="/assets/png/absolutejs-temp.png" />
      Powered by{" "}
      <a
        href="https://absolutejs.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        AbsoluteJS
      </a>
    </p>
  </main>
);

export const ReactImageDemo = ({ cssPath }: ImageDemoProps) => (
  <html lang="en">
    <Head cssPath={cssPath} />
    <body>
      <Nav />
      <ImageDemoApp />
    </body>
  </html>
);
