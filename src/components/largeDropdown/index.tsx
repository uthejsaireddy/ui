import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';

const LargeDropdown = (props: {
    id?: string;
    label?: string;
    extra?: string;
    dropdownData?: string[];
    selected?: any;
    state?: string;
    disabled?: boolean;
    setSelected?: any;
}) => {
    const { label, id, extra, dropdownData, state, disabled, selected, setSelected } = props;
    const [showOptions, setShowOptions] = useState(false)
    return (
        <div className={`${extra}`}>
            <label
                htmlFor={''}
                className={`text-sm text-navy-700 dark:text-white ml-1.5 font-medium
                    }`}
            >
                {label}
            </label>
            <div className="relative">
                <div className='mt-2 flex h-12 w-full items-center justify-between cursor-pointer rounded-xl border bg-white/0 p-3 text-sm'
                onClick={()=>setShowOptions(!showOptions)}>
                    <p>{selected}</p>
                    <MdKeyboardArrowDown className='w-6 h-6' />
                </div>
                {
                    showOptions && <ul className="absolute top-14 w-full z-50 cursor-pointer rounded-xl border bg-white p-3 text-sm outline-none">
                        {dropdownData && dropdownData.map((data)=>{
                            return <li className="p-2 hover:bg-brand-600 transition duration-200 hover:text-white rounded-xl"
                            onClick={()=>{
                                setSelected(data); 
                                setShowOptions(false)}}
                            >{data}</li>
                        })}
                </ul>
                }
                
            </div>
        </div>
    )
}

export default LargeDropdown;