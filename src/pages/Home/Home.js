import React, { useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import CheckBox from "../../components/CheckBox";



const Home = () => {
  const [checkedCountries, setCheckedCountries] = useState({
    "BR": false,
    "AU": false,
    "CA": false,
    "DE": false,
    "US": false
  });

  const handleCheckCountry = (value) => {
    checkedCountries[value] = !checkedCountries[value];
    setCheckedCountries({ ...checkedCountries });
  };

  const { users, isLoading } = usePeopleFetch(checkedCountries);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <S.Filters>
          <CheckBox value="BR" label="Brazil" onChange={handleCheckCountry} />
          <CheckBox value="AU" label="Australia" onChange={handleCheckCountry} />
          <CheckBox value="CA" label="Canada" onChange={handleCheckCountry} />
          <CheckBox value="DE" label="Germany" onChange={handleCheckCountry} />
          <CheckBox value="US" label="United States" onChange={handleCheckCountry} />
        </S.Filters>
        <UserList users={users} isLoading={isLoading} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
