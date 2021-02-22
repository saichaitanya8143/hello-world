import React,{useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';

const Machstatz = ()=>{
    const [list,updateList] = useState([ ]);
    const [myplanet,updatePlanet] = useState([]);
   
    useEffect(()=> {
    let api="https://assignment-machstatz.herokuapp.com/planet";
     axios.get(api).then(response=>{
        updateList(response.data);
    })
},[]);

 const getMyplanet = (planetInfo) => {
  updatePlanet(myplanet=>[...myplanet,planetInfo]);
}

   return  <div className="container">
       <div className="row">
       <div className="col-md-12 text-center">
           <button className="btn btn-info m-2">{list.length} - All Planets</button>
           <button className="btn btn-success m-2">{myplanet.length} - Favourite Planets</button>

           </div>
           <div className="col-md-6">
               <h1 className="text-center">{list.length}- All Planets</h1>
               <table className="table table-bordered">
                   <thead>
                       <tr>
                           <th>id</th>
                           <th>isFavourite</th>
                           <th>name</th>
                           <th>is Favourite</th>       
                       </tr>
                   </thead>
                   <tbody>
                   {
                list.map((xi, index)=>{
                    return<tr key={index}>
                        <td>{xi.id}</td>
                        <td>{JSON.stringify(xi.isFavourite)}</td>
                        <td>{xi.name}</td> 
                        <td><button className="btn btn-dark"onClick={getMyplanet.bind(this , xi)}>My Favourite</button></td>
                        </tr>
                       })
                    }
                   </tbody>
            </table>
           </div>


           <div className="col-md-6">
               <h1 className="text-center">{myplanet.length}- Favourite Planets</h1>
               <div className="row text-center">
                   {
                myplanet.map((xi, index)=>{
                    return(
                    <div key={index} className="col-md-3 form-group">
                        <p className="border p-3">{xi.name}</p>
                        </div>
                    )
                       })
                    }
               </div>
           </div>
       </div>
     </div>

}

export default  Machstatz ;