'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateHoverState = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(!!isClickable);
        };

        const handleMouseLeave = () => setIsHidden(true);
        const handleMouseEnter = () => setIsHidden(false);

        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mouseover', updateHoverState);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mouseover', updateHoverState);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    // Don't render on mobile/touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid var(--accent-primary)',
                    pointerEvents: 'none',
                    transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
                    transition: 'transform 0.15s ease-out, opacity 0.2s',
                    zIndex: 9999,
                    opacity: isHidden ? 0 : 1,
                    mixBlendMode: 'difference',
                }}
            />
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-secondary)',
                    pointerEvents: 'none',
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
                    zIndex: 9999,
                    opacity: isHidden ? 0 : 1,
                }}
            />
        </>
    );
}
