import React, { useState, useEffect } from 'react';

const Timer = () => {
    const calculateTimeLeft = () => {
        const currentDate = new Date();
        const targetDate = new Date('2024-1-13'); // Replace with your target date

        const difference = targetDate - currentDate;
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return {
                days: String(days).padStart(2, '0'),
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0'),
                isDay: days > 0,
            };
        } else {
            return {
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
                isDay: false,
            };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="flex items-center justify-start space-x-0 leading-0">
            {timeLeft.isDay ? (
                <>
                    <div className="flex items-center justify-center timer-item">
                        <span className="timer-value text-[#DE1012] font-bold px-0 text-[40px]">{timeLeft.days}</span>
                        <span className="timer-label text-white text-[32px] px-1 font-bold">:</span>
                    </div>
                    <div className="flex items-center justify-center timer-item">
                        <span className="timer-value text-[#DE1012] font-bold px-1 text-[40px]">{timeLeft.hours}</span>
                        <span className="timer-label text-white text-[32px] px-1 font-bold">:</span>
                    </div>
                    <div className="flex items-center justify-center timer-item">
                        <span className="timer-value text-[#DE1012] font-bold px-1 text-[40px]">{timeLeft.minutes}</span>
                        <span className="timer-label text-white text-[32px] px-0 font-bold"></span>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex items-center justify-center timer-item">
                        <span className="timer-value text-[#DE1012] font-bold px-0   text-[40px]">{timeLeft.hours}</span>
                        <span className="timer-label text-white text-[32px] px-1 font-bold">:</span>
                    </div>
                    <div className="flex items-center justify-center timer-item">
                        <span className="timer-value text-[#DE1012] font-bold px-1 text-[40px]">{timeLeft.minutes}</span>
                        <span className="timer-label text-white text-[32px] px-1 font-bold">:</span>
                    </div>
                    <div className="flex items-center justify-center timer-item">
                        <span className="timer-value text-[#DE1012] font-bold px-1 text-[40px]">{timeLeft.seconds}</span>
                        <span className="timer-label text-white text-[32px] px-0 font-bold"></span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Timer;
