export const CourseShow =({courses})=>{


return(<div>
{

courses.map((course)=>

        <div key={course.id}>
            <h1>{course.name}</h1>
        <ul>{course.parts.map((part)=>
                <li key={part.id}>
                <p>{part.name} with {part.exercises} exercises</p> 
                </li>  
             

         )}
        </ul>
        
        <strong>total of {course.parts.reduce((previousV,newV)=>{     
            const resut = previousV.exercises > 0 ? previousV.exercises + newV.exercises : previousV+newV.exercises;
          return  resut
        }
        )}</strong> 
    </div>
)
}
</div>)

}




