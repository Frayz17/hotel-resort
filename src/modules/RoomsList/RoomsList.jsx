import React from 'react';
import Room from 'modules/Room';
import { BlockCenter } from './styled';
import Section from 'components/Section';
import { BlockEmptySearch } from 'components/Block';
import { TypographyTitle3 } from 'components/Typography';

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <BlockEmptySearch>
        <TypographyTitle3>
          unfortunately no rooms matched your search parameters
        </TypographyTitle3>
      </BlockEmptySearch>
    );
  }
  return (
    <Section>
      <BlockCenter>
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </BlockCenter>
    </Section>
  );
};

export default RoomsList;
