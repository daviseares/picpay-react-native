import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import Activities from '../../components/Activities';
import Suggestions from '../../components/Suggestions';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

import {
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  Wrapper,
} from './styles';

const Home: React.FC = () => (
  <Wrapper>
    <Container>
      <Header>
        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

        <BalanceContainer>
          <BalanceTitle>Meu Saldo</BalanceTitle>
          <Balance>R$ 160.138,20</Balance>
        </BalanceContainer>

        <Octicons name="gift" size={30} color="#10c86e" />
      </Header>

      <Suggestions />

      <Activities />

      <Tips />

      <Banner />
    </Container>
  </Wrapper>
);

export default Home;
