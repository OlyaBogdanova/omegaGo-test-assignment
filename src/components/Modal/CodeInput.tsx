import React from 'react';
import CodeChecking from './CodeChecking';
import Timer from './Timer';

type Props = {
    phone: string;
    onClickBtn(e: React.MouseEvent): void;
    changeModalState: (num: number) => void;
    changeInputValues(key: string, value: string): void;
    inputValues: Record<string, string>;
    changeError(value: boolean): void;
    error: boolean;
    clearInputValues(): void;
};

function CodeInput(props: Props) {
    const {
        phone,
        changeError,
        changeInputValues,
        changeModalState,
        clearInputValues,
        error,
        inputValues,
        onClickBtn,
    } = props;

    return (
        <>
            <div className='modal__subtitle_2'>
                Код отправлен сообщением на номер <span>{phone}</span>
            </div>
            <div
                className='modal__phone'
                onClick={(e) => changeModalState(1)}>
                <a className='modal__phone_link'>Изменить номер телефона</a>
            </div>
            <div className='modal__input_2'>
                <CodeChecking
                    changeInputValues={changeInputValues}
                    inputValues={inputValues}
                    changeError={changeError}
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
                className='modal__btn'
                type='submit'
                onClick={(e) => {
                    onClickBtn(e);
                }}>
                Выслать код повторно через{' '}
                <Timer
                    changeInputValues={changeInputValues}
                    clearInputValues={clearInputValues}
                    error={error}
                    sec={20}
                    changeModalState={changeModalState}
                />{' '}
                сек
            </button>
        </>
    );
}

export default CodeInput;
