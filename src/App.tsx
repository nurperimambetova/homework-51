import React, {useState} from 'react';
import './App.css';
import Circle from "./Circle/Circle";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([]);

    const changeNumbers = () => {


    }

    return (
        <div className="App">
            <button onClick={changeNumbers} className="changeBtn">New numbers</button>
            <div className="circles">
                <Circle number={0} />
                <Circle number={1} />
                <Circle number={2} />
                <Circle number={3} />
                <Circle number={4} />
            </div>

        </div>
    );
};

export default App;
