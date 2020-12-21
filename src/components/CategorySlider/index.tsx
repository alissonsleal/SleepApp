import React from 'react';

import { Container, CategoryContainer, Text } from './styles';

interface CategoriesProps {
  categories: Array<string>;
}

const CategorySlider: React.FC<CategoriesProps> = ({ categories, ...rest }) => {
  return (
    <Container>
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
