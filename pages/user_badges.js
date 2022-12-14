import { useState } from "react"
import { useAppContext } from "../lib/context/State"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Input, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, Select, MenuItem, Card, CardMedia } from "@mui/material";
import moment from "moment";

export default function User() {

    const {
        badges,
        user,
        user_badges,
        user_badgesDetail,
        open,
        setOpen,
        detail,
        deleteUserBadges,
        updateUserbadges,
    } = useAppContext()
    const [id, setId] = useState('')
    const [state, setState] = React.useState({
        user_id: 1,
        badge_id: 1,
        badge_name: '',
        badge_img: '',
        is_claimed: 0,
    })

    console.log(user_badges.data)
    const [userId, setUserId] = useState(1)
    const userBadgesUpdate = [state.user_id, state.badge_id, state.badge_name, state.badge_img, state.is_claimed]
    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        })
    }
    const dataDetail = [detail.user_badges]
    const [scroll, setScroll] = React.useState('paper');
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open.openUser1) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open.openUser1]);

    const handleOpenUserBadgesDetail = () => setOpen({
        UserBadges2: true
    });

    const handleCloseUserBadgesDetail = () => setOpen({
        UserBadges2: false
    });

    const handleOpenUserBadgesUpdate = () => setOpen({
        UserBadges3: true
    });
    const handleCloseUserBadgesUpdate = () => setOpen({
        UserBadges3: false
    });

    const handleOpenUserBadgesDelete = () => setOpen({
        UserBadges4: true
    });
    const handleCloseUserBadgesDelete = () => setOpen({
        UserBadges4: false
    });
    if (user_badges.error) return <div>failed to load</div>
    if (!user_badges.data) return <div>Loading</div>
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
                                    <span className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">User Badges</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    {/* Table Header and Filter */}
                    <h1 className="text-4xl text-center font-semibold underline pb-4">User Badges Table</h1>
                    <div className='bg-white rounded-lg w-full px-8 py-8 text-center'>
                        <div>

                            {/* Table */}
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-md text-white font-semibold uppercase bg-cyan-900 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-2 px-2">
                                            ID
                                        </th>
                                        <th scope="col" className="py-3 px-2">
                                            User Id
                                        </th>
                                        <th scope="col" className="py-3 px-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>


                                {user_badges.data.data?.map(item => {
                                    return (
                                        <tbody key={item.id}>
                                            <tr className="bg-white border-b font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                                                <th className="py-4 px-4 text-gray-900 whitespace-nowrap dark:text-white">{item.id}</th>
                                                <td className="py-4 px-2">{item.user_id}</td>

                                                <td>
                                                    <tr>
                                                        <td>
                                                            <button type="button" className="inline-block px-4 py-2 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out" onClick={() => { handleOpenUserBadgesDetail(), user_badgesDetail(item) }}>Detail</button>

                                                        </td>
                                                        <td> </td>
                                                        <td> <button type="button" className="inline-block px-4 py-2 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out" onClick={() => { handleOpenUserBadgesUpdate(), user_badgesDetail(item), setId(item.id), setUserId(item.user_id) }}>Update</button></td>
                                                        <td>
                                                            <button type="button" className="inline-block px-4 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => { handleOpenUserBadgesDelete(), setId(item.id) }}>Delete</button>

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
                    open={open.UserBadges2}
                    onClose={handleCloseUserBadgesDetail}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    style={{ width: '100%', position: 'absolute', overflow: 'scroll', overflowX: 'hidden' }}
                >
                    <DialogTitle>
                        <Typography id="modal-modal-title" variant="h4" component="h4" >
                            Detail For  ID <strong>{detail.user_badges.id}</strong>
                        </Typography>
                    </DialogTitle>
                    <DialogContent style={{ width: 560 }} dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}>

                            <Typography id="modal-modal-content" variant="h6" component="h2" style={{ paddingBottom: "20px" }}>
                                <tr>
                                    <tr>ID : </tr>
                                    <td>{detail.user_badges.id}</td>
                                </tr>

                                <tr>
                                    <td>User ID :</td>
                                    <td>{detail.user_badges.user_id}</td>
                                </tr>

                                <tr>
                                    <td>Badge Image :</td>
                                    <td>{dataDetail?.map(item => {
                                        return (
                                            item.is_claimed == 1 ?
                                                <Card sx={{ maxWidth: 50 }}><CardMedia
                                                    component="img"
                                                    height="20"
                                                    image={item.badges_img}
                                                    alt="badge_image"
                                                /></Card> : <span></span>

                                        )
                                    })}</td>
                                </tr>

                                <tr>
                                    <td>Badge Name :</td>
                                    <td>{detail.user_badges.badges_name}</td>
                                </tr>

                                <tr>
                                    <td>Status :</td>
                                    <td> {detail.user_badges.is_claimed == 1 ? <td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Claimed</span></td> : <td><span className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">Unclaimed</span></td>}</td>
                                </tr>

                                <tr>
                                    <td>Created At :</td>
                                    <td>{moment(detail.user_badges.created_at, 'YYYY-MM-DDTHH:mm:ssZ').format().slice(0, 10)} </td>
                                </tr>

                                <tr>
                                    <td>Updated At :</td>
                                    <td>{moment(detail.user_badges.updated_at, 'YYYY-MM-DDTHH:mm:ssZ').format().slice(0, 10)} </td>
                                </tr>

                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>


                {/* Update */}
                <Dialog
                    open={open.UserBadges3}
                    onClose={handleCloseUserBadgesUpdate}
                    aria-labelledby="modal-modal-title"
                >
                    <DialogTitle>
                        <Typography id="modal-modal-title" variant="h4" component="h2" >
                            Update user badges
                        </Typography>
                    </DialogTitle>

                    <DialogContent>
                        <form >
                            <Typography id="modal-modal-content" variant="h6" component="h2" style={{ paddingBottom: "20px" }}>
                                <tr>
                                    <tr>ID : </tr>
                                    <td>{detail.user_badges.id}</td>
                                </tr>

                                <tr>
                                    <td>User Id :</td>
                                    <td>
                                        <Select
                                            labelId="status-select"
                                            id="status-select"
                                            value={state.user_id}
                                            onChange={handleChange}
                                            name="user_id"
                                            style={{ marginTop: 20 }}
                                        >
                                            {user.dataUser?.map(item => {
                                                return (

                                                    <MenuItem value={item.id} name="status"><td><span>{item.id}</span></td></MenuItem>

                                                )
                                            })}
                                        </Select>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Badges ID :</td>
                                    <td>
                                        <Select
                                            labelId="status-select"
                                            id="status-select"
                                            value={state.badge_id}
                                            onChange={handleChange}
                                            name="badge_id"
                                            style={{ marginTop: 20 }}
                                            defaultValue={detail.user_badges.badge_id}
                                        >
                                            {badges.data.data?.map(item => {
                                                return (

                                                    <MenuItem value={item.id} name="badge_name"><td><span>{item.id}{"-->"}{item.name}</span></td>
                                                    </MenuItem>

                                                )
                                            })}
                                        </Select>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Badges Name :</td>
                                    <td>
                                        <Select
                                            labelId="status-select"
                                            id="status-select"
                                            value={state.badge_name}
                                            onChange={handleChange}
                                            name="badge_name"
                                            style={{ marginTop: 20 }}
                                            defaultValue={detail.user_badges.badges_name}
                                        >
                                            {badges.data.data?.map(item => {
                                                return (

                                                    <MenuItem value={item.name} name="badge_name"><td><span>{item.name}</span></td>
                                                    </MenuItem>

                                                )
                                            })}
                                        </Select>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Badges Image :</td>
                                    <td>
                                        <Select
                                            labelId="status-select"
                                            id="status-select"
                                            value={state.badge_img}
                                            onChange={handleChange}
                                            name="badge_img"
                                            style={{ marginTop: 20 }}
                                        >
                                            {badges.data.data?.map(item => {

                                                return (
                                                    <MenuItem value={item.img} name="badge_image"><td><span><Card sx={{ maxWidth: 50 }}><CardMedia
                                                        component="img"
                                                        height="20"
                                                        image={item.img}
                                                        alt="badge_image"
                                                    /></Card>{item.name}</span></td></MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Is Claimed :</td>
                                    <td>
                                        <Select
                                            labelId="status-select"
                                            id="status-select"
                                            value={state.is_claimed}
                                            onChange={handleChange}
                                            name="is_claimed"
                                            style={{ marginTop: 20 }}
                                        >
                                            <MenuItem value={1} name="is_claimed"><td><span style={{ color: "green" }}>
                                                Available
                                            </span></td></MenuItem>
                                            <MenuItem value={0} name="is_claimed"><td><span style={{ color: "red" }}>
                                                Unavailable
                                            </span></td></MenuItem>

                                        </Select>
                                    </td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td >
                                        <button type="button" style={{ marginTop: 20, width: 125, height: 35, fontSize: 20 }} className="inline-block px-4 py-2 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
                                            onClick={() => { updateUserbadges(id, [userBadgesUpdate]) }}>Update</button>
                                    </td>
                                </tr>
                            </Typography>

                        </form>
                    </DialogContent>
                </Dialog>

                {/* Delete */}
                <Dialog
                    open={open.UserBadges4}
                    onClose={handleCloseUserBadgesDelete}>
                    <DialogTitle id="alert-dialog-title">
                        {"Confirm to delete user ?"}
                    </DialogTitle>
                    <DialogActions>
                        <button type="button" className="inline-block px-4 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => deleteUserBadges(id)}>yes</button>
                    </DialogActions>
                </Dialog>


            </div>
        </div>


    )
}