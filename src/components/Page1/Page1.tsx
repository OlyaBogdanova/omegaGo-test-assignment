import React, { useState } from 'react';
import Header from './Header/Header';
import Modal from './../Modal/Modal';
import Page2 from '../Page2/Page2';
import Slider from './Slider/Slider';

type Props = {
    inputValues: Record<string, string>;
    changeInputValues(key: string, value: string): void;
    changeToken(value: string): void;
    clearInputValues():void


};

const Page1 = (props: Props) => {
    const [show, setShow] = useState(false);
    const [phone, setPhone] = useState('');
    const { inputValues, changeInputValues, changeToken, clearInputValues } =
        props;
    function onLogin() {
        setShow(true);
    }
    function onCloseModal() {
        setShow(false);
        setPhone('');
    }
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPhone(e.target.value);
    }
    return (
        <>
            <Header onLogin={onLogin} />
            <Slider />
            {show && (
                <Modal
                    inputValues={inputValues}
                    value={phone}
                    onChange={onChange}
                    show={show}
                    onCloseModal={onCloseModal}
                    changeInputValues={changeInputValues}
                    changeToken={changeToken}
                    clearInputValues={clearInputValues}
               
              
                />
            )}
            <Page2 />
        </>
    );
};

export default Page1;
