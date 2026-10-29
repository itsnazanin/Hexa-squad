import { useState , useEffect } from "react";


function useCountDown(initialSeconds = 60) {
    const [timeLeft, setTimeLeft] = useState(initialSeconds)
    useEffect(() => {
        if (timeLeft <= 0) return

        const timerId = setInterval(() => {
            setTimeLeft((prev) => Math.max(prev - 1, 0))
        }, 1000)
        
        return () => clearInterval(timerId)
    }, [timeLeft])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    const formattedTime = `${minutes}:${String(seconds).padStart(2,'0')}`

    const resetTimer = () => {
        setTimeLeft(initialSeconds)
    }

    return {
        timeLeft,
        formattedTime,
        isFinished: timeLeft === 0,
        resetTimer
    }
}

export default useCountDown