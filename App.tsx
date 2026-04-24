import { StyleSheet, Text, View } from 'react-native';
import Fullscreen from './screen-wrappers/Fullscreen';
import Header from './components/Header';
import DateForm from './components/DateForm';
import FormInput from './components/FormInput';

export default function App() {
  return (
    <Fullscreen>
      <Header/>
      <FormInput label='Name'/>
      <FormInput label='CPF'/>
      <FormInput label='Blood Type'/>
      <DateForm/>
    </Fullscreen>
  );
}

const styles = StyleSheet.create({

});
