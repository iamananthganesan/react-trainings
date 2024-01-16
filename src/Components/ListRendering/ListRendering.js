import React, { Component } from "react";
import './ListRendering.css'
class ListRendering extends Component {
    constructor() {
        super()
        this.state = {
            students: [
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
        }
    }
    render() {

        const styleWrapper = {
            backgroundColor: 'lightcoral',
            fontSize: '24px'
        }

        // let filteredStudents;
        // console.log(filteredStudents)
        // if (filteredStudents !== undefined) {
        //     console.log('inside filtered students cond')

        // } else {
        //     this.state.students.filter((student, index) => {
        //         return (<>
        //             {
        //                 filteredStudents = (student.studentSection === 'a') ? <li key={student.stud_id}>Hey my name is {student.studenName} am from section {student.studenClass} </li> : null
        //             }
        //         </>

        //         )

        //     })
        // }
        //console.log('filteredStudents', filteredStudents)

        return (

            <div className="studentList" style={styleWrapper} >
                <ul>
                    {
                        this.state.students.filter((student, index) => { return student.studentSection === 'a' }).map((student, index) => {
                            return (
                                <li key={student.stud_id}>Hey my name is {student.studenName} am from section {student.studenClass} </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ListRendering