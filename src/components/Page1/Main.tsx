import React, { useState } from 'react';

import Header from './Header/Header';
import Slider from './Slider/Slider';

import Modal from '../Modal/Modal';
import About from '../Page2/About';

type Props = {
    inputValues: Record<string, string>;
    changeInputValues(key: string, value: string): void;
    changeToken(value: string): void;
    clearInputValues():void
};

const Main = (props: Props) => {
    const { inputValues, changeInputValues, changeToken, clearInputValues } =
        props;

    const [isShowModal, setIsShowModal] = useState(false);
    const [phone, setPhone] = useState('');

    function onChangePhone(e: React.ChangeEvent<HTMLInputElement>) {
        setPhone(e.target.value);
    }

    function onClickLogin() {
        setIsShowModal(true);
    }

    function onCloseModal() {
        setIsShowModal(false);
        setPhone('');
    }

    return (
        <>
            <Header onClickLogin={onClickLogin} />
            <Slider />
            {isShowModal && (
                <Modal
                    inputValues={inputValues}
                    value={phone}
                    onChange={onChangePhone}
                    isOpen={isShowModal}
                    onCloseModal={onCloseModal}
                    changeInputValues={changeInputValues}
                    changeToken={changeToken}
                    clearInputValues={clearInputValues}
                />
            )}
            <About />
        </>
    );
};

export default Main;
