'use client'

import React, { useEffect, useState } from 'react'
import { DarkMode, LightMode } from '@mui/icons-material';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {

    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return (
        <button type="button" onClick={() => setTheme('light')} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <div class="animate-pulse flex flex-col items-center">
                <div class="rounded-full bg-slate-800 h-6 w-6 mb-1"></div>
                <div class="h-4 w-8 bg-slate-800 rounded col-span-1"></div>
            </div>
        </button>
    );

    if (resolvedTheme === 'dark') {
        return (
            <button type="button" onClick={() => setTheme('light')} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <LightMode className='w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Light</span>
            </button>
        );
    }

    if (resolvedTheme === 'light') {
        return (
            <button type="button" onClick={() => setTheme('dark')} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <DarkMode className='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Dark</span>
            </button>
        );
    }
}

export default ThemeSwitch