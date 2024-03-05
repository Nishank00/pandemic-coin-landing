'use client'
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const CountdownTimer = ({ initialTime }) => {
  const targetDate:any = moment(initialTime, 'DD-MM-YYYY').toDate();
    const newDate:any = new Date();
  const initialTimeDiff:any = Math.floor((targetDate - newDate) / 1000);
  const [timeLeft, setTimeLeft] = useState(initialTimeDiff);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeLeft]);

  const formatTime = (time) => {
    const duration = moment.duration(time, 'seconds');
    const days = Math.floor(duration.asDays());
    const hours = String(duration.hours()).padStart(2, '0');
    const minutes = String(duration.minutes()).padStart(2, '0');
    const seconds = String(duration.seconds()).padStart(2, '0');
    return {
      days: String(days).split(''),
      hours: hours.split(''),
      minutes: minutes.split(''),
      seconds: seconds.split(''),
    };
  };

  return (
    <div>
      {timeLeft > 0 ? (
        <div className='flex items-center gap-[5px] text-[25px] md:text-[50px] font-serif'>
        <div className="flex flex-col items-center gap-[5px] relative">
            <div className="flex gap-[5px]">
                <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{formatTime(timeLeft).days[0]}</span></div>
                <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{formatTime(timeLeft).days[1]}</span></div>
            </div>
            <span className=' text-[15px] md:text-[20px] absolute bottom-[-25px] md:bottom-[-35px]'>Days</span>
        </div>
        <div>:</div>
            <div className="flex flex-col items-center gap-[5px] relative">
                <div className="flex gap-[5px]">
                    <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{formatTime(timeLeft).hours[0]}</span></div>
                    <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{formatTime(timeLeft).hours[1]}</span></div>
                </div>
                <span className=' text-[15px] md:text-[20px] absolute bottom-[-25px] md:bottom-[-35px]'>Hours</span>
            </div>
        <div>:</div>
            <div className="flex flex-col items-center gap-[5px] relative">
                <div className="flex gap-[5px]">
                    <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{formatTime(timeLeft).minutes[0]}</span></div>
                    <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{formatTime(timeLeft).minutes[1]}</span></div>
                </div>
                <span className=' text-[15px] md:text-[20px] absolute bottom-[-25px] md:bottom-[-35px]'>Minutes</span>
            </div>
        <div>:</div>
            <div className="flex flex-col items-center gap-[5px] relative">
                <div className="flex gap-[5px]">
                    <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{formatTime(timeLeft).seconds[0]}</span></div>
                    <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{formatTime(timeLeft).seconds[1]}</span></div>
                </div>
                <span className=' text-[15px] md:text-[20px] absolute bottom-[-25px] md:bottom-[-35px]'>Seconds</span>
            </div>
      </div>
      ) : (
        <div className='flex items-center gap-[5px] text-[45px] md:text-[50px] font-serif'>
        <div className="flex flex-col items-center gap-[5px] relative">
            <div className="flex gap-[5px]">
                <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>0</span></div>
                <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>0</span></div>
            </div>
            <span className=' text-[15px] md:text-[20px] absolute bottom-[-25px] md:bottom-[-35px]'>Days</span>
        </div>
        <div>:</div>
            <div className="flex flex-col items-center gap-[5px] relative">
                <div className="flex gap-[5px]">
                    <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>0</span></div>
                    <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>0</span></div>
                </div>
                <span className=' text-[15px] md:text-[20px] absolute bottom-[-25px] md:bottom-[-35px]'>Hours</span>
            </div>
        <div>:</div>
            <div className="flex flex-col items-center gap-[5px] relative">
                <div className="flex gap-[5px]">
                    <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>0</span></div>
                    <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>0</span></div>
                </div>
                <span className=' text-[15px] md:text-[20px] absolute bottom-[-25px] md:bottom-[-35px]'>Minutes</span>
            </div>
        <div>:</div>
            <div className="flex flex-col items-center gap-[5px] relative">
                <div className="flex gap-[5px]">
                    <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>0</span></div>
                    <div className='border border-white min-h-[50px] md:min-h-[70px] min-w-[30px] md:min-w-[45px] rounded-[10px] relative'><span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>0</span></div>
                </div>
                <span className=' text-[15px] md:text-[20px] absolute bottom-[-25px] md:bottom-[-35px]'>Seconds</span>
            </div>
      </div>
      )}
    </div>
  );
};

export default CountdownTimer;
