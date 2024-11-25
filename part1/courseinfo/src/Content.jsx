import Part from "./Part.jsx"
const Content = props => {


    return (
      <div>
        <Part/>
        <Part/>
        <Part/>
        <p>
            {props.parts[0].name} {props.parts[0].exercises}
        </p>
        <p>
            {props.parts[1].name} {props.parts[1].exercises}
        </p>
        <p>
            {props.parts[2].name} {props.parts[2].exercises}
        </p>
      </div>
    )
  }
export default Content