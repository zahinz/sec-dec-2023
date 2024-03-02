import { Text, SafeAreaView, View, Dimensions } from "react-native";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          width: screenWidth * 0.8,
          paddingHorizontal: 8,
          paddingVertical: 16,
          gap: 16,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 600 }}>
          Welcome to Bitly Mobile
        </Text>
        <View style={{ gap: 8 }}>
          <Input label="Email" value={email} setValue={setEmail} />
          <Input label="Password" value={password} setValue={setPassword} />
        </View>
        <View>
          <Button>Login</Button>
          <Button variant="ghost" onPress={navigateToHome}>
            Register as a new user
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
