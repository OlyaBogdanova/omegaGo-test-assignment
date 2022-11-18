import React, { useState, useEffect } from 'react';
import { ModalState } from './Modal';

type Props = {
    sec: number;
    changeModalState: (num: number) => void;
    error: boolean;
    clearInputValues(): void;
};

const Timer = (props: Props) => {
    const { sec, changeModalState, error, clearInputValues } = props;
    const [seconds, setSeconds] = useState(sec);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds - 1);
        }, 1000);

        if (seconds === 0 && error === false) {
            clearInterval(timer);
            changeModalState(ModalState.PhoneInput);
        }
        if (seconds === 0 && error === true) {
            clearInterval(timer);
            changeModalState(ModalState.Error);

            clearInputValues();
        }

        return () => {
            clearInterval(timer);
        };
    });

    return (
        <>
            <span>{seconds}</span>
        </>
    );
};

export default Timer;
