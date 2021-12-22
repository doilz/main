import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function UserManage() {

    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    const {username, email} = inputs; // 인풋 들어온걸 프로퍼티로 저장


    const onChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }; 

    const [users, setUsers] = useState([
         {
            id: 1,
            username: 'Undead',
            email: 'undead@undercity.com',
            activ: true
         },
         {
            id: 2,
            username: 'Bloodelf',
            email: 'Bloodelf@silvermoon.com',
            activ: false
         },
         {
            id: 3,
            username: 'Nightelf',
            email: 'nightelf@darnasus.com',
            activ: false
         }
    ]);

    const nextID = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextID.current,
            username,
            email
        }
        setUsers(users.concat(user)); //user 어레이에 user를 넣겠다.

        setInputs({                   //초기화
            username: '',
            email: ''
        });
        nextID.current += 1          // 아이디 증가
    };

    const onRemove = (id) => {
        setUsers(users.filter(user => user.id !== id))
    };

    const onToggle = (id) => {
        setUsers(
            users.map(user => //유저에 대입
                user.id === id ? {...user, activ: !user.activ} : user
            )
        )
    }

    return (
        <>
            <CreateUser 
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
                onToggle={onToggle}
            />     
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>  
        </>
    )
}

export default React.memo(UserManage);