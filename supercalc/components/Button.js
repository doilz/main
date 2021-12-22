export function Button(props) {
    return(
        <div>
            <button 
            className={props.class}
            value={props.number}
            onClick={props.excution}
            >
            {value}
            </button>
        </div>
    )
}