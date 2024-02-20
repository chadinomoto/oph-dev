import Head from 'next/head'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion, useScroll } from 'framer-motion'
import { clamp } from 'lodash'
import Link from 'next/link'
import Pdfcard from '../components/pdfcard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faCircleXmark,
  faFileInvoice,
  faFlaskVial,
  faPeopleRobbery,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons'
const meta = {
    title: 'Document | MWIT Open House 2023',
    url: 'document',
    description:
      'รวมเอกสารทั้งหมดที่จำเป็นสำหรับการเข้าร่วมงาน MWIT Open House 2023',
    img: 'ogimage.png',
  }
const File = [
    {
        name : "Google Form ลงทะเบียนเข้าร่วม MWIT OPEN HOUSE 2023: DISCOVERY",
        href : "https://forms.gle/9r7ax1gAwxDK5Hov6",
        src: "logo",
        desc: "ขอความกรุณาทุกท่านที่มีความประสงค์เข้าร่วมกิจกรรมร่วมมือกรอกข้อมูลลงทะเบียนเข้าร่วมกิจกรรมเพื่อความสะดวกในการเข้ากิจกรรมในวันจริง",
        button: "ปิดลงทะเบียน",
        btnclass: "bg-red-500/50 hover:bg-red-500 px-3 text-sm md:text-base absolute top-2 right-2 font-IBMPlex font-semibold rounded-full transition-colors duration-300 backdrop-blur-sm"
    },
    {
        name : "Google Form ลงทะเบียนเข้าแข่งขัน MWIT SPELLING BEE",
        href : "https://forms.gle/pbQWEdGUUAN5L3JP9",
        src: "SpellingBee",
        desc: "สำหรับผู้ที่สนใจเข้าแข่งขันในกิจกรรม Spelling bee ในวันที่ 25 สิงหาคม 2566",
        button: "ฟอร์ม",
      btnclass: "bg-white/50 hover:bg-white px-3 text-sm md:text-base absolute top-2 right-2 font-IBMPlex font-semibold rounded-full transition-colors duration-300 backdrop-blur-sm"
    }

]
export default function eventregis() {
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
        <meta property='twitter:domain' content='openhouse.mwit.ac.th' />
        <meta property='twitter:url' content={meta.url} />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta
          name='twitter:image'
          content='https://openhouse.mwit.ac.th/img/2023/thumb2023.png'
        />
    </Head>
        <main className='z-0 flex flex-col items-center w-full max-w-7xl px-8 py-6 gap-4 mx-auto bg-cover bg-bottom sm:bg-fixed min-h-screen space-y-2'>
            <span
              className='font-CS font-bold text-2xl md:text-3xl lg:text-4xl pt-16'
            >
              All documents
            </span>
            <div className='w-full flex flex-wrap justify-center gap-3 pb-8'>
              {File.map((a, ai) => (
                <Pdfcard
                  key={ai}
                  src={a.src}
                  name={a.name}
                  desc={a.desc}
                  href={a.href}
                  button={a.button}
                  btnclass={a.btnclass}
                />
              ))}
              </div>
        </main>
    </>
      
  )
}