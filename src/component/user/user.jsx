import React from 'react';
import help_search from '../../assets/help_search.svg';
import top_setting from '../../assets/top_setting.svg';
import message from '../../assets/message.svg';
import notification from '../../assets/notification.svg';
import katty_cox from '../../assets/katty_cox.svg';
import Ellipse from '../../assets/Ellipse.svg';

const user = () => {
  return (
    <div className='w-[473px] h-[48px] gap-[40px] flex pt-[14px]'>
        <div className='w-[24px] h-[24px] pt-[2px] gap-0 flex'>
            <img src={help_search} alt="hel_search" className='w-[20px] h-[20px] gap-0 '/>
        </div>
        <div className='w-[24px] h-[24px] pt-[2px] gap-0 flex'>
        <img src={message} alt="hel_search" className='w-[20px] h-[20px] gap-0 '/>
        </div>
        <div className='w-[24px] h-[24px] pt-[2px] gap-0 flex'>
            <img src={top_setting} alt="hel_search" className='w-[20px] h-[20px] gap-0 '/>
        </div>
        <div className='w-[24px] h-[24px] pt-[2px] gap-0 flex'>
            <img src={notification} alt="hel_search" className='w-[20px] h-[20px] gap-0'/>
        </div>
        <div className='w-[217px] h-[48px] gap-[20px] flex'>
            <div className='w-[48px] h-[48px] gap-[0]'>
                <div className='w-[48px] h-[48px] gap-0 rounded-tl-[10px] rounded-tr-0 rounded-bl-0 rounded-br-0'>
                    <img src={katty_cox} className="w-[40px] h-[40px] gap-0 rounded-tl-[8px] rounded-tr-0 rounded-bl-0 rounded-br-0" alt="katty cox" />
                </div>
            </div>
            <p className='w-[149px] h-[26px] gap-[0] font-[Noto_Sans] text-[18px] font-semibold leading-[26px] text-left'>Adeline H. Dancy</p>
        </div>
        <div className=''>
            <img src={Ellipse} alt="dot" className='w-[11px] h-[11px] top-[12px] left-[743px] gap-[0] absolute'/>
            <img src={Ellipse} alt="dot" className='w-[11px] h-[11px] top-[12px] left-[849px] gap-[0] absolute'/>
        </div>
    </div>
  );
};

export default user;

