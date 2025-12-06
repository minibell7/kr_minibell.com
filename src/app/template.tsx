'use client';

import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
            }}
        >
            {children}
        </div>
    );
}
