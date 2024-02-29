'use client';

import { Button } from '@mui/base'
import { Drawer, IconButton, Typography, } from '@mui/material'
import React, { useState } from 'react'

const SideMenuDrawer = () => {
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    return (
        <>
            <button onClick={() => openDrawer()} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <Drawer open={open} onClose={closeDrawer} className="p-4" PaperProps={{
                sx: { width: {xs:"80%", md: "30%" }},
            }}>
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Material Tailwind
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <Typography color="gray" className="mb-8 pr-4 font-normal">
                    Material Tailwind features multiple React and HTML components, all
                    written with Tailwind CSS classes and Material Design guidelines.
                </Typography>
                <div className="flex gap-2">
                    <Button size="sm" variant="outlined">
                        Documentation
                    </Button>
                    <Button size="sm">Get Started</Button>
                </div>
            </Drawer>
        </>
    )
}

export default SideMenuDrawer