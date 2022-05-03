import { useState } from "react";
import { View, TextInput } from "react-native";

import { CommonStyles } from "../styles/CommonStyles";
import { CountButton } from "./CountButton";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");

  return (
    <View style={CommonStyles.row}>
      <TextInput
        style={{ flex: 0.9 }}
        placeholder="Enter name"
        onChangeText={setName}
      />
      <CountButton
        style={{ flex: 0.1 }}
        text="Add"
        submit={() => {
          addNewCountable(name);
        }}
      />
    </View>
  );
};
