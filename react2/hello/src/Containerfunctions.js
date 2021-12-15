import React, { useEffect, useState } from "react";

function Containerfunctions(props) {
    let [show, setShow] = useState(true)



    function deleteHandler() {
        // alert("The myheader is about to be unmounted")
        // console.log('component will unmount')
        setShow(show = false)
    }
    function addHandler() {
        // alert("The myheader is about to be unmounted")
        // console.log('component will unmount')
        setShow(show = true)
    }
    function Checkmounted() {
        // It takes a function
        useEffect(() => {
            // This gets called after every render, by default
            // (the first one, and every one after that)
            console.log('alert from checkmounted: \nrender!');

            // If you want to implement componentWillUnmount,
            // return a function from here, and React will call
            // it prior to unmounting.
            return () => alert('alert from checkmounted: \nunmounting');
        }, []) //[dependencies to watch = leave blank to run once or you will get a stack overflow  ]);

        return ("")
    }

    const Child = () => {
        return (
            <div>
                <h2>HEllO WORLD~~~~~~</h2>
                <button type='button' onClick={deleteHandler}>Delete Handler</button>
            </div>
        )
    }

    let myheader;
    if (show) {
        myheader = <Child />
    } else {
        myheader = <button type='button' onClick={addHandler}>Add Handler</button>
    }

    return (
        <div>
            <h1>componentWillUnmount</h1>
            {myheader}
            {show && <Checkmounted />}
        </div>
    )
}

export default Containerfunctions ;