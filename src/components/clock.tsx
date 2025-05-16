'use client';

import Clock from 'react-live-clock';
import React from 'react';
export default function MyClock() {
    const [isMounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!isMounted) {
        return <span>Loading...</span>;
    }
    return (
        <div className="dark:bg-primary-foreground rounded-md border border-gray-700/10 bg-gray-100 px-2 py-1 font-mono text-black dark:border-gray-200/10 dark:text-white">
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Ho_Chi_Minh'} noSsr={true} />
        </div>
    );
}
