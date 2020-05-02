import React from 'react';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import pokemon1 from '../../assets/bulbasaur.png';
import pokemon2 from '../../assets/ivysaur.png';
import pokemon3 from '../../assets/venusaur.png';

import PokemonCard from '../../components/Card';
import BottomSheet from '../../components/BottomSheet';

import {
  Container,
  Header,
  Title,
  Description,
  Input,
  Filters,
  List,
  FilterBtn,
  PokemonBtn
} from './styles';

export default function Main() {
  const navigation = useNavigation();

  function navigateToAbout() {
    navigation.navigate('About');
  }

  return (
    <Container>
      <Header>
        <Filters>
          <FilterBtn>
            <Feather style={{ marginRight : 25 }} name="layout" size={20} color="#17171B" />
          </FilterBtn>

          <FilterBtn>
          <Feather style={{ marginRight: 25 }} name="sliders" size={20} color="#17171B" />
          </FilterBtn>

          <FilterBtn>
            <Feather name="layers" size={20} color="#17171B" />
          </FilterBtn>
        </Filters>
        <Title>Pokédex</Title>
        <Description>
          Search for Pokémon by name
          or using the National Pokédex number.
        </Description>
        <Input placeholder='What Pokémon are you looking for?' />
      </Header>
      <List>
        <PokemonBtn onPress={navigateToAbout}>
          <PokemonCard img={pokemon1} name='Bulbasaur' />
        </PokemonBtn>

        <PokemonBtn>
          <PokemonCard img={pokemon2} name='Ivisaur' />
        </PokemonBtn>

        <PokemonBtn>
        <PokemonCard img={pokemon3} name='Venusaur' />
        </PokemonBtn>

        <PokemonBtn>
        <PokemonCard img={pokemon1} name='Bulbasaur' />
        </PokemonBtn>
      </List>
    </Container>
  );
}
