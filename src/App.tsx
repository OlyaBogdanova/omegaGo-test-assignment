import React, { useState } from 'react';
import './App.css';
import Main from './components/Page1/Main';
import PersonalAccount from './components/PersonalAccount/PersonalAccountMain/PersonalAccount';
import useMultiplyInputs from './hooks/useMultiplyInputs';

function App() {
    const [token, setToken] = useState('');
    const { values, onChange, clear } = useMultiplyInputs();

    function changeToken(value: string) {
        setToken(value);
        localStorage.setItem('token', value);
    }

    const page =
        token &&
        values['inputValue1'] === '5' &&
        values['inputValue2'] === '5' &&
        values['inputValue3'] === '5' &&
        values['inputValue4'] === '5' ? (
            <PersonalAccount tokenCod={token} />
        ) : (
            <Main
                inputValues={values}
                changeInputValues={onChange}
                changeToken={changeToken}
                clearInputValues={clear}
            />
        );

    return <div className='App'>{page}</div>;
}

export default App;
