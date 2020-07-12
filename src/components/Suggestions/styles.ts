import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: #1e222b;
`;

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
}))`
  background-color: #1e222b;
  height: 130px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image``;

export const LabelContainer = styled.View`
  height: 40px;
  margin-top: 8px;
  justify-content: center;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 190px;
  padding: 10px;
`;

export const TabActive = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
`;

export const TabLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
