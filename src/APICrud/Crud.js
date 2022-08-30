import {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
function Crud()
{
    const [users,setUsers]=useState()
        useEffect(() =>{
        try{

            const get=async()=>{
                const res=  await axios.get('http://localhost:80/student/list') 
                     
                     console.log('name list',res.data.result)
                    setUsers(res.data.result)
                  }   
                  
                  get()
                  
            const _onDelete=async (e)=>{

            }
        }
        catch(e){
            console.log('Fetch Error: ' + e.message)
        }
    },[])        
    return(
        <>
        <h1 className="text-center">Welcome to Crud API</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <form>
                    <div className="form-group mb-2">
                        <label  >Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"/>
                        
                    </div>
                    <div className="form-group mb-3">
                        <label  >Password</label>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    
                    <button type="submit"  className="btn btn-primary ">Submit</button>
                    </form>
                </div>
                <div className="col-md-8">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((nameList,i)=>
                            <tr key={i}>
                            <th scope="row">1</th>
                            <td>{nameList.email}</td>
                            <td>Password</td>
                            <td >
                            <button type="submit" className="btn btn-info " style={{marginRight:'10px'}}>Edit</button>

                             <button type="submit" className="btn btn-danger " onClick={(e)=>_onDelete(nameList.SubjectID)}>Delete</button>
                            </td>
                            </tr>
                            )
                        }
                        
                    </tbody>
                    </table>

                </div>

            </div>
            
        </div>
        </>
    )
}
export default Crud