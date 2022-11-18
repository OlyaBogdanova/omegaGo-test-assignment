import React, { useState } from 'react';
import InputMask from 'react-input-mask';

type Props = {
    value: string;
    changeInput(e: React.ChangeEvent<HTMLInputElement>): void;
    isElemActive: boolean;
};

const ModalInput = (props: Props) => {
    const { value, changeInput, isElemActive } = props;

    return (
        <InputMask
            mask='+7\(999)999-99-99'
            className={isElemActive ? 'input__phone active' : 'input__phone'}
            placeholder='+7(000)000-00-00'
            onChange={(e) => changeInput(e)}
            value={value}
        />
    );
};

export default ModalInput;
