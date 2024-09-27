import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickKidTarget = clickEvent.target
        const kidId = clickKidTarget.dataset.id
        const dataType = clickKidTarget.dataset.type

        // check if dataType is child then show child name and wish
        if(dataType === "child")
            {for(const kid of children){
                if(kid.id === parseInt(kidId)){
                    window.alert(`${kid.name}'s wish is ${kid.wish}`)
                }
            }}
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

