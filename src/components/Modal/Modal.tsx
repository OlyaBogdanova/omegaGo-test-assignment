import React, { useState } from 'react';

import './Modal.scss';

import ModalContent from './ModalContent';

import Services from '../../Services/Services';

type Props = {
    isOpen: boolean;
    onCloseModal(): void;
    value: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    inputValues: Record<string, string>;
    changeInputValues(key: string, value: string): void;
    changeToken(value: string): void;
    clearInputValues(): void;
};

export enum ModalState {
    PhoneInput = 1,
    CodeInput,
    Error,
}

const Modal = (props: Props) => {
    const {
        isOpen,
        onCloseModal,
        value,
        onChange,
        inputValues,
        changeInputValues,
        changeToken,
        clearInputValues,
    } = props;

    const [isInputActive, setIsInputActive] = useState(false);
    const [modalState, setModalState] = useState(ModalState.PhoneInput);
    const [error, setError] = useState(false);

    function changeInput(e: React.ChangeEvent<HTMLInputElement>) {
        e.target.style.opacity = '1';

        if (e.target.value.trim().replace(/\D/g, '').length === 11) {
            setIsInputActive(true);
        } else {
            setIsInputActive(false);
        }
        onChange(e);
    }

    function changeModalState(state: ModalState) {
        setModalState(state);
    }

    function changeError(value: boolean) {
        setError(value);
    }

    async function onClickBtn(e: React.MouseEvent) {
        e.preventDefault();

        const data = await Services.getUserLogin(
            value.trim().replace(/\D/g, '').substring(1)
        );

        const token = data.data['token'];

        changeToken(token);

        setModalState(ModalState.CodeInput);
        clearInputValues()
    }

    if (
        modalState === ModalState.CodeInput &&
        inputValues['inputValue1'] === '5' &&
        inputValues['inputValue2'] === '5' &&
        inputValues['inputValue3'] === '5' &&
        inputValues['inputValue4'] === '5'
    ) {
        onCloseModal();
    }
    return (
        <div className={isOpen ? ' modal show' : 'modal'}>
            <div className='modal__dialog'>
                <div className='modal__content'>
                    <form className='modal__form'>
                        <div
                            className='modal__close'
                            onClick={(e) => onCloseModal()}>
                            &#9587;
                        </div>
                        <div className='modal__title'>
                            Вход в личный кабинет
                        </div>
                        <ModalContent
                            value={value}
                            modalState={modalState}
                            changeInput={changeInput}
                            isElemActive={isInputActive}
                            onClickBtn={onClickBtn}
                            changeModalState={changeModalState}
                            changeInputValues={changeInputValues}
                            inputValues={inputValues}
                            changeError={changeError}
                            error={error}
                            clearInputValues={clearInputValues}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
