import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import { Linear, Label } from './styles';

interface ButtonProps {
  focused: boolean;
}

const PayButton: React.FC<ButtonProps> = ({ focused }) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Pay')}>
      <Linear
        colors={focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']}
        start={{ x: 1, y: 0.2 }}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? '#222' : '#fff'}
        />
        <Label focused={focused}>Pagar</Label>
      </Linear>
    </TouchableWithoutFeedback>
  );
};

export default PayButton;
