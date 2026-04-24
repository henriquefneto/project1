import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View>
      <Text style={styles.h1}>Umbrella</Text>
      <Text style={styles.h2}>Volunteer Registration</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 40
    },
    h2: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20
    },
})