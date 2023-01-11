import React, { useEffect } from "react";
import { AsyncStorage } from "react-native";

import { AppRoutes } from "./src/routes/app.routes";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import theme from "./src/styles/theme";
import { getList } from "./src/services/list";
import { LIST_DATA } from "./src/utils/constants";

const ApplicationContent = () => {
  useEffect(() => {
    const getListService = async () => {
      const { data } = await getList();
      const storage = await AsyncStorage.getItem(LIST_DATA);
      const response = storage ? await JSON.parse(storage) : {};
      if (response.data === undefined) {
        AsyncStorage.setItem(LIST_DATA, JSON.stringify({ data }));
        console.log("Chamou a api");
      } else if (response.data.length === 0) {
        AsyncStorage.setItem(LIST_DATA, JSON.stringify({ data }));
        console.log("Chamou a api");
      } else {
        console.log("Ja foi setada a api");
      }
    };

    getListService();
  }, []);

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });
  return (
    <>
      {fontsLoaded && (
        <>
          <AppRoutes />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ApplicationContent />
      </ThemeProvider>
    </>
  );
};

export default App;
