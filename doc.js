async function getData() {
    const url = "https://dog.ceo/api/breeds/image/random";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();

        document.querySelector("#message").src = result.message;
        document.querySelector("#dogUrl").textContent = result.message;
        document.querySelector("#apiStatus").textContent = result.status.toUpperCase();
        document.querySelector("#usrId").textContent = `#${Math.floor(Math.random() * 9000) + 1000}`;

    } catch (error) {
        console.error(error.message);
        document.querySelector("#apiStatus").textContent = "ERROR";
    }
}

getData();