import React from 'react';
import Marquee from 'react-fast-marquee';

const TopBar = () => {
    return (
        <div className='bg-[#DE1012]'>
            <Marquee
                className="flex items-center justify-center">
                <div className='px-4'>After COVID break, Centre approves fourth phase roll-out of GIAN scheme</div>
                <div className='p-4 text-[30px] text-[#DE1012]'>***</div>
                <div className='px-4'>Eight years after its inception, past its brief discontinuation during the COVID period, the</div>
                <div className='p-4 text-[30px] text-[#DE1012]'>***</div>
            </Marquee>
        </div>
    );
};

export default TopBar;
