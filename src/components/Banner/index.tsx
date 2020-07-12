import React from 'react';

import img13 from '../../images/13.png';

import { Container, Details, Img, Title, Description } from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
          Mantenha suas parcerias em dia,use o PicPay fara fazer suas cobranças
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
};

export default Banner;
