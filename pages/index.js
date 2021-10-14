import Head from 'next/head'
import Image from 'next/image'
import 'semantic-ui-css/semantic.min.css'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Layout />
      <p>Welcome to my portfolio</p>
    </div>

  )
}
