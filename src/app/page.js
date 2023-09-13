'use client' 
// this use client means that we can only use the events on the client components not on the server component. We firstly have to specify the component as client component by writing 'use client' at the top of file
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1>Home Page</h1>

    </main>
  )
}
