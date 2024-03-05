import { View, Text, SafeAreaView } from "react-native";
import useToken from "../hook/useToken";
import Button from "../components/Button";

function DashboardScreen() {
  const { token, removeToken } = useToken();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text>{token || "No token saved"}</Text>
        <Button title="Logout" onPress={removeToken}>
          Logout
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default DashboardScreen;
