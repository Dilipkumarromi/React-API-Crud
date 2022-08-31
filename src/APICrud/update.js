import React,{ useEffect,useState } from "react"
import axios from "axios"
import {useParams} from 'react-router-dom'
function Update(){
    let { id } = useParams();
    console.log('params:',id)
    // const [users,setUsers]=useState([])
    const [input,setInput]=useState({        
        email:"",
        mobile:""
    })
   

        useEffect(()=>{
            try{
                console.log('called-1')
                const GetData=async()=>
                {
                  const res=  await axios.get(`http://localhost:80/student/findByid?id=${id}`)
                  console.log('ddd',res.data.result)
                  setInput(res.data.result)
                }
                GetData()
            }
            catch(e){
                console.log(`error:${e.message}`)
            }
        },[id]) 
        const upd=async()=>{
            await axios.patch()
        }
    
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                    <form>
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

                </div>

            </div>
        </>
    )
}
export default Update