import { useEffect, useState } from "react"
import {useAppContext} from "../lib/context/State"
import Moment from "react-moment"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl,InputLabel,Input,FormHelperText,TextField ,Grid, Dialog,DialogActions,DialogContent,DialogTitle,DialogContentText, RadioGroup, FormControlLabel, FormLabel, Radio, Select, MenuItem, CardMedia,Card} from "@mui/material";
import SendIcon from '@mui/material/Icon'
import moment from "moment";

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 10,
  p: 4,
  overflow:'scroll',
    display:'block'
};
export default function User() {
  
 const {
        badges,
        setBadges,
        badgesdetail,
        open,
        setOpen,
        detail,
        addBadges,
        deleteUstrans,
        updateUstrans,
        addBadgesImage
  } = useAppContext()      

      const [id,setId] = useState('')
      const [state,setState] = React.useState({
       badge_files:null,
       badge_id:0,
       badge_name:"",
       badge_image:"",
       badge_point:0,
      })
      const badgesItem=[state.badge_name,state.badge_image,state.badge_point]
      const badgeImage=[state.badge_files]
      console.log(badgesItem)
      const handleSearch2 = (event) =>{
        setUstrans({
         search2:(event.target.value.toLowerCase())
        })        
      }
      const handleChange = (e) =>{
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value,
        })
      }
      const handleImage = (e)=> {
        const file = e.target.files[0]
        setState({
          badge_files:file,
          badge_url:URL.createObjectURL(file),
          badge_image:`/badges/new/${file.name}`
        })
      }
      const [scroll, setScroll] = React.useState('paper');
      const descriptionElementRef = React.useRef(null);
      React.useEffect(() => {
        if (open.openUstrans1) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
      }, [open.openUstrans1]);


      const  handleOpenBadgesAdd = () => {setOpen({
        openBadges1:true
       })}
       const  handleCloseBadgesAdd = () => {setOpen({
        openBadges1:false
       })}

   const  handleOpenBadgesDetail = () => {setOpen({
      openBadges2:true
     })}
     const  handleCloseBadgesDetail = () => {setOpen({
      openBadges2:false
     })}
     const  handleOpenBadgesUpdate = () => {setOpen({
      openBadges3:true
     })}
     const   handleCloseBadgesUpdate = () => {setOpen({
      openBadges3:false
     })}
     const   handleOpenBadgesDelete = () => {setOpen({
      openBadges4:true
     })}
     const   handleCloseBadgesDelete = () => {setOpen({
      openBadges4:false
     })}
      
          if(badges.error) return <div>failed to load</div>
          if(!badges.data) return <div>Loading</div>
    return (
        <div className='container mx-auto px-10 mt-8 mb-8 py-4'>
            <div className='bg-white rounded-lg w-full h-full px-8 py-8 text-center'>
           
      <div className='container mx-auto px-10 mt-4 mb-8 py-4'>
          <title>User Badges Table</title>
          {/* Breadcrumb */}
          <nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <span className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        Home
      </span>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" ></path></svg>
        <span className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Badges</span>
      </div>
    </li>
  </ol>
</nav>
      {/* Table Header and Filter */}
      <h1 className="text-4xl text-center font-semibold underline pb-4">User Badges Table</h1>
        <div className='bg-white rounded-lg w-full px-8 py-8 text-center'>
        <div>
        <div className="pb-4 bg-white dark:bg-gray-900">
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="search" onChange={handleSearch2} className="block p-2 pl-10 w-60 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for id/name"></input>
        </div>
        <button type="button" className="inline-block px-4 py-2 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {handleOpenBadgesAdd()}}>Add</button>
      
    </div>  
    {/* Table */}
         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
             <thead className="text-md text-white font-semibold uppercase bg-cyan-900 dark:bg-gray-700 dark:text-gray-400">
                 <tr>
                     <th scope="col" className="py-2 px-2">
                         ID
                     </th>
                     <th scope="col" className="py-3 px-2">
                          Name
                     </th>
                     <th scope="col" className="py-3 px-3">
                        Image
                     </th>
                     <th scope="col" className="py-3 px-3">
                        Action
                     </th>
                 </tr>
             </thead>
             
    
              {badges.data.data?.map(item=>{
                return(
            <tbody key={item.id}>
                <tr  className="bg-white border-b font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100" >
                  <th className="py-4 px-4 text-gray-900 whitespace-nowrap dark:text-white">{item.id}</th>
                  <td className="py-4 px-2">{item.name}</td>
                  <td style={{paddingBottom:15,paddingTop:15}}><Card sx={{maxWidth:125}}><CardMedia
                    component="img"
                    height="20"
                    image={item.img}
                    alt="badge_image"
                  /></Card></td>
                 <td>
                  <tr>
                    <td>
                    <button type="button" className="inline-block px-4 py-2 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {handleOpenBadgesDetail(),badgesdetail(item)}}>Detail</button>


                    </td>
                    <td> </td>
                   <td> <button type="button" className="inline-block px-4 py-2 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {handleOpenBadgesUpdate(),badgesdetail(item),setId(item.id)}}>Update</button></td>
                   <td>
                   <button type="button" className="inline-block px-4 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {handleOpenBadgesDelete(),setId(item.id)}}>Delete</button>
                   
                   </td>
                  </tr>
                  </td>
                </tr>

             </tbody>
                )
})}
    
        </table>
       
    </div>
        </div>
      </div>
      
            </div>
            <div>

              {/*Post  */}
<Dialog
        open={open.openBadges1}
        onClose={handleCloseBadgesDetail}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        style={{width:'100%',position:'absolute',overflow:'scroll',overflowX:'hidden'}}
      >
        <DialogTitle>
        <Typography  id="modal-modal-title" variant="h4" component="h4" >
            Add new badge
          </Typography>
        </DialogTitle>
          <DialogContent style={{width:560}} dividers={scroll === 'paper'}>
            <DialogContentText  
             id="scroll-dialog-description"
            ref={descriptionElementRef}>
        
         <Typography  id="modal-modal-content" variant="h6" component="h2" style={{paddingBottom:"20px"}}> 
        <tr>
            <td>Name :</td>
            <td><Input type="text" name="badge_name" onChange={handleChange}/></td>
          </tr>  
          <tr>
            <td>Image :</td>
            <td>
  <input accept=".webp,.img,.png,.jpg"  type="file" name="badge_image" onChange={handleImage} style={{marginTop:15,marginLeft:15,marginBottom:10}}/>
            </td>
          </tr>  
          <tr>
            <td>Badge Point:</td>
            <td><Input type="text" name="badge_point" onChange={handleChange}/></td>
          </tr>  
          <tr>
            <td></td>
            <td>
            <button type="button" className="inline-block px-4 py-2 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {addBadges(badgesItem),addBadgesImage(badgeImage), window.location.reload(false);}} style={{marginTop:10}}>Submit</button>
            </td>
          </tr>

       
          </Typography>
           </DialogContentText>
          </DialogContent>
      </Dialog>

{/*Detail  */}
<Dialog
        open={open.openBadges2}
        onClose={handleCloseBadgesDetail}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        style={{width:'100%',position:'absolute',overflow:'scroll',overflowX:'hidden'}}
      >
        <DialogTitle>
        <Typography  id="modal-modal-title" variant="h5" component="h4" >
            Detail For Badge <strong>{detail.badges.name}</strong>
          </Typography>
        </DialogTitle>
          <DialogContent style={{width:560}} dividers={scroll === 'paper'}>
            <DialogContentText  
             id="scroll-dialog-description"
            ref={descriptionElementRef}>
        
         <Typography  id="modal-modal-content" variant="h6" component="h2" style={{paddingBottom:"20px"}}> 
        <tr>
            <tr>ID : </tr>
           <td>{detail.badges.id}</td>
        </tr>

        <tr>
            <td>Name :</td>
            <td>{detail.badges.name}</td>
          </tr>  
            <td>Image :</td>
          <tr>
            <td><Card sx={{maxWidth:150}}><CardMedia
                    component="img"
                    height="50"
                    image={detail.badges.img}
                    alt="badge_image"
                  /></Card></td>
          </tr>  

        <tr>
            <td>Badge Point :</td>
            <td>{detail.badges.bp}</td>
          </tr>

          <tr>
            <td>Description :</td>
            <td>{detail.badges.desc}</td>
          </tr>
 
           <tr>
            <td>Status :</td>
            <td> 
            {detail.badges.status==1 ? <td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Available</span></td> :<td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">Unavailable</span></td>}
           </td>
           </tr>

           <tr>
            <td>Created At :</td>
            <td>{moment(detail.badges.created_at,'YYYY-MM-DDTHH:mm:ssZ').format()} </td>
           </tr>

           <tr>
            <td>Updated At :</td>
            <td>{moment(detail.badges.updated_at,'YYYY-MM-DDTHH:mm:ssZ').format()} </td>
           </tr>
       
          </Typography>
           </DialogContentText>
          </DialogContent>
      </Dialog>

     

    </div>
        </div>
        
        
    )
    }