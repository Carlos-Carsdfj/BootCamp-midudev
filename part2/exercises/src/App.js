import './App.css';
import {CourseShow} from './Courses.js'

function App({courses}) {
  return (
    <div >
      < CourseShow courses = {courses}></CourseShow>

    </div>
  );
}

export default App;
