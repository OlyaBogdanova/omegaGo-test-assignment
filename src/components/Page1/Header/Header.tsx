import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import './Header.scss';
const VK = require('../../../img/vk.svg');
const man = require('../../../img/man.svg');

type Props = {
    onClickLogin(): void;
};

const Header = (props: Props) => {
    const { onClickLogin } = props;
    const [iconClassList, setIconClassList] = useState('menu__icon');
    const [headerMenuClassList, setHeaderMenuClassList] =
    useState('header__menu');
    function openMenuBurger() {
        if (
            iconClassList === 'menu__icon' &&
            headerMenuClassList === 'header__menu'
        ) {
            setIconClassList('menu__icon _active');
            setHeaderMenuClassList('header__menu _active');
            document.body.classList.add('_lock');
        } else {
            setIconClassList('menu__icon');
            setHeaderMenuClassList('header__menu');
            document.body.classList.remove('_lock');
        }
    }

    return (
        <header className='header'>
            <div className='header__container _container'>
                <div className='header__logo logo'>
                    <Link
                        to={'/'}
                        className='logo__link'>
                        SUPERLOGO
                    </Link>
                    <div className='header__menu_container'>
                    <div
                            className={iconClassList}
                            onClick={() => openMenuBurger()}>
                            <span></span>
                        </div>
                        <nav className={headerMenuClassList}>
                            <ul className='menu__list'>
                                <li className='menu__item'>
                                    <Link
                                        to={'/'}
                                        className='menu__link'>
                                        Главная
                                    </Link>
                                </li>
                                <li className='menu__item'>
                                    <Link
                                        to={'/'}
                                        className='menu__link'>
                                        О нас
                                    </Link>
                                </li>
                                <li className='menu__item'>
                                    <Link
                                        to={'/'}
                                        className='menu__link'>
                                        Услуги
                                    </Link>
                                </li>

                                <li className='menu__item'>
                                    <Link
                                        to={'/'}
                                        className='menu__link'>
                                        Галерея
                                    </Link>
                                </li>
                                <li className='menu__item'>
                                    <Link
                                        to={'/'}
                                        className='menu__link'>
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='header__contacts contacts'>
                    <ul className='contacts__list'>
                        <li className='contacts__city'>
                            <Link to={'/'}> Москва</Link>
                            <span className='city__arrow'></span>
                        </li>
                        <li className='contacts__phone'>
                            <Link to={'/'}>+7 (8800) 55-55-35</Link>
                        </li>
                        <li className='contacts__vk'>
                            <a href='https://vk.com '>
                                <img
                                    src={VK.default}
                                    alt='vk'
                                />
                            </a>
                        </li>
                    </ul>
                    <div
                        className='contacts__authorization'
                        onClick={(e) => onClickLogin()}>
                        <img
                            src={man.default}
                            alt='man'
                        />
                        <div className='authorization__link'>
                            <Link to={'/'}>Войти</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
