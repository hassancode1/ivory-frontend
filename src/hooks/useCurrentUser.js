import React, { useEffect, useState } from "react";
import { getLocalAccessToken } from "../utils/constants";
import { API_URL } from "../utils/constants";

function useCurrentUser() {
    const accessToken = getLocalAccessToken();
    const url = `${API_URL}/current-user`

  const [user, setUser] = useState(null);


  async function fetchUser() {
    try {
    
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `${accessToken}`,
         
        },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
  
    } finally {
     
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return { user };
}

export default useCurrentUser;
