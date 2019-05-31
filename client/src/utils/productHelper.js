export const getUniqueProducts = (products, key) => {
  const unique = products
    .map(product => product[key])
    .map((product, index, final) => final.indexOf(product) === index && index)
    .filter((product) => products[product]).map(product => products[product])

  return unique
}
