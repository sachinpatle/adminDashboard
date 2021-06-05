import React from 'react'
import './Appbar.css'
import { NotificationsNone, Settings, Language } from '@material-ui/icons'

export default function Appbar() {
    return (
        <>
        <div className="appbar">
            <div className="appbar_wrapper">
                <div className="appbar_left">
                    <span className="logo">
                        Admin Dashboard
                </span>
                </div>
                <div className="appbar_right">
                    <div className="appbar_right_container">
                        <NotificationsNone />
                        <span className="iconbadge">2</span>
                    </div>
                    <div className="appbar_right_container">
                        <Language />
                        <span className="iconbadge">2</span>
                    </div>
                    <div className="appbar_right_container">
                        <Settings />
                    </div>
                    <img src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="nav_avatar"/>
                </div>
            </div>
        </div>
        </>
    )
}
