import React, { useState } from 'react'


function MyComponent() {
    const [car, setCar] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function handleAddCar() {
        const newCar = { year: carYear , make: carMake , model: carModel};
        setCar(c => [...c,newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCar( c => c.filter((_, i) => i !== index));

    }

    function handleCarYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleCarMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleCarModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h2>List Of Car Objects</h2>
            <ul>
                {car.map((car , index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleCarYearChange} /> <br />
            <input type="text" placeholder='Enter car model' value={carMake} onChange={handleCarMakeChange} /> <br />
            <input type="text" value={carModel} onChange={handleCarModelChange} placeholder="Enter Car Model" /> <br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default MyComponent