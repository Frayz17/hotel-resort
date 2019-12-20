import React from 'react';
import offersData from './offersData';
import SectionTitle from 'modules/SectionTitle';
import {
  OfferIcon,
  OffersParagraph,
  OffersSection,
  OffersTitle,
  OfferWrapper
} from './styled';

export default () => {
  return (
    <OffersSection>
      <SectionTitle title={'services'} />

      <OfferWrapper>
        {offersData.map((item) => {
          return (
            <article key={`item-${item.title}`}>
              <OfferIcon>{item.icon}</OfferIcon>
              <OffersTitle>{item.title}</OffersTitle>
              <OffersParagraph>{item.info}</OffersParagraph>
            </article>
          );
        })}
      </OfferWrapper>
    </OffersSection>
  );
};
