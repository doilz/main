
function Secondgundam(props) {
    return <li>This is {props.model} ! ! !</li>;
}

function Archangellist() {
    const gundamlist = [   
            "ZMGF-X10A Freedom Gundam",
            "ZMGF-X109 Justice Gundam",
            "Strike Gundam" 
        ];

        return (
            <>
                <h1>Which Gundam lives in Archangel?</h1>
                <ul>
                    {gundamlist.map((robot) => <Secondgundam model={robot} />)}
                </ul>
            </>
            
        );
}


export default Archangellist;