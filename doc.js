async function getData() {
    const url = "https://dog.ceo/api/breeds/image/random";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();

        console.log(result);
        console.log(result.message);

        const imagen = document.querySelector("#message");
        const status = document.querySelector("#status");

        imagen.src = result.message;

        status.textContent = result.status;

    } catch (error) {
        console.error(error.message);
    }
}

getData();