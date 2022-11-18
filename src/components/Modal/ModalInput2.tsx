import { rejects } from 'assert';
import React, { useEffect, useState } from 'react';
import './Modal.scss';

type Props = {
    changeInputValues(key: string, value: string): void;
    inputValues: Record<string, string>;
    changeError(value: boolean): void;
};

const ModalInput2 = (props: Props) => {
    const { inputValues, changeError, changeInputValues } = props;
    const [inputClassList, setInputClassList] = useState('');
    const [errorMessage, setErrorMessage] = useState('hide');
    useEffect(() => {
        if (
            inputValues['inputValue1'] &&
            inputValues['inputValue2'] &&
            inputValues['inputValue3'] &&
            inputValues['inputValue4']
        ) {
            if (
                inputValues['inputValue1'] !== '5' ||
                inputValues['inputValue2'] !== '5' ||
                inputValues['inputValue3'] !== '5' ||
                inputValues['inputValue4'] !== '5'
            ) {
                setInputClassList('full');
                setTimeout(function () {
                    setInputClassList('input_red');
                    setErrorMessage('showErrorMessage');
                }, 500);
                changeError(true);
            }
        }
    }, [inputValues]);

    const arrInput = [1, 2, 3, 4];
    const elem = arrInput.map((i) => (
        <input
            className={inputClassList}
            key={i}
            type='text'
            name={`input${i + 1}`}
            tabIndex={i + 1}
            maxLength={1}
            onChange={(e) => {
                changeInputValues(`inputValue${i}`, e.target.value);
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
            <div className={errorMessage}>Ошибка! Неверный код</div>
        </div>
    );
};

export default ModalInput2;
