export async function getProductTitle(productId) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}/`);
    const data = await response.json();
    return data.title;
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
}
