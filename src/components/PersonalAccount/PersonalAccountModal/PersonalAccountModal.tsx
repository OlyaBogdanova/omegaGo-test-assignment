import React, { useState } from 'react';
import './PersonalAccountModal.scss';

type Props = { accountModal: boolean; closeAccountModal(): void };

const PersonalAccountModal = (props: Props) => {
    const { accountModal, closeAccountModal } = props;
    const showClassModal = accountModal ? ' modal show' : 'modal';
    return (
        <div className={showClassModal}>
            <div className='modal__dialog'>
                <div className='modal__content'>
                    <form className='modal__form'>
                        <div
                            className='modal__close'
                            onClick={(e) => closeAccountModal()}>
                            &#9587;
                        </div>
                        <div className='modal__title'>Удалить аккаунт</div>
                        <div className='modal__subtitle'>
                            Удаление аккаунта приведёт к полному уничтожению
                            информации о нём
                        </div>
                        <div className='modal_subtitle_2'>
                        Расскажите, почему вы уходите от нас?
                        </div>
                        <div className='modal__textarea'>
                           <input type='textarea' placeholder='Я ухожу потому, что...'/>
                        </div>
                        <div className='modal__btns'>
                            <button className='modal__btn__noRemove'>Не удалять</button>
                            <button className='modal__btn__remove' onClick={(e)=> {localStorage.removeItem('token')}}>Да, удалить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PersonalAccountModal;
