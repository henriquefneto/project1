import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import DateForm from "./components/DateForm";
import FormInput from "./components/FormInput";
import Scrollable from "./screen-wrappers/Scrollable";
import { useEffect, useState } from "react";
import Fullscreen from "./screen-wrappers/Fullscreen";



export default function App() {

const [isLoading, setIsLoading] = useState<boolean>(true);

useEffect(() => {
  // Set timeout to hide loader after 3 seconds
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  // Cleanup timer to prevent memory leaks
  return () => clearTimeout(timer);
}, []);

  if (isLoading) {
    return (
      <Fullscreen>
        <ActivityIndicator size="large" color="#0000ff" />
      </Fullscreen>
    );
  }
  return (
    <Scrollable>
      <Header />
      <FormInput label="Name" asterisk />
      <FormInput label="CPF" asterisk />
      <FormInput label="Blood Type" />
      <DateForm />
    </Scrollable>
  );
}