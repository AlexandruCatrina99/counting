import { useState } from "react";
import { Keyboard, View, TextInput } from "react-native";

import { CommonStyles } from "../styles/CommonStyles";
import { CountButton } from "./CountButton";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");
  const anotherFunc = (val) => {
    setName("");
  };
  return (
    <View style={CommonStyles.row}>
      <TextInput
        style={{ flex: 0.9 }}
        placeholder="Enter name"
        onChangeText={setName}
        value={name}
      />
      <CountButton
        style={{ flex: 0.1 }}
        text="Add"
        submit={() => {
          Keyboard.dismiss();
          addNewCountable(name);
          anotherFunc(name);
        }}
      />
    </View>
  );
};
