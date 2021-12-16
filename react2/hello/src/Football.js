// function Football() {
//     const shoot = (arg) => {
//         alert(arg);
//     }

//     return (
//         <button type="button" onClick={() => shoot("The tremendese Goal from Son ! ! !")}>Take ths shot!</button>
//     )
// }

// function Football() {
//     const shoot = () => {
//         alert("arg");
//     }

//     return (
//         <button type="button" onClick={shoot}>Take ths shot!</button>
//     )
// }

function Football() {
    const shoot = (a, e) => {
        alert(a, e.type);
        // alert(a , e.type);
    };

    return (
        <button type="button" onClick={(event)=> shoot("The tremendes Goall from Son!!!", event)}>Take the shot!</button>
    )

}

export default Football;