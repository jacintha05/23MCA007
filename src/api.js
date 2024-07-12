// api.js

const API_URL = 'https://api.myntra.com/products'; // Replace with actual API URL

export const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.slice(0, 5); // Assuming the API returns an array of products, limit to 5 products
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
