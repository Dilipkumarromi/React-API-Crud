import React,{ useEffect,useState } from "react"
import axios from "axios"
// import Crud from "./Crud";
import {useParams,useNavigate } from 'react-router-dom'
function Update(){

    const _navigate=useNavigate();
    let { id } = useParams();
    console.log('params:',id)
    // const [users,setUsers]=useState([])
    const [input,setInput]=useState({        
        email:"",
        mobile:""
    })
   const {email,mobile}=input

        useEffect(()=>{
            try{
                console.log('called-1')
                const GetData=async()=>
                {
                  const res=  await axios.get(`http://localhost:80/student/findByid?id=${id}`)
                  console.log('ddd',res.data.result)
                  setInput({
                    email:res.data.result.email,
                    mobile:res.data.result.mobile
                  })
                }
                GetData()
            }
            catch(e){
                console.log(`error:${e.message}`)
            }
        },[id]) 
        const upd=async(e)=>{
            e.preventDefault()
            await axios.patch(`http://localhost:80/student/update?id=${id}`,input).then(result=>{
                _navigate("/")
            })
        }
    
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                    <form onSubmit={upd}>
                    <div className="form-group mb-2">
                        <label  >Email address</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} value={email}/>
                        
                    </div>
                    <div className="form-group mb-3">
                        <label  >Password</label>
                        <input type="text" name="mobile" className="form-control" placeholder="Mobile" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} value={mobile}/>
                    </div>
                    
                    <button type="submit"  className="btn btn-primary ">Submit</button>
                    </form>
              
                    </div>

                </div>

            </div>
        </>
    )
}
export default Update