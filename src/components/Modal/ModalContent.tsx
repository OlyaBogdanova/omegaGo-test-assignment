import React, { useState } from 'react';
import ModalInput from './ModalInput';
import './Modal.scss';
import Timer from './Timer';
import ModalInput2 from './ModalInput2';

type Props = {
    modalState: number;
    value: string;
    changeInput(e: React.ChangeEvent<HTMLInputElement>): void;
    isElemActive: boolean;
    onClickBtn(e: React.MouseEvent): void;
    changeModalState: (num: number) => void;
    changeInputValues(key:string, value:string): void;
    inputValues:Record<string, string>;
    changeError(value:boolean):void;
    error:boolean;
    clearInputValues():void
 
}

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
        clearInputValues
   
      
    } = props;

    switch (modalState) {
        case 1:
            return (
                <>
                    <div className='modal__subtitle'>
                        Подарим подарок на день рождения, сохраним статистику
                        игр и сообщим об акциях
                    </div>
                    <div className='modal__phone'>Номер телефона</div>
                    <div className='modal__input'>
                        <ModalInput
                            value={value}
                            changeInput={changeInput}
                            isElemActive={isElemActive}
                        />
                    </div>
                    <div className='modal__accept'>
                        Продолжая, вы соглашаетесь{' '}
                        <a href='https://drive.google.com/file/d/1iy5GlqjjOBBq2LrQXJ1tJ1jfBSGCdueb/view?usp=sharing' target="_blank" rel="noreferrer">
                            со сбором и обработкой персональных данных
                        </a> и <a href='https://drive.google.com/file/d/1-2xH00PNuYEfrB1O6g0DpDpNlymrGi6r/view?usp=sharing' target="_blank" rel="noreferrer">
                            пользовательским соглашением
                        </a>
                    </div>
                    <button
                        className={
                            isElemActive ? 'modal__btn_active' : 'modal__btn'
                        }
                        type='submit'
                        onClick={(e) => {
                            onClickBtn(e);
                        }}>
                        Выслать код
                    </button>
                </>
            );
            break;
        case 2:
            return (
                <>
                    <div className='modal__subtitle_2'>
                        Код отправлен сообщением на номер <span>{value}</span>
                    </div>
                    <div className='modal__phone' onClick={(e)=>changeModalState(1)}>
                        <a className='modal__phone_link'>
                            Изменить номер телефона
                        </a>
                    </div>
                    <div className='modal__input_2'>
                        <ModalInput2  changeInputValues={changeInputValues}  inputValues={inputValues} changeError={changeError} />
                    </div>
                    <div className='modal__accept'>
                        Продолжая, вы соглашаетесь{' '}
                        <a href='https://drive.google.com/file/d/1iy5GlqjjOBBq2LrQXJ1tJ1jfBSGCdueb/view?usp=sharing' target="_blank" rel="noreferrer">
                            со сбором и обработкой персональных данных</a> и <a href='https://drive.google.com/file/d/1-2xH00PNuYEfrB1O6g0DpDpNlymrGi6r/view?usp=sharing' target="_blank" rel="noreferrer" >
                            пользовательским соглашением
                        </a>
                    </div>
                    <button
                        className='modal__btn'
                        type='submit'
                        onClick={(e) => {
                            onClickBtn(e);
                        }}>
                        Выслать код повторно через{' '}
                        <Timer     changeInputValues={changeInputValues} clearInputValues={clearInputValues} error={error}
                            sec={20}
                            changeModalState={changeModalState}
                        />{' '}
                        сек
                    </button>
                </>
            );
            case 3:
            return (
                <>
                    <div className='modal__subtitle_2'>
                        Код отправлен сообщением на номер <span>{value}</span>
                    </div>
                    <div className='modal__phone' onClick={(e)=>changeModalState(1)}>
                        <a className='modal__phone_link'>
                            Изменить номер телефона
                        </a>
                    </div>
                    <div className='modal__input_2'>
                        <ModalInput2 changeInputValues={changeInputValues} changeError={changeError}  inputValues={inputValues}  />
                    </div>
                    <div className='modal__accept'>
                        Продолжая, вы соглашаетесь{' '}
                        <a href='https://drive.google.com/file/d/1iy5GlqjjOBBq2LrQXJ1tJ1jfBSGCdueb/view?usp=sharing' target="_blank" rel="noreferrer">
                            со сбором и обработкой персональных данных</a> и <a href='https://drive.google.com/file/d/1-2xH00PNuYEfrB1O6g0DpDpNlymrGi6r/view?usp=sharing' target="_blank" rel="noreferrer" >
                            пользовательским соглашением
                        </a>
                    </div>
                    <button
                        className={
                            isElemActive ? 'modal__btn_active' : 'modal__btn'
                        }
                        type='submit'
                        onClick={(e) => {
                            onClickBtn(e);
                        }}>
                        Выслать код повторно
                    </button>
                </>
            );
    }
    return <> </>;
};

export default ModalContent;
