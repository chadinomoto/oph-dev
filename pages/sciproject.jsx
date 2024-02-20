import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { Fragment, useEffect, useState,useRef } from 'react'
import MetaHeader from '../components/metaHeader'
import Head from 'next/head'
import TourCard from '../components/tourcard'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  faBook,
  faCircleXmark,
  faFileInvoice,
  faFlaskVial,
  faPeopleRobbery,
  faPuzzlePiece,
  faChevronLeft,
  faChevronRight,
  faCircle
} from '@fortawesome/free-solid-svg-icons'

const motionProp = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 },
}
const meta = {
  title: 'Science Project | MWIT Open House 2023',
  url: 'Science Project',
  description:
    'description',
  img: 'ogimage.png',
}



export default function SciProject(){

  const images = [
    { src: '/img/2023/slide/slidesp/sp6.jpg',description:'รางวัล Special Award จากเวที Regeneron International Science and Engineering Fair (ISEF) 2022 ณ สหรัฐอเมริกาด้วยผลงานในสาขา Biomedical and Health Sciences "โครงงานการพัฒนาต้นแบบชุดทดสอบเชิงสีชนิดใหม่สำหรับไวรัสทั้งชนิด DNA และ RNA เพื่อรับมือกับโรคอุบัติใหม่ในอนาคตอย่างครอบคลุม" (Project Title: Sawasdee-AMP: Highly efficient, portable and low-cost point of care test kit for future emerging RNA/DNA disease diagnosis) โดยมี  ดร.เกียรติภูมิ รอดพันธ์ ครูสาขาเคมี โรงเรียนมหิดลวิทยานุสรณ์  และ ดร.วันเสด็จ เจริญรัมย์ จาก ศูนย์พันธุวิศวกรรมและเทคโนโลยีชีวภาพแห่งชาติ เป็นที่ปรึกษา'},
    { src: '/img/2023/slide/slidesp/sp1.jpg',description: 'รางวัล NSM President\u2019s Science Communication Award สนับสนุนโดย องค์การพิพิธภัณฑ์วิทยาศาสตร์แห่งชาติ (อพวช.) โครงงานเรื่อง “แนวคิดใหม่แห่งวงการชีวเคมีทางการแพทย์: การตรวจสอบ DNA ของมะเร็งบนผิวเม็ดเลือดแดงโดยใช้เลือดไก่เป็นแบบในการศึกษา เพื่อพัฒนาสู่นวัตกรรมใหม่ในการวินิจฉัยโรคมะเร็งที่รวดเร็ว” ผลงานของ นายวงศกร มาลาลักษมี นักเรียนชั้น ม.6/5  นางสาวมทินา บุญเต็ม นักเรียนชั้น ม.6/5 และ นางสาวชุตินันต์ สุขพงศ์จิรากุล นักเรียนชั้น ม.6/5  โดยมี ดร.เกียรติภูมิ รอดพันธ์  ครูสาขาวิชาเคมี และ รองศาสตราจารย์ ดร.นายแพทย์ปีติ ธุวจิตต์ จาก ภาควิชาวิทยาภูมิคุ้มกัน คณะแพทยศาสตร์ศิริราชพยาบาล มหาวิทยาลัยมหิดล เป็นที่ปรึกษาโครงงาน' } ,
    { src: '/img/2023/slide/slidesp/sp3.jpg' ,description: 'รางวัล First Prize สาขา Applied Sciences จากงาน ASPC 2023 โครงงานเรื่อง “นวัตกรรมเครื่องมือวัดปริมาณแคลเซียมจากปลายเล็บโดยวิธีแคลอริเมตริกและการดูดกลืนแสงเพื่อใช้ในการประเมินปริมาณแคลเซียมและความเสี่ยงต่อโรคกระดูก” ผลงานของ นายณภัทร ด่านชนะ นักเรียนชั้น ม.6/9 นายภัทรพล ใจเย็น นักเรียนชั้น ม.6/4 และ นายธีรัตม์ สันติลินนท์ นักเรียนชั้น ม.6/9 มีดร.เกียรติภูมิ รอดพันธ์ และอาจารย์วีรวุฒิ เทียนขาว ครูสาขาวิชาเคมี เป็นที่ปรึกษาโครงงาน'},
    { src: '/img/2023/slide/slidesp/sp4.jpg',description:'รางวัลเหรียญทอง สาขาสุขภาพ และรางวัล INSPO Special Awards: I2ASPO (IYSA) พร้อมได้รับเชิญให้เข้าร่วมงาน Indonesia International Applied Science Project Olympiad (I2ASPO) จัดโดย Indonesian Young Scientist Association (IYSA) ณ สาธารณรัฐอินโดนีเซีย โครงงานสาขาวิชาเคมีเรื่อง “In vitro and in silico study of the antioxidation properties, α-glucosidase inhibitory, and anti-breast MCF-7 cancer cells activities of gallic acid and synthetic derivatives”  นำเสนอโดย นายปัณณวิชญ์ วรภาสไพบูลย์ นักเรียนชั้น ม.6/9  นายอิทธิพัทธ์ เณรบำรุง นักเรียนชั้น ม.6/3 และ นายพัฐนนท์ เอี่ยมพงษ์ไพฑูรย์ นักเรียนชั้น ม.6/3  โดยมี อาจารย์สรชัย แซ่ลิ่ม ครูสาขาวิชาเคมี และ ดร.มูฮำหมัด นิยมเดชา จาก ภาควิชาเคมี คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร เป็นที่ปรึกษาโครงงาน'},
    { src: '/img/2023/slide/slidesp/sp5.jpg',description:'ผลงานที่ได้รับคัดเลือกให้เป็นผู้แทนประเทศไทยประกวดสิ่งประดิษฐ์ในงาน i-CREATEe 2023 โครงงานสาขาวิชาคณิตศาสตร์และวิทยาการคำนวณ เรื่อง “Diagnosis Application for Parkinson’s Disease by Hand Tremor Analysis”  ผลงานของ นางสาวบุณยวีร์ วิริยวงวานศ์ นักเรียนชั้น ม.6/4 และ นางสาวนัสวรรณ รุ่งฤทธิเดช นักเรียนชั้น ม.6/5 โดยมี ดร.มนสิการ จันทร์สร้าง และ อาจารย์ทศพร แสงจ้า เป็นที่ปรึกษา'}

    // Add more image paths and alt text here
  ];
  const scimages=[
    {src:'/img/2023/slide/slidesp/sp10.jpg'},
  {src:'/img/2023/slide/slidesp/sp11.jpg'},
  {src:'/img/2023/slide/slidesp/sp12.jpg'},
  {src:'/img/2023/slide/slidesp/sp13.jpg'},
  {src:'/img/2023/slide/slidesp/sp14.jpg'},
  {src:'/img/2023/slide/slidesp/sp15.jpg'},
  {src:'/img/2023/slide/slidesp/sp16.jpg'},
  {src:'/img/2023/slide/slidesp/sp17.jpg'},
  {src:'/img/2023/slide/slidesp/sp18.jpg'},
  {src:'/img/2023/slide/slidesp/sp19.jpg'},];
  const images3=[
    {src:'/img/2023/slide/slidesp/sp7.jpg'},
  {src:'/img/2023/slide/slidesp/sp8.jpg'},
  {src:'/img/2023/slide/slidesp/sp9.jpg'},
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openImageSlide = (dateIndex, imageIndex) => {
    setSelectedDateIndex(dateIndex);
    setSelectedImageIndex(imageIndex);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setShowFullDescription(false);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setShowFullDescription(false);
  };
   const showNextImage2 = () => {
    setCurrentImageIndex2((prevIndex2) => (prevIndex2 + 1) % scimages.length);
    setShowFullDescription(false);
  };

  const showPrevImage2 = () => {
    setCurrentImageIndex2((prevIndex2) =>
      prevIndex2 === 0 ? scimages.length - 1 : prevIndex2 - 1
    );
    setShowFullDescription(false);
  };

  const showNextImage3 = () => {
    setCurrentImageIndex3((prevIndex3) => (prevIndex3 + 1) % images3.length);
    setShowFullDescription(false);
  };

  const showPrevImage3 = () => {
    setCurrentImageIndex2((prevIndex3) =>
      prevIndex2 === 0 ? images3.length - 1 : prevIndex3 - 1
    );
    setShowFullDescription(false);
  };
  
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };
  const goToImage2 = (index) => {
    setCurrentImageIndex2(index);
  };
  const goToImage3 = (index) => {
    setCurrentImageIndex3(index);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const scheduleData = [
    {
      day: 'วันที่ 25 สิงหาคม 2566',
      events: [
        { time: '09:00-12:00 น.', title: 'Oral presentation', place:'@ อาคาร 1 ชั้น 1'},
        { time: '13:00-14:30 น.', title: 'Poster presentation', place:'@ ใต้หอ 9 และบริเวณ Covered Walkway'},
      ],
    },
    {
      day: 'วันที่ 26 สิงหาคม 2566',
      events: [
        { time: '09:00-12:00 น.', title: 'Oral presentation',place:'@ อาคาร 1 ชั้น 1' },
        { time: '13:00-14:30 น.', title: 'Poster presentation', place:'@ ใต้หอ 9 และบริเวณ Covered Walkway' },
        // Add more events for Tuesday and other days
      ],
    },
    // Add more days and events
  ];
  return (
    <>
    <Head>
    <title>{meta.title}</title>
        <meta name='description' content={meta.description} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property='og:url'
          content={'https://openhouse.mwit.ac.th/' + meta.url}
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta
          property='og:image'
          content='https://openhouse.mwit.ac.th/img/2023/thumb2023.png'
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content=' openhouse.mwit.ac.th' />
        <meta property='twitter:url' content={meta.url} />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta
          name='twitter:image'
          content='https://openhouse.mwit.ac.th/img/ogimage.png'
        />   
    </Head>
    <div className='flex flex-col w-full '>
      <div className='w-full bg-cover bg-[url(/img/2023/bg_starlight.webp)] bg-repeat sm:bg-fixed text-black items-center mx-auto justify-self-center w-full '>
        <span className='flex justify-center font-CS font-bold text-3xl xmd:text-4xl lg:text-5xl pt-16 text-bmw'>
              MWIT Science Project
        </span>
          <div className='w-full max-w-7xl grid items-center justify-items-center mx-auto px-6'>
            <div className='w-full h-full grid md:w-full  md:grid-cols-2 mx-auto justify-items-center '>    
          <div className='w-full h-full grid md:w-full  md:grid-rols-2 mx-auto justify-items-center '>
            <div className='font-CS font-bold text-black text-2xl md:text-2xl lg:text-3xl pt-8 place-content-center'>
              <span className='my-5'>กิจกรรมในปีที่ผ่านมา</span>
              </div>
          <div className='max-w-[640px] max-h-[480px] min-w-max w-[16rem] md:w-[32rem] h-[25rem] m-auto py-8 px-4 relative group '>
            <div className="relative w-full h-full ">
             <div 
              className="w-full h-full rounded-2xl bg-center bg-cover duration-100"
              style={{ backgroundImage: `url(${images3[currentImageIndex3].src})` }}
              ></div>
            </div>
            <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-3 bg-black/40 text-white cursor-pointer '>
                  <FontAwesomeIcon icon={faChevronLeft} onClick={showPrevImage3} size='lg' />
                </div>
                <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-3 bg-black/40 text-white cursor-pointer'>
                  <FontAwesomeIcon icon={faChevronRight} onClick={showNextImage3} size='lg' />
            </div>
            <div className="absolute -mt-10 bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images3.map((_, index) => (
               <button
                key={index}
                className={`w-4 h-4 rounded-full ${
                index === currentImageIndex3 ? 'bg-blue-700' : 'bg-gray-400'
                }`}
                onClick={() => {goToImage3(index);
                setShowFullDescription(false);}}
                
            ></button>
                ))}
            </div>
          </div>
          </div>
          <div className='w-full h-full grid md:w-full  md:grid-rols-2 mx-auto justify-items-center '>
            <div className='font-CS font-bold text-black text-2xl md:text-2xl lg:text-3xl pt-8 place-content-center'>
              <span className='my-5'>โครงงานวิทยาศาสตร์ที่ได้รับรางวัล</span>
              </div>
          <div className='max-w-[640px] max-h-[480px] min-w-max w-[16rem] md:w-[32rem] h-[25rem] m-auto py-8 px-4 relative group '>
            <div className="relative w-full h-full ">
             <div 
              className="w-full h-full rounded-2xl bg-center bg-cover duration-100"
              style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}
              ></div>
            <div  className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white  rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-2xl ${showFullDescription ? 'h-auto' : 'h-16'}`}">
              <p className={`text-left pt-3 px-5 font-CS font-bold text-xl `}>
              {showFullDescription
              ? images[currentImageIndex].description
                : images[currentImageIndex].description.slice(0, 100) + '...'}
              </p>
              {images[currentImageIndex].description.length > 100 && (
              <button
                className={` ml-5 font-CS text-yellow-300 cursor-pointer transition-opacity duration-300 ${
                  showFullDescription ? 'opacity-0' : 'opacity-100'
                }`}
                onClick={toggleDescription}
              >
                {showFullDescription ? 'Read less' : 'Read more'}
              </button>
            )}
            {images[currentImageIndex].description.length > 100 && showFullDescription && (
              <button
                className="text-yellow-300 font-CS cursor-pointer transition-opacity duration-300 mt-2  "
                onClick={toggleDescription}
              >
                Read less
              </button>
            )}
            </div>
            </div>
            <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-3 bg-black/40 text-white cursor-pointer '>
                  <FontAwesomeIcon icon={faChevronLeft} onClick={showPrevImage} size='lg' />
                </div>
                <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-3 bg-black/40 text-white cursor-pointer'>
                  <FontAwesomeIcon icon={faChevronRight} onClick={showNextImage} size='lg' />
            </div>
            <div className="absolute -mt-10 bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
               <button
                key={index}
                className={`w-4 h-4 rounded-full ${
                index === currentImageIndex ? 'bg-blue-700' : 'bg-gray-400'
                }`}
                onClick={() => {goToImage(index);
                setShowFullDescription(false);}}
                
            ></button>
                ))}
            </div>
          </div>
          </div>
          </div>
          
          
          <div className='flex flex-col gap-3'>
                <AnimateSharedLayout type='crossfade'>
                  <motion.div
                    className='flex flex-col my-5 gap-10 bg-white/40 shadow-lg backdrop-blur-sm px-4 py-5 rounded-xl bg-yellow-200'
                    layoutId='welcome-canvas'
                  >
                    <motion.span
                      layoutId={'welcome-desc'}
                      className='font-CS  text-lg md:text-lg lg:text-xl text-black font-bold text-center'
                    >
                      กิจกรรมการนำเสนอโครงงานของนักเรียน MWIT กว่า 91 โครงงาน จาก 6 สาขาวิชา ที่กลับมาให้รับชมในรูปแบบ on-site 
                    </motion.span>
                    
                    {/*<button
                      onClick={() => setShowWC(true)}
                      className='text-sm md:text-base bg-white/30 w-fit hover:bg-white/60 hover:text-bmw transition-all duration-300 backdrop-blur-sm text-bmw/70 rounded-full px-4 py-1 mt-2 font-IBMPlex font-semibold'
                    >
                      Read full text
                    </button>*/}
                  </motion.div>
                  
                  </AnimateSharedLayout>
          </div>
        
{/*
        <div className='font-CS font-bold text-bmw text-xl md:text-2xl lg:text-3xl pt-8 place-content-center'>
            <center>
              <span className='my-5'>กำหนดการ</span>
              <br />
              <span>วันที่ 25 และ 26 สิงหาคม </span>
              <br />
              <span> Oral presentation เวลา 09:00-12:00 น. </span>
              <br />
              <span>Poster presentation เวลา 13:00-14:30 น. </span>
            </center>
          </div>
                  */}

      
        
            </div>

        <div className="w-full  grid md:grid-cols-2 mx-auto justify-items-center "> 
        <div className="max-w-[600px] max-h-[390px] min-w-max w-[20rem] md:w-[600px] md:h-[390px] h-[14.6rem] m-auto py-8 px-2 relative group">
            <div
              className=" w-full h-full rounded-2xl bg-center bg-cover duration-100 group1"
              style={{ backgroundImage: `url(${scimages[currentImageIndex2].src})` }}
              ></div>
             <div className=' group-hover:block absolute top-[50%] t-ranslate-x-100 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer'>
                  <FontAwesomeIcon icon={faChevronLeft} onClick={showPrevImage2} size='md' />
                </div>
              <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer'>
                  <FontAwesomeIcon icon={faChevronRight} onClick={showNextImage2} size='md' />
            </div>
            <div className="absolute -mt-10 bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {scimages.map((_, index) => (
               <button
                key={index}
                className={`w-4 h-4 rounded-full ${
                index === currentImageIndex2 ? 'bg-blue-700' : 'bg-gray-400'
                }`}
                onClick={() => {goToImage2(index);
                setShowFullDescription(false);}}
                
            ></button>
                ))}
        
          </div>
        </div>
        <div className="my-5 mx-5 max-w-lg md:w-sm py-8 px-8 bg-white rounded-lg shadow-lg">
        <div className="font-CS font-bold text-bmw  md:text-2xl lg:text-3xl text-xl font-semibold mb-3">กำหนดการ</div>
        {scheduleData.map((dayData, index) => (
          <div key={index} className="mb-6">
            <h2 className="font-CS font-bold text-bmw  md:text-xl lg:text-2xl text-lg font-semibold  mb-3">{dayData.day}</h2>
            {dayData.events.map((event, eventIndex) => (
              <div
                key={eventIndex}
                className={`flex flex-wrap max-w-xl justify-between items-center p-4 mb-4 ${
                  eventIndex % 2 === 0 ? 'bg-blue-100': 'bg-yellow-100' 
                }`}
              >
                <div className="font-CS  text-bmw  md:text-lg pt-4 text-md font-semibold mr-16">{event.time}</div>
                <div className="font-CS font-bold text-bmw  md:text-lg  pt-4 text-md ">{event.title}</div>
                <div className="font-CS font-semibold text-bmw md:text-lg  pt-4 text-md ">{event.place}</div>
              </div>
            ))}
          </div>
          ))}
          </div>
          </div>
          
      </div>
    </div>
  </>
  )
}

