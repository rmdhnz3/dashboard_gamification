import { useEffect, useState } from "react"
import {useAppContext} from "../lib/context/State"
import Moment from "react-moment"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl,InputLabel,Input,FormHelperText,TextField ,Grid, Dialog,DialogActions,DialogContent,DialogTitle,DialogContentText} from "@mui/material";
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
  
      const {openUser1, 
        setOpenUser1,
        openUser2,
        setOpenUser2,
        openUser3,
        setOpenUser3,
        dataUser,
        errorUser,
        setSearch,
      userDetail,
    userdetail,
        deleteUser
  } = useAppContext()      
      const [id,setId] = useState('')
      const handleSearch = (e) =>{
        setSearch(e.target.value)        
      }

      const handleOpenUserDetail = () => setOpenUser1(true);
      const handleCloseUserDetail = () => setOpenUser1(false);

      const handleOpenUserUpdate = () => setOpenUser2(true);
      const handleCloseUserUpdate = () => setOpenUser2(false);

      const handleOpenUserDelete = () => setOpenUser3(true);
      const handleCloseUserDelete= () => setOpenUser3(false);
      
          if(errorUser) return <div>failed to load</div>
          if(!dataUser) return <div>Loading</div>
    return (
        <div className='container mx-auto px-10 mt-8 mb-8 py-4'>
            <div className='bg-white rounded-lg w-full h-full px-8 py-8 text-center'>
           
      <div className='container mx-auto px-10 mt-4 mb-8 py-4'>
          <title>User Table</title>
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
        <span className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">User</span>
      </div>
    </li>
  </ol>
</nav>
      {/* Table Header and Filter */}
      <h1 className="text-4xl text-center font-semibold underline pb-4">User Table</h1>
        <div className='bg-white rounded-lg w-full px-8 py-8 text-center'>
        <div>
        <div className="pb-4 bg-white dark:bg-gray-900">
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="search" onChange={handleSearch} className="block p-2 pl-10 w-60 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for id/date/type"></input>
        </div>

      
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
                     <th scope="col" className="py-3 px-2">
                          Status
                     </th>
                     <th scope="col" className="py-3 px-3">
                        Action
                     </th>
                 </tr>
             </thead>
             
    
              {dataUser.map(item=>{
                return(
            <tbody key={item.transaction_id}>
                <tr  className="bg-white border-b font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                  <th className="py-4 px-4 text-gray-900 whitespace-nowrap dark:text-white">{item.id}</th>
                  <td className="py-4 px-2">{item.name}</td>
                  {item.status==1 ?<td><span class="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Active</span></td> :<td><span class="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">Inactive</span></td> }
                 <td>
                  <tr>
                    <td>
                    <button type="button" class="inline-block px-4 py-2 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {handleOpenUserDetail(),userdetail(item)}}>Detail</button>

                    </td>
                    <td> </td>
                   <td> <button type="button" class="inline-block px-4 py-2 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out" onClick={() => handleOpenUserUpdate()}>Update</button></td>
                   <td>
                   <button type="button" class="inline-block px-4 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {handleOpenUserDelete(),setId(item.id)}}>Delete</button>
                   
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
              
      <Dialog
        open={openUser1}
        onClose={handleCloseUserDetail}
        style={{width:'100%',position:'absolute',overflow:'scroll',overflowX:'hidden'}}
      >
          <DialogContent style={{width:560}} >
          <Typography  id="modal-modal-title" variant="h4" component="h2" style={{marginBottom:"20px",marginTop:"5px"}}>
            Detail For User <strong>{userDetail.name}</strong>
          </Typography>
          <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
           ID :
          </Typography></td>
         
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.id}
          </Typography></td>
          </tr>

          <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
           Name :
          </Typography></td>
          
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.name}
          </Typography></td>
          </tr>     

          <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
           BP Kerjakan Soal :
          </Typography></td>
         
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.badge_point_ks}
          </Typography></td>
          </tr>

           <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            BP Berbagi Catatan :
          </Typography></td>
          
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.badge_point_bc}
          </Typography></td>
          </tr>

          <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
           BP Membuat Rumus :
          </Typography></td>
          
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.badge_point_mr}
          </Typography></td>
          </tr>

          <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            BP Berbagi Materi :
          </Typography></td>
          
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.badge_point_bm}
          </Typography></td>
          </tr>
      
          <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            BP Jawab Pertanyaan :
          </Typography></td>
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.badge_point_jp}
          </Typography></td>
           </tr>

           <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            Catatan yang dibagikan :
          </Typography></td>
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.catatan_dibagikan}
          </Typography></td>
           </tr>

           <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
           Pertanyaan yang dijawab :
          </Typography></td>
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.pertanyaan_dijawab}
          </Typography></td>
           </tr>

           <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
           Rumus yang dibuat :
          </Typography></td>
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.pertanyaan_dijawab}
          </Typography></td>
           </tr>

           <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            Materi yang dibaca :
          </Typography></td>
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.materi_dibaca}
          </Typography></td>
           </tr>

           <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            Soal yang Dikerjakan :
          </Typography></td>
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.materi_dibaca}
          </Typography></td>
           </tr>

           <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            Level :
          </Typography></td>
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
           {userDetail.exp_level==1000 ? <h4>1</h4> : <h4></h4>}
           {userDetail.exp_level==2000 ? <h4>2</h4> : <h4></h4>}
           {userDetail.exp_level==3000 ? <h4>3</h4> : <h4></h4>}
          </Typography></td>
           </tr>
           
           <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            Status :
          </Typography></td>
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            {userDetail.status==1 ? <td><span class="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Active</span></td> :<td><span class="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">Inactive</span></td>}
          </Typography></td>
           </tr>
          
           <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            Created At :
          </Typography></td>
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
             {moment(userDetail.created_at,'YYYY-MM-DDTHH:mm:ssZ').format()} 
          </Typography></td>
           </tr>

           <tr>
            <td><Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
            Updated At :
          </Typography></td>
            <td> <Typography  id="modal-modal-content" variant="h6" component="h2" style={{marginBottom:"20px"}}>
             {moment(userDetail.created_at,'YYYY-MM-DDTHH:mm:ssZ').format()} 
          </Typography></td>
           </tr>
          

          </DialogContent>
      </Dialog>


      <Modal
        open={openUser2}
        onClose={handleCloseUserUpdate}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography  id="modal-modal-title" variant="h6" component="h2" style={{marginBottom:"20px"}}>
           Update user data
          </Typography>
      <form>
        <TextField 
        style={{width:"200px",margin:"5px"}}
        type="text"
        label="Name"
        variant="outlined"
        />
        <br/>
         <TextField 
          style={{width:"200px",margin:"5px"}}
        type="text"
        label="Badge Point KS"
        variant="outlined"
        />
         <br/>
         <TextField 
          style={{width:"200px",margin:"5px"}}
        type="text"
        label="Badge Point KS"
        variant="outlined"
        />
      </form>
        </Box>
      </Modal>


      <Dialog
        open={openUser3}
        onClose={handleCloseUserDelete}>
        <DialogTitle id="alert-dialog-title">
          {"Confirm to delete user ?"}
        </DialogTitle>
        <DialogActions>
          <button type="button" class="inline-block px-4 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"onClick={()=>deleteUser(id)}>yes</button>
        </DialogActions>
      </Dialog>
     

    </div>
        </div>
        
        
    )
    }