import React ,{useEffect}from 'react';
import { useHistory } from 'react-router-dom';


export default function About()  {
  const history = useHistory();
  useEffect(() => {
    let get = localStorage.getItem('access_token')

    if (!get) { history.push('/login') }
  },[])
     return (
        <>
        
        </>
      );
    
  }