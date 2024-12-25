import React from 'react';
import { Component1, Component2, Component3, Fetched_data } from '../component/components';

const Search = () => {
  return (
    <div className='bg-white w-[1110px] h-[664px] absolute top-[81px] left-[268px] gap-[10px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[12px] lg:mt-0 shadow-md'>      
      <Component1 />
      <Component2 />
      <Component3 />
      <div className='w-[1100px] h-[24px] top-[92px] left-[16px] gap-[0px] border-t border-transparent absolute flex'>
        <p className='w-[100px] h-[16px] top-[0px] left-[5px] font-[Noto_Sans] text-[12px] font-extrabold leading-[16.34px] text-left underline-position-from-font decoration-none absolute'>Student Name</p>
        <p className='w-[46.85px] h-[16px] top-[0px] left-[210px] font-[Noto_Sans] text-[12px] font-extrabold leading-[16.34px] text-left underline-position-from-font decoration-none absolute'>Cohort</p>
        <p className='w-[100px] h-[16px] top-[0px] left-[380px] font-[Noto_Sans] text-[12px] font-extrabold leading-[16.34px] text-left underline-position-from-font decoration-none absolute'>Courses</p>
        <p className='w-[100px] h-[16px] top-[0px] left-[690px] font-[Noto_Sans] text-[12px] font-extrabold leading-[16.34px] text-left underline-position-from-font decoration-none absolute'>Date Joined</p>
        <p className='w-[100px] h-[16px] top-[0px] left-[847px] font-[Noto_Sans] text-[12px] font-extrabold leading-[16.34px] text-left underline-position-from-font decoration-none absolute'>Last login</p>
        <p className='w-[100px] h-[16px] top-[0px] left-[1035px] font-[Noto_Sans] text-[12px] font-extrabold leading-[16.34px] text-left underline-position-from-font decoration-none absolute'>Status</p>
      </div>
      <hr />
      <Fetched_data />
    </div>
  );
};

export default Search;
