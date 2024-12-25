import React from 'react';
import  logo  from '../../assets/logo.jpg';
import Options from '../options/options';
import dashboard from '../../assets/dashboard.svg';
import students from '../../assets/students.svg';
import chapter from '../../assets/chapter.svg';
import help from '../../assets/help.svg';
import settings from '../../assets/settings.svg';
import reports from '../../assets/reports.svg';

const Side_bar = () => {
  return (
    <div className='width-[224px] height-[400px] gap-[30]'>
        <img src={logo} alt='logo' className='width-[98px] height-[42px]'/>
        <Options image={dashboard} option="Dashboard"/>
        <Options image={students} option="Students"/>
        <Options image={chapter} option="Chapter"/>
        <Options image={help} option="Help"/>
        <Options image={reports} option="reports"/>
        <Options image={settings} option="Settings"/>
    </div>
  );
};

export default Side_bar;