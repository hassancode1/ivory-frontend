import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { API_URL } from "../utils/constants";

function useAcceptInvite() {
    const navigate= useNavigate()
   
    const location = useLocation();

    const id = new URLSearchParams(location.search).get('id');
    const email = new URLSearchParams(location.search).get('email');

  const url = `${API_URL}/accept/invite?id=${id}&email=${email}`

  const [loading, setLoading] = useState(true);


  async function acceptInvite(postData) {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
  
      if (response.ok) {
        const responseData = await response.json();
       navigate("/login")
        toast.success('Great you have accepted the invite');
      } 
      else{
        // toast.error("This email already exits")
      }
    } catch (error) {
     
      console.error('Error sending invite:', error);
    } finally {
      setLoading(false);
    }
  }
  

  return { loading, acceptInvite };
}

export default useAcceptInvite;
