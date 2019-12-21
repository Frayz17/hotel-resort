import React from 'react';
import {
  RoomBlock,
  RoomInfo,
  RoomImgBlock,
  RoomLink,
  RoomPriceBlock
} from './styled';
import defaultImg from 'assets/images/room-1.jpeg';

export default React.memo(({ room }) => {
  const { name, slug, images, price } = room;

  return (
    <RoomBlock>
      <RoomImgBlock>
        <img src={images[0] || defaultImg} alt="single room" />

        <RoomPriceBlock>
          <h6>${price}</h6>
          <p>per night</p>
        </RoomPriceBlock>

        <RoomLink to={`/rooms/${slug}`}>features</RoomLink>

        <RoomInfo>{name}</RoomInfo>
      </RoomImgBlock>
    </RoomBlock>
  );
});
