import React from 'react';
import { useParams } from 'react-router-dom';
import { RoomContext } from 'Context';
import Jumbotron from 'modules/Jumbotron';
import Banner from 'modules/Banner';

import { LinkPrimary } from 'components/Link';
import { BlockError } from 'components/Block';
import Typography, {
  TypographyTitle3,
  TypographyTitle6
} from 'components/Typography';
import Section from 'components/Section';
import {
  BlockImgContainer,
  BlockInfoContainer,
  titleInfoStyle,
  UlGridContainer
} from './styled';
import defaultBackgroung from 'assets/images/room-1.jpeg';

export default React.memo((props) => {
  const [curSlug] = React.useState(useParams().slug);
  const [defaultBcg] = React.useState(defaultBackgroung);

  const context = React.useContext(RoomContext);

  const { getRoom, rooms } = context;
  const room = getRoom(curSlug, rooms);

  if (!room) {
    return (
      <BlockError>
        <TypographyTitle3> no such room could be found...</TypographyTitle3>
        <LinkPrimary to='/rooms'>back to rooms</LinkPrimary>
      </BlockError>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = room;

  const [main, ...defaultImages] = images;

  return (
    <>
      <Jumbotron img={main || defaultBcg} cssStr={`min-height: 60vh;`}>
        <Banner title={`${name} room`}>
          <LinkPrimary to='/rooms'>back to rooms</LinkPrimary>
        </Banner>
      </Jumbotron>

      <Section style={{ padding: '5rem 0 0 0' }}>
        <BlockImgContainer>
          {defaultImages.map((item, index) => (
            <img
              style={{
                width: '100%',
                display: 'block'
              }}
              key={index}
              src={item}
              alt={name}
            />
          ))}
        </BlockImgContainer>

        <BlockInfoContainer>
          <article style={{ margin: '1rem 0' }}>
            <TypographyTitle3 style={titleInfoStyle}>details</TypographyTitle3>
            <Typography style={{ lineHeight: '1.5' }}>{description}</Typography>
          </article>

          <article style={{ margin: '1rem 0' }}>
            <TypographyTitle3 style={titleInfoStyle}>info</TypographyTitle3>
            <TypographyTitle6 style={titleInfoStyle}>
              price : ${price}
            </TypographyTitle6>
            <TypographyTitle6 style={titleInfoStyle}>
              size : {size} SQFT
            </TypographyTitle6>

            <TypographyTitle6 style={titleInfoStyle}>
              max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </TypographyTitle6>

            <TypographyTitle6 style={titleInfoStyle}>
              {pets ? 'pets allowed' : 'no pets allowed'}
            </TypographyTitle6>

            <TypographyTitle6 style={titleInfoStyle}>
              {breakfast && 'free breakfast included'}
            </TypographyTitle6>
          </article>
        </BlockInfoContainer>
      </Section>

      <Section
        style={{ width: '80vw', margin: '0 auto 3rem auto', padding: '0' }}>
        <TypographyTitle6 style={titleInfoStyle}>extras </TypographyTitle6>
        <UlGridContainer>
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </UlGridContainer>
      </Section>
    </>
  );
});
