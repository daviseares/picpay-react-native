import styled from 'styled-components/native';
import { Platform } from 'react-native';

interface Props {
  bgColor: string;
}

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    // alignItems: 'center',
    paddingLeft: 16,
  },
}))`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity<Props>`
  background: ${({ bgColor }) => bgColor};
  width: 160px;
  height: 200px;
  border-radius: 8px;
  padding: 15px;
  margin-right: 10px;
  justify-content: space-between;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: ${Platform.OS === 'ios' ? '800' : 'bold'};
  text-align: left;
`;
export const Img = styled.Image`
  align-self: center;
`;
