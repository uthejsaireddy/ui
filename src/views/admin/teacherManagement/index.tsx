import React from 'react'
import TeacherTable from './components/TeacherTable'
import teacherData from './data/teacherData'

const TeacherManagement = () => {
  return (
    <div className="pt-5"><TeacherTable tableData={teacherData}/></div>
  )
}

export default TeacherManagement