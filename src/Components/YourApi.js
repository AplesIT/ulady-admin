import React, { Component } from 'react'
import CustomNavigation from './CustomNavigation'
import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./YourApi.css"
import Footer from './Footer';


const isValidStatus=(value)=>
{
var status = value.row.status;   
console.log(status)
if(status===0)
return(<Button className="btn-danger" variant="danger">Invaild</Button>)
else if(status===1)
return (<Button className="btn-success" variant="success">Vaild</Button>)
else 
return (<Button className="btn-waiting" variant="success">Waiting</Button>)
}
const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'name',name:"Name"},
    { key: "description",name:"Description",},
    { key: "status", name:"Status",formatter:isValidStatus },
    { key:"date", name: "Date"}
];

const rows = [
    { id: 0, title: 'Example',name:"Facebook",description:"Empowering community through open source technology",status:0,date:"2/10/2020"},
    { id: 1, title: 'Example1',name:"Facebook",description:"Empowering community through open source technology",status:1,date:"2/10/2020"},
    { id: 2, title: 'Example2',name:"Facebook",description:"Empowering community through open source technology",status:2,date:"2/10/2020"},
    { id: 3, title: 'Example',name:"Facebook",description:"Empowering community through open source technology",status:0,date:"2/10/2020"},
    { id: 4, title: 'Example1',name:"Facebook",description:"Empowering community through open source technology",status:1,date:"2/10/2020"},
    { id: 5, title: 'Example2',name:"Facebook",description:"Empowering community through open source technology",status:2,date:"2/10/2020"},
    { id: 6, title: 'Example',name:"Facebook",description:"Empowering community through open source technology",status:0,date:"2/10/2020"},
    { id: 7, title: 'Example1',name:"Facebook",description:"Empowering community through open source technology",status:1,date:"2/10/2020"},
    { id: 8, title: 'Example2',name:"Facebook",description:"Empowering community through open source technology",status:2,date:"2/10/2020"}
];
export default class YourApi extends Component {
    render() {
        return (
            <div>
                <CustomNavigation />
                <DataGrid
                    style={{margin: "5%"}}
                    columns={columns}
                    rows={rows}
                />
                <Footer/>
            </div>
        )
    }
}
