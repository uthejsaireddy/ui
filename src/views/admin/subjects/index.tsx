import React from 'react'
import subjectData from './data/subjectData'
import SubjectTable from './components/SubjectTable'

const Subjects = () => {
  return (
    <div className='pt-5'><SubjectTable tableData={subjectData}/></div>
  )
}

export default Subjects