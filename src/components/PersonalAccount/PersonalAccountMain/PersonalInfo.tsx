import React, { useState } from 'react';
import './PersonalAccount.scss';
import PersonalAccountModal from '../PersonalAccountModal/PersonalAccountModal';

type Props = { userInfo: Record<string, string> };

const PersonalInfo = (props: Props) => {
    const { userInfo } = props;
    const { name, email, phone, birthday } = userInfo;

    console.log(props);
    

    const arrPhone = phone.split('');
 
 
    const phoneChange = `+7 (${arrPhone[0]}${arrPhone[1]}${arrPhone[2]}) ${arrPhone[3]}${arrPhone[4]}${arrPhone[5]}-${arrPhone[6]}${arrPhone[7]}-${arrPhone[8]}${arrPhone[9]}`;

    const [accountModal, setAccountModal] = useState(false);

    function closeAccountModal() {
        setAccountModal(false);
    }

    return (
        <div className='wrapper'>
            <h2 className='userInfo__title'>Личные данные</h2>
            <div className='userInfo__input_cont'>
                <div className='userInfo__input_column'>
                    <div className='input__container'>
                        <div className='userInfo__subtitle'>
                            <h2>Имя</h2>
                        </div>
                        <input
                            type='text'
                            placeholder='Тимур'
                            className='userInfo__input'
                            value={name ? name : ''}
                        />
                    </div>

                    <div className='input__container'>
                        <div className='userInfo__subtitle'>
                            <h2>Номер телефона</h2>
                        </div>
                        <input
                            type='text'
                            placeholder='+7 (8800) 55-55-35'
                            className='userInfo__input'
                            value={phoneChange ? phoneChange : ''}
                        />
                    </div>

                    <div className='input__container'>
                        <div className='userInfo__subtitle'>
                            <h2>Электронная почта</h2>
                        </div>
                        <input
                            type='text'
                            placeholder='почта@mail.ru'
                            className='userInfo__input'
                            value={email ? email : ''}
                        />
                    </div>

                    <div className='input__container'>
                        <div className='userInfo__subtitle'>
                            <h2>Дата рождения</h2>
                        </div>
                        <input
                            type='text'
                            placeholder='20.03.2006'
                            className='userInfo__input'
                            value={birthday ? birthday : ''}
                        />
                    </div>
                </div>
                <div className='input__container'>
                    <div className='input__container'>
                        <div className='userInfo__subtitle'>
                            <h2>Дата рождения ребенка</h2>
                        </div>
                        <input
                            type='text'
                            placeholder='20.03.2006'
                            className='userInfo__input'
                        />
                    </div>
                </div>
            </div>
            <div className='userInfo__title_2'>Скидки и предложения</div>
            <div className='checkbox__wrapper'>
                <input type='checkbox' />
                <label>Получать персональные предложения и акции</label>
            </div>
            <div className='userInfo__title_2'>Уведомления о записи</div>
            <div className='checkbox__wrapper'>
                <input
                    type='checkbox'
                    checked
                />
                <label>Напомнить о вашей записи за сутки до посещения</label>
            </div>
            <div className='userInfo__btns'>
                <button className='userInfo__btn_exit'>Выйти из аккаунта</button>
                <button
                    className='userInfo__btn_remove'
                    onClick={() => setAccountModal(true)}>
                    Удалить аккаунт
                </button>
            </div>
            <PersonalAccountModal
                accountModal={accountModal}
                closeAccountModal={closeAccountModal}
            />
        </div>
    );
};

export default PersonalInfo;
