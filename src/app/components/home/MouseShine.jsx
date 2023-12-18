import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HoverEffect = ({ children }) => {
    const buttonRef = useRef(null);

    const mouseMoveEvent = (e) => {
        const { x, y } = buttonRef.current.getBoundingClientRect();
        buttonRef.current.style.setProperty('--x', e.clientX - x);
        buttonRef.current.style.setProperty('--y', e.clientY - y);
    };

    useEffect(() => {
        const element = buttonRef.current;

        if (element) {
            element.addEventListener('mousemove', mouseMoveEvent);
        }

        return () => {
            if (element) {
                element.removeEventListener('mousemove', mouseMoveEvent);
            }
        };
    }, []);

    return (
        <motion.div
            ref={buttonRef}
            className="relative shiny"
            // whileHover={{ '&:after': { opacity: 0.4 } }}
            
        >
            {children}
        </motion.div>
    );
};

export default HoverEffect;
