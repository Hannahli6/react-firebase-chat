import React from 'react';
import "./list.css"; 
import UserInfo from './userInfo/UserInfo';
import Chatlist from './chatList/chatList';


const List = () => {
    return (
        <div className='list'>
            <UserInfo />
            <Chatlist />
        </div>
    );
};

export default List;