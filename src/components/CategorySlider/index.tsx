import React from 'react';

import { Container, CategoryContainer, Text, ActiveContainer } from './styles';

interface CategoriesProps {
  categories: Array<string>;
  active: string;
}

const CategorySlider: React.FC<CategoriesProps> = ({
  categories,
  active,
  ...rest
}) => {
  return (
    <Container>
      <ActiveContainer>
        <Text>{active}</Text>
      </ActiveContainer>
      {categories.map((category) => {
        return (
          <CategoryContainer key={category}>
            <Text>{category}</Text>
          </CategoryContainer>
        );
      })}
    </Container>
  );
};

export default CategorySlider;
