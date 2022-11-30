import { useState } from "react"
import {useAppContext} from "../lib/context/State"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Input,Dialog,DialogActions,DialogContent,DialogTitle,DialogContentText, Select, MenuItem} from "@mui/material";
import moment from "moment";

export default function User() {
  
 const {user,
        open, 
        setOpen,
        detail,
        setSearch,
        userdetail,
        deleteUser,
        updateUser
  } = useAppContext()      
      const [id,setId] = useState('')
      const [state,setState] = React.useState({
        username:"",
        user_point:'',
        bp_bc:'',
        bp_jp:'',
        bp_br:'',
        bp_bm:'',
        bp_ks:'',
        exp_point:100,
        status:1
      })
      const userUpdate = [state.username,state.user_point,state.bp_bc,state.bp_jp,state.bp_br,state.bp_bm,state.bp_ks,state.exp_point,state.status]
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
        if (open.openUser1) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
      }, [open.openUser1 ]);


      const handleOpenUserDetail = () => setOpen({
        openUser1:true
      });

        const handleCloseUserDetail = () => setOpen({
          openUser1:false
        });

      const handleOpenUserUpdate = () => setOpen({
        openUser2:true
      });
      const handleCloseUserUpdate = () => setOpen({
        openUser2:false
      });

      const handleOpenUserDelete = () => setOpen({
        openUser3:true
      });
      const handleCloseUserDelete= () => setOpen({
        openUser3:false
      });
          if(user.error) return <div>failed to load</div>
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
                  <td className="py-4 px-2">{item.username}</td>
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

{/* Detail  */}
      <Dialog
        open={open.openUser1}
        onClose={handleCloseUserDetail}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        style={{width:'100%',position:'absolute',overflow:'scroll',overflowX:'hidden'}}
      >
        <DialogTitle>
        <Typography  id="modal-modal-title" variant="h4" component="h4" >
            Detail For User <strong>{detail.user.username}</strong>
          </Typography>
        </DialogTitle>
          <DialogContent style={{width:560}} dividers={scroll === 'paper'}>
            <DialogContentText  
             id="scroll-dialog-description"
            ref={descriptionElementRef}>
        
         <Typography  id="modal-modal-content" variant="h6" component="h2" style={{paddingBottom:"20px"}}> 
        <tr>
            <tr>ID : </tr>
           <td>{detail.user.id}</td>
        </tr>

        <tr>
            <td>Nama :</td>
            <td>{detail.user.username}</td>
          </tr>  

          <tr>
            <td>User Point :</td>
            <td>{detail.user.user_point}</td>
          </tr>

          <tr>
            <td>BP Berbagi Catatan :</td>
            <td>{detail.user.bp_bc}</td>
           </tr>

           <tr>
            <td>BP Jawab Pertanyaan :</td>
            <td>{detail.user.bp_jp}</td>
           </tr>

           <tr>
            <td>BP Buat Rumus :</td>
            <td> {detail.user.bp_br}</td>
           </tr>

           
           <tr>
            <td>BP Baca Materi : </td>
            <td>{detail.user.bp_bm}</td>
           </tr>

           <tr>
            <td>BP Soal Dikerjakan : </td>
            <td>{detail.user.bp_ks} </td>
           </tr>

           <tr>
            <td>Level :</td>
            <td> 
           {detail.user.exp_point>=250 ? <h4>2</h4> : <h4>1</h4>}
           {detail.user.exp_point>500 ? <h4>3</h4> : <h4>3</h4>}
           {detail.user.exp_point>=1000 ? <h4>4</h4> : <h4></h4>}
           {detail.user.exp_point>=2000 ? <h4>5</h4> : <h4></h4>}
           {detail.user.exp_point>=4000 ? <h4>6</h4> : <h4></h4>}
           </td>
           </tr>
 
           <tr>
            <td>Status :</td>
            <td> 
            {detail.user.status==1 ? <td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Active</span></td> :<td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">Inactive</span></td>}
           </td>
           </tr>

           <tr>
            <td>Created At :</td>
            <td>{moment(detail.user.created_at,'YYYY-MM-DDTHH:mm:ssZ').format()} </td>
           </tr>

           <tr>
            <td>Updated At :</td>
            <td>{moment(detail.user.updated_at,'YYYY-MM-DDTHH:mm:ssZ').format()} </td>
           </tr>
       
          </Typography>
           </DialogContentText>
          </DialogContent>
      </Dialog>


{/* Update */}
      <Dialog
        open={open.openUser2}
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
           <td>{detail.user.id}</td>
        </tr>

        <tr>
            <td>Username :</td>
            <td> <Input 
        style={{width:"250px",margin:"5px"}}
        type="text"
        name="username"
        placeholder={detail.user.username}
        onChange={handleChange}
        value={state.username}
        /></td>
          </tr>  

          <tr>
            <td>User Point :</td>
            <td><Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={detail.user.user_point}
        name="user_point"
        value={state.user_point}
        onChange={handleChange}
        variant="outlined"
        /></td>
          </tr>

          <tr>
            <td>BP Berbagi Catatan :</td>
            <td>
            <Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={detail.user.bp_bc}
        name="bp_bc"
        value={state.bp_bc}
        onChange={handleChange}
        variant="outlined"
        />
              </td>
           </tr>

           <tr>
            <td>BP Jawab Pertanyaan :</td>
            <td>
            <Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={detail.user.bp_jp}
        name="bp_jp"
        value={state.bp_jp}
        onChange={handleChange}
        variant="outlined"
        />
              </td>
           </tr>

           <tr>
            <td>BP Buat Rumus :</td>
            <td> 
            <Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={detail.user.bp_br}
        name="bp_br"
        value={state.bp_br}
        onChange={handleChange}
        variant="outlined"
        />
              </td>
           </tr>

           
           <tr>
            <td>BP Baca Materi : </td>
            <td>
            <Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={detail.user.bp_bm}
        name="bp_bm"
        value={state.bp_bm}
        onChange={handleChange}
        variant="outlined"
        />
              </td>
           </tr>

           <tr>
            <td>BP Kerjakan Soal : </td>
            <td> <Input
          style={{width:"200px",margin:"5px"}}
        type="text"
        placeholder={detail.user.bp_ks}
        name="bp_ks"
        value={state.bp_ks}
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
        value={state.exp_point}
        onChange={handleChange}
        name="exp_point"
        label="Select Level"
       >
        <MenuItem value={100} name="exp_point" defaultChecked>1</MenuItem>
        <MenuItem value={250} name="exp_point">2</MenuItem>
        <MenuItem value={500} name="exp_point">3</MenuItem>
        <MenuItem value={1000} name="exp_point">4</MenuItem>
        <MenuItem value={2000} name="exp_point">5</MenuItem>
        <MenuItem value={4000} name="exp_point">6</MenuItem>
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

{/* Delete */}
      <Dialog
        open={open.openUser3}
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