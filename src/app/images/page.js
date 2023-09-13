import Image from 'next/image'
import React from 'react'
import next from '../../../public/next.svg'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap'
})
const Page = () => {


  return (
    <div>
      <Image src={'https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?size=626&ext=jpg&ga=GA1.2.699004638.1684233915&semt=ais'} width={300} height={300}/>
      <h1 className={roboto.className}>This is the heading</h1>
      <h2>this is minor heading</h2>
    </div>
  )
}

export function generateMetadata(params) {

  console.log(params)
  return {
    title: 'Images',
    description: 'this is the page to show images'
  }
}
export default Page
