import React from 'react';
import ModalInput from './ModalInput';

type Props = {
    value: string;
    changeInput(e: React.ChangeEvent<HTMLInputElement>): void;
    isElemActive: boolean;
    onSubmit(e: React.MouseEvent): void;
};

function PhoneInput(props: Props) {
    const { value, changeInput, isElemActive, onSubmit } = props;

    return (
        <>
            <div className='modal__subtitle'>
                Подарим подарок на день рождения, сохраним статистику игр и
                сообщим об акциях
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
                <a
                    href='https://drive.google.com/file/d/1iy5GlqjjOBBq2LrQXJ1tJ1jfBSGCdueb/view?usp=sharing'
                    target='_blank'
                    rel='noreferrer'>
                    со сбором и обработкой персональных данных
                </a>{' '}
                и{' '}
                <a
                    href='https://drive.google.com/file/d/1-2xH00PNuYEfrB1O6g0DpDpNlymrGi6r/view?usp=sharing'
                    target='_blank'
                    rel='noreferrer'>
                    пользовательским соглашением
                </a>
            </div>
            <button
                className={isElemActive ? 'modal__btn_active' : 'modal__btn'}
                type='submit'
                onClick={(e) => {
                    onSubmit(e);
                }}>
                Выслать код
            </button>
        </>
    );
}

export default PhoneInput;
