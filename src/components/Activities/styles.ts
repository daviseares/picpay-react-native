import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 15px;
  padding: 0 16px;
`;

export const Header = styled.View`
  height: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 118px;
`;

export const TabActive = styled.View`
  border-bottom-color: #10c86e;
  border-bottom-width: 2px;
`;

export const TabLabelActive = styled.Text`
  color: #10c86e;
  font-size: 16px;
  font-weight: bold;
`;
export const TabLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Card = styled.View`
  background-color: #1e222b;
  border-radius: 8px;
  margin-top: 10px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 20px;
`;

export const Details = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Transaction = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #10c86e;
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 1px;
  height: 13px;
  background: #ffffff;
  margin: 0 10px;
`;

export const Date = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
`;

export const OptionLabel = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 5px;
`;
