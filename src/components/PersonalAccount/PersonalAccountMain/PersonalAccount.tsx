import React, { useEffect, useState } from 'react';
import AccountHeader from './../AccountHeader/AccountHeader';
import MenuAccount from './MenuAccount';
import './PersonalAccount.scss';
import PersonalInfo from './PersonalInfo';
import Services from '../../../Services/Services';
type Props = { tokenCod: string };
type UserInfo={
    name:string;
    phone:string;
    email:string;
    birthday:string;
}
const PersonalAccount = (props: Props) => {
    const { tokenCod } = props;
    const [userInfo, setUserInfo] = useState<UserInfo>({name:'', phone:'', email:'', birthday:''});
    
    async function getUserInfo(tokenCod: string) {
        const userInfo = await Services.getUserInfo(tokenCod).then((data)=>data.data.user) as UserInfo;
        setUserInfo(userInfo);
    }
    useEffect(()=>{getUserInfo(tokenCod)}, [tokenCod]);


    return (
        <>
            <AccountHeader userInfo={userInfo}/>
            <div className='_container_lk bg'>
                <div className='account__title_cont'>
                    <h1 className='account__title'>Личный кабинет</h1>
                </div>
                <div className='account__content'>
                    <div className='account__menu_cont'>
                        <MenuAccount />
                    </div>

                    <PersonalInfo userInfo={userInfo} />
                </div>
            </div>
        </>
    );
};

export default PersonalAccount;
