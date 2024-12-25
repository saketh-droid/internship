import React from 'react';
import { useState } from 'react';

const Options = (props) => {
  const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
  return (
    <div className={`width-[224px] height-[48px] p-[12px_89px_12px_12px] gap-[10px] rounded-[6px] cursor-pointer ${ isClicked ? 'bg-[rgba(238,238,238,1)]' : ''}`} onClick={handleClick}>
        <div onClick={handleClick} className={`w-[123px] h-[24px] flex items-center gap-[12px]`}>
            <img src={props.image} alt="logo" className={`w-[20px] h-[20px] gap-0 ${isClicked ? 'filter brightness-50' : 'text-[rgb(1, 2, 2)]'}`}/>
            <p className={`w-[87px] h-[22px] gap-0 font-[Noto_Sans] text-[16px] leading-[22px] text-left decoration-none font-bold ${ isClicked ? 'text-[#000000]' : 'text-[rgba(111,118,126,1)]'}`}>{props.option}</p>
        </div>
    </div>
  );
};

export default Options;