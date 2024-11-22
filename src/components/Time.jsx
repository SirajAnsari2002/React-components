function Time(){
    let time = new Date();
    return <h3>Time and date is: {time.toLocaleDateString()} & {time.toLocaleTimeString()}</h3>
}

export default Time;