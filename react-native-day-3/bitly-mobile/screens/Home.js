import { Text, SafeAreaView, View, Dimensions } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import Toast from "react-native-toast-message";

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
  function onSubmit(data) {
    //   api call to register user
    console.log(data);

    // example server response
    const status = 400;

    if (status === 200) {
      Toast.show({
        type: "success",
        text1: "User registered successfully!",
        position: "bottom",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Username already exists!",
        position: "bottom",
      });
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
