import Head from 'next/head'
/*import Modal from "../components/Modal";*/
import { Fragment, useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion, useScroll,AnimatePresence } from 'framer-motion'
import { clamp } from 'lodash'
import Link from 'next/link'
import ActCard from '../components/actcard'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {events} from './Journeypath'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
const meta = {
    title: 'Customers Journey | MWIT Open House 2022',
    url: 'Customers Journey',
    description:
      'Customers Journey ที่จะพาทุกคนไปรู้จักับ MWIT OPENHOUSE 2023 มากขึ้น',
    img: 'ogimage.png',
  }

export default function Customerjourney() {
  const [color, setcolor] = useState({});
  function togglecolor(eventid) {
    setcolor(prevState => ({
      ...prevState,
      [`${eventid}`]: 'black' ? 'lightblue' : 'black'
    }))
  }
  
  const router = useRouter()
  useEffect(() => {
    
  },[])
  const [enter,setenter] = useState(12)
  const [visit,setvisit] = useState(enter)
  const [show,setshow] = useState(enter)
  useEffect(() => {
    router.query.events &&
    events.find((p) => p.name.replaceAll(' ', '_') === router.query.events)
      ? setvisit(
        events.findIndex(
          (p) => p.name.replaceAll(' ', '_') === router.query.events,
        ))
      : setvisit(12)
  },[router.query.events])
  {/*useEffect(()=>{
    router.query.events &&
    events.find((p)=>p.name.replaceAll(' ', '_') === router.query.events)
    ? setshow(
      events.findIndex((p) => p.name.replaceAll(' ', '_') === router.query.events)
      ):setshow({})
  },router.query.events)*/}
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
            content={'https://openhouse.mwit.ac.th/img/2023/thumb2023.png'}
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='twitter:domain' content='openhouse.mwit.ac.th' />
          <meta property='twitter:url' content={meta.url} />
          <meta name='twitter:title' content={meta.title} />
          <meta name='twitter:description' content={meta.description} />
          <meta
            name='twitter:image'
            content={'https://openhouse.mwit.ac.th/img/2023/thumb2023.png'}
          />
        </Head>
        <div className='w-screen h-[200vh]'>
          <div className='grid justify-items-center font-CS font-bold text-3xl md:text-4xl lg:text-5xl py-12 '>
            Customers Journey
          </div>
          <div className='grid justify-items-center'>          
            <div className='grid justify-items-center justify-center gap-1 bg-white/40 shadow-lg backdrop-blur-sm px-4 py-5 rounded-xl w-5/6'>
              <div className='font-CS text-3xl md:text-4xl font-bold text-bmw'>
                {"แผนที่แนะนำการเข้าชม MWIT OPENHOUSE"}
              </div>
              <div className='grid relative grid-cols-1'>
                <div className='col-span-1 relative max-w-max '>
                  <img
                    className='w-full max-h-fit'
                    src={'img/2023/journey/base.png'}
                  />
                  <a>
                    <AnimatePresence exitBeforeEnter>
                      <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className= {`absolute ${events[visit].locate.size} ${events[visit].locate.top} ${events[visit].locate.left} translate-y-[-50%] translate-x-[-50]`}
                        src={events[visit].img}
                      />
                    </AnimatePresence>
                  </a>
                  {events[visit].reccommend.map((s,sID)=>(
                    <>
                      <Link
                        key = {sID}
                        scroll={false}
                        visit
                        href={{
                          pathname: '/CustomersJourney',
                          query: {
                            ...router.query,
                            events: events[s.tour].name.replaceAll(' ', '_'),
                          },
                        }}
                        //onClick={()=>setshow(s.tour)}
                        passHref
                      >
                        <a className=''>
                          <AnimatePresence>
                            <motion.img
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              key={`${show}-${s.tour}`}
                              className= {`absolute ${events[s.tour].locate.size} ${events[s.tour].locate.top} ${events[s.tour].locate.left} translate-y-[-50%] translate-x-[-50]`}
                              src={events[s.tour].img}
                            />
                          </AnimatePresence>
                        </a>
                      </Link>
                    </>
                  ))}
                  
                </div>
                {/*<div className='col-span-1 relative max-w-max '>
                  <img
                    className='w-full max-h-fit'
                    src={'img/2023/journey/base.png'}
                  />
                  <img
                    className='absolute w-[3.5vw] top-[8.5%] left-[27.7%] translate-y-[-50%] translate-x-[-50]'
                    src='img/2023/journey/movie_3d.png'
                  />
                  <img
                    className='absolute w-[3.5vw] top-[64%] left-[65%] translate-y-[-50%] translate-x-[-50]'
                    src='img/2023/journey/soccer_field.png'
                  />
                  <img
                    className='absolute w-[2.5vw] top-[89%] left-[50.5%] translate-y-[-50%] translate-x-[-50]'
                    src='img/2023/journey/17Building.png'
                  />
                  <img
                    className='absolute w-[2.5vw] top-[25%] left-[27%] translate-y-[-50%] translate-x-[-50]'
                    src='img/2023/journey/flag.png'
                  />
                  
                </div>*/}
                {/*events.map((p,pID) => (
                  <>
                    <div key={pID} className='grid justify-self-center justify-items-center justify-center gap-1 bg-white/40 shadow-lg backdrop-blur-sm px-4 py-5 rounded-xl w-[60%]'>
                      {p.description}
                    </div>
                  </>
                )
                )*/}
              </div>
              
            </div>
          </div>
          <div className='grid justify-items-center justify-center gap-1 w-screen pt-12 w-screen'>
            <div className='bg-white/40 shadow-lg backdrop-blur-sm rounded-xl w- px-6 py-6'>
              <span className='font-CS text-2xl md:text-4xl font-bold text-bmw justify-center'>
                {`Current Place:${events[visit].name}`}
              </span>
              <div className='grid md:grid-cols-3 justify-center'>
                <img 
                  src={events[visit].img}
                  className='md:col-span-1 h-[10vh] justify-center'
                />
                <span className='md:col-span-2 font-CS text-2xl py-[3vh]'>
                  {events[visit].description}
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </>
      
    )
}