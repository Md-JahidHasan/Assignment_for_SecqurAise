import React from 'react';

const Header = ({users}) => {
    return (
        <div className='bg-blue-900 h-14 text-start px-6 font-bold flex items-center justify-between'>
            <h1 className='text-green-400 font-serif'>
                <span className='text-2xl'>S</span>ECQUR<span className='text-red-400 text-2xl'>AI</span>SE
            </h1>
            <div className='flex'>
                <div className='bg-green-600 px-4 py-2 '>20</div>
                <div className='bg-red-600 px-4 py-2 ml-2 text-white'>20</div>
            </div>
        </div>
    );
};

export default Header;