import { Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../../components/layout'

function Dashboard() {
  return (
    <>
      <Head>
        <title>Dubhe - Dashboard</title>
      </Head>
      <Layout>
        <Heading color={'gray.200'}>Dashboard</Heading>
      </Layout>;
    </>
  )
}

export default Dashboard