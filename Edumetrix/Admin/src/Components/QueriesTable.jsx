import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import '../CssFiles/StudentRecord.css'
import Tooltip from '@material-ui/core/Tooltip';



class QueriesTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }


    componentDidMount() {

        const url = "https://jsonplaceholder.typicode.com/posts"

        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(posts => {

            this.setState({
                posts: posts
            })


        })
    }

    columnClicked = (id) => {
        console.log("column click",id);
    }
    render() {

        const columns = [

            {
                headerStyle: {
                  
                    borderRight:"1px solid lightGray",
                    padding: '15px',
                    
                    backgroundColor:"white",
                    },
                Header: "#",
                accessor: "userId",
                filterable: false,
                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "centre",
                    fontSize: "14px",

                },
                width: 40,
            }
            ,
            {
                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"white",
                    whiteSpace:"unset"
                    },
                Header: "posted User",
                accessor: "id",

                style: {
                    borderRight:"1px solid lightGray",
                    fontSize: "16px",
                    cursor: "pointer",  
                },
                minWidth:70
            },
            {

                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"white",
                    whiteSpace:"unset"
                    },
                Header: "Type",
                accessor: "title",

                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace:"unset"

                },
                minWidth:40,
                sortable: false,
               
            },
            {
                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"white",
                    whiteSpace:"unset"
                    },

                Header: "Query",
                accessor: "body",
                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace:"unset"
                },
                sortable: false,
                width:450
            },
            {
                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"white",
                    whiteSpace:"unset"
                    },
                Header: "status",
                accessor: "email",
                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace:"unset"

                },
                minWidth:30
            },
            {
                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"white",
                    whiteSpace:"unset"
                    },
                Header: "Posted Date & time",
                accessor: "bonus",
                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace:"unset"
                },
                minWidth:50
            },
            {

                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"#3c8dbc",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"white",
                    whiteSpace:"unset"
                    },
                Header: "Closed date & time",
                accessor: "created_on",

                style: {
                    borderRight:"1px solid lightGray",
                    color: "black",
                    textAlign: "left",
                    fontSize: "14px",
                    whiteSpace:"unset"
                },
                sortable: true,
                minWidth:50
               
            },
            {
                headerStyle: {
                    borderBottom:"1px solid lightGray",
                    borderRight:"1px solid lightGray",
                    color:"black",
                    fontWeight:"bold",
                    fontSize:"14px",
                    padding:"10px",
                    backgroundColor:"white",
                    },
                Header: "Actions",
                Cell: props => {
                    return (
                        <div>
                            <Tooltip title = "edit">
                            <button className="editButton">
                                <img src ={require('../Assets/eye.png')} id="docIcon"/>
                            </button>
                            </Tooltip>

                            <Tooltip title = "edit">
                            <button className="editButton">
                                <img src ={require('../Assets/pencil.png')} id="docIcon"/>
                            </button>
                            </Tooltip>

                            <Tooltip title = "Delete">
                            <button className="editButton">
                                 <img src ={require('../Assets/delete.png')} id="docIcon"/>
                            </button>
                            </Tooltip>
                        </div>


                    )
                },width: 90
                ,
                 filterable: false
            }



        ]
        return (
            <div style={{padding:"5px"}}>
            <ReactTable
                columns={columns}
                noDataText={"please wait..."}
                data={this.state.posts}
               
                defaultPageSize={2}
                
                // className="highlight"
                getTrProps={(state, rowInfo, column) => {

                    if (rowInfo) {
                        return {

                            style: {
                                background: (rowInfo.row.id) % 2 ? 'white' : 'light',
                                
                            }
                        }
                    }
                    return {};


                }}

            >

            </ReactTable>
            </div>
        )
    }
}

export default QueriesTable