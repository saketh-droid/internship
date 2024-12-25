import React from 'react';
import down from '../../assets/down.svg';

const Component1 = () => {
  return (
    <button className="bg-custom-white w-[149px] h-[38px] top-[16px] left-[16px] p-[7px_15px] gap-[10px] rounded-tl-[6px] rounded-tr-[6px] absolute rounded-bl-[6px] rounded-br-[6px] flex">
        <p className="text-custom-grey w-[100px] h-[22px] font-noto-sans text-[14px] font-[700] leading-[22px] text-left ">AY 2024-25</p>
        <div className='w-[24px] h-[24px] p-[8.22px_5.46px_8px_5.64px] gap-[0]'>
            <img src={down} className='w-[12.73px] h-[7.78px] top-[8.22px] left-[5.64]' alt="down" />
        </div>
    </button>
  );
};

export default Component1;

