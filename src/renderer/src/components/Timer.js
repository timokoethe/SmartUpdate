import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const inactivityTimer = (timeout = 1000 * 60 * 0.2 ) => {
    const navigate = useNavigate();
    const timeoutRef = useRef(null);

    const resetTimer = () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            navigate('/');
        }, timeout);
    };

    useEffect(() => {
        const events = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll'];

        const handleInteraction = () => resetTimer();

        events.forEach((event) => {
            window.addEventListener(event, handleInteraction);
        });

        resetTimer();

        return () => {
            clearTimeout(timeoutRef.current);
            events.forEach((event) => {
                window.removeEventListener(event, handleInteraction);
            });
        };
    }, [navigate, timeout])
};

export default inactivityTimer;