import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

type BloodTypePickerProps = {
  value: string;
  onChange: (value: string) => void;
};

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function BloodTypePicker({ value, onChange }: BloodTypePickerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Blood Type</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={value}
          onValueChange={(item) => onChange(item)}
          style={styles.picker}
        >
          <Picker.Item label="Select..." value="" />
          {BLOOD_TYPES.map((type) => (
            <Picker.Item key={type} label={type} value={type} />
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    margin: 5,
    fontWeight: "bold",
    color: "#fff",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ffffff3d",
    borderRadius: 8,
    backgroundColor: "#1e1e1e",
    overflow: "hidden",
    justifyContent: "center",
    height: 50,
  },
  picker: {
    color: "#fff",
  },
});