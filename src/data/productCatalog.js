import products from "./products.json";

export const getProductById = (id) => products.find((p) => p.id === id);

/** All products in catalog order — same titles/descriptions as products.json */
export const allCatalogProducts = products;

/** Homepage product cards — every product from products.json, no renamed aliases */
export const showcaseProducts = products.map((p) => ({
  id: p.id,
  title: p.title,
  specs: p.cardSpecs,
  description: p.description,
  image: p.image,
}));
