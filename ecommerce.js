async function ecommerceApi() {
    const id = Math.floor(Math.random() * 20) + 1;
    const url = `https://fakestoreapi.com/products/${id}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const product = await response.json();

        document.querySelector("#productId").textContent = `#${product.id}`;
        document.querySelector("#productStatus").textContent = "ONLINE";
        document.querySelector("#productImage").src = product.image;
        document.querySelector("#productTitle").textContent = product.title;
        document.querySelector("#productPrice").textContent = `$${product.price}`;
        document.querySelector("#productCategory").textContent = product.category;

    } catch (error) {
        console.error(error.message);
        document.querySelector("#productStatus").textContent = "ERROR";
    }
}

ecommerceApi();