import React, { useEffect, useState } from 'react';
import './App.css';

import Page1 from './components/Page1/Page1';
import PersonalAccount from './components/PersonalAccount/PersonalAccountMain/PersonalAccount';

function App() {
    const [inputValues, setInputValues] = useState({
        inputValue1: '',
        inputValue2: '',
        inputValue3: '',
        inputValue4: '',
    });
    const [tokenCod, setToken] = useState('');

    function changeInputValues(key: string, value: string) {
        setInputValues((prevState) => {
            return { ...prevState, [key]: value };
        });
    }

    function changeToken(value: string) {
        setToken(value);
    }
    function clearInputValues(){
        setInputValues({
            inputValue1: '',
            inputValue2: '',
            inputValue3: '',
            inputValue4: '',
        })
    }

    const page =
        inputValues['inputValue1'] === '5' &&
        inputValues['inputValue2'] === '5' &&
        inputValues['inputValue3'] === '5' &&
        inputValues['inputValue4'] === '5' ? (
            <PersonalAccount tokenCod={tokenCod} />
        ) : (
            <Page1
                inputValues={inputValues}
                changeInputValues={changeInputValues}
                changeToken={changeToken}
                clearInputValues={clearInputValues}
            />
        );

    return <div className='App'>{page}</div>;
}

export default App;
