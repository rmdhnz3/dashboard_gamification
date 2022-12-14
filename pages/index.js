import Head from 'next/head';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useAppContext } from '../lib/context/State';

export default function Index() {
  const {
    user,
    user_badges,
    badges,
    ustrans
  } = useAppContext()

  console.log(ustrans.ustransData)
  return (

    <div>
      <Head>
        <title>Gamification Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container mx-auto px-10 mt-2 mb-8 py-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 w-full py-8'>
          <div className='lg:col-span-12 col-span-1'>


            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <div className="rounded-lg bg-gray-200 w-auto h-full flex"  >

                <Card variant="outlined" style={{ marginLeft: 20, marginTop: 20, marginBottom: 20 }} sx={{ maxWidth: 350, display: 'flex' }}>
                  <CardContent><Image src="/userImg.png" width="75" height="75" /></CardContent>
                  <CardContent><Typography style={{ marginTop: 25, fontSize: 25 }} variant="h4">User Total : {user.dataUser.length}</Typography>
                    <Card variant="outlined" sx={{ maxWidth: 400, display: 'row', backgroundColor: 'whitesmoke' }}>
                      <Typography>{"id"}{"-->"}{"username"}</Typography>
                      {user.dataUser.map(item => {
                        return (
                          <Typography>{item.id}{"-->"}{item.username}</Typography>
                        )
                      })}
                    </Card>
                  </CardContent>
                </Card>

                <Card variant="outlined" style={{ marginLeft: 20, marginTop: 20, marginBottom: 20 }} sx={{ maxWidth: 400, display: 'flex' }}>
                  <CardContent><Typography style={{ marginTop: 25, fontSize: 25 }} variant="h4">Transaction Total : {ustrans.ustransData.length}</Typography>
                    <Card variant="outlined" sx={{ maxWidth: 400, display: 'row', backgroundColor: 'whitesmoke' }}>
                      <Typography>{"id"}{"-->"}{"point_change"}{"-->"}{"status"}</Typography>
                      {ustrans.ustransData.map(item => {
                        return (
                          <Typography>{item.id}{"-->"}{item.point_change}{"-->"}{item.status == 1 ? <span style={{ color: 'green' }}>Masuk</span> : <span style={{ color: 'red' }}>Keluar</span>}</Typography>
                        )
                      })}
                    </Card></CardContent>
                  <CardContent><Image src="/transImg.png" width="75" height="75" />

                  </CardContent>

                </Card>


                <Card variant="outlined" style={{ marginLeft: 20, marginTop: 20, marginBottom: 20 }} sx={{ maxWidth: 750, display: 'flex' }}>
                  <CardContent><Typography style={{ marginTop: 25, fontSize: 25 }} variant="h4">Badge Total : {badges.data.data?.length}</Typography>
                    <Card variant="outlined" sx={{ maxWidth: 400, display: 'row', backgroundColor: 'whitesmoke' }}>
                      <Typography>{"id"}{"-->"}{"badge_name"}</Typography>
                      {badges.data.data?.map(item => {
                        return (
                          <Typography>{item.id}{"-->"}{item.name}
                            <Card sx={{ maxWidth: 35 }}><CardMedia
                              component="img"
                              height="20"
                              image={item.img}
                              alt="badge_image"
                            /></Card></Typography>
                        )
                      })}
                    </Card>
                  </CardContent>
                  <CardContent><Image src="/badgeImg.png" width="75" height="75" /></CardContent>
                </Card>

                <br></br>

              </div>



            </div>

          </div>
        </div>
      </div>
     </div> 
  );
}