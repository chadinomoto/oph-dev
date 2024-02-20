import Head from 'next/head'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion, useScroll } from 'framer-motion'
import { clamp } from 'lodash'
import Link from 'next/link'
import Pdfcard from '../components/pdfcard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MetaHeader from '../components/metaHeader'
import TextFormat from '../components/textformat'
import {
  faBook,
  faCircleXmark,
  faFileInvoice,
  faFlaskVial,
  faPeopleRobbery,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons'
const meta = {
    title: 'Competition | MWIT Open House 2023',
    url: 'Competition',
    description:
      'รวมข้อมูลสำหรับกิจกรรมภายใน MWIT Open House 2023',
    img: 'ogimage.png',
  }
const File = [
    {
        name : "Google Form ลงทะเบียนเข้าร่วม MWIT OPEN HOUSE 2023: DISCOVERY",
        href : "https://forms.gle/9r7ax1gAwxDK5Hov6",
        src: "logo",
        desc: "ขอความกรุณาทุกท่านที่มีความประสงค์เข้าร่วมกิจกรรมร่วมมือกรอกข้อมูลลงทะเบียนเข้างานเพื่อความสะดวกในการเข้างานในวันจริง",
        button: "ฟอร์ม"
    },
    {
        name : "Google Form ลงทะเบียนเข้าแข่งขัน MWIT SPELLING BEE",
        href : "https://docs.google.com/forms/d/e/1FAIpQLSfKl3SQ5HzlAsrQ7BIPtD6Un0_LnH3VJBwxhOBglF0Ifd40Rw/closedform",
        src: "SpellingBee",
        desc: "สำหรับผู้ที่สนใจเข้าแข่งขันในกิจกรรม Spelling bee ในวันที่ 25 สิงหาคม 2566",
        button: "ฟอร์ม"
    }
  ]
const wcText = 'สวัสดีผู้ร่วมงาน MWIT Open House 2022กระผมในนามของโรงเรียนมหิดลวิทยานุสรณ์ หรือ MWIT ขอขอบคุณที่ท่านให้เกียรติมาแวะเวียนเยี่ยมชมและร่วมกิจกรรมเปิดบ้านโรงเรียนมหิดลวิทยานุสรณ์ (MWIT Open House 2022) ในปีนี้ สิ่งที่ท่านเห็นทั้งหมดเกิดจากน้ำพักน้ำแรงของนักเรียน ม.4 ม.5 ม.6 ของ MWIT ที่ภูมิใจนำเสนอผลจากการที่เขาได้รับการพัฒนาเมื่ออยู่ที่ MWIT รวมถึงบรรยากาศการใช้ชีวิตในรั้วโรงเรียนและหลังจากจบจาก MWIT ให้สังคมไทยได้ร่วมกันชื่นชมนักเรียน MWIT ทุกคน เป็นผู้ที่มีความสามารถพิเศษด้านวิทยาศาสตร์และคณิตศาสตร์ของประเทศไทย และมีความตั้งใจที่จะพัฒนาตนเองให้มีทักษะการเป็นนักวิจัยและความสามารถในการคิดค้นสิ่งใหม่ ประดิษฐ์และสร้างนวัตกรรม โดยที่เขาเลือก MWIT เพราะเป็นโรงเรียนแห่งโอกาส โอกาสที่จะทำให้เขาได้รับการพัฒนาอย่างรอบด้าน ทั้งด้านวิชาการ ความสามารถเฉพาะในการสร้างองค์ความรู้ และโอกาสในการพัฒนาการใช้ชีวิตอย่างกลมกลืนในสังคมใหญ่ เรียนรู้ที่จะเป็นผู้นำและผู้ตาม ใช้เหตุใช้ผลในการดำรงชีวิต เพื่อที่ร่วมกันสร้างสังคมไทยที่เจริญก้าวหน้า และเป็นสังคมที่อยู่ร่วมกันอย่างผาสุกได้ทีมงานผู้จัดเป็นบุคลากร MWIT ทั้งโรงเรียน โดยมีคณะกรรมการนักเรียน (กน.) เป็นแกนนำ เราวางแผนและดำเนินการร่วมกันเพื่อนำเสนอผลสำเร็จในมิติต่างๆ ไม่ว่าจะเป็น - ผลการพัฒนาทักษะวิจัยผ่านกิจกรรม Science Project กว่า 90 โครงงาน- ผลการจัดการเรียนการสอนผ่านห้องเรียน Class@MWIT จากทุกสาขาวิชา - ผลการจัดการเรียนรู้แบบบูรณาการของกิจกรรม STEM Challenge ผ่าน MWIT Pitching- ผลการจัดกิจกรรม สอวน. และโอลิมปิกวิชาการ ซึ่งเราเป็นโรงเรียนแห่งเดียวที่เป็นศูนย์ สอวน. ทั้ง 8 สาขาผ่านกิจกรรม MWIT Square ครั้งที่ 14- ผลการสร้างบุคลากรของประเทศ ผ่านกิจกรรม Interview MWIT Alumni - ผลการเตรียมตัวก่อนเข้า MWIT ผ่านกิจกรรม TIPs & TRICKs by MWIT Students- ผลงานริเริ่มของนักเรียนในการเปิดพื้นที่ทำกิจกรรมที่ตนสนใจและมีประโยชน์ ผ่านนิทรรศการออนไลน์ MWIT Club ซึ่งในปีนี้เรามีถึง 56 ชุมนุม สำหรับนักเรียนเพียง 720 คนของเรานอกจากนี้ยังมี Blog, Vlog, Virtual Tour, Gallery และ MWITagram ซึ่งเป็นผลงานของนักเรียนทั้งหมดกิจกรรมและผลงานที่แสดงในงาน MWIT Open House 2022 ครั้งนี้จะยืนยันในคุณลักษณะของนักเรียน MWIT ที่จะได้รับการหล่อหลอมและส่งเสริมเมื่อเข้ามาเป็นสมาชิกของครอบครัว MWIT ขอให้ผู้ร่วมงานทุกท่านใช้เวลากับกิจกรรมต่างๆ อย่างเต็มที่ เพื่อให้เรียนรู้ถึง MWIT DNA และสมรรถนะที่แท้จริงของนักเรียน MWIT ผมมั่นใจว่า หากได้ร่วมชมผลงานแล้วในทุกกิจกรรมแล้วก็คงอยากมาเป็นครอบครัว MWITขอให้มีความสุขกับการชื่นชมผลงานของนักเรียน MWIT ด้วยกันนะครับด้วยความเคารพดร.วรวรงค์ รักเรืองเดชผู้อำนวยการโรงเรียนมหิดลวิทยานุสรณ์21 สิงหาคม 2565'

export default function Competition() {
  const actdata = [
    /*{
      name : '',
      src : '',
      regisref : '',
      ref : '',
      short : '',
      desc : '',
      req : '',
      date: '',
      other : ''
    }*/
    {
      name : 'MWIT SQUARE 15th',
      src : 'SQ15-col.png',
      ref : 'https://forms.gle/B3Y3TK4QwZfBcBUCA',
      short : 'การแข่งขันคณิตศาสตร์และวิทยาศาสตร์ระดับมัธยมศึกษาตอนต้น',
      desc : 'การสอบแข่งขันคณิตศาสตร์และวิทยาศาสตร์ระหว่างโรงเรียนประจำปี พ.ศ. 2566 เปิดโอกาสให้ผู้เข้าร่วมได้แสดงความสามารถด้านวิชาการและทดลองข้อสอบสไตล์ MWIT ที่ออกโดยรุ่นพี่ตัวตึง!',
      req : 'ลงทะเบียนผ่านทางเว็บไซต์ได้ตั้งแต่วันที่ 1 - 18 สิงหาคม - ทีมละ 3 คน โรงเรียนละไม่เกิน 2 ทีม (รับไม่เกิน 150 ทีม) ',
      date: 'แข่งวันที่ 25 สิงหาคม 2566 ตั้งแต่เวลา 08.30 - 16.30 น.',
      other : 'สถานที่จัดการแข่งขัน หอประชุมพระอุบาลี (ชั้นสองของโรงอาหาร) โรงเรียนมหิดลวิทยานุสรณ์ '
    },
    {
      name : 'MWIT Spelling Bee',
      src : 'SpellingBee.png',
      ref : 'https://forms.gle/pbQWEdGUUAN5L3JP9',
      short : 'การแข่งขันแก้ปัญหาโดยนำความรู้ทางวิทยาศาสตร์และการคำนวณมาประยุกต์ใช้',
      desc : 'สัมผัสประสบการณ์การแข่งขันแก้ปัญหาและสร้างสรรค์สิ่งประดิษฐ์โดยใช้ความรู้ด้าน STEM มาประยุกต์กับสถานการณ์สุดท้าทายที่ออกแบบมาให้น้อง ๆ ได้ระดมความคิดกันเป็นทีม!',
      req : 'ลงทะเบียนหน้างาน - รอบละ 30 ทีม ทีมละไม่เกิน 3 คน (คละโรงเรียนได้)',
      date: 'แข่งวันที่ 26 สิงหาคม 2566 จัดการแข่งขันเช้า 2 รอบ บ่าย 2 รอบ',
      other : 'สถานที่จัดการแข่งขัน ห้องฉายภาพยนตร์สามมิติ (อาคาร 2 ชั้น 4) โรงเรียนมหิดลวิทยานุสรณ์  <b>อุปกรณ์ที่ผู้เข้าแข่งขันต้องเตรียม<b>  บัตรนักเรียน/บัตรประชาชน เครื่องเขียน (ปากกา ดินสอ2B ยางลบ)  <b>รูปแบบการแข่ง : แข่ง 3 รอบ เพื่อหาผู้ชนะ<b>  รอบที่ 1 : ได้คะแนนเกิน 80% จะผ่านเข้าสู่รอบถัดไป  รอบที่ 2 : คัดเหลือเพียง 5 คนสุดท้าย  รอบที่ 3 : หาผู้ชนะการแข่งขัน'
    }
  ]
  const [Open, setOpen] = useState(false)
  const [beeOpen, setbeeOpen] = useState(false)
  const [chalOpen, setchalOpen] = useState(false)

  function openset(a,t){
    if(a == 0)
    {
      setOpen(previousState => {
        return { ...previousState, open0: t }
      }); 
    }
    else if(a == 1)
    {
      setOpen(previousState => {
        return { ...previousState, open1: t }
      }); 
    }
    else 
    {
      setOpen(previousState => {
        return { ...previousState, open1: t }
      }); 
    }
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
      <div className='flex flex-col w-full'>
        <div className='w-full bg-cover bg-[url(/img/2023/yellowfade.webp)] bg-repeat sm:bg-fixed min-h-[180vh] space-y-2 '>
          <span className='flex justify-center font-CS font-bold text-2xl md:text-3xl lg:text-4xl pt-16'>
              Competition
          </span>
          <div className='w-full h-full py-6 flex items-center grid grid-cols-1 grid-rows-4'>
            <div className='w-full max-w-7xl gap-6 mx-auto px-6 row-span-1'>
              <div className='flex flex-col gap-3 grid grid-cols-3'>
                <Link href={'https://forms.gle/B3Y3TK4QwZfBcBUCA'}>
                  <motion.img
                    src={'img/2023/' + 'SQ15-col.png'}
                    className='w-[180px] md:w-[220px] lg:w-[250px] col-span-1 self-center '
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      bounce: 0.4,
                      type: 'spring',
                    }}
                  />
                </Link>
                <div className='col-span-2 max-h-max'>
                  <AnimateSharedLayout type='crossfade'>
                    <motion.div
                      className='flex flex-col gap-1 bg-white/40 shadow-lg backdrop-blur-sm px-4 py-5 rounded-xl'
                      layoutId={'welcome-canvas' + '1'}
                    >
                      <motion.span
                        layoutId={'welcome-title' + '1'}
                        className='font-CS text-3xl md:text-4xl font-bold text-bmw'
                      >
                        MWIT SQUARE 15th
                      </motion.span>
                      <motion.span
                        layoutId={'welcome-desc' + '1'}
                        className='font-CS text-base md:text-lg lg:text-xl text-blue-500'
                      >
                        การแข่งขันคณิตศาสตร์และวิทยาศาสตร์ระดับมัธยมศึกษาตอนต้น
                      </motion.span>
                      <button
                        onClick={() => setOpen(true)}
                        className='text-sm md:text-base bg-white/30 w-fit hover:bg-white/60 hover:text-bmw transition-all duration-300 backdrop-blur-sm text-bmw/70 rounded-full px-4 py-1 mt-2 font-IBMPlex font-semibold'
                      >
                        ข้อมูลเพิ่มเติม
                      </button>
                    </motion.div>
                    {Open && (
                      <div className='fixed inset-0 pt-16 px-6 pb-6 z-50 overflow-y-scroll' >
                        <motion.div
                          className='w-full relative max-w-2xl mx-auto flex flex-col gap-1 bg-white/80 shadow-lg backdrop-blur-md px-4 py-5 rounded-xl'
                          layoutId={'welcome-canvas '+ '1'}
                        >
                          <div
                            className='absolute right-3 top-3 cursor-pointer z-30'
                            onClick={() => setOpen(false)}
                          >
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              className='text-3xl text-gray-400/60 hover:text-red-500/60 transition-colors duration-300'
                            />
                          </div>
                          <motion.span
                            layoutId={'welcome-title'+ '1'}
                            className='font-CS text-3xl md:text-4xl font-bold text-bmw'
                          >
                            MWIT SQUARE 15th
                          </motion.span>
                          <motion.span
                            layoutId={'welcome-desc'+ '1'}
                            className='font-CS text-base md:text-lg lg:text-xl text-blue-500'
                          >
                            การแข่งขันคณิตศาสตร์และวิทยาศาสตร์ระดับมัธยมศึกษาตอนต้น
                          </motion.span>
                          <div className='flex flex-col gap-2 mt-2'>
                            <span
                              className='font-IBMPlexLoop leading-relaxed md:leading-relaxed text-sm md:text-base text-black'
                            >
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'การสอบแข่งขันคณิตศาสตร์และวิทยาศาสตร์ระหว่างโรงเรียนประจำปี พ.ศ. 2566 เปิดโอกาสให้ผู้เข้าร่วมได้แสดงความสามารถด้านวิชาการและทดลองข้อสอบสไตล์ MWIT ที่ออกโดยรุ่นพี่ตัวตึง!'}
                              />
                              <div className='font-medium text-base md:text-lg text-black whitespace-nowrap'>
                                ช่วงเวลารับสมัคร
                              </div>
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'ลงทะเบียนผ่านทางเว็บไซต์ได้ตั้งแต่วันที่ 1 - 18 สิงหาคม - ทีมละ 3 คน โรงเรียนละไม่เกิน 2 ทีม (รับไม่เกิน 150 ทีม) '}
                              />
                              <Link href={'https://forms.gle/B3Y3TK4QwZfBcBUCA'} >
                                <div className='font-medium text-base md:text-lg text-black whitespace-nowrap hover:text-bmw'>
                                {">คลิกที่นี่ได้เลย"}
                                </div>
                              </Link>
                              <div className='font-medium text-base md:text-lg text-black whitespace-nowrap'>
                                วันที่จัดแข่งขัน
                              </div>
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'แข่งวันที่ 25 สิงหาคม 2566 ตั้งแต่เวลา 08.30 - 16.30 น.'}
                              />
                              <div className='font-medium text-base md:text-lg text-black whitespace-nowrap'>
                                สถานที่จัดแข่งขัน
                              </div>
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'หอประชุมพระอุบาลี (ชั้นสองของโรงอาหาร) โรงเรียนมหิดลวิทยานุสรณ์'}/>
                              <div className='font-medium text-base md:text-lg text-black whitespace-nowrap'>
                                ข้อมูลเพิ่มเติม
                              </div>
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'อุปกรณ์ที่ผู้เข้าแข่งขันต้องเตรียม\n\tบัตรนักเรียน/บัตรประชาชน \n\tเครื่องเขียน (ปากกา น้ำยาลบคำผิด ไม้บรรทัด)  \nรูปแบบการแข่ง : แข่ง 2 รอบ เพื่อหาผู้ชนะ  \n\tรอบที่ 1: รอบคัดเลือก คัดเลือก 10 ทีมที่ได้คะแนนสูงที่สุดเข้าร่วมการแข่งขันในรอบที่ 2 \n\tรอบที่ 2: รอบชิงชนะเลิศ แข่งขันทั้งหมด 2 ส่วน คือส่วนปฏิบัติการและส่วนทฤษฎี'}
                              />
                            </span>
                          </div>
                          <button
                            onClick={() => setOpen(false)}
                            className='text-sm md:text-base bg-white/30 w-fit hover:bg-white/60 hover:text-bmw transition-all duration-300 backdrop-blur-sm text-bmw/70 rounded-full px-4 py-1 mt-2 font-IBMPlex font-semibold'
                          >
                            Close
                          </button>
                        </motion.div>
                      </div>
                    )}
                  </AnimateSharedLayout>
                </div>
              </div>
            </div>

            <div className='w-full max-w-7xl gap-6 mx-auto px-6 row-span-1'>
              <div className='flex flex-col gap-3 grid grid-cols-3'>
                <Link href={'https://forms.gle/pbQWEdGUUAN5L3JP9'}>
                  <motion.img
                    src={'img/2023/' + 'SpellingBee.png'}
                    className='w-[180px] md:w-[220px] lg:w-[250px] col-span-1 self-center'
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      bounce: 0.4,
                      type: 'spring',
                    }}
                  />
                </Link>
                <div className='col-span-2 max-h-max'>
                  <AnimateSharedLayout type='crossfade'>
                    <motion.div
                      className='flex flex-col gap-1 bg-white/40 shadow-lg backdrop-blur-sm px-4 py-5 rounded-xl'
                      layoutId={'welcome-canvas' + '2'}
                    >
                      <motion.span
                        layoutId={'welcome-title' + '2'}
                        className='font-CS text-3xl md:text-4xl font-bold text-bmw'
                      >
                        MWIT Spelling Bee
                      </motion.span>
                      <motion.span
                        layoutId={'welcome-desc' + '2'}
                        className='font-CS text-base md:text-lg lg:text-xl text-blue-500'
                      >
                        การแข่งขันสะกดคำภาษาอังกฤษระดับมัธยมศึกษาตอนต้น
                      </motion.span>
                      <button
                        onClick={() => setbeeOpen(true)}
                        className='text-sm md:text-base bg-white/30 w-fit hover:bg-white/60 hover:text-bmw transition-all duration-300 backdrop-blur-sm text-bmw/70 rounded-full px-4 py-1 mt-2 font-IBMPlex font-semibold'
                      >
                        ข้อมูลเพิ่มเติม
                      </button>
                    </motion.div>
                    {beeOpen && (
                      <div className='fixed inset-0 pt-16 px-6 pb-6 z-50 overflow-y-scroll' >
                        <motion.div
                          className='w-full relative max-w-2xl mx-auto flex flex-col gap-1 bg-white/80 shadow-lg backdrop-blur-md px-4 py-5 rounded-xl'
                          layoutId={'welcome-canvas '+ '2'}
                        >
                          <div
                            className='absolute right-3 top-3 cursor-pointer z-30'
                            onClick={() => setbeeOpen(false)}
                          >
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              className='text-3xl text-gray-400/60 hover:text-red-500/60 transition-colors duration-300'
                            />
                          </div>
                          <motion.span
                            layoutId={'welcome-title'+ '2'}
                            className='font-CS text-3xl md:text-4xl font-bold text-bmw'
                          >
                            MWIT Spelling Bee
                          </motion.span>
                          <motion.span
                            layoutId={'welcome-desc'+ '2'}
                            className='font-CS text-base md:text-lg lg:text-xl text-blue-500'
                          >
                            การแข่งขันสะกดคำภาษาอังกฤษระดับมัธยมศึกษาตอนต้น
                          </motion.span>
                          <div className='flex flex-col gap-2 mt-2'>
                            <span
                              className='font-IBMPlexLoop leading-relaxed md:leading-relaxed text-sm md:text-base text-black'
                            >
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'การแข่งขันสะกดคำภาษาอังกฤษระหว่างโรงเรียนประจำปี พ.ศ. 2566 เพื่อวัดความสามารถด้านภาษาอังกฤษผ่านการแข่งขันชิงทุนการศึกษา และมีโอกาสได้สัมผัสบรรยากาศกิจกรรมที่เกิดขึ้นในโรงเรียน (การแข่งขัน Spelling Bee)'}
                              />
                              <div className='font-medium text-base md:text-lg text-black whitespace-nowrap'>
                                ช่วงเวลารับสมัคร
                              </div>
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'ลงทะเบียนล่วงหน้า รับสมัคร 1-20 สิงหาคม เป็นการแข่งขันประเภทเดี่ยว ส่งได้โรงเรียนละไม่เกิน 3 คน'}
                              />
                              <Link href={'https://forms.gle/pbQWEdGUUAN5L3JP9'} >
                                <div className='font-medium text-base md:text-lg text-black whitespace-nowrap hover:text-bmw'>
                                {">คลิกที่นี่ได้เลย"} 
                                </div>
                              </Link>
                              <div className='font-medium text-base md:text-lg text-black whitespace-nowrap'>
                                วันที่จัดแข่งขัน
                              </div>
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'แข่งวันที่ 25 สิงหาคม 2566 8.00-12.00 น.'}
                              />
                              <div className='font-medium text-base md:text-lg text-black whitespace-nowrap'>
                                สถานที่จัดแข่งขัน
                              </div>
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'ห้องฉายภาพยนตร์สามมิติ (อาคาร 2 ชั้น 4) โรงเรียนมหิดลวิทยานุสรณ์'}
                              />
                              <div className='font-medium text-base md:text-lg text-black whitespace-nowrap'>
                              ข้อมูลเพิ่มเติม
                              </div>
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'อุปกรณ์ที่ผู้เข้าแข่งขันต้องเตรียม \n\tบัตรนักเรียน/บัตรประชาชน \n\tเครื่องเขียน (ปากกา ดินสอ2B ยางลบ) \nรูปแบบการแข่ง : แข่ง 3 รอบ เพื่อหาผู้ชนะ \n\tรอบที่ 1 : ได้คะแนนเกิน 80% จะผ่านเข้าสู่รอบถัดไป \n\tรอบที่ 2 : คัดเหลือเพียง 5 คนสุดท้าย \n\tรอบที่ 3 : หาผู้ชนะการแข่งขัน'}
                              />
                            </span>
                          </div>
                          <button
                            onClick={() => setbeeOpen(false)}
                            className='text-sm md:text-base bg-white/30 w-fit hover:bg-white/60 hover:text-bmw transition-all duration-300 backdrop-blur-sm text-bmw/70 rounded-full px-4 py-1 mt-2 font-IBMPlex font-semibold'
                          >
                            Close
                          </button>
                        </motion.div>
                      </div>
                    )}
                  </AnimateSharedLayout>
                </div>
              </div>
            </div>

            <div className='w-full max-w-7xl gap-6 mx-auto px-6 row-span-1'>
              <div className='flex flex-col gap-3 grid grid-cols-3'>
                <motion.img
                  src={'img/2023/' + 'challogo.png'}
                  className='w-[180px] md:w-[220px] lg:w-[250px] col-span-1 self-center'
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    bounce: 0.4,
                    type: 'spring',
                  }}
                />
                <div className='col-span-2 max-h-max'>
                  <AnimateSharedLayout type='crossfade'>
                    <motion.div
                      className='flex flex-col gap-1 bg-white/40 shadow-lg backdrop-blur-sm px-4 py-5 rounded-xl'
                      layoutId={'welcome-canvas' + '3'}
                    >
                      <motion.span
                        layoutId={'welcome-title' + '3'}
                        className='font-CS text-3xl md:text-4xl font-bold text-bmw'
                      >
                        MWIT CHALLENGE
                      </motion.span>
                      <motion.span
                        layoutId={'welcome-desc' + '3'}
                        className='font-CS text-base md:text-lg lg:text-xl text-blue-500'
                      >
                        การแข่งขันแก้ปัญหาโดยนำความรู้ทางวิทยาศาสตร์และการคำนวณมาประยุกต์ใช้
                      </motion.span>
                      <button
                        onClick={() => setchalOpen(true)}
                        className='text-sm md:text-base bg-white/30 w-fit hover:bg-white/60 hover:text-bmw transition-all duration-300 backdrop-blur-sm text-bmw/70 rounded-full px-4 py-1 mt-2 font-IBMPlex font-semibold'
                      >
                        ข้อมูลเพิ่มเติม
                      </button>
                    </motion.div>
                    {chalOpen && (
                      <div className='fixed inset-0 pt-16 px-6 pb-6 z-50 overflow-y-scroll' >
                        <motion.div
                          className='w-full relative max-w-2xl mx-auto flex flex-col gap-1 bg-white/80 shadow-lg backdrop-blur-md px-4 py-5 rounded-xl'
                          layoutId={'welcome-canvas '+ '3'}
                        >
                          <div
                            className='absolute right-3 top-3 cursor-pointer z-30'
                            onClick={() => setchalOpen(false)}
                          >
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              className='text-3xl text-gray-400/60 hover:text-red-500/60 transition-colors duration-300'
                            />
                          </div>
                          <motion.span
                            layoutId={'welcome-title'+ '3'}
                            className='font-CS text-3xl md:text-4xl font-bold text-bmw'
                          >
                            MWIT CHALLENGE
                          </motion.span>
                          <motion.span
                            layoutId={'welcome-desc'+ '3'}
                            className='font-CS text-base md:text-lg lg:text-xl text-blue-500'
                          >
                            การแข่งขันแก้ปัญหาโดยนำความรู้ทางวิทยาศาสตร์และการคำนวณมาประยุกต์ใช้
                          </motion.span>
                          <div className='flex flex-col gap-2 mt-2'>
                            <span
                              className='font-IBMPlexLoop leading-relaxed md:leading-relaxed text-sm md:text-base text-black'
                            >
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'สัมผัสประสบการณ์การแข่งขันแก้ปัญหาและสร้างสรรค์สิ่งประดิษฐ์โดยใช้ความรู้ด้าน STEM มาประยุกต์กับสถานการณ์สุดท้าทายที่ออกแบบมาให้น้อง ๆ ได้ระดมความคิดกันเป็นทีม!'}
                              />
                              <div className='font-medium text-base md:text-lg text-black whitespace-nowrap'>
                                ช่วงเวลารับสมัคร
                              </div>
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'ลงทะเบียนหน้างาน ทั้ง 4 รอบการแข่งขัน\nรอบละ 30 ทีม ทีมละไม่เกิน 3 คน (คละโรงเรียนได้)'}
                              />
                              <div className='font-medium text-base md:text-lg text-black whitespace-nowrap'>
                                วันที่จัดแข่งขัน
                              </div>
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'แข่งวันที่ 26 สิงหาคม 2566 จัดการแข่งขันเช้า 2 รอบ บ่าย 2 รอบ'}
                              />
                              <div className='font-medium text-base md:text-lg text-black whitespace-nowrap'>
                                สถานที่จัดแข่งขัน
                              </div>
                              <TextFormat
                              className='whitespace-pre-wrap'
                              content={'หอประชุมพระอุบาลี (ชั้นสองของโรงอาหาร) โรงเรียนมหิดลวิทยานุสรณ์'}
                              />
                              <div className='font-medium text-base md:text-lg text-black whitespace-nowrap'>
                              ข้อมูลเพิ่มเติม
                              </div>
                              <TextFormat
                              
                              className='whitespace-pre-wrap'
                              content={'08.00 เป็นต้นไป เปิดให้ลงทะเบียน\n09.00-10.15      รอบที่ 1 : นาฬิกามีไว้จับเวลา\n10.30-12.00      รอบที่ 2 : สามขาแต่ไม่สามใจ\n13.00-14.15      รอบที่ 3 : เล็งให้ไว ยิงให้ไกล\n14.30-16.00      รอบที่ 4 : The Last Challenge'}
                              />
                            </span>
                          </div>
                          <button
                            onClick={() => setchalOpen(false)}
                            className='text-sm md:text-base bg-white/30 w-fit hover:bg-white/60 hover:text-bmw transition-all duration-300 backdrop-blur-sm text-bmw/70 rounded-full px-4 py-1 mt-2 font-IBMPlex font-semibold'
                          >
                            Close
                          </button>
                        </motion.div>
                      </div>
                    )}
                  </AnimateSharedLayout>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
      
  )
}