//props 주는 법.

function Secondgundam(props) {
    return <h2>This is {props.secondgundamName.model} ! ! !</h2>
}

function Archangelfunction() {
    const gundamInfo = {    
            camp: "Earth",
            model: "X10A",
            engine: "Atomic",
            pilot: "Kira Yamato"
        };

        return (
            <>
                <h1>Which gundam in Archangel?</h1>
                <Secondgundam secondgundamName={gundamInfo} />
            </>
        );        
    }

// function Secondgundam(props) {
//     return <h2>This is {props.model} ! ! !</h2>
// }

// function Archangelfunction() {
//     const gundamInfo = {    
//             camp: "Earth",
//             model: "X10A",
//             engine: "Atomic",
//             pilot: "Kira Yamato"
//         };

//         return (
//             <>
//                 <h1>Which gundam in Archangel?</h1>
//                 <Secondgundam model="ZGMF-A01" />
//             </>
//         );        
//     }

export default Archangelfunction;