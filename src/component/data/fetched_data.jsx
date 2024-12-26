import React, { useEffect, useState } from 'react';
import True from '../../assets/True.svg';
import False from '../../assets/False.svg';
import person from '../../assets/person.svg';
import person2 from '../../assets/person2.svg';

const FetchedData = () => {
  const [enrollments, setenrollments] = useState([]);

  let months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://saketh-droid.github.io/server/'); 
        const data = await response.json();

        const formattedData = data.map((enrollment) => {
          const dateJoined = new Date(enrollment.date_joined);
          const lastLogin = new Date(enrollment.last_login);

          return {
              ...enrollment,
              date_joined: `${dateJoined.getFullYear()}.${months[dateJoined.getMonth() + 1]}.${String(dateJoined.getDate()).padStart(2, '0')}`,
              last_login: lastLogin ? `${lastLogin.getFullYear()}.${months[lastLogin.getMonth() + 1]}.${String(lastLogin.getDate()).padStart(2, '0')}`
              : 'N/A',
            };
        });

        console.log(formattedData);
        setenrollments(formattedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-[1110px] h-full absolute top-[115px]'>
      <ul>
        {enrollments.map((enrollment) => (
          <div key={enrollment.id} className='w-[1110px] h-full justify-center pl-[20px] pr-[20px]'>
            <hr />
            <div className='w-[1110px] flex pt-[10px] '>
              <p className='w-[200px] h-[25px] font-[Noto_Sans] text-[12px] leading-[16.34px] text-[12px] text-left decoration-none'>{enrollment.name}</p>
              <p className='w-[150px] h-[25px] font-[Noto_Sans] text-[12px] leading-[12.34px] text-[12px] text-left decoration-none justify-center pl-20px'>{enrollment.cohort}</p>
              <div className='w-[330px] h-fit_content font-[Noto_Sans] text-[12px] leading-[16.34px] text-[12px] text-left decoration-none flex pd-[10px]'>
                <div className='w-[220px] h-[25px] font-[Noto_Sans] text-[12px] leading-[16.34px] text-[12px] decoration-none justify-center flex'>
                  <img src={person} alt="boy" className='justify-center'/>
                  <p className='w-fit_content h-[25px] font-[Noto_Sans] text-[12px] leading-[16.34px] text-[12px] text-center decoration-none justify-center pl-[5px]'>CBSE 9 SCIENCE</p>
                </div>
                <div className='w-[220px] h-[25px] font-[Noto_Sans] text-[12px] leading-[16.34px] text-[12px] text-left decoration-none justify-center flex'>
                  <img src={person2} alt="girl" />
                  <p className='w-fit_content h-[25px] font-[Noto_Sans] text-[12px] leading-[16.34px] text-[12px] text-center decoration-none justify-center pl-[5px]'>CBSE 9 MATH</p>
                </div>
              </div>
              <p className='w-[160px] h-[25px] font-[Noto_Sans] text-[12px] leading-[16.34px] text-[12px] text-left decoration-none justify-center'>{enrollment.date_joined}</p>
              <p className='w-[200px] h-[25px] font-[Noto_Sans] text-[12px] leading-[16.34px] text-[12px] text-left decoration-none justify-center'>{enrollment.last_login}</p>
              <p>{enrollment.status ? <img src={True} className='right-[30px] absolute' alt="green" /> : <img src={False} alt="red" className='right-[30px] absolute' />}</p>
            </div>
            <hr/>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FetchedData;
