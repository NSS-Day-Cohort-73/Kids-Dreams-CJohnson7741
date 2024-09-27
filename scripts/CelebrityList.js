import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickCelebrityTarget = clickEvent.target
        const celebrityID = clickCelebrityTarget.dataset.id
        const dataType = clickCelebrityTarget.dataset.type

        // check if the data type is celebrity then show celebrity name and sport
        if(dataType === "celebrity"){
            for(const celebrity of celebrities){
                if(celebrity.id === parseInt(celebrityID)){
                    window.alert(`${celebrity.name} is a ${celebrity.sport} star`)
                }
            }
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
