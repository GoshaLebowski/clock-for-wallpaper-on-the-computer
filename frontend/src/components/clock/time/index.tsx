import React, {JSX} from "react";

export const Time: React.FC<TimeProps> = (props: TimeProps): JSX.Element => {
    const {isNightLocalTime, isNightMoscowTime, currentClockLt, currentClockMt} = props;

    return (
        <>
            {isNightLocalTime && (
                <div className={'time-lt'}>
                    <div>
                        <span className={'moon'}>
                            {`let `}
                        </span>
                        <span className={'moon'}>
                            {`clock: `}
                        </span>
                        <span className={'night'}>
                            {`localTime`}
                        </span>
                        <span className={'star-white'}>
                            {` = `}
                        </span>
                        <span className={'star'}>
                            {`{`}
                        </span>
                    </div>
                    <div className={'position-left'}>
                        <p>
                            <span className={'moon'}>
                                {`hour: `}
                            </span>
                            <span className={'star-dark'}>
                                {currentClockLt.hour}
                            </span>
                        </p>
                        <p>
                            <span className={'night'}>
                                {`minute: `}
                            </span>
                            <span className={'star-white'}>
                                {currentClockLt.minute}
                            </span>
                        </p>
                        <p>
                            <span className={'star-dark'}>
                                {`second: `}
                            </span>
                            <span className={'night'}>
                                {currentClockLt.second}
                            </span>
                        </p>
                        <p>
                            <span className={'night'}>
                                {`period: `}
                            </span>
                            <span className={'night'}>
                                {`"${currentClockLt.period}"`}
                            </span>
                        </p>
                        <p>
                            <span className={'night'}>
                                {`day: `}
                            </span>
                            <span className={'night'}>
                                {`"${currentClockLt.day}"`}
                            </span>
                        </p>
                        <p>
                            <span className={'lawn-night'}>
                                {`month: `}
                            </span>
                            <span className={'lawn-night'}>
                                {`"${currentClockLt.month}"`}
                            </span>
                        </p>
                        <p>
                            <span className={'lawn-night-dark'}>
                                {`year: `}
                            </span>
                            <span className={'lawn-night-dark'}>
                                {currentClockLt.year}
                            </span>
                        </p>
                    </div>
                    <div className={'lawn-night-dark'}>
                        {`}`}
                    </div>
                </div>
            ) || (
                <div className={'time-lt'}>
                    <div>
                        <span className={'sun'}>
                            {`let `}
                        </span>
                        <span className={'sun'}>
                            {`clock: `}
                        </span>
                        <span className={'day'}>
                            {`local`}
                        </span>
                        <span className={'sky'}>
                            {`Time = {`}
                        </span>
                    </div>
                    <div className={'position-left'}>
                        <p>
                            <span className={'sun'}>
                                {`hour: `}
                            </span>
                            <span className={'day'}>
                                {currentClockLt.hour}
                            </span>
                        </p>
                        <p>
                            <span className={'day'}>
                                {`minute: `}
                            </span>
                            <span className={'day'}>
                                {currentClockLt.minute}
                            </span>
                        </p>
                        <p>
                            <span className={'day'}>
                                {`second: `}
                            </span>
                            <span className={'day'}>
                                {currentClockLt.second}
                            </span>
                        </p>
                        <p>
                            <span className={'day'}>
                                {`period: `}
                            </span>
                            <span className={'day'}>
                                {`"${currentClockLt.period}"`}
                            </span>
                        </p>
                        <p>
                            <span className={'day'}>
                                {`day: `}
                            </span>
                            <span className={'day'}>
                                {`"${currentClockLt.day}"`}
                            </span>
                        </p>
                        <p>
                            <span className={'lawn-day'}>
                                {`month: `}
                            </span>
                            <span className={'lawn-day'}>
                                {`"${currentClockLt.month}"`}
                            </span>
                        </p>
                        <p>
                            <span className={'lawn-day-dark'}>
                                {`year: `}
                            </span>
                            <span className={'lawn-day-dark'}>
                                {currentClockLt.year}
                            </span>
                        </p>
                    </div>
                    <div className={'lawn-day-dark-2x'}>
                        {`}`}
                    </div>
                </div>
            )}

            {isNightMoscowTime && (
                <div className={'time-lt'}>
                    <div>
                        <span className={'moon'}>
                            {`let `}
                        </span>
                        <span className={'moon'}>
                            {`clock: `}
                        </span>
                        <span className={'night'}>
                            {`moscowTime`}
                        </span>
                        <span className={'star-white'}>
                            {` = `}
                        </span>
                        <span className={'star'}>
                            {`{`}
                        </span>
                    </div>
                    <div className={'position-left'}>
                        <p>
                            <span className={'moon'}>
                                {`hour: `}
                            </span>
                            <span className={'star-dark'}>
                                {currentClockMt.hour}
                            </span>
                        </p>
                        <p>
                            <span className={'night'}>
                                {`minute: `}
                            </span>
                            <span className={'star-white'}>
                                {currentClockMt.minute}
                            </span>
                        </p>
                        <p>
                            <span className={'star-dark'}>
                                {`second: `}
                            </span>
                            <span className={'night'}>
                                {currentClockMt.second}
                            </span>
                        </p>
                        <p>
                            <span className={'night'}>
                                {`period: `}
                            </span>
                            <span className={'night'}>
                                {`"${currentClockMt.period}"`}
                            </span>
                        </p>
                        <p>
                            <span className={'night'}>
                                {`day: `}
                            </span>
                            <span className={'night'}>
                                {`"${currentClockMt.day}"`}
                            </span>
                        </p>
                        <p>
                            <span className={'lawn-night'}>
                                {`month: `}
                            </span>
                            <span className={'lawn-night'}>
                                {`"${currentClockMt.month}"`}
                            </span>
                        </p>
                        <p>
                            <span className={'lawn-night-dark'}>
                                {`year: `}
                            </span>
                            <span className={'lawn-night-dark'}>
                                {currentClockMt.year}
                            </span>
                        </p>
                    </div>
                    <div className={'lawn-night-dark'}>
                        {`}`}
                    </div>
                </div>
            ) || (
                <div className={'time-lt'}>
                    <div>
                        <span className={'sun'}>
                            {`let `}
                        </span>
                        <span className={'sun'}>
                            {`clock: `}
                        </span>
                        <span className={'day'}>
                            {`moscow`}
                        </span>
                        <span className={'sky'}>
                            {`Time = {`}
                        </span>
                    </div>
                    <div className={'position-left'}>
                        <p>
                            <span className={'sun'}>
                                {`hour: `}
                            </span>
                            <span className={'day'}>
                                {currentClockMt.hour}
                            </span>
                        </p>
                        <p>
                            <span className={'day'}>
                                {`minute: `}
                            </span>
                            <span className={'day'}>
                                {currentClockMt.minute}
                            </span>
                        </p>
                        <p>
                            <span className={'day'}>
                                {`second: `}
                            </span>
                            <span className={'day'}>
                                {currentClockMt.second}
                            </span>
                        </p>
                        <p>
                            <span className={'day'}>
                                {`period: `}
                            </span>
                            <span className={'day'}>
                                {`"${currentClockMt.period}"`}
                            </span>
                        </p>
                        <p>
                            <span className={'day'}>
                                {`day: `}
                            </span>
                            <span className={'day'}>
                                {`"${currentClockMt.day}"`}
                            </span>
                        </p>
                        <p>
                            <span className={'lawn-day'}>
                                {`month: `}
                            </span>
                            <span className={'lawn-day'}>
                                {`"${currentClockMt.month}"`}
                            </span>
                        </p>
                        <p>
                            <span className={'lawn-day-dark'}>
                                {`year: `}
                            </span>
                            <span className={'lawn-day-dark'}>
                                {currentClockMt.year}
                            </span>
                        </p>
                    </div>
                    <div className={'lawn-day-dark-2x'}>
                        {`}`}
                    </div>
                </div>
            )}
        </>
    );
};
