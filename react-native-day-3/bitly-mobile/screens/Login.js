import { Text, SafeAreaView, View, Dimensions } from "react-native";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";

function LoginScreen({ navigation }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  function onSubmit(data) {
    //   api call to login user
    console.log(data);
  }

  const screenWidth = Dimensions.get("screen").width;

  function navigateToHome() {
    navigation.navigate("Home");
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: screenWidth * 0.9,
          paddingHorizontal: 8,
          paddingVertical: 16,
          gap: 16,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 600 }}>
          Welcome to Bitly Mobile
        </Text>
        <View style={{ gap: 8 }}>
          <Input label="Email" control={control} name="identifier" />
          <Input label="Password" control={control} name="password" />
        </View>
        <View>
          <Button onPress={handleSubmit(onSubmit)}>Login</Button>
          <Button variant="ghost" onPress={navigateToHome}>
            Register as a new user
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
