export async function getProductTitleById(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}/`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    const title = data.title;
    return title;
}