import Head from 'next/head'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion, useScroll } from 'framer-motion'
import { clamp } from 'lodash'
import Link from 'next/link'
import ActCard from '../components/actcard'
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
const wcText = "Hi"


export default function Home({ userData }) {
    return(
        <>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>MWIT Open House 2023</title>
                <meta
                name='description'
                content='MWIT Open House 2023 เปิดบ้านโรงเรียนมหิดลวิทยานุสรณ์ พบกับกิจกรรมและนิทรรศการมากมายตลอดวันที่ 25 และ 26 สิงหาคม 2566 ในรูปแบบออนไซต์'
                />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property='og:url' content='https://openhouse.mwit.ac.th/' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='MWIT Open House 2023' />
                <meta
                property='og:description'
                content='MWIT Open House 2023 เปิดบ้านโรงเรียนมหิดลวิทยานุสรณ์ พบกับกิจกรรมและนิทรรศการมากมายตลอดวันที่ 25 และ 26 สิงหาคม 2566 ในรูปแบบออนไซต์'
                />
                <meta
                property='og:image'
                content='https://openhouse.mwit.ac.th/img/ogimage.png'
                />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name='twitter:card' content='summary_large_image' />
                <meta property='twitter:domain' content='openhouse.mwit.ac.th/' />
                <meta property='twitter:url' content='https://openhouse.mwit.ac.th/' />
                <meta name='twitter:title' content='MWIT Open House 2023' />
                <meta
                name='twitter:description'
                content='MWIT Open House 2023 เปิดบ้านโรงเรียนมหิดลวิทยานุสรณ์ พบกับกิจกรรมและนิทรรศการมากมายตลอดวันที่ 25 และ 26 สิงหาคม 2566 ในรูปแบบออนไซต์'
                />
                <meta
                name='twitter:image'
                content='https://openhouse.mwit.ac.th/img/ogimage.png'
                />
            </Head>
            <div className='bg-[url(/img/2023/Artboard-1.webp)] w-screen font-CS font-bold text-2xl md:text-3xl lg:text-4xl pt-16'>
                <a className='mx-auto px-8 font-CS font-bold text-bmw text-3xl md:text-4xl lg:text-5xl flex justify-center'>
                MWIT Club Festival
                </a>
                
                <div className=' mx-auto px-8 font-CS font-bold text-2xl md:text-3xl lg:text-4xl mt-10 flex justify-center'>
                  กิจกรรมตามสาขาวิชา & CLUBFES
                </div>
                
                <div>

                
                <div class="flex justify-center items-center h-screen container mx-auto px-8">
                <div class="grid grid-cols-2 gap-4">
                    <div class= "bg-white rounded-lg shadow-md p-4 text-xl">
                        <h2 class="text-2xl font-bold">สถานที่จัด</h2>
                        <p>Location: City, Country</p>
                        <p>เวลา: 09:00</p>
                    </div>
                    
                    <div class="container mx-auto px-8 bg-white rounded-lg shadow-md p-4 text-xl">
                        <h2 class="text-2xl font-bold">Description</h2>
                        <p class>นำเสนอกิจกรรมชุมนุมใน MWIT ที่มีกิจกรรมที่เปิดโอกาสให้ทำหลากหลาย ไม่ว่าจะเป็น ดนตรี กีฬา ไม่ใช่แค่ด้านวิชาการอย่างเดียว</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}