import React, { useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";



const UserList = ({ users, isLoading, isFavorites }) => {
  const [hoveredUserId, setHoveredUserId] = useState();


  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")));

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const onFavoriteClick = (newUser) => {
    console.log(newUser);
    let newFavorites = [];
    if (favorites != null) {
      newFavorites = [...favorites];
    }
    let filteredFavorites = newFavorites.filter(u => u.email !== newUser.email);
    if (filteredFavorites.length === newFavorites.length) {
      newFavorites.push(newUser);
    } else {
      newFavorites = filteredFavorites;
    }
    console.log(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  return (

    <S.UserList>
      <S.List>
        {users.map((user, index) => {
          let isFavorite = favorites?.filter(u => user.email === u.email).length === 1;
          let userComponent = <><S.User
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <S.UserPicture src={user?.picture.large} alt="" />
            <S.UserInfo>
              <Text size="22px" bold>
                {user?.name.title} {user?.name.first} {user?.name.last}
              </Text>
              <Text size="14px">{user?.email}</Text>
              <Text size="14px">
                {user?.location.street.number} {user?.location.street.name}
              </Text>
              <Text size="14px">
                {user?.location.city} {user?.location.country}
              </Text>
            </S.UserInfo>
            <S.IconButtonWrapper isVisible={index === hoveredUserId || isFavorite}>
              <IconButton onClick={() => onFavoriteClick(user)}>
                <FavoriteIcon color="error" />
              </IconButton>
            </S.IconButtonWrapper>
          </S.User></>;
          if(!isFavorites || isFavorite){
            return userComponent;
          }
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
