import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export default function DateForm() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(Platform.OS === "ios"); // Mantém aberto no iOS, fecha no Android
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <View>
      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
        <Text style={styles.buttonText}>{date.toLocaleDateString("pt-BR")}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    margin: 5,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    paddingVertical: 10,
    alignItems: "center",
    height: 50,
    borderWidth: 1,
    borderColor: "#0000009d",
    borderRadius: 8,
    paddingHorizontal: 15,
    color: "#333",
    backgroundColor: "#f9f9f9",
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
