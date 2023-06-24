import React from 'react'
import StudentTable from './components/StudentTable'
import studentData from './studentData'

const StudentManagement = () => {
  return (
    <div className='pt-5'><StudentTable tableData={studentData}/></div>
  )
}

export default StudentManagement