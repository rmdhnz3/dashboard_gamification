import { createContext,useContext,useState,useEffect } from "react";

const AppContext = createContext();

export const AppWrapper=({children})=>{
    const [openUser1, setOpenUser1] = useState(false);
    const [openUser2, setOpenUser2] = useState(false);
    const [openUser3, setOpenUser3] = useState(false);
    const [dataUser,setdataUser] = useState([]) 
    const [errorUser,setErrorUser] = useState(null) 
    const [search,setSearch] = useState('')
    const [userDetail,setUserDetail] = useState([])
    

    useEffect(() => {
        const fetcher = async ()=>{
          const res = await fetch(`http://localhost:3000/api/admin/user?s=${search}`)
          const data = await res.json()
          setdataUser(data)
          setErrorUser(errorUser) 
        }   
      
       fetcher()
      }, [search])
 
      const userdetail = async (item) => {
       await setUserDetail(item)
      }

      const deleteUser = async (id)=>{
        fetch(`http://localhost:3000/api/user/${id}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
        })
        window.location.reload(false);
        setOpenUser3(false)
        }
      

    return(
        <AppContext.Provider value={{
            openUser1,
            setOpenUser1,
            openUser2,
            setOpenUser2,
            openUser3, 
            setOpenUser3,
            dataUser,
            errorUser,
            setSearch,
            search,
            userdetail,
            userDetail,
            deleteUser       
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    return useContext(AppContext);
}