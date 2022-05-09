import { Grid, GridItem, Heading, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Layout from '../../components/layout'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[300]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-05-09T00:00:00.000Z',
      '2022-05-10T00:00:00.000Z',
      '2022-05-11T00:00:00.000Z',
      '2022-05-12T00:00:00.000Z',
      '2022-05-13T00:00:00.000Z',
    ]
  }
}

const series = [
  {
    name: 'Usuários registrados',
    data: [50, 105, 352, 65, 45]
  }
]

function Dashboard() {

  return (
    <>
      <Head>
        <title>Dubhe - Dashboard</title>
      </Head>
      <Layout>
        <Heading color={'gray.200'}>Dashboard</Heading>
        <Grid templateColumns={'1fr 1fr'} gap={'24px'} my={'32px'}>
          <GridItem p={'16px'} bg='gray.700' borderRadius={'lg'}>
            <Heading color={'gray.300'} fontSize={'lg'} fontWeight={'normal'}>Usuários registrados</Heading>
            <Chart type='area' options={options} series={series} height={250} />
          </GridItem>
          <GridItem p={'16px'} bg='gray.700' borderRadius={'lg'}>
            <Heading color={'gray.300'} fontSize={'lg'} fontWeight={'normal'}>Usuários registrados</Heading>
            <Chart type='area' options={options} series={series} height={250} />
          </GridItem>
        </Grid>
      </Layout>;
    </>
  )
}

export default Dashboard