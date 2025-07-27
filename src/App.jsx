import { useState } from 'react'
import polygon1 from './assets/Polygon 1.png';
import group4 from './assets/Group 4.png';
import teenage from './assets/teenage.png';
import bars from './assets/bars.png';
import group7 from './assets/Group 7.png';
import group10 from './assets/Group 10.png';
import group13 from './assets/Group 13.png';
import group11 from './assets/Group 11.png';
import google from './assets/google.png';
import netflix from './assets/netflix.png';
import airbnb from './assets/airbnb.png';
import amazon from './assets/amazon.png';
import facebook from './assets/facebook.png';
import grab from './assets/grab.png';
import group79 from './assets/Group 79.png';
import group80 from './assets/Group 80.png';
import group81 from './assets/Group 81.png';
import group22 from './assets/Group 22.png';
import group23 from './assets/Group 23.png';
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <div className='w-[1500px] min-h-screen overflow-x-hidden'style={{ backgroundColor:'rgba(255,242,225,1)'}}>
        <div className='absolute w-[83px] h-[83px] top-[60px] left-[100px] opacity-100 rotate-0 rounded-[6px] mb-[20px]'>
          <img src={polygon1} alt="Polygon 1" />
        </div>
        <div className="flex items-center justify-between">
          <div className='flex items-center justify-between'>
            <span className='w-[128px] h-[48px] opacity-100 top-[77px] left-[122px] rotate-0
        font-[Poppins] font-bold text-[32px] leading-[100%] tracking-[4%] text-[rgba(17,60,73,1)] mt-12 ml-12'>Skilline</span>
          </div>
        <div className='flex gap-8 items-center justify-center ml-135'>
          <button className=" w-[67px] h-[33px] top-[86px] left-[811px] opacity-100 rotate-0 rounded  text-[rgba(37,38,65,1)] text-sm
          font-[Poppins] font-normal text-[22px] leading-[100%] tracking-[2%] cursor-pointer
           hover:scale-105 transition duration-200">
            Home
          </button>
          <button className=' w-[90px] h-[33px] top-[86px] left-[958px] opacity-100 rotate-0  text-[rgba(37,38,65,1)] 
          text-sm rounded hover:scale-105 transition duration-200
          font-[Poppins] font-normal text-[22px] leading-[100%] tracking-[2%] cursor-pointer'>
            Careers
          </button>
          <button className=' w-[50px] h-[33px] top-[86px] left-[1128px] opacity-100 rotate-0 rounded  text-[rgba(37,38,65,1)]
          font-[Poppins] font-normal text-[22px] leading-[100%] tracking-[2%]
          hover:scale-105 transition duration-200 cursor-pointer'>
            Blog
          </button>
          <button className=' w-[102px] h-[33px] top-[86px] left-[1258px] opacity-100 rotate-0 rounded text-[rgba(37,38,65,1)] text-sm
          font-[Poppins] font-normal text-[22px] leading-[100%] tracking-[2%]
          hover:scale-105 transition duration-200 cursor-pointer'>
            About Us
          </button>
        </div>
        <div className="flex items-center gap-4">
        <div className=' w-[160px] h-[60px] top-[71px] left-[1440px] rotate-0 opacity-100 rounded-[80px] flex items-center justify-center'
        style={{ backgroundColor: 'rgba(255,255,255,1)'}}>
          <button className='w-[61px] h-[33px] top-[84px] left-[1490px] rotate-0 opacity-100
          font-[Poppins] font-normal text-[22px] leading-[100%] tracking-[2%] text-[ rgba(108,108,108,1)]
          hover:scale-105 transition duration-200 cursor-pointer'>
            Login
          </button>
        </div>
        <div className='w-[160px] h-[60px] top-[71px] left-[1634px] opacity-100 rounded-[80px] flex items-center justify-center'
        style={{ backgroundColor: 'rgba(244,140,6,1)' }}>
          <button className='w-[87px] h-[33px] top-[84px] left-[1671px] opacity-100
          font-[Poppins] font-medium text-[22px] leading-[100%] tracking-[2%] text-[rgba(255,255,255,1)] items-center justify-center
          hover:scale-105 transition duration-200 cursor-pointer'>
            Sign Up
          </button>
        </div>
        </div>
        </div>
        <div className='w-[681px] h-[162px] top-[335px] left-[140px] opacity-100
        font-[Poppins] font-bold text-[54px] leading-[100%] tracking-[0%] mt-16'>
    <div className="text-left">
    <span className="font-bold text-[#F48C06]">Studying</span>
    <span className="font-bold text-[#252641]"> Online is now</span>
  </div>
  <div className="flex mt-4">
    <span className="font-bold text-[#252641]">much easier</span>
  </div>
        </div>
        <div className='w-[523px] h-[76px] top-[531px] left-[140px] rotate-0 opacity-100
        font-normal text-[24px] leading-[160%] tracking-[0] font-[Nunito_Sans] text-left text-[rgba(70,70,70,1)]'>
          <p>
            Skilline is an interesting platform that will teach
          </p>
          <p>
            you in more an interactive way
          </p>
        </div>
        <div className='flex mt-10'>
          <div className='w-[220px] h-[80px] top-[659px] left-[140px] opacity-100 rounded-[80px] flex items-center justify-center
          hover:scale-105 transition duration-200 cursor-pointer'
           style={{ backgroundColor: 'rgba(244,140,6,1)' }}>
            <button className='w-[144px] h-[36px] top-[681px] left-[178px] opacity-100
            font-semibold text-[24px] leading-[100%] tracking-[0] font-[Poppins] text-[rgba(255,255,255,1)] cursor-pointer'>
            Join for free
            </button>
          </div>
          <div className='flex'>
            <div className="w-[80px] h-[80px] top-[659px] left-[400px] opacity-100 hover:scale-105 transition duration-200 cursor-pointer">
              <img src={group4} alt="Group 4" />
            </div>
            <span className='w-[232px] h-[36px] top-[681px] left-[512px] opacity-100
            font-normal text-[24px] leading-[100%] tracking-[0] font-[Poppins] flex items-center justify-center text-[rgba(37,38,65,1)] mt-3
            hover:scale-105 transition duration-200 cursor-pointer'>
              Watch how it works
            </span>
          </div>
        </div>
        <div className='top-[224px] left-[883px] w-[911px] h-[892px]'>
          <div className='w-[544px] h-[892px] absolute top-[80px] left-[850px] rotate-0 opacity-100'>
            <img src={teenage} />
          </div>
          <div className='absolute top-[250px] left-[1300px] w-[69px] h-[69px] z-20'>
            <img src={bars} />
          </div>
          <div className='absolute top-[259px] left-[695px] w-[300px] h-[100px] opacity-100'>
            <img src={group7} alt="Group 7" />
          </div>
          <div className='absolute w-[370px] h-[110px] top-[440px] left-[1200px] opacity-100'>
            <img src={group10} alt="Group 10" />
            <div className='absolute w-[370px] h-[110px] top-[30px] left-[330px] opacity-100'>
              <img src={group11} alt="Group 11" />
            </div>
          </div>
          
          <div className='absolute w-[390px] h-[187px] top-[500px] left-[650px] opacity-100
          hover:scale-105 transition duration-200 cursor-pointer'>
            <img src={group13} alt="Group 13" />
          </div>
          </div>
          </div>
          <div className="relative w-full min-h-[1400px]">
            <div className="w-[1337.09px] h-[145.53px] top-[1218px] left-[292px] opacity-100 mt-10">
              <span className="w-[603px] h-[45px] top-[1218px] left-[659px] opacity-100
              font-[Poppins] font-medium text-[28px] leading-[160%] tracking-[2%] text-[rgba(105,105,132,1)]">
                Trusted by 5,000+ Companies Worldwide
              </span>
            </div>
            <div className="w-[1337.09px] h-[67.6px] top-[1295.93px] left-[292px] flex items-center justify-center gap-15">
              <div className="w-[168.3px] h-[54.7px] top-[1305.92px] left-[292px]">
                <img src={google} />
              </div>
              <div className="w-[151.34px] h-[40.71px] top-[1315.14px] left-[536.04px]">
                 <img src={netflix} />
              </div>
              <div className="w-[161.32px] h-[49.93px] top-[1305.92px] left-[763.11px]">
                <img src={airbnb} />
              </div>
              <div className="w-[153.64px] h-[46.09px] top-[1317.44px] left-[1000.17px] rotate-0 opacity-100">
                <img src={amazon} />
              </div>
              <div  className="w-[193.37px] h-[38.41px] top-[1306.69px] left-[1229.55px] opacity-100">
                <img src={facebook} />
              </div>
              <div className="w-[130.43px] h-[50.49px] top-[1295.93px] left-[1498.66px] opacity-100">
                <img src={grab} />
              </div>
            </div>
          </div>
          <div className="absolute w-[1470px] h-[761px] top-[1524px] left-[225px] opacity-100">
            <div className="w-[501px] h-[65px] absolute top-[400px] left-[260px] opacity-100 rotate-0">
              <p className='font-[Poppins] font-bold text-[36px] leading-[180%] tracking-[0%] flex gap-1'>
                <span className='text-[rgba(47,50,125,1)]'>
                  All-In-One
                </span>
                <span className='text-[#F48C06]'>
                  Cloud Software.
                </span>
              </p>
            </div>
            <div className="absolute w-[837px] h-[86px] top-[509px] left-[100px] opacity-100 rotate-0">
              <p className="font-[Poppins] font-normal text-[24px] leading-[180%] tracking-[0%] text-[#696984]">
                <span>
                  Skilline is one powerful online software suite that combines all the{' '}
                </span>
                <span>
                  tools needed to run a successful school or office.
                </span>
              </p>
            </div>
            <div className="absolute w-[450px] h-[430px] top-[700px] left-[-200px] opacity-100 rounded-[20px] bg-[#FFFFFF] shadow-[0px_10px_60px_rgba(38,45,118,0.08)]">
              <div className="absolute w-[343px] h-[90px] top-[97px] left-[70px] opacity-100
              font-[Poppins] font-medium text-[30px] leading-[100%] tracking-[0%] text-center text-[#2F327D] flex flex-col items-center gap-2">
                <span>
                  Online Billing,
                </span>
                <span>
                  Invoicing,& Contracts
                </span>
              </div>
              <div className="absolute w-[341px] h-[144px] top-[200px] left-[80px] opacity-100 rotate-0
              font-[Poppins] font-normal text-[20px] leading-[180%] tracking-[0%] text-center text-[#696984]">
                <p>
                  Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts
                </p>
              </div>
              <div className="absolute w-[100px] h-[100px] top-[-50px] left-[180px] opacity-100 rotate-0">
                <img src={group79} alt="Group 79" />
              </div>
            </div>
            <div className="absolute w-[450px] h-[430px] top-[700px] left-[300px] opacity-100 rounded-[20px] bg-[#FFFFFF] shadow-[0px_10px_60px_0px_#262D7614]">
              <div className="absolute w-[343px] h-[90px] top-[97px] left-[65px] opacity-100
              font-[Poppins] font-medium text-[30px] leading-[100%] tracking-[0%] text-center text-[#2F327D] flex flex-col items-center gap-2">
                <span>
                  Easy Scheduling &
                </span>
                <span>
                  Attendance Tracking
                </span>
              </div>
              <div className="absolute w-[341px] h-[144px] top-[200px] left-[80px] opacity-100 rotate-0
              font-[Poppins] font-normal text-[20px] leading-[180%] tracking-[0%] text-center text-[#696984]">
                <p>
                  Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance
                </p>
              </div>
              <div className="absolute w-[100px] h-[100px] top-[-50px] left-[180px] opacity-100 rotate-0">
                <img src={group80} alt="Group 80" />
              </div>
            </div>
            <div className="absolute w-[450px] h-[430px] top-[700px] left-[800px] opacity-100 rounded-[20px] bg-[#FFFFFF] shadow-[0px_10px_60px_0px_#262D7614]">
              <div className="absolute w-[343px] h-[90px] top-[97px] left-[65px] opacity-100
              font-[Poppins] font-medium text-[30px] leading-[100%] tracking-[0%] text-center text-[#2F327D] flex flex-col items-center gap-2">
                <span>
                  Customer Tracking
                </span>
              </div>
              <div className="absolute w-[341px] h-[144px] top-[200px] left-[80px] opacity-100 rotate-0
              font-[Poppins] font-normal text-[20px] leading-[180%] tracking-[0%] text-center text-[#696984]">
                <p>
                  Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization 
                </p>
              </div>
              <div className="absolute w-[100px] h-[100px] top-[-50px] left-[180px] opacity-100 rotate-0">
                <img src={group81} alt="Group 81" />
              </div>
            </div>
          </div>
          
          <div className="absolute w-[1300px] h-[708px] top-[2443px] left-[310px] opacity-100">
            <div className="relative w-[371px] h-[79px] top-[380px] left-[280px] opacity-100">
              <p className="font-[Poppins] font-semibold text-[44px] leading-[180%] tracking-[0%] text-center text-[#2F327D]">
                <span>
                  What is{' '}
                </span>
                <span className='text-[#F48C06]'>
                  Skilline?
                </span>
              </p>
            </div>
            <div className="absolute w-[1101px] h-[129px] top-[500px] left-[-50px] opacity-100">
              <p className="font-[Poppins] font-normal text-[24px] leading-[180%] tracking-[2%] text-center text-[#696984]">
                Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
              </p>
            </div>
            <div className="absolute w-[600px] h-[400px] top-[751px] left-[-200px] opacity-100 rounded-[20px] border border-solid border-black">
              <img src={group22} alt="Group 22" />
            </div>
            <div className="absolute w-[292px] h-[48px] top-[883px] left-[-50px] opacity-100">
              <p className="font-[Poppins] font-semibold text-[32px] leading-[100%] tracking-[0%] text-center text-[#FFFFFF]">
                FOR INSTRUCTORS
              </p>
            </div>
            <button className="absolute w-[283px] h-[80px] top-[948px] left-[-50px] rounded-[80px] opacity-100 border border-white opacity-100 text-[#FFFFFF]
            hover:scale-105 transition duration-200 cursor-pointer">
              <p className="font-[Poppins] font-medium text-[22px] leading-[100%] tracking-[0%] text-center">
                Start a Class Today
              </p>
            </button>
            <div className="absolute w-[600px] h-[400px] top-[751px] left-[500px] opacity-100 rounded-[20px] border border-solid border-black">
              <img src={group23} alt="Group 23" />
            </div>
            <div className="absolute w-[292px] h-[48px] top-[883px] left-[650px] opacity-100">
              <p className="font-[Poppins] font-semibold text-[32px] leading-[100%] tracking-[0%] text-center text-[#FFFFFF]">
                FOR STUDENTS
              </p>
            </div>
             <button className="absolute w-[283px] h-[80px] top-[948px] left-[650px] rounded-[80px] opacity-100 border border-white opacity-100 text-[#FFFFFF]
            hover:scale-105 transition duration-200 cursor-pointer"
             style={{backgroundColor: 'rgba(35, 189, 238, 0.9)' }}>
              <p className="font-[Poppins] font-medium text-[22px] leading-[100%] tracking-[0%] text-center">
                Enter access code
              </p>
            </button>
          </div>
      </div>
    </>
  )
}

export default App
