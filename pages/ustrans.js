import { useState } from "react"
import {useAppContext} from "../lib/context/State"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from "@mui/material";
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
        ustrans,
        setUstrans,
        open,
        setOpen,
        detail,
        ustransdetail,
        setSearch,
        deleteUstrans,
        updateUstrans
  } = useAppContext()      

      const [id,setId] = useState('')
      const [state,setState] = React.useState({
       
      })
      const ustransUpdate = []

  const handleSearch = (event) => {
        setSearch({
          ustransSearch: event.target.value
        })
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
        if (open.openUstrans1) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
      }, [open.openUstrans1]);


   const  handleOpenUstransDetail = () => {setOpen({
      openUstrans1:true
     })}
     const  handleCloseUstransDetail = () => {setOpen({
      openUstrans1:false
     })}
     const  handleOpenUstransUpdate = () => {setOpen({
      openUstrans2:true
     })}
     const   handleCloseUstransUpdate = () => {setOpen({
      openUstrans2:false
     })}
     const   handleOpenUstransDelete = () => {setOpen({
      openUstrans3:true
     })}
     const   handleCloseUstransDelete = () => {setOpen({
      openUstrans3:false
     })}
      
          if(ustrans.error) return <div>failed to load</div>
          if(!ustrans.ustransData) return <div>Loading</div>
    return (
        <div className='container mx-auto px-10 mt-8 mb-8 py-4'>
            <div className='bg-white rounded-lg w-full h-full px-8 py-8 text-center'>
           
      <div className='container mx-auto px-10 mt-4 mb-8 py-4'>
          <title>User Transaction Table</title>
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
        <span className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">User Transaction</span>
      </div>
    </li>
  </ol>
</nav>
      {/* Table Header and Filter */}
      <h1 className="text-4xl text-center font-semibold underline pb-4">User Transaction Table</h1>
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
                          user_id
                     </th>
                     <th scope="col" className="py-3 px-3">
                        Action
                     </th>
                 </tr>
             </thead>
             
    
              {ustrans.ustransData?.map(item=>{
                return(
            <tbody key={item.id}>
                <tr  className="bg-white border-b font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                  <th className="py-4 px-4 text-gray-900 whitespace-nowrap dark:text-white">{item.id}</th>
                  <td className="py-4 px-2">{item.user_id}</td>
                 <td>
                  <tr>
                    <td>
                    <button type="button" className="inline-block px-4 py-2 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {handleOpenUstransDetail(),ustransdetail(item)}}>Detail</button>

                    </td>
                    <td> </td>
                   <td> <button type="button" className="inline-block px-4 py-2 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {handleOpenUstransUpdate(),ustransdetail(item),setId(item.id)}}>Update</button></td>
                   <td>
                   <button type="button" className="inline-block px-4 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => {handleOpenUstransDelete(),setId(item.id)}}>Delete</button>
                   
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
        open={open.openUstrans1}
        onClose={handleCloseUstransDetail}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        style={{width:'100%',position:'absolute',overflow:'scroll',overflowX:'hidden'}}
      >
        <DialogTitle>
        <Typography  id="modal-modal-title" variant="h4" component="h4" >
                Detail For Transaction <strong>{detail.ustrans.id}</strong>
          </Typography>
        </DialogTitle>
          <DialogContent style={{width:560}} dividers={scroll === 'paper'}>
            <DialogContentText  
             id="scroll-dialog-description"
            ref={descriptionElementRef}>
        
         <Typography  id="modal-modal-content" variant="h6" component="h2" style={{paddingBottom:"20px"}}> 
        <tr>
            <tr>ID : </tr>
           <td>{detail.ustrans.id}</td>
        </tr>

        <tr>
            <td>User ID :</td>
            <td>{detail.ustrans.user_id}</td>
          </tr>  

        <tr>
            <td>Point Change :</td>
            <td>{detail.ustrans.point_change}</td>
          </tr>
 
           <tr>
            <td>Status :</td>
            <td> 
            {detail.ustrans.status==1 ? <td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Masuk</span></td> :<td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">Keluar</span></td>}
           </td>
           </tr>

           <tr>
            <td>Created At :</td>
                    <td>{moment(detail.ustrans.created_at, 'YYYY-MM-DDTHH:mm:ssZ').format().slice(0, 10)} </td>
           </tr>

           <tr>
            <td>Updated At :</td>
                    <td>{moment(detail.ustrans.updated_at, 'YYYY-MM-DDTHH:mm:ssZ').format().slice(0, 10)} </td>
           </tr>
       
          </Typography>
           </DialogContentText>
          </DialogContent>
      </Dialog>

          {/* Delete */}
          <Dialog
            open={open.openUstrans3}
            onClose={handleCloseUstransDelete}>
            <DialogTitle id="alert-dialog-title">
              {"Confirm to delete Transaction ?"}
            </DialogTitle>
            <DialogActions>
              <button type="button" className="inline-block px-4 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => deleteUstrans(id)}>yes</button>
            </DialogActions>
          </Dialog>


    </div>
        </div>
        
        
    )
    }