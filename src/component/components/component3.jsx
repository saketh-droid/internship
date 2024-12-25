import React from 'react';
import add from '../../assets/add.svg';

const Component3 = () => {
  return (
    <button className="bg-custom-white w-[197px] h-[38px] top-[16px] left-[900px] p-[7px_15px] gap-[10px] rounded-tl-[6px] rounded-tr-[6px] absolute rounded-bl-[6px] rounded-br-[6px] flex">
        <div className='w-[24px] h-[24px] p-[8.22px_5.46px_8px_5.64px] gap-[0]'>
            <img src={add} className='w-[12.73px] h-[7.78px] top-[8.22px] left-[5.64]' alt="add" />
        </div>
        <p className="text-custom-grey w-[140px] h-[22px] font-noto-sans text-[14px] font-[700] leading-[22px] text-left ">Add new Student</p>
    </button>
  );
};

export default Component3;