import React from 'react'

interface InputFieldProps {
    type?: string | 'text',
    name: string,
    register: any,
    errors: any,
    value?: any,
    min?: number,
    max?: number;
    label: string,
    placeHolder?: string,
    required?: boolean | false,
    classNames?: {
      container?: string | '',
      label?: string | '',
      input?: string | '',
      error?: string | '',
    }

}

const InputField = ({type, name, classNames, register, errors, value,min,max,  label, required = false, placeHolder}: InputFieldProps) => {
  const ALTER_TYPES = ['radio', 'checkbox'];
  return (
    <div className={`flex ${ !ALTER_TYPES.includes(type) ? 'flex-col': 'flex-row-reverse justify-end'} w-full gap-[2px] mb-2 ${classNames?.container ?? ''}`}>
        {label && (
            <label className={` ${classNames?.label ?? ''}`} htmlFor={name}>{label}</label>
        )}
        <input defaultValue={value} id={name} type={type} {...register(name, {required: required})} placeholder={placeHolder || label || ''} min={min} max={max} className={` ${errors[name] ? 'border border-red-500' : ''} ${ALTER_TYPES.includes(type) ? "": "w-full px-[10px] py-[20px] rounded-[10px]"} ${classNames?.input ?? ''}`} />
        {errors[name] && <span className='text-[12px] text-pdc-red'>{errors[name]?.message ?? ''}</span>}
    </div>
  )
}

export default InputField