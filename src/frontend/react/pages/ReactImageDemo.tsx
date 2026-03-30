import { Image } from "../components/Image";
import { Head } from "../components/Head";
import { Nav } from "../components/Nav";

type ImageDemoProps = {
  cssPath?: string;
};

type ImageCardProps = {
  alt: string;
  description: string;
  height?: number;
  metaLabel: string;
  metaValue: string;
  priority?: boolean;
  sizes?: string;
  src: string;
  title: string;
  unoptimized?: boolean;
  width?: number;
};

const ImageCard = ({
  alt,
  description,
  height,
  metaLabel,
  metaValue,
  priority,
  sizes,
  src,
  title,
  unoptimized,
  width,
}: ImageCardProps) => (
  <div className="image-card">
    <div className="image-wrapper">
      <Image
        alt={alt}
        height={height}
        priority={priority}
        sizes={sizes}
        src={src}
        unoptimized={unoptimized}
        width={width}
      />
    </div>
    <div className="card-body">
      <div className="card-title">{title}</div>
      <div className="card-desc">{description}</div>
    </div>
    <div className="card-meta">
      <span>
        {metaLabel}: <code>{metaValue}</code>
      </span>
    </div>
  </div>
);

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
      <ImageCard
        alt="Landscape photo"
        description="1200×800 with responsive sizes. Browser picks the best variant."
        height={800}
        metaLabel="src"
        metaValue="/assets/jpg/landscape.jpg"
        sizes="(max-width: 640px) 100vw, 340px"
        src="/assets/jpg/landscape.jpg"
        title="Landscape"
        width={1200}
      />

      <ImageCard
        alt="Portrait photo"
        description="600×900 portrait orientation. Aspect ratio preserved via width/height."
        height={900}
        metaLabel="src"
        metaValue="/assets/jpg/portrait.jpg"
        sizes="(max-width: 640px) 100vw, 340px"
        src="/assets/jpg/portrait.jpg"
        title="Portrait"
        width={600}
      />

      <ImageCard
        alt="Square photo"
        description="800×800 square image. CLS prevented by width/height attributes."
        height={800}
        metaLabel="src"
        metaValue="/assets/jpg/square.jpg"
        sizes="(max-width: 640px) 100vw, 340px"
        src="/assets/jpg/square.jpg"
        title="Square"
        width={800}
      />
    </div>

    <h2 className="section-title">Priority (Preloaded)</h2>
    <p className="section-desc">
      This image has priority=true which adds a {'<link rel="preload">'} tag and
      sets loading="eager" + fetchPriority="high" for above-the-fold images.
    </p>

    <div className="image-grid">
      <ImageCard
        alt="Priority landscape"
        description={`Preloaded with <link rel="preload">. Check the network tab — this loads before other images.`}
        height={800}
        metaLabel="priority"
        metaValue="true"
        priority
        sizes="(max-width: 640px) 100vw, 50vw"
        src="/assets/jpg/landscape.jpg"
        title="Priority Image"
        width={1200}
      />
    </div>

    <h2 className="section-title">Fill Mode</h2>
    <p className="section-desc">
      Fill mode makes the image fill its parent container with object-fit:
      cover. No width/height needed — the parent controls the dimensions.
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
      Setting unoptimized=true bypasses the optimization endpoint entirely. The
      original image is served as-is — useful for SVGs or already-optimized
      images.
    </p>

    <div className="image-grid">
      <ImageCard
        alt="Unoptimized square"
        description="Original JPG served directly. No srcset, no format conversion."
        height={800}
        metaLabel="unoptimized"
        metaValue="true"
        src="/assets/jpg/square.jpg"
        title="Unoptimized"
        unoptimized
        width={800}
      />
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
