import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getLocalAccessToken } from "../utils/constants";
import getWallet from "./getWallet";
import { API_URL } from "../utils/constants";
function useWalletDeposit() {
  const url = `${API_URL}/wallet/deposit`

  const accessToken = getLocalAccessToken();
  const [loading, setLoading] = useState(true);

  async function createDeposit(postData) {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${accessToken}`,
        },
        body: JSON.stringify( postData ),
      });

      if (response.ok) {
        const responseData = await response.json();

        toast.success("You have succesfully deposited");
      } else {
        toast.error("This email already exits");
      }
    } catch (error) {
      console.error("Error sending invite:", error);
    } finally {
      setLoading(false);
    }
  }

  return { loading, createDeposit };
}

export default useWalletDeposit;
