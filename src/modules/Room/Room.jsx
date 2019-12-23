import React from 'react';
import {
  ShadowBlock,
  TypographyInfo,
  RoomImgBlock,
  FadeCenterLink,
  PriceBlock
} from './styled';
import defaultImg from 'assets/images/room-1.jpeg';

export default React.memo(({ room }) => {
  const { name, slug, images, price } = room;

  return (
    <ShadowBlock>
      <RoomImgBlock>
        <img src={images[0] || defaultImg} alt='single room' />

        <PriceBlock>
          <h6>${price}</h6>
          <p>per night</p>
        </PriceBlock>

        <FadeCenterLink to={`/rooms/${slug}`}>features</FadeCenterLink>

        <TypographyInfo>{name}</TypographyInfo>
      </RoomImgBlock>
    </ShadowBlock>
  );
});
