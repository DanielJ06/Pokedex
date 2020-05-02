import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons'

import pokeball from '../../assets/Pokeball.png';

import {
  Card,
  Info,
  Number,
  PokemonName,
  Types,
  TypeName,
  TypesContainer,
  Pokemon
} from './styles';

export default function PokemonCard(props) {
  return (
    <Card>
        <Info>
            <Number>#001</Number>
            <PokemonName>{props.name}</PokemonName>
            <TypesContainer>
                <Types style={{ backgroundColor: '#62B957' }} >
                <FontAwesome5 name="leaf" size={15} color="#fff" />
                <TypeName>Grass</TypeName>
                </Types>
                <Types>
                <FontAwesome5 name="skull" size={15} color="#fff" />
                <TypeName>Poison</TypeName>
                </Types>
            </TypesContainer>
        </Info>
        <Pokemon source={props.img} />
        <Pokemon source={pokeball} />
    </Card>
  );
}
