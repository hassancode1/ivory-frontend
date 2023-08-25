import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import axios from "axios";


const useGetAllUsers = () => {
  const url = `${API_URL}/users`;
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [fetch, setFetch] = useState(0);
  const refetch = () => setFetch((prev) => prev + 1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${url}`);
        setUsers(response?.data);
     
        if (!response.ok) {
          throw new Error("An error occurred while fetching the data.");
        }

        return response.data.data;
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, fetch]);

  return { users, isLoading, error, refetch };
};

export default useGetAllUsers
