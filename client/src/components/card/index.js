import React, { createContext, useState } from 'react';
const FeatureContext = createContext();

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState(false);

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setShowFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  <Group {...restProps}>{children}</Group>;
};
Card.Title = function CardTitle({ children, ...restProps }) {
  <Title {...restProps}>{children}</Title>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  <Entities {...restProps}>{children}</Entities>;
};

Card.Item = function CardGroup({ item, children, ...restProps }) {
  <Item {...restProps}>{children}</Item>;
};

Card.Image = function CardImage({ ...restProps }) {
  <Image {...restProps} />;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  <Meta {...restProps}>{children}</Meta>;
};

Card.Subtitle = function CardSubtitle({ children, ...restProps }) {
  <Subtitle {...restProps}>{children}</Subtitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  <Text {...restProps}>{children}</Text>;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } =
    useContext(FeatureContext);

  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose>
          {' '}
          onClick={() => setShowFeature(false)}
          <FontAwesomeIcon icon={faTimes} />
        </FeatureClose>

        <Group margin="30px 0" flex-direction="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};
