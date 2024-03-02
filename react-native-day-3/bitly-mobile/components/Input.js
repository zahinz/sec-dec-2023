import { useController } from "react-hook-form";
import { Text, TextInput, View } from "react-native";

function Input({ label, name, control, rules }) {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <View style={{ gap: 4 }}>
      <Text style={{ fontWeight: 600 }}>{label}</Text>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        style={{
          borderWidth: 1,
          borderColor: "lightgrey",
          backgroundColor: "white",
          padding: 12,
          borderRadius: 8,
        }}
      />
      {/* <Text style={{ color: "red" }}>Hello</Text> */}
    </View>
  );
}

export default Input;
