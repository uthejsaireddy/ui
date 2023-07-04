import Card from 'components/card'
import React from 'react'
import { MdAdd, MdEdit } from 'react-icons/md'

const Events = (props: any) => {
    // const tableData:any = []
    const { tableData } = props
    return (
        <Card extra={"w-full pb-10 p-4 h-full"}>
            <header className="relative flex items-center justify-between mt-4">
                <div className="text-xl font-bold text-navy-700 dark:text-white">
                    EVENTS
                </div>

            </header>

            <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="!border-px !border-gray-400">
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    DATE
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    DETAILS
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    PLAN
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    TEACHER NAME
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="text-sm font-bold text-gray-600">
                                    SUBJECT
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="items-center justify-between text-sm font-bold text-gray-600">
                                    TIME
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="flex items-center justify-center text-sm font-bold text-gray-600">
                                    MEETING LINK
                                </div>
                            </th>
                            <th
                                className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                                <div className="flex items-center justify-center text-sm font-bold text-gray-600">
                                    ACTION
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData && tableData.map((data: any, i: number) => {
                            return (<tr key={data._id}>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className='text-sm font-bold text-navy-700'>{data.scheduleDate}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className='text-sm font-bold text-navy-700'>{data.batchDetails.student.firstName}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className='text-sm font-bold text-navy-700'>{data.plan}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className="text-sm font-bold text-navy-700">{data.teacherDetails.firstName}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className="text-sm font-bold text-navy-700">{data.subjectDetails.name}</p>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <p className="text-sm font-bold text-navy-700">{data.fromTime.hour}:{data.fromTime.minute} to {data.toTime.hour}:{data.toTime.minute}</p>
                                </td>

                                <td className="min-w-[110px] border-white/0 py-3 pr-4 flex justify-center">
                                    <button className='border border-blue-500 text-blue-500 transition duration-200 hover:bg-blue-500 hover:text-white rounded-lg px-3 py-2 flex justify-center cursor-pointer text-sm font-bold'>
                                        Join Meeting
                                    </button>
                                </td>
                                <td className="min-w-[110px] border-white/0 py-3  pr-4">
                                    <div className="flex items-center gap-3 justify-center cursor-pointer p-2 text-[#007bff] hover:bg-gray-100 w-10 h-10 rounded-lg">
                                        <MdEdit/>
                                    </div>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </Card >
    )
}

export default Events