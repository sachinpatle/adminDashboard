import React ,{useState}from 'react'
import { DataGrid } from '@material-ui/data-grid';
import './UserList.css'
import { DeleteOutline } from '@material-ui/icons';
// import {Button} from '@material-ui/core'
import {userdata} from '../../dummydata'



export default function UserList() {

    const [data, setdata] = useState(userdata)

   const Button = ({type})=>{
       return <button className={"statuschange " + type}>{type}</button>

   }

    const deleteRow =(id)=>{
        setdata(data.filter(item=>{
          return   item.id !== id
        }))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'user', headerName: 'User name', width: 200 ,renderCell: (params)=>{
            return(
                <div className="avatarrow">
                    <img className="avatar_img" src={params.row.avatar}/>
                    {params.row.username}
                </div>
                
            )
        } },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'stat',
            headerName: 'Status',
            width: 130,
            renderCell:(params)=>{
                return(
                    <>
                    <Button type={params.row.status}></Button>
                    </>
                )

            }
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Actions',  
            width: 200,
            renderCell:(params)=>{
                return(
                    <>
                    <button className="actionbutton">Edit</button> 
                    <DeleteOutline className="actiondelete" onClick={()=>{deleteRow(params.row.id)}}/>
                    </>
                )
            }
        }
    
    ];
    return (
        <div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={data} disableSelectionOnClick  columns={columns} pageSize={5} checkboxSelection />
            </div>
        </div>

    )
}
