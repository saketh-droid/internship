import React from 'react';
import search from '../assets/search.svg';
import { User } from '../component/components';
const Top = () => {
  return (
    <div className='w-[1152px] h-[48px] absolute top-[20px] left-[268px] gap-0 justify-between flex'>
        <div className='w-[614px] h-[48px] p-[14px_210px_14px_20px] gap-[10px] rounded-[12px] bg-white bg-transperant shadow-md'>
            <img className='w-[18px] h-[18px] gap-[0] absolute' src={search} alt="search"/>
            <input className='w-[550px] h-[30px] gap-[10px] absolute top-[8px] left-[50px]' type='text' placeholder='Search your course'>
            </input>
        </div>
        <User />
    </div>
  );
};

export default Top;
