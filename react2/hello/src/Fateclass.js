import React from "react";

class Fate extends React.Component{

    render() {
        const characters = this.props.characters;

        return (
            <>
                <h1>Fate Characters!!!</h1>
                {
                    characters.length > 0 &&
                        <h2>
                            {characters.length} characters in Fate Stay Night Animation
                        </h2>
                }
            </>
        );
        }
    }    

export default Fate;