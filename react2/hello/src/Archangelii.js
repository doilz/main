
function Secondgundam(props) {
    return <li>This is {props.model + props.id} ! ! !</li>;
}

// function Archangelii() {
//     const gundamlist = [   
//             "ZMGF-X10A Freedom Gundam",
//             "ZMGF-X109 Justice Gundam",
//             "Strike Gundam" 
//         ];

//         return (
//             <>
//                 <h1>Which Gundam lives in Archangel?</h1>
//                 <ul>
//                     {gundamlist.map((robot) => <Secondgundam model={robot} />)}
//                 </ul>
//             </>
            
//         );
// }

function Archangelii() {
    const gundams = [
        {id: 1, model: 'ZMGF-X10A Freedom Gundam'},
        {id: 2, model: 'ZMGF-X109 Justice Gundam'},
        {id: 3, model: 'Sword Strike Gundam'}
    ];

    return (
        <>
            <h1>Which Gundam lives in Archangel?</h1>
            <ul>
                {gundams.map((mobileSuite) => <Secondgundam key={mobileSuite.id} model={mobileSuite.model}/>)}
            </ul>
        </>
    );
}


export default Archangelii;