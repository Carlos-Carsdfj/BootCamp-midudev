
import './App.css';

const  Header = ({course})=><h1>{course}</h1>;
const  Content  = (props)=><p>{props.contCourse}  with {props.exercises} exercises</p>;
const  Total  = ({total})=><p> Number of exercises {total}  </p>;



function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} ></Header>
      <Content contCourse={part1}  exercises={exercises1}></Content>
      <Content contCourse={part2}  exercises={exercises2}></Content>
      <Content contCourse={part3}  exercises={exercises3}></Content>

      <Total total= {exercises1 + exercises2 + exercises3}></Total>
    </div>
  )
}

export default App;
