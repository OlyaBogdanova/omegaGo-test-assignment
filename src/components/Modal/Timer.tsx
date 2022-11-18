import React, { useState, useEffect } from 'react';

type Props = { sec: number; changeModalState: (num: number) => void ;
    error:boolean; changeInputValues(key: string, value: string): void;
    clearInputValues():void;
  }

const Timer = (props: Props) => {
    const { sec, changeModalState, error,changeInputValues, clearInputValues} = props;
    const [seconds, setSeconds] = useState(sec);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds - 1);
        }, 1000);

        if (seconds === 0 && error===false) {
            clearInterval(timer);
            changeModalState(1);
        }
        if (seconds === 0 && error===true) {
            clearInterval(timer);
            changeModalState(3);

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
