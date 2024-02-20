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
            สาขาวิชาฟิสิกส์และดาราศาสตร์
            </span>
            <span className='font-CS font-bold text-bbk text-xl md:text-2xl lg:text-3xl'>
              Lab & Activities
            </span>
          </div>
          <div className='flex flex-col relative overflow-y-hidden max-w-6xl mx-auto px-6 justify-center gap-4 pt-4 pb-10'>
            <div className='flex relative flex-col gap-2 items-center shadow-lg py-3 px-4 bg-pink-200/40 backdrop-blur-md rounded-xl'>
            <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center mt-2'>
              กลุ่มสาระฟิสิกส์
              </span>
              <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center mt-2'>
              กิจกรรม “Amazing Physics in Daily Life”
              </span>
              <div className='grid grid-flow-row md:grid-flow-col gap-4 justify-items-center'>
                <img
                /*  src={process.env.CDN_URL + '/img/lab/' + 'mathact.webp'}
                  className='w-full max-w-sm rounded-xl' */
                />
                <div className='flex flex-col justify-center gap-2'>
                  <span className='font-IBMPlexLoop text-sm md:text-base'>
                  {'\t\tมาช่วยกันร่วมตามหาฆาตกร ใคร!เป็น!คน!ทำ!ไปด้วยกัน เพราะหลักฐานที่อยู่ รหัสลับ กลอุบาย การต่อรองผู้มองเห็นความจริง มีเพียงหนึ่งเดียวถึงตัวจะเป็นเด็ก แต่สมองเป็นผู้ใหญ่ชื่อของเขาคือยอดนักสืบ CSI'}
                  </span>
                  <span className='font-IBMPlexLoop text-sm md:text-base font-semibold'>
                  {'• รูปแบบของกิจกรรม ได้แก่'}
                  </span>
                  <bc>(1) กิจกรรมสาธิตปรากฏการณ์ทางฟิสิกส์ที่น่าประหลาดใจ</bc>
                  <bc>(2) กิจกรรม Hands-on ที่น่าสงสัย ให้ผู้เข้าร่วมกิจกรรมได้ลงมือทํา</bc>
                  <ol className='font-IBMPlexLoop text-sm md:text-base list-inside list-disc space-y-1'>
                    <li>กิจกรรมสาธิต เน้นการสาธิตปรากฏการณ์โดยมีคําถามให้ผู้เข้าร่วมกิจกรรมได้หาคําตอบจากการสังเกตปรากฏการณ์ที่เกิดขึ้น และลองอธิบายปรากฏการณ์ที่เกิดขึ้น</li>
                    <li>
                    ห้องจัดกิจกรรม 3701 3703 และ 3705
                    </li>
                  </ol>
      
                </div>
              </div>
              <Link
              href={
                'https://www.youtube.com/watch?v=2YD_WyT-n5s&ab_channel=GoExperimental'
              }
              >
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='self-center text-sm md:text-base flex gap-1 items-center mt-2 px-3 py-1 rounded-full font-IBMPlex font-semibold bg-ymw/60 hover:bg-ymw transition-colors duration-300'
              >
                <FontAwesomeIcon icon={faFileImport} />
                <span>ตัวอย่างกิจกรรมที่น่าประหลาดใจ/น่าตื่นเต้น/น่าสนใจ คลิปที่ 1</span>
              </a>
              </Link>
              <Link
              href={
                'https://www.youtube.com/watch?v=H8uhyuGPQJM&ab_channel=VisioNil'
              }
              >
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='self-center text-sm md:text-base flex gap-1 items-center mt-2 px-3 py-1 rounded-full font-IBMPlex font-semibold bg-ymw/60 hover:bg-ymw transition-colors duration-300'
              >
                <FontAwesomeIcon icon={faFileImport} />
                <span>ตัวอย่างกิจกรรมที่น่าประหลาดใจ/น่าตื่นเต้น/น่าสนใจ คลิปที่ 2</span>
              </a>
              </Link>

              <Link href={'/lab'}>
                <a className='absolute text-sm md:text-base left-3 font-IBMPlex font-semibold text-gray-600 hover:text-black transition-colors duration-300 -top-4 bg-purple-300/60 hover:bg-purple-300/80 rounded-full py-1 px-3'>
                  {'< Back'}
                </a>
              </Link>
              </div>
            <div className='flex relative flex-col gap-2 items-center shadow-lg py-3 px-4 bg-pink-200/40 backdrop-blur-md rounded-xl'>
              <div className='flex flex-col text-center text-black items-center mx-auto justify-self-center w-full max-w-6xl px-6 pt-10 pb-4'>
              <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center'>
                กลุ่มสาระดาราศาสตร์
              </span>
              <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center mt-2'>
              กิจกรรม “Wonderful World of Astronomy”
              </span>
              </div>
                <div className='flex flex-col justify-center gap-2'>
                  <span className='font-IBMPlexLoop text-sm md:text-base'>
                  {'ตัวอย่างกิจกรรม เช่น การใช้กล้องโทรทรรศน์ในการสังเกตวัตถุระยะไกล (ตั้งกล้องบริเวณหน้าห้อง3605) การสังเกตวัตถุท้องฟ้าด้วย Software/App ทางดาราศาสตร์ เป็นต้น'}
                  </span>
                  <ol className='font-IBMPlexLoop text-sm md:text-base list-inside list-disc space-y-1'>
                    <li>กิจกรรมสาธิต เน้นการสาธิตปรากฏการณ์โดยมีคําถามให้ผู้เข้าร่วมกิจกรรมได้หาคําตอบจากการสังเกตปรากฏการณ์ที่เกิดขึ้น และลองอธิบายปรากฏการณ์ที่เกิดขึ้น</li>
                    <li>
                    ห้องจัดกิจกรรม 3605
                    </li>
                  </ol>
                  </div>         
            </div>
          </div>
        </main>
      </>
    )
  }