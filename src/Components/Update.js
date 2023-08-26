import React, { useState } from 'react'

let _std = {
    name: 'Hamza',
    age: 20,
}

const Update = () => {
    const [std, setStd] = useState(_std);
    const up = () => {
        setStd((previousState) => {
            return {
                ...previousState,
                name: 'khadija',
            };
        });
    };

        return (
            <div className='app'>
            User Name is {std.name} and age is {std.age}
            <input type='button' value="Change" onClick={up}/>

            </div>
        )
    }
export default Update