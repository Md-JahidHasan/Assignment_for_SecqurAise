import React from 'react';

const Events = ({users, handleClick}) => {
    console.log({users});
    return (
        <div className='w-1/3 border-[7px] px-1'>
            <div className='flex justify-between p-2'>
                <p className='font-bold text-xl'>Events</p>
                <p><i class='bx bx-slider-alt  text-3xl'></i></p>
            </div>
            <div>
            {
                users.map(user=><button
                
                    onClick={()=>handleClick(user.id)}
                    key={user.id}
                    className='bg-slate-200 mb-1 p-2 text-start w-full'
                    >
                    <div className='flex justify-between'>
                        <h1 className='font-bold'>{user.ID}: {user.Location}</h1>
                        <p className='text-sm'>{user.Date} {user.Time}</p>
                    </div>
                    <p>Person detected</p>
                </button>)
            }
            </div>
        </div>
    );
};

export default Events;