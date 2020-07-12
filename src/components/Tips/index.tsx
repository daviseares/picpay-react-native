import React from 'react';

import { Container, Option, Title, Img } from './styles';

import img8 from '../../images/08.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

interface Item {
  key: string;
  img: number;
  label: string;
  bgColor: string;
}

const items: Item[] = [
  {
    key: String(Math.random()),
    img: img12,
    label: 'Adicione dinheiro no picpay',
    bgColor: '#ba2776',
  },
  {
    key: String(Math.random()),
    img: img8,
    label: 'Pague suas contas sem sair de casa',
    bgColor: '#142c4a',
  },
  {
    key: String(Math.random()),
    img: img10,
    label: 'Pague um amigo à distância',
    bgColor: '#4139c8',
  },
  {
    key: String(Math.random()),
    img: img11,
    label: 'Saiba como pagar boleto',
    bgColor: '#00ab4b',
  },
];

const Tips: React.FC = () => {
  return (
    <Container>
      {items.map(item => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.label}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
};

export default Tips;
