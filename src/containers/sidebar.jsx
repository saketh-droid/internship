/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {Side_bar} from '../component/components';

const Sidebar = () => {
  return (
    <div class="w-[248px] h-[568px] p-[30px_12px] flex flex-col gap-0 justify-between opacity-100 bg-white bg-transperant shadow-md">
      <Side_bar />
      <div class='w-[224px] h-[40px] p-[4px_10px] gap-[6px] rounded-tl-[6px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[0px]'>
        <div class='w-[99px] h-[32px] px-[15px] py-[5px] gap-[10px] rounded-tl-[6px] rounded-tr-0 rounded-bl-0 rounded-br-0 bg-white'>
          <div class='w-[69px] h-[22px] gap-[8px]'>
            <p class='w-[39px] h-[20px] gap-0 font-[Noto_Sans] text-[15px] font-bold leading-[20px] text-left text-[rgba(5,22,46,1)]'></p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Sidebar;
