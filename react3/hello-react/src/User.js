import React, { useEffect } from "react";

function User({user, onRemove, onToggle}) {  //user라는 파라미터를 갖고 있고 받은 아규먼트를 유저로 처리하겠다.
   
    useEffect(() => {
        console.log('Set user value');
        console.log(user)
        return () => {  
            console.log('Before change user');
            console.log(user)  
        };
    }, [user]);  //지정값이 변화할때마다 리렌더링, 없다면 컴포넌트가 실행될때마다 재렌더링

    return(
        <div>
            <b
                style={{cursor: 'pointer',
                            color: user.activ ? 'green' : 'black'
                }}    
                    onClick={() => onToggle(user.id)}
            >
             {user.username}   
            </b>
            &nbsp;
           <span>({user.email})</span>
            <button onClick={()=> onRemove(user.id)}>Delete</button>
        </div>
    )
}

export default React.memo(User);
