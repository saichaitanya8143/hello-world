import React,{useEffect, useState} from 'react';
import {useParams,Link} from 'react-router-dom';
import axios from 'axios';
const Myhooks = ()=>{
    const [favourites , seFavourites]= usestate([as Array<number>]);
    const getArray=JSON.parse(localStorage.getItem('favourite')|| '0');
   
useEffect(()=>{
    if(getArray!==0){
        seFavourites([...getArray])
    }
},[])

const addFav=(props: any)=>{
    let array=favourites;
    let addArray=true;
    array.map((item : any, key:number)=>{
    if (item==favourites.i){

    }
    });
    if (addArray){
        array.push(props.i);
    }
    seFavourites([...array]);
}


}