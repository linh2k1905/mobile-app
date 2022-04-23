import RootStack from "./navigators/RootStack";
import AppContext from './components/AppContext';
import { useState } from "react";
export default function App() {
  const [userInfo, setUserInfo] = useState({});
  const [typeHouseAll, setTypeHouseAll] = useState();
  const [city, setCity] = useState();
  const goUser = (data) => {
    setUserInfo(data);

  };
  const userSettings = {
    userInfo: userInfo,
    goUser: goUser,
    typeHouseAll: typeHouseAll,
    setTypeHouseAll: setTypeHouseAll,
    city: city,
    setCity: setCity,

  };
  return (
    <AppContext.Provider value={userSettings}>
      <RootStack />
    </AppContext.Provider>

  );
}


