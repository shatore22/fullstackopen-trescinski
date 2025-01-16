import App from "./App"
import Header from "./Header"
import Total from "./Total"
import Content from "./Content"

const Course = ({course}) => {
    // return (
    //     <div>
    //     <Header course={course} /> 
    //     <Content parts={course.parts} />
    //     <Total parts={course.parts} />
    //   </div>
    // )
    return (
      <div>
        {course.map(value => (
          <div key={value.id}>
            <Header course={value.name}/>
            <Content parts={value.parts} />
            <Total parts={value.parts} />
          </div>
        ))}
      </div>
    )
}

export default Course