import React from 'react';
import { useContext } from 'react';
import { RoomContext } from 'Context';

import Section from 'components/Section';
import Block, { BlockFlex } from 'components/Block';
import SectionTitle from 'modules/SectionTitle';
import {
  FilterForm,
  FormControl,
  FormGroupLabel,
  SingleExtraLabel,
  SizeInput,
  FormGroup
} from 'components/Form';

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = getUnique(rooms, 'type');
  // add all
  types = ['all', ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <Section>
      <SectionTitle title='search rooms' />
      <FilterForm>
        {/* select type */}
        <FormGroup>
          <FormGroupLabel htmlFor='type'>room type</FormGroupLabel>
          <FormControl
            name='type'
            id='type'
            onChange={handleChange}
            value={type}>
            {types}
          </FormControl>
        </FormGroup>
        {/* end of select type */}
        {/* guests  */}
        <FormGroup>
          <FormGroupLabel htmlFor='capacity'>Guests</FormGroupLabel>
          <select
            name='capacity'
            id='capacity'
            onChange={handleChange}
            className='form-control'
            value={capacity}>
            {people}
          </select>
        </FormGroup>
        {/* end of guests */}
        {/* room price */}
        <FormGroup>
          <FormGroupLabel htmlFor='price'>room price ${price}</FormGroupLabel>
          <SizeInput
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </FormGroup>
        {/* end of room price*/}
        {/* size */}
        <FormGroup>
          <FormGroupLabel htmlFor='price'>room size </FormGroupLabel>
          <BlockFlex>
            <SizeInput
              type='number'
              name='minSize'
              value={minSize}
              onChange={handleChange}
            />
            <SizeInput
              type='number'
              name='maxSize'
              value={maxSize}
              onChange={handleChange}
            />
          </BlockFlex>
        </FormGroup>
        {/* end of select type */}
        {/* extras */}
        <FormGroup>
          <Block>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
            <SingleExtraLabel htmlFor='breakfast'>breakfast</SingleExtraLabel>
          </Block>
          <Block>
            <input
              type='checkbox'
              name='pets'
              checked={pets}
              onChange={handleChange}
            />
            <SingleExtraLabel htmlFor='breakfast'>pets</SingleExtraLabel>
          </Block>
        </FormGroup>
        {/* end of extras type */}
      </FilterForm>
    </Section>
  );
};

export default RoomsFilter;
