import React, { useState } from 'react';
import './App.css';

import Page1 from './components/Page1/Page1';
import PersonalAccount from './components/PersonalAccount/PersonalAccountMain/PersonalAccount';
import useMultiplyInputs from './hooks/useMultiplyInputs';

function App() {
    const { values, onChange, clear } = useMultiplyInputs();

    const [token, setToken] = useState('');

    function changeToken(value: string) {
        setToken(value);
        localStorage.setItem('token', value);
    }

    const page =
        values['inputValue1'] === '5' &&
        values['inputValue2'] === '5' &&
        values['inputValue3'] === '5' &&
        values['inputValue4'] === '5' ? (
            <PersonalAccount tokenCod={token} />
        ) : (
            <Page1
                inputValues={values}
                changeInputValues={onChange}
                changeToken={changeToken}
                clearInputValues={clear}
            />
        );

    return <div className='App'>{page}</div>;
}

export default App;
