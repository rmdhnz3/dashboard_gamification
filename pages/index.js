import Head from 'next/head';
import ProfileLeft from '../components/ProfileLeft';
import { ChakraProvider } from '@chakra-ui/react'
import Charts from '../components/Chart';


export default function Index() {
  return (
    
    <div>
      <Head>
        <title>Gamification Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container mx-auto px-10 mt-2 mb-8 py-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 w-full py-8'>
          <div className='lg:col-span-12 col-span-1'>
            <Charts />
          </div>
        </div>
      </div>
     </div> 
  );
}