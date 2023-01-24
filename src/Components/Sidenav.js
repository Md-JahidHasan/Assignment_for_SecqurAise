import React from 'react';

const Sidenav = () => {
    return (
        <div className='bg-blue-400 min-h-screen w-14 flex flex-col justify-between py-5'>
            <i class='bx bx-menu text-3xl text-white'></i>
            <i class='bx bxs-log-out text-3xl text-white'></i>
        </div>
    );
};

export default Sidenav;