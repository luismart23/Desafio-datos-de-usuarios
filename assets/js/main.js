// 1. Programar una función IIFE para ser invocada al cargar nuestra página.

// 2. Programar la petición a la API usando async - await y mostrar el resultado en html
// utilizando etiquetas del tipo párrafo una bajo la otra.




// IIFE

const main = (() => {

    const resultsElement = document.querySelector("#results")

    async function private() {

        try {
            const response = await fetch("https://randomuser.me/api/?results=10")

            if (!response.ok) {
                throw new Error("Failed to fetch data")
            }

            const { results } = await response.json()

            results.forEach((user) => {
                resultsElement.innerHTML +=
                    `
                    <img src="${user.picture.large}" alt="imagen-random">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.email}</p>
                    <p>${user.phone}<p>
                    <br>
                    `
            })
        } catch (error) {
            console.log(error)
        }
    }

    return {
        getData() {
            private()
        }
    }

})()

document.addEventListener("DOMContentLoaded", () => {
    main.getData()
})