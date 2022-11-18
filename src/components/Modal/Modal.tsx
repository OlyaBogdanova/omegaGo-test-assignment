import React, { ChangeEvent, useEffect, useState } from 'react';
import './Modal.scss';
import ModalContent from './ModalContent';

import Services from '../../Services/Services';

type Props = {
    show: boolean;
    onCloseModal(): void;
    value: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    inputValues: Record<string, string>;
    changeInputValues(key: string, value: string): void;
    changeToken(value: string): void;
    clearInputValues():void
};

const Modal = (props: Props) => {
    const {
        show,
        onCloseModal,
        value,
        onChange,
        inputValues,
        changeInputValues,
        changeToken,
        clearInputValues
    } = props;
    const [isElemActive, setElemActive] = useState(false);
    const [modalState, setModalState] = useState(1);
    const [error, setError] = useState(false);

    const showClass = show ? ' modal show' : 'modal';

    function changeInput(e: React.ChangeEvent<HTMLInputElement>) {
        e.target.style.opacity = '1';

        if (e.target.value.trim().replace(/\D/g, '').length === 11) {
            setElemActive(true);
        } else {
            setElemActive(false);
        }
        onChange(e);
    }
    function changeModalState(num: number) {
        setModalState(num);
    }
    function changeError(value: boolean) {
        setError(value);
    }
    async function onClickBtn(e: React.MouseEvent) {
        e.preventDefault();
        setModalState(2);

        changeToken(
            await Services.getUserLogin(
                value.trim().replace(/\D/g, '').substring(1)
            ).then((data) => data.data['token'])
        );
    }

   
    if (
        inputValues['inputValue1'] === '5' &&
        inputValues['inputValue2'] === '5' &&
        inputValues['inputValue3'] === '5' &&
        inputValues['inputValue4'] === '5'
    ) {
        onCloseModal();
    }
    return (
        <div className={`${showClass}`}>
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
                            isElemActive={isElemActive}
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
