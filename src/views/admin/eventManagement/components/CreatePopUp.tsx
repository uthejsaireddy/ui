import Card from 'components/card'
import InputField from 'components/fields/InputField';
import LargeDropdown from 'components/largeDropdown';
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';

const CreatePopUp = (props: any) => {
    const examTypes = ["SAT", "ACT", "MCAT", "K-12 Tutoring", "Default"]
    const plans = ["Small Group"]

    const [examSelect, setExamSelect] = useState<string>("SAT")
    const [planSelect, setPlanSelect] = useState<string>("Small Group") 

    // console.log(selectedOptions)
    return (
        <div className="bg-[rgba(0,0,0,0.5)] w-screen h-screen overflow-y-hidden fixed top-0 right-0 z-50 flex items-center justify-center">
            <Card extra={"w-1/3 h-auto p-6"}>
                <header className="relative flex items-center justify-between">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                        Create New Batch
                    </div>
                    <MdClose className='h-6 w-6 cursor-pointer'
                        onClick={() => props.setModal(false)}
                    />
                </header>
                <main className="mt-8 flex flex-col">
                    <LargeDropdown
                        extra="mb-3"
                        label="Exam Type *"
                        dropdownData={examTypes}
                        selected={examSelect}
                        setSelected={setExamSelect}
                        id="exam-type"
                    />
                    <LargeDropdown
                        extra="mb-3"
                        label="Plan *"
                        dropdownData={plans}
                        selected={planSelect}
                        setSelected={setPlanSelect}
                        id="exam-type"
                        disabled={true}
                    />
                    <InputField
                        variant="auth"
                        extra="mb-3"
                        label="Name of the Batch *"
                        placeholder="Type of exam..."
                        id="exam-type"
                        type="text"
                    />
                    <InputField
                        variant="auth"
                        extra="mb-3"
                        label="Hours *"
                        placeholder="Type of exam..."
                        id="exam-type"
                        type="text"
                    />

                    <button className="linear mt-4 flex items-center justify-center rounded-xl bg-[#007bff] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#0069d9] active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                        Submit
                    </button>
                </main>
            </Card>
        </div>
    )
}

export default CreatePopUp