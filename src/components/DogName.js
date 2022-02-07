function DogName({ dogInfo, handleClickedDog }) {

    function handleClick() {
        handleClickedDog(dogInfo.id)
    }

    return (
        <span onClick={handleClick}>{dogInfo.name}</span>
    )
}

export default DogName