import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-elements';


const ProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('Parita Dey');
  const [gender, setGender] = useState('female');
  const [dob, setDob] = useState(new Date());
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleOk = () => {
    setShowModal(false);
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.profileIcon}>👤</Text>
        <Text style={styles.fullName}>{fullName}</Text>
      </View>

      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setGender('female')}
        >
          <Text style={{ marginRight: 5 , color:'#FFFFFF'}}>Male</Text>
          <Text style={{ color:'#AB2CBF'}}>{gender === 'male' ? '🔘' : '⚪'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setGender('female')}
        >
          <Text style={{ marginRight: 5 ,color:'#FFFFFF'}}>Female</Text>
          <Text style={{ color:'#AB2CBF'}}>{gender === 'female' ? '🔘' : '⚪'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={styles.input}>{dob.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <Picker
        selectedValue={state}
        style={styles.picker}
        onValueChange={(itemValue) => setState(itemValue)}
      >
        <Picker.Item label="Select State" value="" />
        <Picker.Item label="Kerala" value="Kerela" />
        <Picker.Item label="Delhi" value="Delhi" />
        <Picker.Item label="Maharashtra" value="Maharashtra" />
        <Picker.Item label="West Bengal" value="West Bengal" />
        {/* Add more states as needed */}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />

    <Button 
      title="Submit"
      buttonStyle={styles.button}
      titleStyle={styles.buttonText}
      onPress={handleSubmit} />
      
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Profile Information</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Full Name:</Text>
                <Text style={styles.tableValue}>{fullName}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Gender:</Text>
                <Text style={styles.tableValue}>{gender}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Date of Birth:</Text>
                <Text style={styles.tableValue}>{dob.toDateString()}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Address:</Text>
                <Text style={styles.tableValue}>{address}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>City:</Text>
                <Text style={styles.tableValue}>{city}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>State:</Text>
                <Text style={styles.tableValue}>{state}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableLabel}>Country:</Text>
                <Text style={styles.tableValue}>{country}</Text>
              </View>
            </View>
            <View style={styles.modalButtons}>
              <Button title="Close" onPress={() => setShowModal(false)} />
              <Button title="OK" onPress={handleOk} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#C5B3C8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    fontSize: 40,
  },
  fullName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonSubmit: {
    backgroundColor: '#B406CF',
    width: "65%",
    borderRadius: 20, // Adjust the value to get the desired roundness
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically

  },
  buttonText: {
    fontSize: 16,
    width: "90%",
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    color:'#FFFFFF',
    tintColor:'#FFFFFF'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  table: {
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tableLabel: {
    fontWeight: 'bold',
  },
  tableValue: {
    textAlign: 'right',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ProfileScreen;
