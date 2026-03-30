<script setup lang="ts">
import { computed, ref } from "vue";
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

const props = withDefaults(defineProps<ImageProps>(), {
  quality: DEFAULT_QUALITY,
  loading: "lazy",
});

const blurRemoved = ref(false);

const resolvedSrc = computed(() => {
  if (props.unoptimized) return props.src;
  if (!props.width) return buildOptimizedUrl(props.src, 0, props.quality);

  return buildOptimizedUrl(props.src, props.width, props.quality);
});

const srcSet = computed(() =>
  props.unoptimized
    ? undefined
    : generateSrcSet(props.src, props.width, props.sizes, undefined, undefined),
);

const resolvedSizes = computed(
  () => props.sizes ?? (props.fill ? "100vw" : undefined),
);
const resolvedLoading = computed(() =>
  props.priority ? "eager" : props.loading,
);
const resolvedFetchPriority = computed(() =>
  props.priority ? "high" : undefined,
);

const hasBlur = computed(
  () =>
    props.placeholder === "blur" ||
    (typeof props.placeholder === "string" &&
      props.placeholder !== "empty" &&
      props.placeholder.startsWith("data:")),
);

const blurBackground = computed(() => {
  if (!hasBlur.value || blurRemoved.value) return undefined;
  if (
    typeof props.placeholder === "string" &&
    props.placeholder !== "blur" &&
    props.placeholder.startsWith("data:")
  ) {
    return generateBlurSvg(props.placeholder);
  }
  if (props.blurDataURL) return generateBlurSvg(props.blurDataURL);

  return undefined;
});

const imgStyle = computed(() => {
  const base: Record<string, string | number> = { color: "transparent" };
  if (blurBackground.value) {
    base.backgroundImage = blurBackground.value;
    base.backgroundSize = "cover";
    base.backgroundPosition = "center";
    base.backgroundRepeat = "no-repeat";
  }
  if (props.fill) {
    base.height = "100%";
    base.inset = "0";
    base.objectFit = "cover";
    base.position = "absolute";
    base.width = "100%";
  }

  return base;
});

const handleLoad = () => {
  blurRemoved.value = true;
};
</script>

<template>
  <span
    v-if="fill"
    style="
      position: relative;
      overflow: hidden;
      display: block;
      width: 100%;
      height: 100%;
    "
  >
    <img
      :alt="alt"
      :src="resolvedSrc"
      :srcset="srcSet"
      :sizes="resolvedSizes"
      :loading="resolvedLoading"
      :class="className"
      :style="imgStyle"
      :fetchpriority="resolvedFetchPriority"
      decoding="async"
      @load="handleLoad"
    />
  </span>

  <img
    v-else
    :alt="alt"
    :src="resolvedSrc"
    :srcset="srcSet"
    :sizes="resolvedSizes"
    :width="width"
    :height="height"
    :loading="resolvedLoading"
    :class="className"
    :style="imgStyle"
    :fetchpriority="resolvedFetchPriority"
    decoding="async"
    @load="handleLoad"
  />
</template>
