import React, { useEffect, useState } from "react";
import { getLocalAccessToken } from "../utils/constants";
import { API_URL } from "../utils/constants";

function getWallet() {
  const url = `${API_URL}/wallet`
  const accessToken = getLocalAccessToken();
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchWallet() {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `${accessToken}`,
         
        },
      });
      const data = await response.json();
      setWallet(data);
    } catch (error) {
  
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWallet();
  }, []);

  return { wallet, loading , fetchWallet };
}

export default getWallet;
