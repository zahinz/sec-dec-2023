import { Text, SafeAreaView, View, Dimensions } from "react-native";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function navigateToLogin() {
    navigation.navigate("Login");
  }

  const screenWidth = Dimensions.get("screen").width;
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
          <Input label="Username" value={username} setValue={setUsername} />
          <Input label="Password" value={password} setValue={setPassword} />
        </View>
        <View>
          <Button>Register</Button>
          <Button variant="ghost" onPress={navigateToLogin}>
            Sign in as existing user
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
