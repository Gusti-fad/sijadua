import Image from 'next/image'
import logo from '../public/logo.svg'
import beranda from '../public/beranda3.jpg'
import about from '../public/about all in.png'
import learn from '../public/learn.svg'
import journal from '../public/journal.svg'
import journal1 from '../public/journal1.jpeg'
import journal2 from '../public/journal2.jpeg'
import journal3 from '../public/industri.jpeg'
import journal4 from '../public/bandung.jpeg'
import journal5 from '../public/bualia.jpg'
import journal6 from '../public/jape.jpg'
import more from '../public/more.svg'
import member from '../public/member.svg'
import gusti from '../public/gusti.jpeg'
import uzan from '../public/uzan.jpeg'
import hilmi from '../public/hilmi.jpeg'
import hex from '../public/hex.jpeg'
import nopek from '../public/nopek.jpeg'
import bintang from '../public/bintang.jpeg'
import memet from '../public/memet.jpeg'
import fajar from '../public/fajar.jpeg'
import gusticredit from '../public/nishimiya.jpeg'
import uzancredit from '../public/uzancredit.jpeg'
import credit from '../public/credit.svg'
import logots from '../public/logots.svg'
import nextabu from '../public/nextabu.svg'
import logotailwind from '../public/logotailwind.svg'
import tulisantailwind from '../public/tulisantailwind.svg'
import logofigma from '../public/logo figma.svg'
import logosql from '../public/logosql.svg'
import komen from '../public/coment.jpeg'
import ikonkomen from '../public/ikonkomen.svg'



const Home = () => {
  return (
    <div className="relative bg-black min-h-screen !scroll-smooth">
      
      <nav className="bg-white border-gray-200 dark:bg-black ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} width={33} height={25} alt="logo sija" />
            <span className="self-center text-2xl font-light whitespace-nowrap dark:text-white">INFORMATICS 025</span>
        </a>
        <div className="flex md:order-2">
          <div className="relative hidden lg:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
            </input>
          </div>
          <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-search">
            <div className="relative mt-3 lg:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
           </input>
            </div>
            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-black dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded lg:bg-transparent hoverunderline lg:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent hoverunderline lg:p-0 dark:text-white dark:hover:bg-gray-700  dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent hoverunderline lg:p-0 dark:text-white  dark:hover:bg-gray-700  dark:border-gray-700">Journal</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent hoverunderline lg:p-0 dark:text-white  dark:hover:bg-gray-700  dark:border-gray-700">Member</a>
              </li>
              <li>
                <a href="#contact" className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent hoverunderline lg:p-0 dark:text-white  dark:hover:bg-gray-700   dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


       {/* home */}
       <div id="home" className="relative">
        <div
          className="absolute bottom-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[82%] h-[1px] bg-white"
        ></div>
        <div
          className="absolute bottom-[34%] left-[71%] transform -translate-x-1/2 -translate-y-1/2 text-white font-inter font-normal"
          style={{ fontSize: '6vw' }}
        >
          Smart
        </div>
        <div
          className="absolute bottom-[46%] left-[83.5%] transform -translate-x-1/2 -translate-y-1/2 text-white font-playfair font-normal italic "
          style={{ fontSize: '3vw' }}
        >
          wibu
        </div>
        <div
          className="absolute bottom-[34%] right-[73%] transform translate-x-1/2 -translate-y-1/2 text-white font-inter font-normal"
          style={{ fontSize: '6vw' }}
        >
          Technology
        </div>
        <div
          className="absolute bottom-[16%] right-[80%] transform translate-x-1/2 -translate-y-1/2 text-white font-inter font-normal"
          style={{ fontSize: '6vw' }}
        >
          Stress
        </div>
        <div
        className="absolute bottom-[25.5%] right-[64%] transform translate-x-1/2 -translate-y-1/2 text-white font-inter font-normal"
        style={{ fontSize: '0.7vw' }}
        >
        Information technology drives <br /> innovation, connectivity, and <br /> efficiency in our digital world.
        </div>


        <div
          className="absolute bottom-[16%] left-[47%] transform translate-x-1/2 -translate-y-1/2 text-white font-inter font-normal"
          style={{ fontSize: '6vw' }}
        >
          Weasel
        </div>
        <div
          className="absolute bottom-[1%] left-[20%] transform translate-x-1/2 -translate-y-1/2 text-white font-inter font-normal"
          style={{ fontSize: '6vw' }}
        >
          Random-People
        </div>
        <button
          className="absolute italic py-[0.4%] px-[1.7%] font-playfair rounded-full bottom-[13%] left-[7%] transform translate-x-1/2 -translate-y-1/2 border text-white font-normal"
          style={{ fontSize: '1.5vw' }}
        >
          Explore
        </button>
        <Image src={beranda} alt="beranda" layout="responsive" width={1920} height={1080} className="mt-0" />
        <div className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[82%] h-[1px] bg-white"></div>
      </div>

      {/* about */}
      <div id='about' className="relative px-[10%]  bg-black">
        <div className="text-white font-inter relative">
          <p className="font-medium py-[12%]" style={{ fontSize: '1vw' }}>
            Information Systems, Networks, and Applications (SIJA) is a vocational<br /> 
            high school (SMK) program in Indonesia that focuses on information<br /> 
            technology. The program is designed to prepare students for careers<br /> 
            in a variety of IT fields, including software development, networking,<br /> 
            and systems administration.
          </p>
          <div className="relative">
          <Image src={about} alt="foto about" className='w-[19%] absolute bottom-[50%] py-[10%]  right-[5%]' />
          </div>
        </div>
      </div>

      <div id='learn' className='relative px-[7%]'>
        <Image src={learn} alt="learn" className='w-[8%] relative pt-[5%]'/>
        <div id='learn line 1' className='text-white flex pt-[8%] px-[9%]'>
          <div className='font-sans font-thin 'style={{ fontSize: '3vw' }}>Internet of Things</div>
          <div className='text-zinc-500 font-normal font-raleway px-[1%]'style={{ fontSize: '1.2vw' }}>01</div>
          <div className='font-dmsans text-zinc-500 font-medium 'style={{ fontSize: '3vw' }}>/</div>
          <div className='font-sans font-thin px-[1%]'style={{ fontSize: '3vw' }}>Cyber Security</div>
          <div className='text-zinc-500 font-normal font-raleway 'style={{ fontSize: '1.2vw' }}>02</div>
        </div>
        <div id='learn line 2' className='text-white pt-[2%] flex px-[9%]'>
          <div className='font-sans font-thin'style={{ fontSize: '3vw' }}>Software as a Service</div>
          <div className='text-zinc-500 font-normal font-raleway px-[1%]'style={{ fontSize: '1.2vw' }}>03</div>
          <div className='font-dmsans text-zinc-500 font-medium 'style={{ fontSize: '3vw' }}>/</div>
          <div className='font-sans font-thin px-[1%]'style={{ fontSize: '3vw' }}>Platform as a Service</div>
          <div className='text-zinc-500 font-normal font-raleway'style={{ fontSize: '1.2vw' }}>04</div>
        </div>
        <div id='learn line 3' className='text-white pt-[2%] pb-[7%] flex px-[9%]'>
          <div className='font-sans font-thin'style={{ fontSize: '3vw' }}>Infrastructure as a Service</div>
          <div className='text-zinc-500 font-normal font-raleway px-[1%]'style={{ fontSize: '1.2vw' }}>05</div>
          <div className='font-dmsans text-zinc-500 font-medium 'style={{ fontSize: '3vw' }}>/</div>
          <div className='font-sans font-thin px-[1%]'style={{ fontSize: '3vw' }}>User Interface</div>
          <div className='text-zinc-500 font-normal font-raleway'style={{ fontSize: '1.2vw' }}>06</div>
        </div>
      </div>

      <div id='journal' className='px-[7%]'>
        <Image src={journal} alt="journal" className='w-[7.3%] pt-[5%]' />
        <div id='card' className='py-[5%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:items-center 2xl:grid-cols-3 2xl:items-center gap-4 px-[5%]'>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 md:w-[98%] h-full">
            <div className="relative h-48 md:h-64"> 
              <Image src={journal1} alt="learn" className='w-full h-full object-cover rounded-t-2xl' />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">Jambon Resto</div>
              <p className="text-gray-200 text-base">
                Mukbang sir
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 md:w-[98%] h-full">
            <div className="relative h-48 md:h-64"> 
              <Image src={journal2} alt="learn" className='w-full h-full object-cover rounded-t-2xl' />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">Hapet n Atun&apos;s Wedding</div>
              <p className="text-gray-200 text-base">
                Joyful journey begins!
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 md:w-[98%] h-full">
            <div className="relative h-48 md:h-64"> 
              <Image src={journal3} alt="learn" className='w-full h-full object-cover rounded-t-2xl' />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">Visit Industrial</div>
              <p className="text-gray-200 text-base">
                Ingfo loker mint
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 md:w-[98%] h-full">
            <div className="relative h-48 md:h-64"> 
              <Image src={journal4} alt="learn" className='w-full h-full object-cover rounded-t-2xl' />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">Road to Bandung</div>
              <p className="text-gray-200 text-base">
                Barudak shikat
              </p>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 md:w-[98%] h-full">
            <div className="relative h-48 md:h-64"> 
              <Image src={journal5} alt="learn" className='w-full h-full object-cover rounded-t-2xl' />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">Mrs. Alia House</div>
              <p className="text-gray-200 text-base">
                Our Beloved Mom
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 md:w-[98%] h-full">
            <div className="relative h-48 md:h-64"> 
              <Image src={journal6} alt="learn" className='w-[full] h-full object-cover rounded-t-2xl' />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">Japheme Futsal Cup</div>
              <p className="text-gray-200 text-base">
                Minimal Final!
              </p>
            </div>
          </div>
        </div>
        <div className='pb-[5%] flex items-center justify-center'>
          <button className='flex border w-[90%] rounded-full justify-center py-[0.5%] items-center'>
            <p className='text-white text-center'>View all Journal</p>
            <Image src={more} alt="more" className='ml-2' />
          </button>
        </div>
      </div>


      <div id='member' className='px-[7%]'>
        <Image src={member} alt="member" className='w-[18%] relative pt-[5%] pb-[5%]' /> 
        <div className='items-center center w-auto justify-center'> 
        <div className=' flex flex-wrap justify-center pb-[4%] px-[6%]'>
          <div className='text-white font-inter pt-10 md:items-center md:text-start md:max-w-sm md:mr-6 '>
            <div className='pb-[4%] font-semibold text-center md:text-start text-lg md:text-xl pr-5'> We are passionate about creating visually stunning and functional solutions that communicate effectively.</div>
            <div className='hidden md:block font-semibold text-sm pt-12'>WE ARE <br /> PASSIONATE</div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 w-40 h-56 md:w-48 mr-2 mt-1 md:h-64 md:mr-3 md:mt-2">
            <div className="relative h-36 md:h-40"> 
              <Image src={gusti} alt="learn" className='w-full h-full object-cover object-top rounded-t-2xl grayscale' />
            </div>
            <div className="px-4 md:px-6 py-3 md:py-4">
              <div className="font-bold text-xs mb-2 text-white">Gusti Fadhilah Ahmad</div>
              <p className="text-gray-200 text-[0.5rem]">Software Developer</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 w-40 h-56 md:w-48 mr-2 mt-1 md:h-64 md:mr-3 md:mt-2">
            <div className="relative h-36 md:h-40"> 
              <Image src={uzan} alt="learn" className='w-full h-full object-cover object-top rounded-t-2xl grayscale' />
            </div>
            <div className="px-4 md:px-6 py-3 md:py-4">
              <div className="font-bold text-xs mb-2 text-white">Fauzan Rafif Rochman</div>
              <p className="text-gray-200 text-[0.5rem]">UI / UX Designer</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 w-40 h-56 md:w-48 mr-2 mt-1 md:h-64 md:mr-3 md:mt-2">
            <div className="relative h-36 md:h-40"> 
              <Image src={hilmi} alt="learn" className='w-full h-full object-cover object-top rounded-t-2xl grayscale' />
            </div>
            <div className="px-4 md:px-6 py-3 md:py-4">
              <div className="font-bold text-xs mb-2 text-white">Hilmy Khairul Pratama</div>
              <p className="text-gray-200 text-[0.5rem]">Cyber Security</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 w-40 h-56 md:w-48 mr-2 mt-1 md:h-64 md:mr-3 md:mt-2">
            <div className="relative h-36 md:h-40"> 
              <Image src={hex} alt="learn" className='w-full h-full object-cover object-top rounded-t-2xl grayscale' />
            </div>
            <div className="px-4 md:px-6 py-3 md:py-4">
              <div className="font-bold text-xs mb-2 text-white">Iqbal Ahnaf</div>
              <p className="text-gray-200 text-[0.5rem]">Backend Developer</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 w-40 h-56 md:w-48 mr-2 mt-1 md:h-64 md:mr-3 md:mt-2">
            <div className="relative h-36 md:h-40"> 
              <Image src={memet} alt="learn" className='w-full h-full object-cover object-top rounded-t-2xl grayscale' />
            </div>
            <div className="px-4 md:px-6 py-3 md:py-4">
              <div className="font-bold text-xs mb-2 text-white">Akhtar arami Muhammad A</div>
              <p className="text-gray-200 text-[0.5rem]">Frontend Developer</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 w-40 h-56 md:w-48 mr-2 mt-1 md:h-64 md:mr-3 md:mt-2">
            <div className="relative h-36 md:h-40"> 
              <Image src={fajar} alt="learn" className='w-full h-full object-cover object-top rounded-t-2xl grayscale' />
            </div>
            <div className="px-4 md:px-6 py-3 md:py-4">
              <div className="font-bold text-xs mb-2 text-white">Fajar Setiawan</div>
              <p className="text-gray-200 text-[0.5rem]">Frontend Developer</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 w-40 h-56 md:w-48 mr-2 mt-1 md:h-64 md:mr-3 md:mt-2">
            <div className="relative h-36 md:h-40"> 
              <Image src={nopek} alt="learn" className='w-full h-full object-cover object-top rounded-t-2xl grayscale' />
            </div>
            <div className="px-4 md:px-6 py-3 md:py-4">
              <div className="font-bold text-xs mb-2 text-white">Nova Dwi Cahya</div>
              <p className="text-gray-200 text-[0.5rem]">Network Engineering</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-500 w-40 h-56 md:w-48 mr-2 mt-1 md:h-64 md:mr-3 md:mt-2">
            <div className="relative h-36 md:h-40"> 
              <Image src={bintang} alt="learn" className='w-full h-full object-cover object-top rounded-t-2xl grayscale' />
            </div>
            <div className="px-4 md:px-6 py-3 md:py-4">
              <div className="font-bold text-xs mb-2 text-white">Bintang Amri Pramana</div>
              <p className="text-gray-200 text-[0.5rem]">Network Engineering</p>
            </div>
          </div>


          </div>
      </div>
          
          <div className='pb-[5%] flex items-center justify-center'>
              <button className='flex border w-[90%] rounded-full justify-center py-[0.5%] items-center'>
                <p className='text-white text-center'>See all Member</p>
                <Image src={more} alt="more" className='ml-2' />
              </button>
            </div>
        </div>

        <div id='credit' className='px-[7%] '>
        <Image src={credit} alt="credit" className='w-[9%] relative pt-[5%] pb-[5%]' />
          <div className='text-white'>
            <div className='md:text-6xl text-3xl font-inter  md:max-w-[80%] lg:text-7xl'>Two stressed minds collaborated, turning their struggles into art.</div>
            <div className='md:text-lg text-xs pt-2 md:pt-5 lg:text-xl'>let’s build something great together.</div>
          </div>
          <div className='text-white mt-10 md:mt-16'>
            <div className='font-inter font-semibold text-lg lg:text-2xl'>Core Team</div>
            <div className='md:max-w-[75%] text-sm lg:text-lg'>Together, we bring a wealth of experience, creativity, and expertise for each project. Get to know individuals who are passionate about bringing ideas to life.</div>
          </div>
          <div className='justify-center md:flex mt-10 gap-[5%]'>
          <div className="rounded-2xl overflow-hidden shadow-lg  md:w-[50%]  md:h-[20%] md:mr-3 md:mt-2 lg:h-44 lg:w-[50%] flex mb-6 ">
            <div className="relative md:h-40"> 
              <Image src={gusticredit} alt="learn" className='w-36 lg:w-48 lg:h-36 h-28 object-cover object-center rounded-2xl ' />
            </div>
            <div className="md:px-6 px-3 h-28 py-4 md:py-8">
              <div className="font-bold text-xl md:text-sm mb-2 text-white lg:text-2xl">Gusti Fadhilah Ahmad</div>
              <p className="text-gray-200 md:text-xs text-base lg:text-lg">FULL-STACK DEVELOPER</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg  md:w-[50%]  md:h-[20%] md:mr-3 md:mt-2 lg:h-44 lg:w-[50%] flex mb-6 ">
            <div className="relative md:h-40"> 
              <Image src={uzancredit} alt="learn" className='w-36 lg:w-48 lg:h-36 h-28 object-cover rounded-2xl grayscale' />
            </div>
            <div className="md:px-6 px-3 h-28 py-4 md:py-8">
              <div className="font-bold text-xl md:text-sm mb-2 text-white lg:text-2xl">Fauzan Rafif Rochman</div>
              <p className="text-gray-200 md:text-xs text-normal font-extralight lg:text-lg">UI / UX DESIGNER</p>
            </div>
          </div>

          </div>
          <div className='text-white pt-4 '>
            <div className='font-inter font-semibold text-lg lg:text-xl'>The technology that we use</div>
            <div className='md:max-w-[75%] text-sm lg:text-lg pt-1  '>The technologies used on the web are very diverse and continue to develop over time. Following are some of the major technologies commonly used in web development.</div>
          </div>

          <div className='flex pb-12 flex-wrap mt-3'>
            <div className='bg-zinc-800 flex rounded-md md:rounded-xl justify-center w-12 items-center md:py-3 md:w-44 object-center shadow-container hover:bg-white duration-500 md:mr-2 mr-1 mt-2'>
              <Image src={nextabu} alt="nextabu" className='h-2 md:h-12'/>
            </div>
            <div className='bg-zinc-800 flex grayscale hover:grayscale-0 hover:bg-white duration-500 rounded-md md:rounded-xl shadow-container justify-start md:justify-center w-20 md:w-60 py-2 md:py-4 mr-1 md:mr-2 mt-2'>
              <Image src={logotailwind} alt="logotailwind" className='md:mr-2 mr-0 h-2  md:h-10'/>
              <Image src={tulisantailwind} alt="tulisantailwind" className=' h-2  md:h-10'/>
            </div>
            <div className='bg-zinc-800 flex grayscale hover:grayscale-0 hover:bg-white duration-500 rounded-md md:rounded-xl shadow-container justify-center py-2 md:py-4 w-6 md:w-28 md:mr-2 mr-1 mt-2'>
              <Image src={logosql} alt="logosql" className=' h-2 md:h-10'/>
            </div>
            <div className='bg-zinc-800 flex grayscale hover:grayscale-0 hover:bg-white duration-500 rounded-md md:rounded-xl shadow-container justify-center py-2 md:py-4 w-6 md:w-24 md:mr-2 mr-1 mt-2'>
              <Image src={logofigma} alt="logofigma" className=' h-2 md:h-9'/>
            </div>
            <div className='bg-zinc-800 flex grayscale hover:grayscale-0 hover:bg-white duration-500 rounded-md md:rounded-xl shadow-container justify-center py-2 md:py-4 w-6 md:w-20 md:mr-2 mr-1 mt-2'>
              <Image src={logots} alt="logots" className=' h-2 md:h-10'/>
            </div>
          </div>
        </div>

        <div id='komen' className='flex justify-center py-[2%] '>
          <div className="w-auto px-[10%] relative text-center">
            <Image src={komen} alt="komen" className='w-full object-cover rounded-xl md:rounded-2xl lg:rounded-3xl' />
            <div className='text-white font-inter  font-semibold absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ fontSize: '4vw' }}>
              Any Question, Sir?
            </div>
            <div className='text-white absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ fontSize: '1vw' }}>
              Ranging from simple queries about facts or personal details to more complex inquiries that delve into opinions, thoughts, or reasoning.
            </div>
            <button className='flex justify-center px-[0.5%] py-[1%] lg:px-[1%] items-center bg-white rounded-full absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <Image src={ikonkomen} alt="ikonkomen" className='w-[13%] mr-[5%]'/>
              <span className='font-bold' style={{ fontSize: '1vw' }}>Comment</span>
            </button>
          </div>
        </div>

        <div id='contact' className='mx-[10%] py-[5%]'>
          <div className='rounded-3xl py-[10%] w-full bg-zinc-500 relative'>
          <div className='text-white font-inter font-semibold absolute top-[55%] left-[19%] transform -translate-x-1/2 -translate-y-1/2' style={{ fontSize: '2.5vw' }}>
                sija2acc@gmail.com
            </div>
          <div className='text-white font-inter font-semibold absolute top-[80%] left-[90%] transform -translate-x-1/2 -translate-y-1/2' style={{ fontSize: '1vw' }}>
                Created with stress. - TGUT
            </div>
          </div>      
        </div>
      </div>
  );
}; 

export default Home;
