import React, { useState } from 'react';

import {
  Container,
  Option,
  Img,
  Label,
  LabelContainer,
  TabContainer,
  TabActive,
  TabLabel,
  Wrapper,
} from './styles';

import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';

interface Item {
  key: string;
  img: number;
  label: string;
}

const items: Item[] = [
  {
    key: String(Math.random()),
    img: img5,
    label: 'Central de Doações',
  },
  {
    key: String(Math.random()),
    img: img1,
    label: 'Recarga',
  },
  {
    key: String(Math.random()),
    img: img6,
    label: 'Pagar Contas',
  },
  {
    key: String(Math.random()),
    img: img7,
    label: 'Cobrar',
  },
  {
    key: String(Math.random()),
    img: img4,
    label: 'Sky',
  },
  {
    key: String(Math.random()),
    img: img2,
    label: 'Uber',
  },
  {
    key: String(Math.random()),
    img: img3,
    label: 'Passagens',
  },
];

const Suggestions: React.FC = () => {
  return (
    <Wrapper>
      <TabContainer>
        <TabActive>
          <TabLabel>Sugestões</TabLabel>
        </TabActive>
        <TabLabel>Favoritos</TabLabel>
      </TabContainer>
      <Container>
        {items.map(item => (
          <Option key={item.key}>
            <Img source={item.img} />
            <LabelContainer>
              <Label>{item.label}</Label>
            </LabelContainer>
          </Option>
        ))}
      </Container>
    </Wrapper>
  );
};
export default Suggestions;
