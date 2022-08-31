import {useState,useEffect} from 'react'
import axios from 'axios';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2'
function Crud()
{
    const [users,setUsers]=useState([])
    const [render,setRendered] = useState(false)
    const [input,setInput]=useState({
        name:"",
        email:"",
        mobile:""
    })
        useEffect(() =>{
        try{

            const get=async()=>{
                const res=  await axios.get('http://localhost:80/student/list') 
                     
                     console.log('name list',res.data.result)
                     setUsers(res.data.result)
                  }   
                  
                  get()
                  
                      
        }
        catch(e){
            console.log('Fetch Error: ' + e.message)
        }
    },[render])

    const post=async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:80/student/register',input)
        setRendered(true)
        
    }  
    
    const _onDelete=async(e)=>{
        await axios.delete(`http://localhost:80/student/delete?id=${e}`);          
        const newUser=users.filter((newList)=>{
            return newList.e!==e
        })
        
       setUsers(newUser)
        
    }
        
    const _onSearch=async(e)=>{
        console.log('enter id',e);
     await axios.get(`http://localhost:80/student/findByid?id=${e}`).then(res=>{
        setUsers(res.data)
     })
    }
    return(
        <>
        <h1 className="text-center">Welcome to Crud API</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <form onSubmit={post}>
                    <div className="form-group mb-2">
                        <label  >Email address</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} value={input.value}/>
                        
                    </div>
                    <div className="form-group mb-3">
                        <label  >Password</label>
                        <input type="text" name="mobile" className="form-control" placeholder="Mobile" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} value={input.value}/>
                    </div>
                    
                    <button type="submit"  className="btn btn-primary ">Submit</button>
                    </form>
                </div>
                <div className="col-md-8">
                    <div className='col-md-4'>
                        <input type="text" placeholder='Enter email' className='form-control' onChange={(e)=>_onSearch(e)}/>
                    </div>
                <table className="table">

                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((nameList,i)=>
                            <tr key={i}>
                            <th scope="row">{nameList.SubjectID}</th>
                            <td>{nameList.email}</td>
                            <td>{nameList.mobile}</td>
                            <td >
                                
                                <Link to={`/Update/${nameList.SubjectID}`}>
                                <button type="submit" className="btn btn-info " style={{marginRight:'10px'}}>Edit</button>
                                </Link>
                                <Link to={'/'}>
                                <button type="submit" className="btn btn-danger "  onClick={()=>_onDelete(nameList.SubjectID)}>Delete</button>
                                </Link>
                                 
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