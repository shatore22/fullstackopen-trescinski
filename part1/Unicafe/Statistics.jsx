const Statistics = (props) => {
    return(
        <div>
        <h1>statistics</h1>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.good + props.neutral + props.bad}</p>
        <p>average {(props.good * 1 + props.neutral * 0 + props.bad * -1) / (props.good + props.neutral + props.bad)}</p>
        <p>positive {props.good / (props.good + props.neutral + props.bad)*100}%</p>
        </div>
    )
}

export default Statistics