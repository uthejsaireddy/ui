import React from 'react'
import ColumnsTable from './components/ColumnsTable'
import tableDataColumns from '../tables/variables/tableDataColumns'

const EventManagement = () => {
  return (
    <div className="w-100 mt-5 grid h-full gap-5">
         <ColumnsTable tableData={tableDataColumns} />
    </div>
  )
}

export default EventManagement