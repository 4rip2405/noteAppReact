import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import CustomButton from '../components/customButton'

const EditNote = ({ currentNote, setCurrentPage, editNote }) => {
  const [title, setTitle] = useState(currentNote.title);
  const [desc, setDesc] = useState(currentNote.desc);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={desc}
        onChangeText={setDesc}
      />
      <CustomButton
        backgroundColor="#4CAF50"
        color="#fff"
        text="Save"
        width="100%"
        onPress={() => {
          editNote(currentNote.id, title, desc);
          setCurrentPage('home');
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
})

export default EditNote