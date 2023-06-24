import Card from 'components/card'
import Dropdown from 'components/dropdown';
import React, { useState } from 'react'
import { MdAdd, MdEdit, MdDelete } from 'react-icons/md';
import { AiOutlineUser } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import AddResourceModal from './components/AddResourceModal';

const ResourceLibrary = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const transparent = false

  const handleAdd = () => {
    setModal(true)
  }
  return (
    <div className='pt-5'>
{modal && <AddResourceModal setModal={setModal}/>}
      <header className="relative flex items-center justify-between mt-4">
        {/* <CardMenu transparent={false} data={'create'}/> */}
        <button className="linear flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={handleAdd}>
          <MdAdd className="h-6 w-6" />Add Resource
        </button>
      </header>

      <main className="flex flex-wrap pt-10 gap-5">
        <Card extra={"w-[300px] h-auto p-4 h-full"}>
          <header className='flex justify-between border-b-[1px] border-gray-200 pb-4'>
            <div className="text-xl font-bold text-navy-700 dark:text-white">
              SAT - READINGTEST
            </div>
            <Dropdown
              button={
                <button
                  onClick={() => setOpen(!open)}
                  className={`flex items-center text-xl hover:cursor-pointer ${transparent
                    ? "bg-none text-white hover:bg-none active:bg-none"
                    : "bg-lightPrimary p-2 text-[#007bff] hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
                    } linear justify-center rounded-lg font-bold transition duration-200`}
                >
                  <BsThreeDots className="h-6 w-6" />
                </button>
              }
              animation={"origin-top-right transition-all duration-300 ease-in-out"}
              classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
              children={
                <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className=" text-[16px] flex cursor-pointer items-center gap-4 p-2 hover:bg-[#007bff] hover:text-white rounded-xl">
                    <span>
                      <MdEdit />
                    </span>
                    Edit
                  </p>
                  <p className="text-[16px] flex cursor-pointer items-center gap-4 p-2 hover:bg-[#007bff] hover:text-white rounded-xl">
                    <span>
                      <MdDelete />
                    </span>
                    Delete
                  </p>
                </div>
              }
            />
          </header>
          <div className='pt-5 text-xl'>
            Resource 1
          </div>
          <div className='pt-2'>
            Test Test TestTest Test TestTest Test
          </div>
          <button className="mt-10 linear flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >View Details
          </button>
        </Card>
        <Card extra={"w-[300px] h-auto p-4 h-full"}>
          <header className='flex justify-between border-b-[1px] border-gray-200 pb-4'>
            <div className="text-xl font-bold text-navy-700 dark:text-white">
              SAT - READINGTEST
            </div>
            <Dropdown
              button={
                <button
                  onClick={() => setOpen(!open)}
                  className={`flex items-center text-xl hover:cursor-pointer ${transparent
                    ? "bg-none text-white hover:bg-none active:bg-none"
                    : "bg-lightPrimary p-2 text-[#007bff] hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
                    } linear justify-center rounded-lg font-bold transition duration-200`}
                >
                  <BsThreeDots className="h-6 w-6" />
                </button>
              }
              animation={"origin-top-right transition-all duration-300 ease-in-out"}
              classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
              children={
                <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className=" text-[16px] flex cursor-pointer items-center gap-4 p-2 hover:bg-[#007bff] hover:text-white rounded-xl">
                    <span>
                      <MdEdit />
                    </span>
                    Edit
                  </p>
                  <p className="text-[16px] flex cursor-pointer items-center gap-4 p-2 hover:bg-[#007bff] hover:text-white rounded-xl">
                    <span>
                      <MdDelete />
                    </span>
                    Delete
                  </p>
                </div>
              }
            />
          </header>
          <div className='pt-5 text-xl'>
            Resource 1
          </div>
          <div className='pt-2'>
            Test Test TestTest Test TestTest Test
          </div>
          <button className="mt-10 linear flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >View Details
          </button>
        </Card>
        <Card extra={"w-[300px] h-auto p-4 h-full"}>
          <header className='flex justify-between border-b-[1px] border-gray-200 pb-4'>
            <div className="text-xl font-bold text-navy-700 dark:text-white">
              SAT - READINGTEST
            </div>
            <Dropdown
              button={
                <button
                  onClick={() => setOpen(!open)}
                  className={`flex items-center text-xl hover:cursor-pointer ${transparent
                    ? "bg-none text-white hover:bg-none active:bg-none"
                    : "bg-lightPrimary p-2 text-[#007bff] hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
                    } linear justify-center rounded-lg font-bold transition duration-200`}
                >
                  <BsThreeDots className="h-6 w-6" />
                </button>
              }
              animation={"origin-top-right transition-all duration-300 ease-in-out"}
              classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
              children={
                <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className=" text-[16px] flex cursor-pointer items-center gap-4 p-2 hover:bg-[#007bff] hover:text-white rounded-xl">
                    <span>
                      <MdEdit />
                    </span>
                    Edit
                  </p>
                  <p className="text-[16px] flex cursor-pointer items-center gap-4 p-2 hover:bg-[#007bff] hover:text-white rounded-xl">
                    <span>
                      <MdDelete />
                    </span>
                    Delete
                  </p>
                </div>
              }
            />
          </header>
          <div className='pt-5 text-xl'>
            Resource 1
          </div>
          <div className='pt-2'>
            Test Test TestTest Test TestTest Test
          </div>
          <button className="mt-10 linear flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >View Details
          </button>
        </Card>
      </main>

    </div>
  )
}

export default ResourceLibrary