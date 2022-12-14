import React, { useEffect, useState } from 'react';

import './Modal.scss';

type Props = {
    changeInputValues(key: string, value: string): void;
    inputValues: Record<string, string>;
    changeError(value: boolean): void;
};

const CodeChecking = (props: Props) => {
    const { inputValues, changeError, changeInputValues } = props;
    const [inputClassList, setInputClassList] = useState('');
    const [errorMessage, setErrorMessage] = useState('hide');

    const isInputsNotEmpty =
        inputValues['inputValue1'] &&
        inputValues['inputValue2'] &&
        inputValues['inputValue3'] &&
        inputValues['inputValue4'];

    const isCodeCorrect =
        inputValues['inputValue1'] !== '5' ||
        inputValues['inputValue2'] !== '5' ||
        inputValues['inputValue3'] !== '5' ||
        inputValues['inputValue4'] !== '5';

    const isValid = isInputsNotEmpty && isCodeCorrect;

    useEffect(() => {
        if (isValid) {
            setInputClassList('full');
            setTimeout(function () {
                setInputClassList('input_red');
                setErrorMessage('showErrorMessage');
            }, 500);
            changeError(true);
        }
    }, [isValid, changeError]);

    function inputFocus(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.value) {
            const index = e.target.getAttribute('tabindex');

            document.getElementsByTagName('input')[Number(index)].focus();
        }
    }

    const arrInput = [1, 2, 3, 4];
    const elem = arrInput.map((i) => (
        <input
            className={inputClassList}
            key={i}
            type='text'
            name={`input${i + 1}`}
            tabIndex={i}
            maxLength={1}
            onChange={(e) => {
                changeInputValues(`inputValue${i}`, e.target.value);
                inputFocus(e);
            }}
            onFocus={(e) => {
                e.target.classList.add('active');
            }}
            onBlur={(e) => {
                e.target.classList.remove('active');
            }}
            value={inputValues[`inputValue${i}`]}
        />
    ));
    return (
        <div className='elem_container'>
            <div className='input_container'> {elem}</div>
            <div className={errorMessage}>????????????! ???????????????? ??????</div>
        </div>
    );
};

export default CodeChecking;
