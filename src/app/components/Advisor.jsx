import React from 'react'

const Advisor = ({ name, role }) => (
    <div className="w-full">
        <div className="h-full flex items-center justify-center border-gray-800 border p-4 rounded-lg">
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-white title-font font-medium">{name}</h2>
                <p className="text-gray-600">{role}</p>
            </div>
        </div>
    </div>
);

export default Advisor