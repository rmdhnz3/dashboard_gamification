import { createContext,useContext,useState,useEffect } from "react";
import axios from "axios";
const AppContext = createContext();

export const AppWrapper=({children})=>{
    const [open,setOpen] = useState({
      openUser1: false,
      openUser2:false,
      openUser3:false,
      openUstrans1:false,
      openUstrans2:false,
      openUstrans3:false,
      openBadges1:false,
      openBadges2:false,
      openBadges3:false,
      openBadges4:false,
    }); 
    const [search,setSearch] = useState({
      userSearch : '',
      transSearch : '',
      badgesSearch:'',
    })
    const [detail,setDetail] = useState({
      user:[],
      ustrans:[],
      badges:[]
    })
    const [user,setUser] = useState({
      error:null,
      dataUser:[],
    })
    const [ustrans,setUstrans] = useState({
      error:null,
      ustransData:[],
    })
    const [badges,setBadges] = useState({
      error:null,
      data:[]
    })
   
    useEffect(() => {
      const fetcher = async()=>{
        const apiUser =`http://localhost:3000/api/admin/user?s=${search.userSearch}`
        const apiUstrans = `http://localhost:3000/api/admin/ustrans?s=${search.transSearch}`
        const apiBadges = `http://localhost:3000/api/admin/badges?s=${search.badgesSearch}`
        const dataUser = fetch (apiUser).then(dataUser=>dataUser.json())
        const dataUstrans = fetch (apiUstrans).then(dataUstrans=>dataUstrans.json())
        const dataBadges = fetch (apiBadges).then(dataBadges=>dataBadges.json())
        return Promise.all([dataUser,dataUstrans,dataBadges])
        .then(([dataUser,dataUstrans,dataBadges])=>{
         setUser({
          dataUser:dataUser
         })
         setUstrans({
          ustransData:dataUstrans
        })
        setBadges({
          data:dataBadges
        })
       })
      }
      fetcher()
     
      },[search.userSearch],[search.transSearch],[search.badgesSearch])

      const userdetail = (item) => {
       setDetail({
        user:item
       })}

      const deleteUser = async (id)=>{
        fetch(`http://localhost:3000/api/user/${id}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({
              updated_at:new Date(Date.now())
            })
        })
        window.location.reload(false);
        setOpen({
          openUser3:false})
        } 

        const updateUser = async (id,[data])=>{
            fetch(`http://localhost:3000/api/user/${id}`,{
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username:data[0],
                    user_point:[1],
                    bp_bc:data[2],
                    bp_jp:data[3],
                    bp_br:data[4],
                    bp_bm:data[5],
                    bp_ks:data[6],
                    exp_point:data[7],
                    status:data[8],
                    updated_at:new Date(Date.now())
              }),
            })
            .then(response => response.json())
            window.location.reload(false);
            setOpen({
              openUser2:false})
            }
          
       const ustransdetail = (item) => {
          setDetail({
            ustrans:item
            })}

        const addBadges = async(item)=>{
          fetch('http://localhost:3000/api/badges',{
            method:"POST",
            headers:{
              'Content-type' : 'application/json'
            },
            body:JSON.stringify({
              name:item[0],
              img:item[1],
              bp:item[2],
              created_at:new Date(Date.now()),
              updated_at:new Date(Date.now())
            })
          })
         
        }

        const addBadgesImage = async(item) => {
          try{
          const formData = new FormData();
          formData.append("badges_image",item[0])
          const {data} = await axios.post("http://localhost:3000/api/upload/",formData)
          console.log(data)
          }catch(err){
              console.log(err.response?.data)
          }
        }

      const badgesdetail = (item) => {
              setDetail({
                badges:item
                })}
                   
    return(
        <AppContext.Provider value={{
          user,
          setUser,
            open,
            setOpen,
            search,
            setSearch,
            userdetail,
            detail,
            setDetail,
            deleteUser,
            updateUser,     
            ustrans,
            setUstrans,
            ustransdetail,
            badges,
            setBadges,
            badgesdetail,
            addBadgesImage,
            addBadges
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    return useContext(AppContext);
}