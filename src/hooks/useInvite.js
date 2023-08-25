import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../utils/constants";

function useInvite() {
  const url = `${API_URL}/invite`

  const [loading, setLoading] = useState(true);


  async function createInvite(email) {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
       
        toast.success('You have successfully sent an invite');
      } 
      else{
        toast.error("This email already exits")
      }
    } catch (error) {
     
      console.error('Error sending invite:', error);
    } finally {
      setLoading(false);
    }
  }
  

  return { loading, createInvite };
}

export default useInvite;
