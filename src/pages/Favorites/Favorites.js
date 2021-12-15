import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { getFavorites } from "hooks";
import * as S from "./style";

const Favorites = () => {
  const { users, isLoading } = getFavorites();

  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} isFavorites={true}/>
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
