import React from "react";
// 크리에이트 유저는 네가지 프로퍼티를 받을 거야. 네가지 파라미터를 오브젝트 형태로 갖고 있어.
const CreateUser = ({ username, email, onChange, onCreate }) => {

    return (
        <div>
            <input
                name="username"
                placeholder="Account"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="email"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>Add</button>
        </div>
    )
};

export default React.memo(CreateUser);
