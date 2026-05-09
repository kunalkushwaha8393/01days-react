import React, { useState } from "react";
import CounterButton from "./CounterButton";

function Counter() {

    const [count, setcount] = useState(0);

    const handleincrement = () => {
        setcount(prevcount => prevcount + 1);
    }
    const handledecrement = () => {
        setcount(prevcount => prevcount - 1);
    }
    const handlereset = () => {
        setcount(0);
    }
    /// method 1 fuction that accepts diffrent amount//
    const handleChangeBy = (amount) => {
        setcount(prevcount => prevcount + amount)
    }




    return (
        <div className="text-center p-5">
            <h2>Interactive Counter</h2>

            <div className="text-3xl m-5">
                Count: {count}
            </div>

            <div className="flex gap-4 justify-center mt-5">

                <CounterButton
                    onButtonClick={handleincrement}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Increment
                </CounterButton>

                <CounterButton
                    onButtonClick={handledecrement}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Decrement
                </CounterButton>

                <CounterButton
                    onButtonClick={handlereset}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Reset
                </CounterButton>
                <CounterButton
                    onButtonClick={() => handleChangeBy(1)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    +1
                </CounterButton>

                   <CounterButton
                    onButtonClick={() => handleChangeBy(-1)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    -1
                </CounterButton>

                   <CounterButton
                    onButtonClick={() => handleChangeBy(10)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    10
                </CounterButton>
                



            </div>


        </div>
    )

}
export default Counter;