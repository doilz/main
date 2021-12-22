import User from "./User";
import React from "react";

function UserList({users, onRemove, onToggle}) {
        
       return (
            <div>
                {users.map(user => (  // 유저값을 받아서 프로퍼티를 줌.
                    <User 
                        user={user} 
                        key={user.id} 
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                ))
                }
            </div>
           
       );

    // return (
    //     <div>
    //         <User user={users[0]}/>
    //         <User user={users[1]}/>
    //         <User user={users[2]}/>
    //     </div>
    // );
}

export default React.memo(UserList);