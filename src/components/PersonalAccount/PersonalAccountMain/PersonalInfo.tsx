import { userInfo } from 'os';
import React, { useState } from 'react';
import './PersonalAccount.scss';
import PersonalAccountModal from '../PersonalAccountModal/PersonalAccountModal';

type Props = {};

const PersonalInfo = (props: Props) => {
    const arrUserInfo = [
        { Имя: 'Тимур' },
        { 'Номер телефона': '+7 (8800) 55-55-35' },
        { 'Электронная почта': 'почта@mail.ru' },
        { 'Дата рождения': '20.03.2006' },
        { 'Дата рождения ребенка': '20.03.2006' },
    ];
    const [accountModal, setAccountModal] = useState(false);

    const elements = arrUserInfo.map((elem) => {
        return (
            <div className='input__container'>
                <div className='userInfo__subtitle'>
                    <h2>{Object.keys(elem)}</h2>
                </div>
                <input
                    type='text'
                    placeholder={Object.values(elem)[0]}
                    className='userInfo__input'
                />
            </div>
        );
    });

    function closeAccountModal(){
        setAccountModal(false)
    }

    return (
        <div className='wrapper'>
            <h2 className='userInfo__title'>Личные данные</h2>
            <div className='userInfo__input_cont'>
                <div className='userInfo__input_column'>
                    {elements[0]}
                    {elements[1]}
                    {elements[2]}
                    {elements[3]}
                </div >
                <div className='input__container'>{elements[4]}</div>
            </div>
            <div className='userInfo__title_2'>Скидки и предложения</div>
            <div className='checkbox__wrapper'>
                <input type='checkbox'/>
                <label>Получать персональные предложения и акции</label>
            </div>
            <div className='userInfo__title_2'>Уведомления о записи</div>
            <div className='checkbox__wrapper'>
                <input type='checkbox'  checked/>
                <label>Напомнить о вашей записи за сутки до посещения</label>
            </div>
            <div className='userInfo__btns'>
                <a className='userInfo__btn_exit'>Выйти из аккаунта</a>
                <button
                    className='userInfo__btn_remove'
                    onClick={() => setAccountModal(true)}>
                    Удалить аккаунт
                </button>
            </div>
            <PersonalAccountModal accountModal={accountModal} closeAccountModal={closeAccountModal} />
        </div>
    );
};

export default PersonalInfo;
