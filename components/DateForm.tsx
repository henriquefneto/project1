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

type DateFormProps = {
  date: Date;
  onChange: (date: Date) => void;
};
export default function DateForm({ date, onChange }: DateFormProps) {
  const [show, setShow] = useState(false);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(Platform.OS === "ios");
    if (selectedDate) onChange(selectedDate);
  };

  return (
    <View>
      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
        <Text style={styles.buttonText}>
          {date.toLocaleDateString("pt-BR")}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleChange}
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
    color: "#fff",
  },
  button: {
    paddingVertical: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: "#fff",
    backgroundColor: "#1e1e1e",
    borderColor: "#ffffff3d",  
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
