import { faFlaskVial,
  faFileImport
  ,faVideo } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import Link from 'next/link'
  import MetaHeader from '../../components/metaHeader'
  
  export default function VirtualLab() {
    const meta = {
      title:
        'Math&Com Rally in Gather.town - สาขาวิชาคณิตศาสตร์และวิทยาการคำนวณ | Virtual Lab & Activity | MWIT Open House 2022',
      url: 'lab/mathcom',
      description:
        'นิทรรศการออนไลน์เกี่ยวกับเรื่องราวที่น่าสนใจทางคณิตศาสตร์และวิทยาการคำนวณ โดยจะมีเกม walk rally ให้ผู้เข้าชมตามหาคำถามที่ซ่อนไว้ในบริเวณต่าง ๆ แล้วจึงตอบให้ถูกต้องใน Google Form เพื่อชิงเงินรางวัล | MWIT Open House 2022',
      img: 'ogimage.png',
    }
  const peData = [
      {
        name: 'กิจกรรม Amazing bicep',
        desc: 'กิจกรรม แนะนํา อุปกรณ์เน้นอธิบายการทํางานและใช้งานของเครื่องอธิบายการเข้าใช้งานสถานที่ และกิจกรรม hands-on เน้นการลงมือทําและได้ค้นพบเครื่องมือการออกกําลังกายใหม่ๆ',
        type : 'รูปแบบกิจกรรม ได้แก่ (1) กิจกรรมแนะนําอุปกรณ์ต่างในห้องฟิตเนสและวิธีการใช้คร่าวๆ (2)กิจกรรม hands-on ให้ผู้เข้าร่วมได้ลองใช้และทําใบกิจกรรมเพื่อแลกของรางวัล',
        place : 'ห้องจัดกิจกรรม ห้องฟิตเนส ชั้น 3',
      },
      {
        name: 'กิจกรรม bang the ball',
        desc: '**กิจกรรมจัดชวงบ่ายเท่านั้น**',
        type : 'รูปแบบกิจกรรม ได้แก่ (1)กิจกรรมแนะนําสถานที่ทั้งหมดในศูนย์กีฬาและแนะนํากิจกรรมต่างๆ เกี่ยวกับกีฬาในโรงเรียน (2) กิจกรรม hands-on ให้ผู้เข้าร่วมได้ลองใช้สนามบาสศูนย์กีฬาซึ่งจะมีมินิเกมต่างๆให้เล่น',
        place : 'สถานที่จัดกิจกรรม สนามบาสศูนย์กีฬา ชั้น 4',
      },
    ]
    return (
      <>
        <MetaHeader meta={meta} />
  
        <main className='w-full bg-bvl/60'>
          <div className='flex flex-col text-center text-black items-center mx-auto justify-self-center w-full max-w-6xl px-6 pt-10 pb-4'>
            <span className='font-CS font-bold text-bmw text-3xl md:text-4xl lg:text-5xl'>
            สาขาวิชาชีววิทยาและวิทยาศาสตร์สุขภาพ
            </span>
            <span className='font-CS font-bold text-bbk text-xl md:text-2xl lg:text-3xl'>
              Lab & Activities
            </span>
          </div>
          <div className='flex flex-col relative overflow-y-hidden max-w-6xl mx-auto px-6 justify-center gap-4 pt-4 pb-10'>
            <div className='flex relative flex-col gap-2 items-center shadow-lg py-3 px-4 bg-pink-200/40 backdrop-blur-md rounded-xl'>
            <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center mt-2'>
              กลุ่มสาระชีววิทยา
              </span>
              <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center mt-2'>
              กิจกรรม OPH ฐานชีววิทยา
              </span>
              <bc>ชื่อกิจกรรม : Who ไคร้ข่า</bc>
              <div className='grid grid-flow-row md:grid-flow-col gap-4 justify-items-center'>
                <div className='flex flex-col justify-center gap-2'>
                  <span className='font-IBMPlexLoop text-sm md:text-base'>
                  มาช่วยกันร่วมตามหาฆาตกร ใคร!เป็น!คน!ทำ!ไปด้วยกัน เพราะ
                  หลักฐานที่อยู่ รหัสลับ กลอุบาย การต่อรองผู้มองเห็นความจริง มีเพียงหนึ่งเดียวถึงตัวจะเป็นเด็ก แต่สมองเป็น
                  ผู้ใหญ่ชื่อของเขาคือยอดนักสืบ CSI
                  </span>
                  <span className='font-IBMPlexLoop text-sm md:text-base font-semibold'>
                    พบกับนักเรียนปัจจุบัน ในช่วงเวลาดังนี้
                  </span>
                  <ol className='font-IBMPlexLoop text-sm md:text-base list-inside list-disc space-y-1'>
                    <li>จำนวนผู้เข้าร่วม : 20 คน</li>
                    <li>
                    สถานที่จัด: 3401, 3403
                    </li>
                     <li>ของรางวัล: เครื่องเขียน</li>
                  </ol>
      
                </div>
              </div>
              <Link href={'/lab'}>
                <a className='absolute text-sm md:text-base left-3 font-IBMPlex font-semibold text-gray-600 hover:text-black transition-colors duration-300 -top-4 bg-purple-300/60 hover:bg-purple-300/80 rounded-full py-1 px-3'>
                  {'< Back'}
                </a>
              </Link>
              </div>
            <div className='flex relative flex-col gap-2 items-center shadow-lg py-3 px-4 bg-pink-200/40 backdrop-blur-md rounded-xl'>
              <div className='flex flex-col text-center text-black items-center mx-auto justify-self-center w-full max-w-6xl px-6 pt-10 pb-4'>
              <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center'>
                กลุ่มสาระสุขศึกษาและพลศึกษา
              </span>
              <div className='grid grid-flow-row md:grid-flow-col gap-4 justify-items-center'>
                <div className='flex flex-col justify-center gap-2'>
                  <span className='font-IBMPlexLoop text-sm md:text-base font-semibold'>
                    หมวดพลศึกษาจะมีการเรียนรู้เกี่ยวกับการเล่นกีฬาประเภททีม
                    และกิจกรรมนอกห้องเรียน
                  </span>
  
                  <ol className='font-IBMPlexLoop text-sm md:text-base list-inside list-disc space-y-1'>
                    {peData.map((b, bi) => (
                      <li key={bi}>{b.name}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            
            {peData.map((l, li) => (
              <div
                key={li}
                className='flex relative flex-col gap-2 items-start shadow-lg py-3 px-4 bg-white backdrop-blur-md rounded-xl'
              >
                <div className='grid grid-flow-row md:grid-flow-col gap-4'>
                  <div className='flex flex-col justify-center gap-2 '>
                    <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold'>
                      {l.name}
                    </span>
                    <span className='font-IBMPlexLoop text-sm md:text-base'>
                      {l.desc}
                    </span>
                    <span className='font-IBMPlexLoop text-sm md:text-base'>
                      {l.type}
                    </span>
                    <li key={li}>{l.place}</li>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </main>
      </>
    )
  }