import React from 'react';
import { useState } from 'react';

const Events = ({users, handleClick, setUsers, users2}) => {
    const [searchField, setSearchField] = useState(false)



    const handleSearchBtn =()=>{
        console.log('click');
        setSearchField(!searchField)
        console.log(searchField);
    }
    console.log({users, users2});

    const handleFilteredLocation =(e)=>{
        console.log(e.target.value, "Jahid");
        setUsers(users)
        // console.log(use);
        const copiedUsers = [...users]
        const filteredItems = copiedUsers.filter(item=> e.target.value === item.Location);
        setUsers(filteredItems)
    }
    const handleFilteredGender =(e)=>{
        console.log(e.target.value, "Jahid");
        setUsers(users)
        // console.log(use);
        const copiedUsers = [...users]
        const filteredItems = copiedUsers.filter(item=> e.target.value === item.Gender);
        setUsers(filteredItems)
    }
    return (
        <div className='w-1/3 border-[7px] px-1'>
            <div className='flex justify-between p-2'>
                <p className='font-bold text-xl'>Events</p>
                <button onClick={handleSearchBtn}><i class='bx bx-slider-alt  text-3xl '></i></button>
            </div>
            {
                searchField && <div className={"text-start my-2 "}>
                    <h1>Search with specific field..</h1>
                    <div className='flex '>
                        <select onChange={(e) => handleFilteredLocation(e)} className="select select-bordered  max-w-xs w-1/3">
                            <option disabled selected>Location</option>
                            <option>Chennai</option>
                            <option>Hyderabad</option>
                            <option>Bangalore</option>
                        </select>
                        <select onChange={(e)=>handleFilteredGender(e)} className="select select-bordered w-1/3 max-w-xs">
                            <option disabled selected>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <input type="date" className='input input-bordered w-1/3 max-w-xs' name="" id="" />
                    </div>
                </div>
            }
            
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