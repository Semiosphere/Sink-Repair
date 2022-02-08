import { getRequests, deleteRequest } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertedRequest => {
                    return `
    <li>
        ${convertedRequest.description}
        <button class="request__delete"
                id="request--${convertedRequest.id}">
            Delete
        </button>
    </li>
`
                }).join("")
            }
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
