import { useState } from "react"
import './ListRendering.css'
const ListRenderingFunctionalComponent = () =>{
    const [students, setStudents] = useState(
        [
            {
                studenName: "jack",
                studenClass: 6,
                studentSection: "a",
                stud_id: 1
            },
            {
                studenName: "tom",
                studenClass: 6,
                studentSection: "a",
                stud_id: 2
            },
            {
                studenName: "lathem",
                studenClass: 7,
                studentSection: "b",
                stud_id: 3
            }
        ]
    );
        const handleStudents = () =>{
            setStudents(
                [
                    {
                        studenName: "Magesh",
                        studenClass: 6,
                        studentSection: "a",
                        stud_id: 1
                    },
                    {
                        studenName: "Jayasree",
                        studenClass: 6,
                        studentSection: "a",
                        stud_id: 2
                    },
                    {
                        studenName: "Senthil",
                        studenClass: 7,
                        studentSection: "a",
                        stud_id: 3
                    }
                ]
            )
        }
    return(
        <div className="studentList">
                <ul>
                    {
                        students.filter((student, index) => { return student.studentSection === 'a' }).map((student, index) => {
                            return (
                                <li key={student.stud_id}>Hey my name is {student.studenName} am from section {student.studenClass} </li>
                            )
                        })
                    }
                </ul>

                <button onClick={handleStudents}>update with new student list</button>
                
            </div>
    )
}

export default ListRenderingFunctionalComponent;