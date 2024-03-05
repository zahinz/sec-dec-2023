import { Text, SafeAreaView, View, Dimensions } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import { loginUser } from "../api";

function LoginScreen({ navigation }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    try {
      const response = await loginUser(data);
      // promise is resolved
      console.log(response.data);
      Toast.show({
        type: "success",
        text1: "User logged in successfully!",
        position: "bottom",
      });
    } catch (error) {
      // promise is rejected
      Toast.show({
        type: "error",
        text1: "Invalid credentials!",
        position: "bottom",
      });
    }
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
          <Input
            label="Email or Username"
            control={control}
            name="identifier"
          />
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
