import React, { useState } from 'react';
import './AccountHeader.scss';
import { Link } from 'react-router-dom';
import MenuList from '../../MenuList/MenuList';
const VK = require('../../../img/LK_VK.svg');
const man = require('../../../img/LKman.svg');
type Props = { userInfo: Record<string, string> };

const AccountHeader = (props: Props) => {
    const { userInfo } = props;
    const { name } = userInfo;
    const [menuList, setMenuList] = useState('hideMenuList');
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
    function openMenuList() {
        if (menuList === 'hideMenuList') {
            setMenuList('showMenuList');
            document.body.classList.add('_lock');
        } else {
            setMenuList('hideMenuList');
            document.body.classList.remove('_lock');
        }
    }

    return (
        <header className='header_lk'>
            <div className='header__container _container_lk'>
                <div className='header__logo logo'>
                    <Link
                        to={'/'}
                        className='logo__link'>
                        LOGO
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
                                        ??????????????
                                    </Link>
                                </li>
                                <li className='menu__item'>
                                    <Link
                                        to={'/'}
                                        className='menu__link'>
                                        ????????
                                    </Link>
                                </li>
                                <li className='menu__item'>
                                    <Link
                                        to={'/'}
                                        className='menu__link'>
                                        ??????????
                                    </Link>
                                </li>

                                <li className='menu__item'>
                                    <Link
                                        to={'/'}
                                        className='menu__link'>
                                        ??????????????
                                    </Link>
                                </li>
                                <li className='menu__item'>
                                    <Link
                                        to={'/'}
                                        className='menu__link'>
                                        ????????
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='header__contacts contacts'>
                    <ul className='contacts__list'>
                        <li className='contacts__city'>
                            <Link to={'/'}> ????????????</Link>
                            <span className='city__arrow'></span>
                        </li>
                        <li className='contacts__phone'>
                            <Link to={'/'}>+7 (8800) 55-55-35</Link>
                        </li>
                        <li className='contacts__vk_lk'>
                            <a href='https://vk.com '>
                                <img
                                    src={VK.default}
                                    alt='vk'
                                />
                            </a>
                        </li>
                    </ul>
                    <div className='contacts__container'>
                        <div className='authorization__link_lk'>
                            <Link to={'/'}>{name}</Link>
                        </div>
                        <div className='contacts__authorization_lk'>
                            <img
                                src={man.default}
                                alt='man'
                            />
                        </div>
                        <div
                            className='contacts__arrow_cont'
                            onClick={(e) => openMenuList()}></div>{' '}
                        <MenuList menuList={menuList} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AccountHeader;
