async function getAvatar() {
    const id = Math.floor(Math.random()*10)+1
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();

        document.querySelector("#usrId2").textContent = `#${result.id}`;
        document.querySelector("#apiStatus2").textContent = "ONLINE";
        document.querySelector("#dogUrl2").textContent = `${result.name} - ${result.email}`;
        document.querySelector("#message2").src =
            `https://ui-avatars.com/api/?name=${encodeURIComponent(result.name)}&background=050a14&color=00f2ff`;

    } catch (error) {
        console.error(error.message);
        document.querySelector("#apiStatus2").textContent = "ERROR";
    }
}

getAvatar();