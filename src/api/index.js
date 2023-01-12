const url = "https://fakestoreapi.com/products"

async function fetchProducts () {
    
    const response = await fetch(url);
    const data = await response.json();
    if (response.status >= 400){
        throw new Error(data.error);
    } 
    return data;
}

export default fetchProducts