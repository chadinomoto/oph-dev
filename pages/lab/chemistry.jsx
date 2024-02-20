import {
  faFileDownload,
  faFilePen,
  faFlaskVial,
  faVideo,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import MetaHeader from '../../components/metaHeader'

export default function VirtualLab() {
  const meta = {
    title:
      'เรียน ๆ เล่น ๆ ให้เป็นเคมี - สาขาวิชาเคมี | Virtual Lab & Activity | MWIT Open House 2022',
    url: 'lab/chemistry',
    description:
      'เรียนรู้การทดลองทางเคมีผ่านแพลทฟอร์มออนไลน์ที่ได้ทั้งความรู้และความสนุก เช่น การหาความเข้มข้นสารละลายด้วย simulation, เรียนรู้การทำปฏิกิริยาเคมีจากการทำแซนวิช หรือฝึกทักษะพื้นฐานทางเคมี | MWIT Open House 2022',
  }

  const labData = [
    {
      name: 'กิจกรรมที่ 1 ใครอยากเป็นเศรษฐี      ',
      desc: ' เป็นรูปแบบการเล่นบอร์ดเกมคล้ายเกมเศรษฐี โดยผู้เล่นจะทำการทอยลูกเต๋า และใช้หมากเดินไปที่ช่องต่างๆบนกระดาน และตอบคำถามที่สอดแทรกความรู้วิชาเคมี หากตอบถูกจะได้รับคะแนน รวมคะแนนเพื่อหาผู้ชนะ',
      place : 'สถานที่ : 3503',
      type : 'รูปแบบการจัด : จัดเป็นรอบๆ รอบละ 20นาที',
      people : 'จำนวนผู้เข้าร่วม : 20 คน',
      award : 'ของรางวัล : ลูกอม',
      button: [
        {
          name: 'Virtual Lab',
          href: 'https://chemcollective.org/vlab/87',
          icon: faFlaskVial,
        },
        {
          name: 'เอกสารแนะนำการทดลอง',
          href: 'https://drive.google.com/file/d/1kKkISpkJuL64qGnK8guICIwqD1UrJ9xG/view?usp=sharing',
          icon: faFileDownload,
        },
      ],
    },
    {
      name: 'กิจกรรมที่ 2 Discover the power of water',
      desc: 'การหาความเข้มข้นที่แท้จริงของสารละลาย ผ่านการวัดค่า absorbance และ full spectrum(จาก data logger) ผ่านนักสืบไขคดี',
      place : 'สถานที่ : 3601',
      type : 'รูปแบบการจัด : walk-in ',
      people : 'วัสดุอุปกรณ์ : data logger, เกลือ, น้ำกลั่น, สีผสมอาหาร, cuvette, บีกเกอร์, ปิเปต',
      award : 'จำนวนผู้เข้าร่วม : ไม่จำกัด',
      button: [
        {
          name: 'Virtual Lab',
          href: 'https://phet.colorado.edu/sims/html/concentration/latest/concentration_en.html',
          icon: faFlaskVial,
        },
        {
          name: 'วิดีโอแนะนำการทดลอง',
          href: 'https://youtu.be/bTQIB0Z84Uw',
          icon: faVideo,
        },
        {
          name: 'ใบงาน',
          href: 'https://forms.gle/x7jGDYMEL2znBzcj7',
          icon: faFilePen,
        },
      ],
    },
    {
      name: 'กิจกรรมที่ 3 Discover the power of water',
      desc: 'กิจกรรมศึกษาปฏิกิริยารีดอกซ์ ผ่านการสร้างกระแสไฟฟ้าจากการแตกตัวของน้ำเกลือ',
      place : 'สถานที่ : 3603',
      type : 'รูปแบบการจัด : walk-in ',
      people : 'วัสดุอุปกรณ์ : มัลติมิเตอร์ แผ่นอะลูมิเนียมฟอยล์ น้ำเกลือ ถ่าน',
      award : 'จำนวนผู้เข้าร่วม : ไม่จำกัด',
      list: [
        'ศึกษาการทำแซนวิช (วัตถุดิบตั้งต้น ผลิตภัณฑ์แซนวิช และวัตถุดิบที่เหลือ) ',
        'ศึกษาโมเลกุลก่อนและหลังการเกิดปฏิกริยา เช่น ปฏิกิริยาการเกิดน้ำ การเกิดแอมโมเนีย และการเผาไหม้มีเทน',
        'แข่งขันเล่นเกมส์ ในระดับความยากแตกต่างกัน',
      ],
      button: [
        {
          name: 'Virtual Lab',
          href: 'https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_th.html',
          icon: faFlaskVial,
        },
      ],
    },
    {
      name: 'กิจกรรมที่ 4 Discover the secret of rock',
      desc: 'กิจกรรมศึกษาหินและไมโครพลาสติกในน้ำชาและน้ำซักผ้า ผ่านกล้อง USB digital microscope',
      place : 'สถานที่ : 2505',
      type : 'รูปแบบการจัด : walk-in ',
      people : 'วัสดุอุปกรณ์ : ตัวอย่างหิน น้ำชา น้ำซักผ้า กล้อง USB digital microscope',
      award : 'จำนวนผู้เข้าร่วม : ไม่จำกัด',
      button: [
        {
          name: 'Virtual Lab',
          href: 'https://teachchemistry.org/classroom-resources/measuring-volume-simulation',
          icon: faFlaskVial,
        },
        {
          name: 'เอกสารแนะนำการทดลอง',
          href: 'https://drive.google.com/file/d/1FMTKLdfd3Zehj1cfRpz7gqr7bqVNLCBr/view?usp=sharing',
          icon: faFileDownload,
        },
      ],
    },

  ]

  return (
    <>
      <MetaHeader meta={meta} />

      <main className='w-full bg-bvl/60'>
        <div className='flex flex-col text-center text-black items-center mx-auto justify-self-center w-full max-w-6xl px-6 pt-10 pb-4'>
          <span className='font-CS font-bold text-bmw text-3xl md:text-4xl lg:text-5xl'>
            สาขาวิชาเคมี
          </span>
          <span className='font-CS font-bold text-bbk text-xl md:text-2xl lg:text-3xl'>
            Virtual Lab & Activities
          </span>
        </div>
        <div className='flex flex-col relative overflow-y-hidden max-w-6xl mx-auto px-6 justify-center gap-4 pt-4 pb-10'>
          <div className='flex relative flex-col gap-2 items-center shadow-lg py-3 px-4 bg-white backdrop-blur-md rounded-xl'>
            <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center'>
              เรียน ๆ เล่น ๆ ให้เป็นเคมี
            </span>
            <div className='grid grid-flow-row md:grid-flow-col gap-4 justify-items-center'>
              <img
                src={process.env.CDN_URL + '/img/lab/' + 'chemcov.webp'}
                className='w-full max-w-sm rounded-xl'
              />
              <div className='flex flex-col justify-center gap-2'>
                <span className='font-IBMPlexLoop text-sm md:text-base'>
                  เรียนรู้การทดลองทางเคมีผ่านแพลทฟอร์มออนไลน์ที่ได้ทั้งความรู้และความสนุก
                  เช่น การหาความเข้มข้นสารละลายด้วย simulation,
                  เรียนรู้การทำปฏิกิริยาเคมีจากการทำแซนวิช
                  หรือฝึกทักษะพื้นฐานทางเคมี
                </span>
                <span className='font-IBMPlexLoop text-sm md:text-base font-semibold'>
                  พบกับ 5 กิจกรรม
                </span>
                <ol className='font-IBMPlexLoop text-sm md:text-base list-inside list-disc space-y-1'>
                  {labData.map((l, li) => (
                    <li key={li}>{l.name}</li>
                  ))}
                </ol>
              </div>
            </div>
            <Link href={'/lab'}>
              <a className='absolute text-sm md:text-base left-3 font-IBMPlex font-semibold text-gray-600 hover:text-black transition-colors duration-300 -top-4 bg-purple-300/60 hover:bg-purple-300/80 rounded-full py-1 px-3'>
                {'< Back'}
              </a>
            </Link>
          </div>
          {labData.map((l, li) => (
              <div className='grid grid-flow-row md:grid-flow-col gap-4 '>
                <div>
                  <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold'>
                    {l.name}
                  </span>
                  <span className='font-IBMPlexLoop text-sm md:text-base'>
                    {l.desc}
                  </span>
                  <ol className='font-IBMPlexLoop text-sm md:text-base list-inside list-disc space-y-1'>
                    <li key={li}>{l.place}</li><li key={li}>{l.type}</li><li key={li}>{l.people}</li><li key={li}>{l.award}</li>
                </ol>
                  {/* <span className='font-IBMPlexLoop text-sm md:text-base font-semibold'>
                  พบกับ 6 กิจกรรม
                </span>
                <ol className='font-IBMPlexLoop text-sm md:text-base list-inside list-disc space-y-1'>
                  <li>ทุกวันเวลา 18:00-21:00 น.</li>
                  <li>
                    เสาร์อาทิตย์เพิ่มช่วง 9:00-12:00 น. และ 13:00-16:00 น.
                  </li>
                </ol> */}
                  <div className='flex flex-wrap gap-1'>
                    {l.button.map((b, bi) => (
                      <Link key={bi} href={b.href}>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          className='self-center text-sm md:text-base flex gap-1 items-center mt-2 px-3 py-1 rounded-full font-IBMPlex font-semibold bg-ymw/60 hover:bg-ymw transition-colors duration-300'
                        >
                          <FontAwesomeIcon icon={b.icon} />
                          <span>{b.name}</span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
          ))}
        </div>
      </main>
    </>
  )
}
