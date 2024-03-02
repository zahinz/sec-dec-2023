import { Text, TextInput, View } from "react-native";

function Input({ label, value, setValue }) {
  return (
    <View style={{ gap: 4 }}>
      <Text style={{ fontWeight: 600 }}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={{
          borderWidth: 1,
          borderColor: "lightgrey",
          backgroundColor: "white",
          padding: 12,
          borderRadius: 8,
        }}
      />
    </View>
  );
}

export default Input;
