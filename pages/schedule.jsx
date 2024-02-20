import {
  faAward,
  faChalkboard,
  faChartPie,
  faChartSimple,
  faFlag,
  faFlaskVial,
  faGlobeAsia,
  faLightbulb,
  faMicrophoneLines,
  faPersonChalkboard,
  faSquareRootAlt,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { m } from 'framer-motion'
import Head from 'next/head'
import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'; // Import useState
const meta = {
  title: 'Schedule | MWIT Open House 2023',
  url: 'schedule',
  description:
    'กำหนดการ Live session MWIT Open House 2023 พบกับกิจกรรมรูปแบบออนไลน์ที่ผู้เข้าร่วมจะได้สัมผัสประสบการณ์และเรียนรู้เกี่ยวกับ MWIT ด้วยตัวเอง อาทิเช่น การนำเสนอโครงงานของนักเรียน กิจกรรม Class @MWIT การแข่งขัน MWIT Square กิจกรรมสัมภาษณ์ศิษย์เก่า และ TIPs & TRICKs by MWIT students',
  img: 'ogimage.png',
}

const timetb = [
  {
    date: '25 สิงหาคม 2566',
    head: {
      title: 'Class @MWIT',
      desc: 'เรียนรู้การจัดการเรียนการสอนของ MWIT ผ่านกิจกรรมคุณครูแต่ละสาขาวิชา',
    },
    slot: [
      {
        time: '08:00 น. เป็นต้นไป ',
        act: [
          {
            title: 'ลงทะเบียนเข้างาน',
          },
        ],
      }, 
      {
        time: '08:00 - 09:00 น. ',
        act: [
          {
            title: 'ลงทะเบียนเข้าแข่งขัน MWIT Square',
            desc: null,
          },
          {
            title: 'ลงทะเบียนเข้าแข่งขัน MWIT Spelling bee',
            desc: null,
          },
        ],
      },
      {
        time: '08:00 - 16:00 น.',
        act: [
          {
            title: 'School Tour ',
            desc: 'กิจกรรมเดินชมฐานต่าง ๆ ไม่ว่าจะเป็น หอพัก ห้องครัว โรงฝึกงาน ศูนย์วิทยบริการ ฯลฯ พร้อมเกร็ดการใช้ชีวิตในรั้วโรงเรียน โดยนักเรียนและอาจารย์ MWIT',
          },
        ],
      },
      {
        time: '09:00 - 12:00 น.',
        act: [
          {
            title: 'การนำเสนอโครงงานวิทยาศาสตร์',
            desc: 'รับชมการนำเสนอโครงงานของนักเรียน MWIT กว่า 90 โครงงานพร้อม Q&A session ที่เปิดโอกาสให้ผู้ชมถามข้อสงสัย',
            icon: faPersonChalkboard,
          },
          {
            title: 'การแข่งขัน MWIT Spelling bee',
            icon: faLightbulb,
            desc: 'การแข่งขันสะกดคำภาษาอังกฤษเพื่อชิงทุนการศึกษา ของรางวัล และความสนุกที่น้อง ๆ ไม่ควรพลาด!',
          },
        ],
      },
      {
        time: '09:00 - 16:00 น.',
        act: [
          {
            title: 'MWIT Curriculum Discovery Exhibition',
            desc: 'มาร่วมสำรวจหลักสูตรและเนื้อหาของนักเรียน MWIT ไปด้วยกัน! พบกับเนื้อหารายวิชาที่จะได้เรียนรู้ควบคู่ไปกับกิจกรรมพัฒนาผู้เรียนที่จะเสริมสร้างทักษะรอบด้านตลอดสามปีการศึกษาใน MWIT',
          },
          {
            title: 'กิจกรรมน้องถามพี่ตอบ',
            desc: 'กิจกรรมที่เปิดโอกาสให้น้อง ๆ เข้ามาคุยกับรุ่นพี่แบบตัวต่อตัว ไม่ว่าจะเป็นประสบการณ์ในโรงเรียนหรือการเตรียมตัวสอบเข้า พี่ ๆ ก็พร้อมแถลงไข',
          },
          {
            title: 'การแข่งขัน MWIT Square',
            desc: 'การสอบแข่งขันคณิตศาสตร์และวิทยาศาสตร์ระดับชั้นมัธยมศึกษาตอนต้นระหว่างโรงเรียนครั้งที่ 15 ที่ออกข้อสอบโดยนักเรียน MWIT รุ่นปัจจุบัน เพื่อชิงเงินทุนการศึกษารวมกว่า 13,500 บาท !!',
          },
          {
            title: 'กิจกรรมชุมนุม MWIT Club Road',
            desc: 'พบกับกิจกรรมจากชุมนุมของนักเรียน MWIT ที่ไม่ได้มีแค่ชุมนุมวิชาการ แต่ยังมีศิลปศาสตร์ หัตถกรรม ดนตรี กีฬา หลากหลายด้านพร้อมทุกคนเข้ามาให้รู้จักที่นี่มากขึ้นแล้ว\n\n\n',
          },
          {
            title: 'กิจกรรมเปิดบ้านสาขาวิชา',
            desc: 'ร่วมกิจกรรมทั้ง 6 สาขาวิชา ที่เปิดมากถึง 19 กิจกรรมให้เข้าร่วม มาสนุกกับความรู้และสัมผัสประสบการณ์ในห้องเรียน MWIT ไปด้วยกันเถอะ!!',
          },
        ],
      },
      {
        time: '10:30 - 16:00 น.',
        act: [
          {
            title: 'บูธเกมกิจกรรมพัฒนาผู้เรียน',
            desc: 'จงเชื่อมั่นในความสามารถของตัวเองแล้วเข้ามาท้าทายกิจกรรมสุดพิเศษและแสนจะท้าทายที่จะพาน้องๆร่วมสนุกไปกับเกมสุดหรรษาและ Exclusive จากพี่ ๆ ชาว MWIT!',
          },
        ],
      },
      {
        time: '12:45 - 15:25',
        act: [
          {
            title: 'Club stage',
            desc: 'พบกับโชว์สุดหรรษาจากชุมนุมต่างๆใน MWIT ที่จะมาแสดงความสามารถพิเศษทั้งร้องเล่นเต้นรำและอื่นๆอีกมากมาย',
          }
        ],
      },
      {
        time: '13:00 - 14:30',
        act: [
          {
            title: 'การนำเสนอโครงงานแบบโปสเตอร์',
            desc: null,
          },
        ],
      },
      {
        time: '13:00 - 15:00',
        act: [
          {
            title: 'กิจกรรมสุดยอดบรรยายพิเศษ',
            desc: 'กิจกรรมการเล่าเรื่องจากประสบการณ์จริง ของทั้งรุ่นพี่ที่จบไปแล้ว และรุ่นพี่ที่กำลังศึกษาต่อในโรงเรียนมหิดลวิทยานุสรณ์ ทั้งการใช้ชีวิตในโรงเรียน วิธีการเรียน มายด์เซ็ต จบไปทำอะไร ศึกษาอะไร รวมถึงเปิดให้ถามคำถามกับรุ่นพี่เหล่านี้ด้วย!',
          },
        ],
      },
    ],
  },
  {
    date: '26 สิงหาคม 2566',
    head: {
      title: 'Class @MWIT',
      desc: 'เรียนรู้การจัดการเรียนการสอนของ MWIT ผ่านกิจกรรมคุณครูแต่ละสาขาวิชา',
    },
    slot: [
      {
        time: '08:00 น. เป็นต้นไป ',
        act: [
          {
            title: 'ลงทะเบียนเข้างาน',
          },
          {
            title: 'ลงทะเบียนเข้าแข่งขัน MWIT Challenge',
            desc: null,
          },
        ],
      }, 
      {
        time: '08:00 - 16:00 น.',
        act: [
          {
            title: 'School Tour ',
            desc: 'กิจกรรมเดินชมฐานต่าง ๆ ไม่ว่าจะเป็น หอพัก ห้องครัว โรงฝึกงาน ศูนย์วิทยบริการ ฯลฯ พร้อมเกร็ดการใช้ชีวิตในรั้วโรงเรียน โดยนักเรียนและอาจารย์ MWIT',
          },
        ],
      },
      {
        time: '09:00 - 12:00 น.',
        act: [
          {
            title: 'การนำเสนอโครงงานวิทยาศาสตร์',
            desc: 'รับชมการนำเสนอโครงงานของนักเรียน MWIT กว่า 90 โครงงานพร้อม Q&A session ที่เปิดโอกาสให้ผู้ชมถามข้อสงสัย',
            icon: faPersonChalkboard,
          }
        ],
      },
      {
        time: '09:00 - 16:00 น.',
        act: [
          {
            title: 'MWIT Curriculum Discovery Exhibition',
            desc: 'มาร่วมสำรวจหลักสูตรและเนื้อหาของนักเรียน MWIT ไปด้วยกัน! พบกับเนื้อหารายวิชาที่จะได้เรียนรู้ควบคู่ไปกับกิจกรรมพัฒนาผู้เรียนที่จะเสริมสร้างทักษะรอบด้านตลอดสามปีการศึกษาใน MWIT',
          },
          {
            title: 'กิจกรรมน้องถามพี่ตอบ',
            desc: 'กิจกรรมที่เปิดโอกาสให้น้อง ๆ เข้ามาคุยกับรุ่นพี่แบบตัวต่อตัว ไม่ว่าจะเป็นประสบการณ์ในโรงเรียนหรือการเตรียมตัวสอบเข้า พี่ ๆ ก็พร้อมแถลงไข',
          },
          {
            title: 'การแข่งขัน MWIT Challenge',
            desc: 'การแข่งขันแก้ปัญหาโดยนำความรู้ทางวิทยาศาสตร์ การคำนวณและ STEM มาประยุกต์ใช้ สัมผัสประสบการณ์การออกแบบสิ่งประดิษฐ์และวางแผนเพื่อแก้ปัญหาในสถานการณ์สุดท้าทายที่กำหนดให้',
          },
          {
            title: 'กิจกรรมชุมนุม MWIT Club Road',
            desc: 'พบกับกิจกรรมจากชุมนุมของนักเรียน MWIT ที่ไม่ได้มีแค่ชุมนุมวิชาการ แต่ยังมีศิลปศาสตร์ หัตถกรรม ดนตรี กีฬา หลากหลายด้านพร้อมทุกคนเข้ามาให้รู้จักที่นี่มากขึ้นแล้ว',
          },
          {
            title: 'กิจกรรมเปิดบ้านสาขาวิชา',
            desc: 'ร่วมกิจกรรมทั้ง 6 สาขาวิชา ที่เปิดมากถึง 19 กิจกรรมให้เข้าร่วม มาสนุกกับความรู้และสัมผัสประสบการณ์ในห้องเรียน MWIT ไปด้วยกันเถอะ!!',
          },
        ],
      },
      {
        time: '10:30 - 16:00 น.',
        act: [
          {
            title: 'บูธเกมกิจกรรมพัฒนาผู้เรียน',
            desc: 'จงเชื่อมั่นในความสามารถของตัวเองแล้วเข้ามาท้าทายกิจกรรมสุดพิเศษและแสนจะท้าทายที่จะพาน้องๆร่วมสนุกไปกับเกมสุดหรรษาและ Exclusive จากพี่ ๆ ชาว MWIT!',
          },
          
        ],
      },
      {
        time: '12:45 - 15:25',
        act: [
          {
            title: 'Club stage',
            desc: 'พบกับโชว์สุดหรรษาจากชุมนุมต่างๆใน MWIT ที่จะมาแสดงความสามารถพิเศษทั้งร้องเล่นเต้นรำและอื่นๆอีกมากมาย',
          }
        ],
      },
      {
        time: '13:00 - 14:30',
        act: [
          {
            title: 'การนำเสนอโครงงานแบบโปสเตอร์',
            desc: null,
          },
        ],
      },
      {
        time: '13:00 - 15:00',
        act: [
          {
            title: 'กิจกรรมสุดยอดบรรยายพิเศษ',
            desc: 'กิจกรรมการเล่าเรื่องจากประสบการณ์จริง ของทั้งรุ่นพี่ที่จบไปแล้ว และรุ่นพี่ที่กำลังศึกษาต่อในโรงเรียนมหิดลวิทยานุสรณ์ ทั้งการใช้ชีวิตในโรงเรียน วิธีการเรียน มายด์เซ็ต จบไปทำอะไร ศึกษาอะไร รวมถึงเปิดให้ถามคำถามกับรุ่นพี่เหล่านี้ด้วย!',
          },
        ],
      },
    ],
  },
]

const motionProp = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 },
}

export default function Schedule() {
  const [descriptionVisible, setDescriptionVisible] = useState({});
  const toggleDescription = (dateIndex, slotIndex, actIndex) => {
    setDescriptionVisible(prevState => ({
      ...prevState,
      [`${dateIndex}-${slotIndex}-${actIndex}`]: !prevState[`${dateIndex}-${slotIndex}-${actIndex}`]
    }));
  };
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
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
          content={'https://mwitophcdn.woyiswoy.com/img/' + meta.img}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='openhouse.mwit.ac.th' />
        <meta property='twitter:url' content={meta.url} />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta
          name='twitter:image'
          content={'https://mwitophcdn.woyiswoy.com/img/' + meta.img}
        />
      </Head>

      <main className='w-full bg-sdbg/75'>
        <div className='flex flex-col text-white gap-6 items-center mx-auto justify-self-center w-full max-w-6xl px-8 py-10'>
          <span className='font-CS font-bold text-3xl md:text-4xl lg:text-5xl'>
            Schedule
          </span>
          <div className='flex flex-col sm:grid sm:grid-cols-fitc-2 md:grid-cols-fitc-3 gap-x-4 gap-y-4 font-IBMPlex font-medium text-lg lg:text-xl'>
            {timetb.map((t, dateIndex) => (
              
              <Fragment key={dateIndex}>
                
                <motion.span
                  className='text-center text-sddt text-xl md:text-lg lg:text-xl md:text-end font-bold col-span-2 md:col-span-1'
                  {...motionProp}
                >
                  {t.date}
                </motion.span>
                {t.slot.map((s, slotIndex) => (
                  <Fragment key={slotIndex}>
                    <motion.span
                      className='col-start-1 md:col-start-2 text-sdtm whitespace-nowrap'
                      {...motionProp}
                    >
                      {s.time}
                    </motion.span>
                    <div
                      className={
                        (slotIndex === t.slot.length - 1 && 'mb-4') +
                        ' flex flex-col gap-2 border-l-2 border-sdtt pl-3'
                      }
                    >
                      {s.act.map((a, actIndex) => (
                        <motion.div
                          className='flex flex-col gap-1'
                          key={actIndex}
                          {...motionProp}
                        >
                          
                          <span className='text-lg lg:text-xl text-sdtt hover:text-sdth transition-colors duration-500'>
                              {a.title}
                            </span>
                            
                          <div className='flex flex-col gap-2'>
                            {/* <FontAwesomeIcon
                              icon={a.icon}
                              className='h-[0.8em] pt-1'
                            /> */}
                            {/* Toggle button */}
                            {(a.title !== 'ลงทะเบียนเข้าแข่งขัน MWIT Square' && a.title !==  'ลงทะเบียนเข้าแข่งขัน MWIT Spelling bee' && a.title !== 'ลงทะเบียนเข้าแข่งขัน MWIT Challenge'&& a.title !== 'ลงทะเบียนแข่งขัน MWIT Challenge' && a.title !== 'การนำเสนอโครงงานแบบโปสเตอร์' && a.title !== 'การนำเสนอโครงงานวิทยาศาสตร์'&& a.title !== 'ลงทะเบียนเข้างาน' && a.title !== 'ลงทะเบียนแข่งขัน MWIT Spelling bee' )&& (
                            <button
                              className='flex w-fit h-fit items-center gap-1 px-2 text-white bg-gradient-to-r from-sdf1 to-sdf2 rounded-md'
                              onClick={() => toggleDescription(a, slotIndex, actIndex)}
                            >
                              <FontAwesomeIcon className='text-xs' />
                              <span className='text-sm font-semibold'>
                                {descriptionVisible[`${dateIndex}-${slotIndex}-${actIndex}`] ? 'HIDE' : 'SHOW'}
                              </span>
                            </button>
                            )}
                
                          </div>
                          {a.desc && descriptionVisible[`${dateIndex}-${slotIndex}-${actIndex}`] && (
                            <span className='font-IBMPlexLoop font-normal text-sm sm:text-base lg:text-lg'>
                              {a.desc}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}