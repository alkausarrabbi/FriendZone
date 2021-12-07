
import './App.css';
import { useEffect, useState } from 'react';
import Friendslist from './Components/Friendslist';
import Separation from './Components/Separation';


// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('friendlist');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}



function App() {

 
  const [friendsData,setFriendsData]=useState(getDatafromLS());

  // input field states
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [id, setId]=useState('');
  const [name2, setName2]=useState('');

// handle user data and set in state 
  const handleAddFriend=e=>{
    e.target.reset();
    e.preventDefault();
    let datas={
      name,
     email,
     id,
     name2
    }

    setFriendsData([...friendsData,datas]);
    
    setName('')
    setEmail('')
    setId('')
    setName2('')
    
  }

  // set data to the local storage 
  useEffect(()=>{
    localStorage.setItem("friendlist",JSON.stringify(friendsData));
  },[friendsData])

  return (
    <div className="App p-5">
      <h1 className="m-5">Welcome to the <span className="text-info">FriendZone</span></h1>
      <div className="conatainer mt-5">
        <div  className="row">
          <div className="col-lg-6 col-sm-12 mb-5">
            <h3 className="text-info mb-4">Add User Here</h3>
            <form action="" onSubmit={handleAddFriend}>
              <input className="mb-2 w-75" type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} value={name} required/>
              <br />
              <input className="mb-2 w-75" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
              <br />
              <input className="mb-2 w-75" type="number" placeholder="Unique ID" onChange={(e)=>setId(e.target.value)} value={id} required/>
              <br />
              <input className="mb-2 w-75" type="text" placeholder="Relation (Friend Name)" onChange={(e)=>setName2(e.target.value)} value={name2} required/>
              <br />
              <button type="submit" className="btn btn-outline-info">Submit</button>
            </form>
          </div>

          <div className="col-lg-6 col-sm-12">

          <div className='view-container'>
          {friendsData.length>0&&<>
            <h4 className="mb-4 text-info" >User list</h4>
            <div className='table-responsive'>
              <table className='table'>
               
                <tbody>
                 <Friendslist friendsData={friendsData} ></Friendslist>
                </tbody>
              </table>
            </div>
            
          </>}
          {friendsData.length < 1 && <div className="text-dark border rounded w-50 ms-auto bg-info">No user are added yet</div>}
        </div>

      </div>

          </div>
          {friendsData.length>0&&<>
            <div className="Container">

              <Separation friendsData={friendsData} ></Separation>

            </div>
            
          </>}

         

        </div>

      </div>
    
  );
}

export default App;
