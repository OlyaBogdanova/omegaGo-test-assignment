import React from 'react';
import './Modal.scss';
import PhoneInput from './PhoneInput';
import CodeInput from './CodeInput';
import Error from './Error';
import { ModalState } from './Modal';

type Props = {
    modalState: number;
    value: string;
    changeInput(e: React.ChangeEvent<HTMLInputElement>): void;
    isElemActive: boolean;
    onClickBtn(e: React.MouseEvent): void;
    changeModalState: (num: number) => void;
    changeInputValues(key: string, value: string): void;
    inputValues: Record<string, string>;
    changeError(value: boolean): void;
    error: boolean;
    clearInputValues(): void;
};

const ModalContent = (props: Props) => {
    const {
        modalState,
        value,
        changeInput,
        isElemActive,
        onClickBtn,
        changeModalState,
        changeInputValues,
        inputValues,
        changeError,
        error,
        clearInputValues,
    } = props;

    switch (modalState) {
        case ModalState.PhoneInput:
            return (
                <PhoneInput
                    value={value}
                    changeInput={changeInput}
                    isElemActive={isElemActive}
                    onSubmit={onClickBtn}
                />
            );
        case ModalState.CodeInput:
            return (
                <CodeInput
                    phone={value}
                    clearInputValues={clearInputValues}
                    changeError={changeError}
                    changeInputValues={changeInputValues}
                    changeModalState={changeModalState}
                    error={error}
                    inputValues={inputValues}
                    onClickBtn={onClickBtn}
                />
            );
        case ModalState.Error:
            return (
                <Error
                    phone={value}
                    isElemActive={isElemActive}
                    changeError={changeError}
                    changeInputValues={changeInputValues}
                    changeModalState={changeModalState}
                    inputValues={inputValues}
                    onClickBtn={onClickBtn}
                />
            );

        default:
            return <></>;
    }
};

export default ModalContent;
