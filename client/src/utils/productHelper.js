export const getUniqueProducts = (products, key) => {
  const productWithImages = products
    .filter(product => product.mainImageHref !== null)

  const unique = productWithImages
    .map(product => product[key])
    .map((product, index, final) => final.indexOf(product) === index && index)
    .filter((product) => products[product])
    .map(product => productWithImages[product])

  return unique
}
