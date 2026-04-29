import React, { useEffect, useState } from "react";
import { ActivityIndicator, Switch } from "react-native";
import Header from "./components/Header";
import DateForm from "./components/DateForm";
import FormInput from "./components/FormInput";
import FormButton from "./components/FormButton";
import Scrollable from "./screen-wrappers/Scrollable";
import Fullscreen from "./screen-wrappers/Fullscreen";
import BloodTypePicker from "./components/BloodTypePicker";
import TermsSwitch from "./components/TermsSwicth";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [fields, setFields] = useState({ name: "", cpf: "" });
  const [errors, setErrors] = useState({ name: "", cpf: "" });
  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
  const [bloodType, setBloodType] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const handleChange = (
    field: keyof typeof fields,
    text: string,
    min: number,
  ) => {
    setFields((prev) => ({ ...prev, [field]: text }));

    let error = "";
    if (text.length > 0 && text.length < min) {
      error = `Mínimo de ${min} caracteres.`;
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const onSubmit = () => {
    console.log("Form submitted:", {
      name: fields.name,
      cpf: fields.cpf,
      bloodType,
      dateOfBirth: dateOfBirth.toLocaleDateString("pt-BR"),
      termsAccepted,
    });
  };

  useEffect(() => {
    const requiredFieldsFilled =
      fields.name.trim().length >= 3 && fields.cpf.trim().length === 11;
    const noErrors = !errors.name && !errors.cpf;
    setIsFormValid(requiredFieldsFilled && noErrors && termsAccepted);
  }, [fields, errors, termsAccepted]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Fullscreen center>
        <ActivityIndicator size="large" color="#0000ff" />
      </Fullscreen>
    );
  }

  return (
      <Scrollable>
        <Header />
        <FormInput
          label="Name"
          asterisk
          value={fields.name}
          error={errors.name}
          onChangeText={(text) => handleChange("name", text, 3)}
        />
        <FormInput
          label="CPF"
          asterisk
          value={fields.cpf}
          error={errors.cpf}
          maxLength={11}
          numericOnly
          onChangeText={(text) => handleChange("cpf", text, 11)}
        />
        <BloodTypePicker value={bloodType} onChange={setBloodType} />
        <DateForm date={dateOfBirth} onChange={setDateOfBirth} />
        <TermsSwitch value={termsAccepted} onChange={setTermsAccepted} />
        <FormButton
          label="Confirm"
          onPress={onSubmit}
          disabled={!isFormValid}
        />
      </Scrollable>
  );
}
