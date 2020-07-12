import React, { useState } from 'react';
import { Switch } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import creditcard from '../../images/credit-card.png';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  ActionButton,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  CardAction,
  Circle,
  CardActionLabel,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

const Wallet: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  /**
   * toggle balance visibility
   */
  function handleVisibility(): void {
    setIsVisible(prevState => !prevState);
  }

  /**
   * toggle use balance
   */
  function handleUseBalance(): void {
    setUseBalance(prevState => !prevState);
  }

  return (
    <Wrapper>
      <Header
        colors={useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? '160.138,20' : '----'}</Bold>
            </Value>
            <EyeButton onPress={handleVisibility}>
              <Feather
                name={isVisible ? 'eye' : 'eye-off'}
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <ActionButton>
              <MaterialCommunityIcons name="cash-plus" size={25} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </ActionButton>
            <ActionButton>
              <MaterialCommunityIcons
                name="bank-outline"
                size={25}
                color="#fff"
              />
              <ActionLabel>Retirar</ActionLabel>
            </ActionButton>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleUseBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre seu cartão de crédito para fazer pagamento mesmo quando
                não tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>
            <Img source={creditcard} resizeMode="contain" />
          </CardBody>
          <CardAction>
            <Circle>
              <Feather name="plus" size={28} color="#0db060" />
            </Circle>
            <CardActionLabel>Adicionar cartão de crédito</CardActionLabel>
          </CardAction>
        </Card>

        <UseTicketButton>
          <MaterialCommunityIcons
            name="ticket-outline"
            size={20}
            color="#0db060"
          />
          <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButton>
      </PaymentMethods>
    </Wrapper>
  );
};

export default Wallet;
