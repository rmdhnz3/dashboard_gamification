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
    const [user,setUser] = useState({
      openUser1:false,
      openUser2:false,
      openUser3:false,
      dataUser:[],
      errorUser:null,
      search:"",
      userDetail:[]
    })
    const [ustrans,setUstrans] = useState({
      search2:"",
      ustransData:[],
      openUstrans1:false,
      openUstrans2:false,
      openUstrans3:false,
      errorUstrans:null
    })
    
   
    useEffect(() => {
      const fetcher = async(a,b)=>{
        const apiUser =`http://localhost:3000/api/admin/user?s=`
        const apiUstrans = `http://localhost:3000/api/admin/ustrans?s=${b}`
        const dataUser = fetch (apiUser).then(dataUser=>dataUser.json())
        const dataUstrans = fetch (apiUstrans).then(dataUstrans=>dataUstrans.json())
        return Promise.all([dataUser,dataUstrans])
        .then(([dataUser,dataUstrans])=>{
         setUser({
          dataUser:dataUser
         })
         setUstrans({
          ustransData:dataUstrans
        })
       })
      }
      fetcher(user.search,ustrans.search2)
     
      },[user.search],[ustrans.search2])
      const userdetail = (item) => {
       setUserDetail(item)
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
      

        const updateUser = async (id,[data])=>{
            fetch(`http://localhost:3000/api/user/${id}`,{
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name:data[0],
                    badge_point_bc:data[1],
                    badge_point_bm:data[2],
                    badge_point_jp:data[3],
                    badge_point_ks:data[4],
                    badge_point_mr:data[5],
                    catatan_dibagikan:data[6],
                    materi_dibaca:data[7],
                    pertanyaan_dijawab:data[8],
                    buat_rumus:data[9],
                    soal_dikerjakan:data[10],
                    status:data[11],
                    exp_level:data[12]
              }),
            })
            .then(response => response.json())
            .then(data => console.log(data));
            window.location.reload(false);
            setOpenUser2(false)
            }
          
        

    return(
        <AppContext.Provider value={{
          user,
          setUser,
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
            deleteUser,
            updateUser,     
            ustrans,
            setUstrans
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    return useContext(AppContext);
}