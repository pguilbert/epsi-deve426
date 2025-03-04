export async function getProduct(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data.title;
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
}
