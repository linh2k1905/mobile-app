import RootStack from "./navigators/RootStack";
import AppContext from './components/AppContext';
import { useState } from "react";
export default function App() {
  const [userInfo, setUserInfo] = useState({});
  const goUser = (data) => {
    setUserInfo(data);

  };
  const userSettings = {
    userInfo: userInfo,
    goUser: goUser,

  };
  return (
    <AppContext.Provider value={userSettings}>
      <RootStack />
    </AppContext.Provider>

  );
}


