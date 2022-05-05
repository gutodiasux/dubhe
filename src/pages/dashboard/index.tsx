import { Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Layout from '../../components/layout'

function Dashboard() {
  return (
    <>
      <Head>
        <title>Dubhe - Dashboard</title>
      </Head>
      <Layout>
        <Grid
          templateColumns={{ sm: '1fr', md: '1fr', xl: 'auto 1fr' }}

        >
          <GridItem
            display={{ sm: 'none', md: 'none', xl: 'block' }}
          >
            1
          </GridItem>
          <GridItem

          >
            2
          </GridItem>
        </Grid>
      </Layout>
    </>
  )
}

export default Dashboard