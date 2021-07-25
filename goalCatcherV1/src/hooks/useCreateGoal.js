import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Toast } from 'teaset';
import { createGoal, fetchFrequency } from '../services/goal';

export default function useCreateGoal() {
  const [name, setName] = useState('');
  const [description, setDescirption] = useState('');
  const [frequency, setFrequency] = useState(0);
  const [frequencyItem, setFrequencyItem] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchFrequency().then(result => {
      setFrequencyItem(result);
    });
  }, []);

  const validate = () => {
    if (name === '') {
      Toast.fail('The GoalName has no value');
      return false;
    }
    if (description === '') {
      Toast.fail('The Description has no value');
      return false;
    }
    return true;
  };

  const submit = () => {
    if (validate()) {
      createGoal({
        name,
        intro: description,
        frequency,
      }).then(() => {
        Toast.success('Success');
        setName('');
        setDescirption('');
        navigation.goBack();
      });
    }
  };

  return {
    submit,
    description,
    setDescirption,
    name,
    setName,
    frequency,
    setFrequency,
    frequencyItem,
  };
}
