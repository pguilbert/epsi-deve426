export async function getProductTitle(productId) {
    try {
        const response = await fetch(`https://api.example.com/products/${productId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch product");
        }
        const product = await response.json();
        return product.title;
    } catch (error) {
        throw new Error("Failed to fetch product");
    }
}