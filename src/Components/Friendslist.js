import React from 'react';

const Friendslist = ({friendsData}) => {


    // get user data using map to show on UI 
    
    return friendsData.map(data=>(
        
        <tr key={data.id}>
          <div className="border border-info rounded mb-4 me-3 ms-3">
              <h6><i class="fas fa-user fa-xs"></i> {data.name}</h6>
              <h6>{data.email}</h6>
              <h6 className="text-danger">{data.name2} is a mutual Friend</h6>
          </div>
        </tr>            
    
))
};

export default Friendslist;