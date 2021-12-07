import React, { useState } from 'react';

const Separation = ({friendsData}) => {

    // set user after compare 
    const [mutual,setmutual]=useState([]);

    // get username from UI 
    const [user1, setUser1]=useState("");
    const [user2, setUser2]=useState("");

    // compare users to get mutual user 
    const compare=()=>{
        if (filter1[0].name2===filter2[0].name2){
            setmutual(filter1[0].name2)
        }
        else{
           return
        }
    }

   
  
  
   
//   find users 
      const filter1=friendsData.filter(data=>data.name.toLowerCase() ===user1.toLowerCase());
      
      const filter2=friendsData.filter(data=>data.name.toLowerCase() ===user2.toLowerCase());
     

    //   handle compare action 

      const handleCompare=e=>{
          e.preventDefault();
        compare();
      }
      
    return (
        <div>
            <h1 className="mb-3">Find User Common <span className="text-info">Friend</span></h1>
             <form onSubmit={handleCompare}>

              <input className="mb-2 w-75" type="text" placeholder="User Name" required onChange={(e)=>setUser1(e.target.value)} value={user1}/> 
              <br />
              <input className="mb-2 w-75" type="text" placeholder="User Name" required onChange={(e)=>setUser2(e.target.value)} value={user2}/>
              <br />
              <button type="submit" className="btn btn-outline-info">Submit</button>
            </form>

            <div className="mt-5 mb-5">
                <h4 className="mb-3">The degree of separation</h4>

               <h6 className="text-danger">{user1} <i class="fas fa-angle-right"></i> {mutual} <i class="fas fa-angle-right"></i> {user2}</h6>
            </div>


        </div>
    );
};

export default Separation;