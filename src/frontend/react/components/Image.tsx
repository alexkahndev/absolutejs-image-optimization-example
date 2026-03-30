import {
  buildOptimizedUrl,
  generateSrcSet,
  DEFAULT_QUALITY,
} from "../../shared/imageUtils";

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  quality?: number;
  sizes?: string;
  unoptimized?: boolean;
  loading?: "lazy" | "eager";
  priority?: boolean;
  className?: string;
};

const resolveSource = (
  src: string,
  unoptimized: boolean | undefined,
  width: number | undefined,
  quality: number,
) => {
  if (unoptimized) return src;
  if (!width) return buildOptimizedUrl(src, 0, quality);

  return buildOptimizedUrl(src, width, quality);
};

export const Image = ({
  alt,
  className,
  fill,
  height,
  loading,
  priority,
  quality = DEFAULT_QUALITY,
  sizes,
  src,
  unoptimized,
  width,
}: ImageProps) => {
  const resolvedSrc = resolveSource(src, unoptimized, width, quality);

  const srcSet = unoptimized ? undefined : generateSrcSet(src, width, sizes);

  const resolvedSizes = sizes ?? (fill ? "100vw" : undefined);
  const resolvedLoading = priority ? "eager" : (loading ?? "lazy");
  const resolvedFetchPriority = priority ? "high" : undefined;

  const imgStyle: Record<string, string | number> = {
    color: "transparent",
    ...(fill
      ? {
          height: "100%",
          inset: 0,
          objectFit: "cover",
          position: "absolute",
          width: "100%",
        }
      : {}),
  };

  const preloadLink = priority ? (
    <link
      as="image"
      href={resolvedSrc}
      imageSizes={resolvedSizes}
      imageSrcSet={srcSet}
      rel="preload"
    />
  ) : null;

  const imgElement = (
    <img
      alt={alt}
      className={className}
      decoding="async"
      fetchPriority={resolvedFetchPriority}
      height={fill ? undefined : height}
      loading={resolvedLoading}
      sizes={resolvedSizes}
      src={resolvedSrc}
      srcSet={srcSet}
      style={imgStyle}
      width={fill ? undefined : width}
    />
  );

  if (fill) {
    return (
      <>
        {preloadLink}
        <span
          style={{
            display: "block",
            height: "100%",
            overflow: "hidden",
            position: "relative",
            width: "100%",
          }}
        >
          {imgElement}
        </span>
      </>
    );
  }

  return (
    <>
      {preloadLink}
      {imgElement}
    </>
  );
};
