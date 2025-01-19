import ProductData from './modules/ProductData.js';

// Create an instance of ProductData pointing to the JSON file
const productData = new ProductData('/json/tents.json');

// Fetch and display product data
async function displayProducts() {
  try {
    const products = await productData.getAllProducts();
    console.log('Loaded Products:', products);
    
    // Example: Display product names in the console
    products.forEach(product => {
      console.log(`Product: ${product.name}, Price: $${product.price}`);
    });
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
}

// Execute the function
displayProducts();