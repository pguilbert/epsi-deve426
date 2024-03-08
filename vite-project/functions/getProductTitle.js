export async function getProductTitle(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}/`);
    const data = await response.json();
    const title = data.title;
    return title;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch product");
  }
}
