import React, { useState } from 'react';
import hogs from '../porkers_data';


function PigForm ({ hogsList, setHogsList }) {

    const [nameInput, setNameInput] = useState('')

    const [specialtyInput, setSpecialtyInput] = useState('')

    const [greasedInput, setGreasedInput] = useState(false)

    const [weightInput, setWeightInput] = useState('')

    const [highestMedal, setHighestMedal] = useState ('')

    const [imageInput, setImageInput] = useState('')




    function handleNameInput(event) {
        // console.log(event.target.value)
        setNameInput(event.target.value)
    }

    function handleSpecialtyInput(event) {
        setSpecialtyInput(event.target.value)
    }

    function handleGreasedInput () {
        setGreasedInput(!greasedInput)
    }

    function handleWeightInput (event) {
        setWeightInput(event.target.value)
    }

    function handleHighestMedal (event) {
        setHighestMedal(event.target.value)
    }

    function handleImageInput (event) {
        setImageInput(event.target.value)
    }

    function handleFormSubmit (e){
        e.preventDefault()

        const newPig = {
            name: nameInput,
            specialty: specialtyInput,
            greased: greasedInput,
            weight: parseInt(weightInput),
            image: imageInput,
            "highest medal achieved": highestMedal
        }
        // console.log(newPig)
        setHogsList([...hogsList, newPig])
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <h3>Create New Pig</h3>
                <label> Name </label>
                <input type="text" onChange={handleNameInput} value={nameInput}></input><br></br>
                <label> Specialty </label>
                <input type="text" onChange={handleSpecialtyInput} value={specialtyInput}></input><br></br>
                <label> Greased </label>
                <input type="checkbox" onChange={handleGreasedInput} value={greasedInput}/><br></br>
                <label> Weight </label>
                <input type="number" onChange={handleWeightInput} value={weightInput}></input><br></br>
                <label> Highest Medal Achieved </label>
                <input type="text" onChange={handleHighestMedal} value={highestMedal}></input><br></br>
                <label> Image </label>
                <input type="text" onChange={handleImageInput} value={imageInput}></input><br></br>
                <input type="submit" value="submit"></input>


            </form>
        </div>
    )

}








export default PigForm;