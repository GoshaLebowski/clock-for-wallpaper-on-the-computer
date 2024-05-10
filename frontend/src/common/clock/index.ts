interface ClockProps {
    clock: IClock
}

interface IClock {
    hour: number | '',
    minute: number | '',
    second: number | '',
    period: string | '',
    day: number | '',
    month: string | '',
    year: number | ''
}