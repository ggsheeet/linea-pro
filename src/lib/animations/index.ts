'use client'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export const AOSProvider = () => {
    useEffect(() => {
        Aos.init({
            delay: 50,
            duration: 1000,
            once: false,
            easing: 'ease',
            debounceDelay: 50,
        })
        Aos.refresh()
    }, []);

    return null
};
