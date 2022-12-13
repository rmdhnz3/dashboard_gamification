import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [open, setOpen] = useState({
    User1: false,
    User2: false,
    User3: false,
    Ustrans1: false,
    Ustrans2: false,
    Ustrans3: false,
    Badges1: false,
    Badges2: false,
    Badges3: false,
    Badges4: false,
    UserBadges1: false,
    UserBadges2: false,
    UserBadges3: false,
    UserBadges4: false,
  });
  const [search, setSearch] = useState({
    userSearch: '',
    ustransSearch: '',
    badgesSearch: '',
  })
  const [detail, setDetail] = useState({
    user: [],
    ustrans: [],
    badges: [],
    user_badges: []
  })
  const [user, setUser] = useState({
    error: null,
    dataUser: [],
  })
  const [ustrans, setUstrans] = useState({
    error: null,
    ustransData: [],
  })
  const [badges, setBadges] = useState({
    error: null,
    data: []
  })
  const [user_badges, setUser_badges] = useState({
    error: null,
    data: [],
    temp: []
  })

  useEffect(() => {
    const fetcher = async () => {
      const apiUser = `http://localhost:3000/api/admin/user?s=${search.userSearch}`
      const apiUstrans = `http://localhost:3000/api/admin/ustrans?s=${search.ustransSearch}`
      const apiBadges = `http://localhost:3000/api/admin/badges?s=${search.badgesSearch}`
      const apiUserBadges = `http://localhost:3000/api/user_badges?badge_id=`
      const dataUser = fetch(apiUser).then(dataUser => dataUser.json())
      const dataUstrans = fetch(apiUstrans).then(dataUstrans => dataUstrans.json())
      const dataBadges = fetch(apiBadges).then(dataBadges => dataBadges.json())
      const dataUserBadges = fetch(apiUserBadges).then(dataUserBadges => dataUserBadges.json())
      return Promise.all([dataUser, dataUstrans, dataBadges, dataUserBadges])
        .then(([dataUser, dataUstrans, dataBadges, dataUserBadges]) => {
          setUser({
            dataUser: dataUser
          })
          setUstrans({
            ustransData: dataUstrans
          })
          setBadges({
            data: dataBadges
          })
          setUser_badges({
            data: dataUserBadges
          })
        })
    }
    fetcher()

  }, [search.userSearch], [search.ustransSearch], [search.badgesSearch])

  const userdetail = (item) => {
    setDetail({
      user: item
    })
  }

  const deleteUser = async (id) => {
    fetch(`http://localhost:3000/api/user/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        updated_at: new Date(Date.now())
      })
    })
    window.location.reload(false);
    setOpen({
      User3: false
    })
  }

  const updateUser = async (id, [data]) => {
    fetch(`http://localhost:3000/api/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data[0],
        user_point: data[1],
        bp_bc: data[2],
        bp_jp: data[3],
        bp_br: data[4],
        bp_bm: data[5],
        bp_ks: data[6],
        exp_point: data[7],
        status: data[8],
        updated_at: new Date(Date.now())
      }),
    })
      .then(response => response.json())
    window.location.reload(false);
    setOpen({
      User2: false
    })
  }

  const ustransdetail = (item) => {
    setDetail({
      ustrans: item
    })
  }

  const addBadges = async (item) => {
    fetch('http://localhost:3000/api/badges', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: item[0],
        img: item[1],
        bp: item[2],
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now())
      })
    })

  }

  const addBadgesImage = async (item) => {
    try {
      const formData = new FormData();
      formData.append("badges_image", item[0])
      const { data } = await axios.post("http://localhost:3000/api/upload/", formData)
      console.log(data)
    } catch (err) {
      console.log(err.response?.data)
    }
  }

  const badgesdetail = (item) => {
    setDetail({
      badges: item
    })
  }

  const deleteBadges = async (id) => {
    fetch(`http://localhost:3000/api/badges/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        updated_at: new Date(Date.now())
      })
    })
    window.location.reload(false);
    setOpen({
      Badges4: false
    })
  }

  const updateBadges = async (id, [data]) => {
    fetch(`http://localhost:3000/api/badges/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data[1],
          img: data[0],
          bp: data[2],
          desc: data[3],
          status: data[4],
          updated_at: new Date(Date.now())
        })
      })
    window.location.reload(false);
    setOpen({
      Badges4: false
    })
  }

  const deleteUstrans = async (id) => {
    fetch(`http://localhost:3000/api/ustrans/${id}`, {
      method: 'DELETE',
    })
    window.location.reload(false);
    setOpen({
      Ustrans3: false
    })
  }


  const updateUstrans = async (id, [data]) => {
    fetch(`http://localhost:3000/api/ustrans/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        point_change: data[0],
        status: data[1],
        updated_at: new Date(Date.now())
      })
    })
    window.location.reload(false);
    setOpen({
      Ustrans2: false
    })
  }


  const user_badgesDetail = (item) => {
    setDetail({
      user_badges: item
    })
  }

  const updateUserbadges = async (id, [data]) => {
    fetch(`http://localhost:3000/api/user_badges/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: data[0],
        badge_id: data[1],
        badges_name: data[2],
        badges_img: data[3],
        is_claimed: data[4],
        updated_at: new Date(Date.now())
      })
    })
    window.location.reload(false);
    setOpen({
      UserBadges3: false
    })
  }
  const deleteUserBadges = (id) => {
    fetch(`http://localhost:3000/api/user_badges/${id}`, {
      method: 'DELETE',
    })
    window.location.reload(false);
    setOpen({
      UserBadges4: false
    })
  }
  return (
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
      addBadges,
      deleteBadges,
      updateBadges,
      deleteUstrans,
      updateUstrans,
      user_badges,
      user_badgesDetail,
      updateUserbadges,
      deleteUserBadges
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}