import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import avatar from '../../images/avatar.png';

import {
  Container,
  Header,
  Title,
  TabContainer,
  TabActive,
  TabLabelActive,
  TabLabel,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  Details,
  CardFooter,
  Transaction,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

const Activities: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <TabContainer>
          <TabActive>
            <TabLabelActive>Todas</TabLabelActive>
          </TabActive>
          <TabLabel>Minhas</TabLabel>
        </TabContainer>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>@maateusilva</Bold> pagou a <Bold>Você</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <Details> ótimo curso! </Details>
        </CardBody>

        <CardFooter>
          <Transaction>
            <Value>R$ 1.500,00</Value>
            <Divider />

            <IonIcons name="people-outline" size={18} color="#fff" />
            <Date>Ontem</Date>
          </Transaction>
          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={18}
                color="#fff"
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <MaterialCommunityIcons
                name="heart-outline"
                size={18}
                color="#fff"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;
