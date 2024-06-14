import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/customButton';

const NoteDetails = ({ currentNote, setCurrentPage }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{currentNote.title}</Text>
    <Text style={styles.desc}>{currentNote.desc}</Text>
    <CustomButton
      backgroundColor="#4CAF50"
      color="#fff"
      text="Back"
      width="100%"
      onPress={() => setCurrentPage('home')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default NoteDetails;