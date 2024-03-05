import { Text, SafeAreaView, View, Dimensions } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import { registerUser } from "../api";

function HomeScreen({ navigation }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });
  function navigateToLogin() {
    navigation.navigate("Login");
  }
  async function onSubmit(data) {
    try {
      const response = await registerUser(data);
      console.log(response.data);
      Toast.show({
        type: "success",
        text1: "User registered successfully!",
        position: "bottom",
      });
    } catch (error) {
      const e = error.response.data;
      if (Array.isArray(e.err.errors)) {
        const combinedMessages = e.err.errors
          .map((error) => error.msg)
          .join(". ");
        // TODO : Toast package is not support for multiple messages and has limited styling options
        // PLAN : Use a different package for toasts https://www.npmjs.com/package/react-native-toast-notifications
        Toast.show({
          type: "error",
          text1: combinedMessages,
          position: "bottom",
        });
      }
    }
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
          <Input label="Email" control={control} name="email" />
          <Input label="Username" control={control} name="username" />
          <Input label="Password" control={control} name="password" />
        </View>
        <View>
          <Button onPress={handleSubmit(onSubmit)}>Register</Button>
          <Button variant="ghost" onPress={navigateToLogin}>
            Sign in as existing user
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
