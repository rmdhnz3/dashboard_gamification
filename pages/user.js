import { useEffect, useState } from "react"
import {useAppContext} from "../lib/context/State"
import Moment from "react-moment"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl,InputLabel,Input,FormHelperText,TextField ,Grid, Dialog,DialogActions,DialogContent,DialogTitle,DialogContentText, RadioGroup, FormControlLabel, FormLabel, Radio, Select, MenuItem} from "@mui/material";
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
  
 const {user,
        openUser1, 
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
        deleteUser,
        updateUser
  } = useAppContext()      
      const [id,setId] = useState('')
      const [state,setState] = React.useState({
        name:"",
        badge_point_bc:"",
        badge_point_bm:"",
        badge_point_jp:"",
        badge_point_ks:"",
        badge_point_mr:"",
        catatan_dibagikan:0,
        pertanyaan_dijawab:0,
        rumus_dibuat:0,
        materi_dibaca:0,
        soal_dikerjakan:0,
        exp_level:"",
        status:1
      })
      const userUpdate = [state.name,state.badge_point_bc,state.badge_point_bm,state.badge_point_jp,state.badge_point_ks,state.badge_point_mr,state.catatan_dibagikan,state.materi_dibaca,state.pertanyaan_dijawab,state.rumus_dibuat,state.soal_dikerjakan,state.status,state.exp_level]
      const handleSearch = (e) =>{
        setSearch(e.target.value.toLowerCase())        
      }
      const handleChange = (e) =>{
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value,
        })
      }

      const [scroll, setScroll] = React.useState('paper');
      const descriptionElementRef = React.useRef(null);
      React.useEffect(() => {
        if (openUser1) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
      }, [openUser1 ]);


      const handleOpenUserDetail = () => setOpenUser1(true);
      const handleCloseUserDetail = () => setOpenUser1(false);

      const handleOpenUserUpdate = () => setOpenUser2(true);
      const handleCloseUserUpdate = () => setOpenUser2(false);

      const handleOpenUserDelete = () => setOpenUser3(true);
      const handleCloseUserDelete= () => setOpenUser3(false);
      
          if(errorUser) return <div>failed to load</div>
          if(!user.dataUser) return <div>Loading</div>
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
            <input type="text" id="search" onChange={handleSearch} className="block p-2 pl-10 w-60 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for id/name"></input>
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
             
    
              {user.dataUser?.map(item=>{
                return(
            <tbody key={item.id}>
                <tr  className="bg-white border-b font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                  <th className="py-4 px-4 text-gray-900 whitespace-nowrap dark:text-white">{item.id}</th>
                  <td className="py-4 px-2">{item.name}</td>
                  {item.status==1 ?<td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Active</span></td> :<td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">Inactive</span></td> }
                 <td>
                  <tr>
                    <td>
                    <button type="button" className="inline-block px-4 py-2 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {handleOpenUserDetail(),userdetail(item)}}>Detail</button>

                    </td>
                    <td> </td>
                   <td> <button type="button" className="inline-block px-4 py-2 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {handleOpenUserUpdate(),userdetail(item),setId(item.id)}}>Update</button></td>
                   <td>
                   <button type="button" className="inline-block px-4 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {handleOpenUserDelete(),setId(item.id)}}>Delete</button>
                   
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

{/*Detail  */}
      <Dialog
        open={openUser1}
        onClose={handleCloseUserDetail}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        style={{width:'100%',position:'absolute',overflow:'scroll',overflowX:'hidden'}}
      >
        <DialogTitle>
        <Typography  id="modal-modal-title" variant="h4" component="h4" >
            Detail For User <strong>{userDetail.name}</strong>
          </Typography>
        </DialogTitle>
          <DialogContent style={{width:560}} dividers={scroll === 'paper'}>
            <DialogContentText  
             id="scroll-dialog-description"
            ref={descriptionElementRef}>
        
         <Typography  id="modal-modal-content" variant="h6" component="h2" style={{paddingBottom:"20px"}}> 
        <tr>
            <tr>ID : </tr>
           <td>{userDetail.id}</td>
        </tr>

        <tr>
            <td>Nama :</td>
            <td>{userDetail.name}</td>
          </tr>  

        <tr>
            <td>BP Kerjakan Soal :</td>
            <td>{userDetail.badge_point_ks}</td>
          </tr>

          <tr>
            <td>BP Berbagi Catatan :</td>
            <td>{userDetail.badge_point_bc}</td>
          </tr>

          <tr>
            <td>BP Membuat Rumus :</td>
            <td>{userDetail.badge_point_mr}</td>
          </tr>

          <tr>
            <td>BP Berbagi Materi :</td>
            <td>{userDetail.badge_point_mr}</td>
          </tr>

          <tr>
            <td>BP Jawab Pertanyaan :</td>
            <td>{userDetail.badge_point_mr}</td>
          </tr>

          <tr>
            <td>Catatan yang Dibagikan :</td>
            <td>{userDetail.catatan_dibagikan}</td>
           </tr>

           <tr>
            <td>Pertanyaan yang dijawab :</td>
            <td>{userDetail.pertanyaan_dijawab}</td>
           </tr>

           <tr>
            <td> Rumus yang dibuat :</td>
            <td> {userDetail.buat_rumus}</td>
           </tr>

           
           <tr>
            <td>Materi yang dibaca : </td>
            <td>{userDetail.materi_dibaca}</td>
           </tr>

           <tr>
            <td>Soal yang dikerjakan : </td>
            <td>{userDetail.soal_dikerjakan} </td>
           </tr>

           <tr>
            <td>Level :</td>
            <td> 
           {userDetail.exp_level>=1000 ? <h4>1</h4> : <h4></h4>}
           {userDetail.exp_level>=2000 ? <h4>2</h4> : <h4></h4>}
           {userDetail.exp_level>=3000 ? <h4>3</h4> : <h4></h4>}
           </td>
           </tr>
 
           <tr>
            <td>Status :</td>
            <td> 
            {userDetail.status==1 ? <td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Active</span></td> :<td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">Inactive</span></td>}
           </td>
           </tr>

           <tr>
            <td>Created At :</td>
            <td>{moment(userDetail.created_at,'YYYY-MM-DDTHH:mm:ssZ').format()} </td>
           </tr>

           <tr>
            <td>Updated At :</td>
            <td>{moment(userDetail.updated_at,'YYYY-MM-DDTHH:mm:ssZ').format()} </td>
           </tr>
       
          </Typography>
           </DialogContentText>
          </DialogContent>
      </Dialog>


{/* Update */}
      <Dialog
        open={openUser2}
        onClose={handleCloseUserUpdate}
        aria-labelledby="modal-modal-title"
      >
        <DialogTitle>
        <Typography  id="modal-modal-title" variant="h4" component="h2" >
           Update user data
          </Typography>
        </DialogTitle>
         
         <DialogContent>
     <form >          
     <Typography  id="modal-modal-content" variant="h6" component="h2" style={{paddingBottom:"20px"}}> 
        <tr>
            <tr>ID : </tr>
           <td>{userDetail.id}</td>
        </tr>

        <tr>
            <td>Nama :</td>
            <td> <Input 
        style={{width:"250px",margin:"5px"}}
        type="text"
        name="name"
        placeholder={userDetail.name}
        onChange={handleChange}
        value={state.name}
        /></td>
          </tr>  

        <tr>
            <td>BP Kerjakan Soal :</td>
            <td>  <Input
        style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={userDetail.badge_point_ks}
        name="badge_point_ks"
        onChange={handleChange}
        value={state.badge_point_ks}
        variant="outlined"
        /></td>
          </tr>

          <tr>
            <td>BP Berbagi Catatan :</td>
            <td> <Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        variant="outlined"
        name="badge_point_bc"
        placeholder={userDetail.badge_point_bc}
        onChange={handleChange}
        value={state.badge_point_bc}
        /></td>
          </tr>

          <tr>
            <td>BP Membuat Rumus :</td>
            <td> <Input
        style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={userDetail.badge_point_mr}
        name="badge_point_mr"
        value={state.badge_point_mr}
        onChange={handleChange}
        variant="outlined"
        /></td>
          </tr>

          <tr>
            <td>BP Berbagi Materi :</td>
            <td> <Input 
          style={{width:"200px",margin:"5px"}}
        type="text"
        variant="outlined"
        name="badge_point_bm"
        placeholder={userDetail.badge_point_bm}
        onChange={handleChange}
        value={state.badge_point_bm}
        /></td>
          </tr>

          <tr>
            <td>BP Jawab Pertanyaan :</td>
            <td><Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={userDetail.badge_point_jp}
        name="badge_point_jp"
        value={state.badge_point_jp}
        onChange={handleChange}
        variant="outlined"
        /></td>
          </tr>

          <tr>
            <td>Catatan yang Dibagikan :</td>
            <td>
            <Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={userDetail.catatan_dibagikan}
        name="catatan_dibagikan"
        value={state.catatan_dibagikan}
        onChange={handleChange}
        variant="outlined"
        />
              </td>
           </tr>

           <tr>
            <td>Pertanyaan yang dijawab :</td>
            <td>
            <Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={userDetail.pertanyaan_dijawab}
        name="pertanyaan_dijawab"
        value={state.pertanyaan_dijawab}
        onChange={handleChange}
        variant="outlined"
        />
              </td>
           </tr>

           <tr>
            <td> Rumus yang dibuat :</td>
            <td> 
            <Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={userDetail.buat_rumus}
        name="rumus_dibuat"
        value={state.rumus_dibuat}
        onChange={handleChange}
        variant="outlined"
        />
              </td>
           </tr>

           
           <tr>
            <td>Materi yang dibaca : </td>
            <td>
            <Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={userDetail.materi_dibaca}
        name="materi_dibaca"
        value={state.materi_dibaca}
        onChange={handleChange}
        variant="outlined"
        />
              </td>
           </tr>

           <tr>
            <td>Soal yang dikerjakan : </td>
            <td> <Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={userDetail.soal_dikerjakan}
        name="soal_dikerjakan"
        value={state.soal_dikerjakan}
        onChange={handleChange}
        variant="outlined"
        />
         </td>
           </tr>

           <tr>
            <td>Level :</td>
            <td> 
       <Select
        labelId="level-select"
        id="level-select"
        value={state.exp_level}
        onChange={handleChange}
        name="exp_level"
       >
        <MenuItem value={500} name="exp_level">500</MenuItem>
        <MenuItem value={1000} name="exp_level">1000</MenuItem>
        <MenuItem value={1500} name="exp_level">1500</MenuItem>
       </Select>
           </td>
           </tr>
           <tr>
            <td>Status :</td>
            <td> 
      <Select
       labelId="status-select"
       id="status-select"
       value={state.status}
       onChange={handleChange}
       name="status"
       style={{marginTop:20}}
      >
        <MenuItem value={1} name="status"><td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Active</span></td></MenuItem>
        <MenuItem value={0} name="status"><td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">Inactive</span></td></MenuItem>
      </Select>
           </td>
           </tr>
           <tr>
            <td></td>
            <td >  
          <button type="button" style={{marginTop:20,width:125,height:35,fontSize:20}} className="inline-block px-4 py-2 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {updateUser(id,[userUpdate])}}>Update</button>
          </td> 
           </tr>
          </Typography>  
       
      </form>
         </DialogContent>
      </Dialog>


      <Dialog
        open={openUser3}
        onClose={handleCloseUserDelete}>
        <DialogTitle id="alert-dialog-title">
          {"Confirm to delete user ?"}
        </DialogTitle>
        <DialogActions>
          <button type="button" className="inline-block px-4 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"onClick={()=>deleteUser(id)}>yes</button>
        </DialogActions>
      </Dialog>
     

    </div>
        </div>
        
        
    )
    }