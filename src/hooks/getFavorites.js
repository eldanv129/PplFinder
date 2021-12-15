import { useEffect, useState } from "react";


export const getFavorites = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    favoriteUsers();
  }, []);

  async function favoriteUsers() {
    setIsLoading(true);
    const response = JSON.parse(localStorage.getItem("favorites"))
    setIsLoading(false);
    setUsers(response);
  }

  return { users, isLoading, favoriteUsers };
};