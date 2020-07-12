import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  focused: boolean;
}

export const Linear = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text<Props>`
  color: ${({ focused }) => (focused ? '#222' : '#fff')};
  font-size: 12px;
`;
