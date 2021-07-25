import React from 'react';
import { StyleSheet, ImageBackground, View, ScrollView } from 'react-native';
import { Label, Input, Button, Select } from 'teaset';
import NavigationBar from '../../components/NavigationBar';
import bgImg from '../../images/loginbackground.png';
import { pxToDp } from '../../utils/stylesKits';
import useCreateGoal from '../../hooks/useCreateGoal';

const CreateGoal = () => {
  const {
    submit,
    name,
    setName,
    description,
    setDescirption,
    frequencyItem,
    frequency,
    setFrequency,
  } = useCreateGoal();
  return (
    <View style={styles.container}>
      <NavigationBar title="Create A Goal" />
      <ImageBackground source={bgImg} style={styles.imageBackground}>
        <ScrollView style={styles.scrollView}>
          <Label text="Goal Name:" size="lg" />
          <Input
            placeholder="Type your goal name here"
            size="lg"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <Label text="Description:" size="lg" />
          <Input
            placeholder="Type your description here"
            style={[styles.input, styles.descirptionInput]}
            multiline
            size="lg"
            value={description}
            onChangeText={setDescirption}
          />
          <Label text="Frequency:" size="lg" />
          <Select
            style={styles.select}
            placeholder="Select Frequency"
            size="lg"
            items={frequencyItem}
            getItemText={item => item.label}
            getItemValue={item => item.value}
            value={frequency}
            onSelected={item => {
              setFrequency(item.value);
            }}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Create"
              type="primary"
              style={styles.button}
              onPress={submit}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    paddingHorizontal: pxToDp(20),
    paddingVertical: pxToDp(10),
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: pxToDp(60),
    justifyContent: 'center',
  },
  button: {
    width: pxToDp(200),
    height: pxToDp(40),
    borderRadius: pxToDp(100),
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0)',
    textAlignVertical: 'top',
    marginVertical: pxToDp(10),
  },
  descirptionInput: {
    height: pxToDp(140),
  },
  select: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

export default CreateGoal;
