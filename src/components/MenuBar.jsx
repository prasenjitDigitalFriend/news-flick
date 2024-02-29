import React from 'react';
import ThemeSwitch from "@/components/ThemeSwitch";
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import HomeIcon from '@mui/icons-material/Home';
import PollRoundedIcon from '@mui/icons-material/PollRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import SportsScoreRoundedIcon from '@mui/icons-material/SportsScoreRounded';

const MenuBar = () => {
    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-2xl grid-cols-6 mx-auto font-medium">
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <HomeIcon className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <NewspaperRoundedIcon className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">News</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <VideocamRoundedIcon className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Video</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <PollRoundedIcon className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Polls</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <SportsScoreRoundedIcon className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Score</span>
                    </button>
                    <ThemeSwitch />
                </div>
            </div>
        </>
    )
}

export default MenuBar