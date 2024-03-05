import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useToken() {
  // declare a state variable to store the token
  const [token, setToken] = useState("");

  // helper function to get the token from the AsyncStorage
  async function getData() {
    try {
      const t = await AsyncStorage.getItem("token");
      if (t) {
        console.log(t);
        setToken(t);
      } else {
        console.log("No token found");
        setToken("");
      }
    } catch (e) {
      console.log(e);
      setToken("");
    }
  }

  // helper function to store the token in the AsyncStorage
  async function storeToken(t) {
    try {
      await AsyncStorage.setItem("token", t);
      setToken(t);
    } catch (e) {
      console.log(e);
    }
  }

  // helper function to remove the token from the AsyncStorage
  async function removeToken() {
    try {
      await AsyncStorage.removeItem("token");
      setToken("");
    } catch (e) {
      console.log(e);
    }
  }

  // call the helper function when the component mounts
  useEffect(
    function () {
      getData();
    },
    [token]
  );

  // return the token
  //   return token;

  // return the token, storeToken, and removeToken
  return { token, storeToken, removeToken };
}

export default useToken;
