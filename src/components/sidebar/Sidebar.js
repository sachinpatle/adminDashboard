import React from 'react'
import './Sidebar.css'
import { LineStyle ,TrendingUp,Timeline} from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
        <div className="sidebar">
            <div className="sidebar_wrapper">
                <div className="sidebar_menu">
                    <h3 className="sidebar_title">Dashboard</h3>
                    <ul className="sidebar_list">
                        <li className="sidebar_list_item active">
                            <LineStyle />
                            Home
                        </li>
                        <li className="sidebar_list_item ">
                            <Timeline />
                            Analytics
                        </li>
                        <li className="sidebar_list_item">
                            <TrendingUp />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebar_menu">
                    <h3 className="sidebar_title">Quick Menu</h3>
                    <ul className="sidebar_list">
                    
                        <li className="sidebar_list_item">
                            <Avatar />
                            Users
                        </li>
                       
                       
                        <li className="sidebar_list_item ">
                            <Timeline />
                            Products
                        </li>
                        <li className="sidebar_list_item">
                            <TrendingUp />
                            Transactions
                        </li>
                    </ul>
                </div>
                <div className="sidebar_menu">
                    <h3 className="sidebar_title">Dashboard</h3>
                    <ul className="sidebar_list">
                        <li className="sidebar_list_item">
                            <LineStyle />
                            Home
                        </li>
                        <li className="sidebar_list_item ">
                            <Timeline />
                            Analytics
                        </li>
                        <li className="sidebar_list_item">
                            <TrendingUp />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebar_menu">
                    <h3 className="sidebar_title">Dashboard</h3>
                    <ul className="sidebar_list">
                        <li className="sidebar_list_item">
                            <LineStyle />
                            Home
                        </li>
                        <li className="sidebar_list_item ">
                            <Timeline />
                            Analytics
                        </li>
                        <li className="sidebar_list_item">
                            <TrendingUp />
                            Sales
                        </li>
                    </ul>
                </div>
               
            </div>
        </div>
        </>
    )
}
