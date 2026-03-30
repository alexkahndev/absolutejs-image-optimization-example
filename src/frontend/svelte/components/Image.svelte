<script lang="ts">
  import {
    buildOptimizedUrl,
    generateSrcSet,
    generateBlurSvg,
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
    placeholder?: "blur" | "empty" | string;
    blurDataURL?: string;
    className?: string;
  };

  let {
    src,
    alt,
    width,
    height,
    fill,
    quality = DEFAULT_QUALITY,
    sizes,
    unoptimized,
    loading,
    priority,
    placeholder,
    blurDataURL,
    className,
  }: ImageProps = $props();

  const resolvedSrc = $derived.by(() => {
    if (unoptimized) return src;
    if (!width) return buildOptimizedUrl(src, 0, quality);

    return buildOptimizedUrl(src, width, quality);
  });

  const srcSet = $derived(
    unoptimized
      ? undefined
      : generateSrcSet(src, width, sizes, undefined, undefined),
  );

  const resolvedSizes = $derived(sizes ?? (fill ? "100vw" : undefined));
  const resolvedLoading = $derived(priority ? "eager" : (loading ?? "lazy"));
  const resolvedFetchPriority = $derived(priority ? "high" : undefined);

  const hasBlur = $derived(
    placeholder === "blur" ||
      (typeof placeholder === "string" &&
        placeholder !== "empty" &&
        placeholder.startsWith("data:")),
  );

  const blurBackground = $derived.by(() => {
    if (!hasBlur) return undefined;
    if (
      typeof placeholder === "string" &&
      placeholder !== "blur" &&
      placeholder.startsWith("data:")
    ) {
      return generateBlurSvg(placeholder);
    }
    if (blurDataURL) return generateBlurSvg(blurDataURL);

    return undefined;
  });

  const imgStyle = $derived.by(() => {
    const parts: string[] = ["color:transparent"];
    if (blurBackground) {
      parts.push(`background-image:${blurBackground}`);
      parts.push("background-size:cover");
      parts.push("background-position:center");
      parts.push("background-repeat:no-repeat");
    }
    if (fill) {
      parts.push("position:absolute");
      parts.push("height:100%");
      parts.push("width:100%");
      parts.push("inset:0");
      parts.push("object-fit:cover");
    }

    return parts.join(";");
  });

  const handleLoad = (event: Event) => {
    if (blurBackground) {
      const target = event.target;
      if (target instanceof HTMLImageElement) {
        target.style.backgroundImage = "none";
      }
    }
  };
</script>

{#if fill}
  <span
    style="position:relative;overflow:hidden;display:block;width:100%;height:100%"
  >
    <img
      {alt}
      src={resolvedSrc}
      srcset={srcSet}
      sizes={resolvedSizes}
      loading={resolvedLoading}
      class={className}
      style={imgStyle}
      fetchpriority={resolvedFetchPriority}
      decoding="async"
      onload={handleLoad}
    />
  </span>
{:else}
  <img
    {alt}
    src={resolvedSrc}
    srcset={srcSet}
    sizes={resolvedSizes}
    {width}
    {height}
    loading={resolvedLoading}
    class={className}
    style={imgStyle}
    fetchpriority={resolvedFetchPriority}
    decoding="async"
    onload={handleLoad}
  />
{/if}
