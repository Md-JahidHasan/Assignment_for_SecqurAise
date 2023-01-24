import React from 'react';


const Picture = ({userDetails}) => {
    console.log(userDetails);
    

    
    return (
        <div className='w-1/3 text-start'>
            <h1 className='font-bold ml-6 mt-3 text-xl'>{userDetails?.Gender ? userDetails?.Gender : 'Female'}</h1>
            <div className='border-4 m-4 h-[450px]'>
                <img className='w-full h-full' src={userDetails?.Image ? userDetails?.Image : 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZlbWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'} alt="" />
            </div>
        </div>
    );
};

export default Picture;