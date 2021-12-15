import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = (checkedCountries) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let fetchStr = `https://randomuser.me/api/?results=25&page=1`
  let fetchFilter = ''

  Object.entries(checkedCountries).forEach(([key, value]) => {
    if(value){
      fetchFilter += key.toLowerCase() + ','
    }
  })
  
  if(fetchFilter.length > 0){
    fetchFilter = fetchFilter.slice(0, -1)
    fetchFilter = '&nat=' + fetchFilter
    fetchStr += fetchFilter
  }

  useEffect(() => {
    fetchUsers();
  }, [fetchStr]);

  async function fetchUsers() {
    console.log(fetchStr);
    setIsLoading(true);
    const response = await axios.get(fetchStr);
    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading, fetchUsers };
};
