import React from 'react';

const Events = ({users}) => {
    console.log({users});
    return (
        <div className='w-1/3 border-[7px]'>
            <div className='flex justify-between p-2'>
                <p className='font-bold text-2xl'>Events</p>
                <p>iC</p>
            </div>
            <div>
            {
                users.map(user=><div key={user.id} className='bg-slate-200 m-1 p-2 text-start'>
                    <div className='flex justify-between'>
                        <h1 className='font-bold'>{user.ID}: {user.Location}</h1>
                        <p className='text-sm'>{user.Date} {user.Time}</p>
                    </div>
                    <p>Person detected</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default Events;