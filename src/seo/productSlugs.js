/** SEO-friendly URL slugs → product id in products.json */
export const SLUG_TO_PRODUCT_ID = {
  "coir-fiber": "Coconut Fibre",
  "coir-rope": "Twisted Fibre",
  "coir-pith-blocks": "Coir Peat",
  "coco-peat-grow-bags": "Coco Grow Bags",
  "coco-chips": "Coco Chips",
  "nursery-coir-products": "Nursery",
  "rubberised-coir": "Rubberised Coir",
  "coir-garden-articles": "Garden Articles",
};

export const PRODUCT_ID_TO_SLUG = Object.fromEntries(
  Object.entries(SLUG_TO_PRODUCT_ID)
    .filter(([slug]) => slug !== "coir-mats")
    .map(([slug, id]) => [id, slug])
);

export const getProductSlug = (productId) =>
  PRODUCT_ID_TO_SLUG[productId] || null;

export const getProductPath = (productId) => {
  const slug = getProductSlug(productId);
  return slug ? `/products/${slug}` : `/products/${encodeURIComponent(productId)}`;
};

export const resolveProductId = (slugOrId) => {
  if (SLUG_TO_PRODUCT_ID[slugOrId]) return SLUG_TO_PRODUCT_ID[slugOrId];
  try {
    return decodeURIComponent(slugOrId);
  } catch {
    return slugOrId;
  }
};

export const ALL_PRODUCT_SLUGS = [
  "coir-fiber",
  "coir-rope",
  "coir-pith-blocks",
  "coco-peat-grow-bags",
  "coco-chips",
  "nursery-coir-products",
  "rubberised-coir",
  "coir-garden-articles",
];
