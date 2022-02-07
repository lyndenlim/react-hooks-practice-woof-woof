import React from "react"

function DogInfo({ dogInfo, updatedDog }) {
    function handleClick() {
        fetch(`http://localhost:3001/pups/${dogInfo.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(
                {isGoodDog: !dogInfo.isGoodDog}
            )
        })
        .then(res => res.json())
        .then(data => updatedDog(data))
    }

    return (
        <div>
            <img src={dogInfo.image} alt={dogInfo.name} />
            <h2>{dogInfo.name}</h2>
            <button onClick={handleClick}>{dogInfo.isGoodDog? "Good Dog!" : "Bad Dog!"}</button>
        </div>
    )
}

export default DogInfo