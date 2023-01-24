import React from 'react';

const Details = ({userDetails}) => {
    return (
        <div className='w-1/3 text-start mt-20 p-6'>
            <div className='mb-5'>
                <h1 className='font-bold text-2xl'>{userDetails?.ID}</h1>
                <h1 className='font-bold text-xl'>Person Detected</h1>
            </div>
            <div className='mb-5'>
                <tr>
                    <td>Name </td>
                    <td>: {userDetails?.Name ? userDetails?.Name : 'Female01'}</td>
                </tr>
                <tr>
                    <td className='pr-2 '>Location </td>
                    <td>: {userDetails?.Location ? userDetails?.Location :'Bangalore'}</td>
                </tr>
                <tr>
                    <td>Date </td>
                    <td>: {userDetails?.Date ? userDetails?.Date :'5-Jan-23'}</td>
                </tr>
                <tr>
                    <td>Time </td>
                    <td>: {userDetails?.Time ? userDetails?.Time :'9:05:23'}</td>
                </tr>
            </div>
            <div>
                <p className='font-bold'>Decription</p>
                <p>{userDetails?.Name ? userDetails?.Name : 'Female01'} is detected at {userDetails?.Location ? userDetails?.Location : 'Bangalore'} on {userDetails?.Date ? userDetails?.Date?.slice(0, 1) : '5'}<sup className=''>th</sup> {userDetails?.Date ? userDetails?.Date?.slice(2, 5) : 'Jan'}, 20{userDetails?.Date ?userDetails?.Date?.slice(6, 8):'23'} </p>
            </div>
        </div>
    );
};

export default Details;