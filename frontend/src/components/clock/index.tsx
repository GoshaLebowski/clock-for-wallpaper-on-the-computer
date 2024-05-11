import React, { useEffect, useState, JSX } from "react";
import '../../style/style.scss';
import { Time } from "./time";

export const Clock: React.FC<ClockProps> = ({ clock }): JSX.Element => {
    const [currentClockLt, setCurrentClockLt] = useState<IClock>(() => {
        const savedClockLt = localStorage.getItem('clockLt');
        return savedClockLt ? JSON.parse(savedClockLt) : clock;
    });

    const [currentClockMt, setCurrentClockMt] = useState<IClock>(() => {
        const savedClockMt = localStorage.getItem('clockMt');
        return savedClockMt ? JSON.parse(savedClockMt) : clock;
    });

    const [isNightLt, setIsNightLt] = useState<boolean>(true)
    const [isNightMt, setIsNightMt] = useState<boolean>(true)

    useEffect(() => {
        const checkTimeOfDayLt = () => {
            const dateLt = new Date();
            const hour = (dateLt.getHours() % 12) || 12;
            const period = dateLt.getHours() < 12 ? 'AM' : 'PM';

            // Предположим, что до 6 утра и после 6 вечера всегда ночь
            setIsNightLt((hour < 6 && period === 'AM') || (hour >= 6 && period === 'PM'));
        };

        const localInterval = setInterval(checkTimeOfDayLt, 180000);

        const checkTimeOfDayMt = () => {
            const dateMt = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
            const newDateMt = new Date(dateMt)
            const hour = (newDateMt.getHours() % 12) || 12
            const period = newDateMt.getHours() < 12 ? 'AM' : 'PM';

            setIsNightMt((hour < 6 && period === 'AM') || (hour >= 6 && period === 'PM'))
        }

        const moscowInterval = setInterval(checkTimeOfDayMt, 180000);

        const intervalLt = setInterval(() => {
            const dateLt = new Date();
            const newClockLt: IClock = {
                hour: (dateLt.getHours() % 12) || 12,
                minute: dateLt.getMinutes(),
                second: dateLt.getSeconds(),
                period: dateLt.getHours() < 12 ? 'AM' : 'PM',
                day: dateLt.getDate(),
                month: dateLt.toLocaleDateString('en', {month: 'long'}).toLowerCase(),
                year: dateLt.getFullYear()
            }
            setCurrentClockLt(newClockLt);
            localStorage.setItem('clockLt', JSON.stringify(newClockLt));
        }, 1000);

        const intervalMt = setInterval(() => {
            const dateMt = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
            const newDateMt = new Date(dateMt);
            const newClockMt: IClock = {
                hour: (newDateMt.getHours() % 12) || 12,
                minute: newDateMt.getMinutes(),
                second: newDateMt.getSeconds(),
                period: newDateMt.getHours() < 12 ? 'AM' : 'PM',
                day: newDateMt.getDate(),
                month: newDateMt.toLocaleDateString('en', {month: 'long'}).toLowerCase(),
                year: newDateMt.getFullYear()
            }
            setCurrentClockMt(newClockMt);
            localStorage.setItem('clockMt', JSON.stringify(newClockMt));
        }, 1000);

        return () => {
            clearInterval(intervalLt);
            clearInterval(intervalMt);
            clearInterval(localInterval);
            clearInterval(moscowInterval);
        };
    }, []);

    return (
        <div className={'clock'}>
            <div className={'time'}>
                <Time
                    isNightLocalTime={isNightLt}
                    isNightMoscowTime={isNightMt}
                    currentClockLt={currentClockLt}
                    currentClockMt={currentClockMt}
                />
            </div>
        </div>
    );
};
