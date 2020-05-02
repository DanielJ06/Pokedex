import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons'

import pokemon1 from '../../assets/bulbasaur.png';

import {
  Container,
  Header,
  PokemonImg,
  Number,
  PokemonDesc,
  PokemonName,
  TypesContainer,
  Types,
  TypeName,
  Status,
  Description,
  PokeData,
  Title,
  Details,
  CategorieType,
  SectionArea,
  Section,
  SectionText
} from './styles';

export default function About() {
  return (
    <Container>
      <Header>
        <PokemonImg source={pokemon1} />
        <PokemonDesc>
          <Number>#001</Number>
          <PokemonName>Bulbasaur</PokemonName>
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
        </PokemonDesc>
      </Header>

      <SectionArea>
        <Section>
          <SectionText>About</SectionText>
        </Section>
        <Section>
          <SectionText style={{ opacity: 0.5 }} >Stats</SectionText>
        </Section>
        <Section>
          <SectionText style={{ opacity: 0.5 }} >Evolution</SectionText>
        </Section>
      </SectionArea>

      <Status>
        <Description>
          Bulbasaur can be seen napping
          in bright sunlight. There is
          a seed on its back. By soaking
          up the sun's rays, the seed grows
          progressively larger.
        </Description>

        <>
        <CategorieType>Pokédex Data</CategorieType>
        <PokeData>
          <Title>Species</Title>
          <Details>Seed Pokémon</Details>
        </PokeData>
        <PokeData>
          <Title>Height</Title>
          <Details>0.7m (2′04″)</Details>
        </PokeData>
        <PokeData>
          <Title>Weight</Title>
          <Details>6.9kg (15.2 lbs)</Details>
        </PokeData>
        </>

        <>
        <CategorieType>Training</CategorieType>
        <PokeData>
          <Title>EV Yield</Title>
          <Details>1 Special Attack</Details>
        </PokeData>
        <PokeData>
          <Title>Catch Rate</Title>
          <Details>45 (5.9% with PokéBall, full HP)</Details>
        </PokeData>
        <PokeData>
          <Title>Base Friendship</Title>
          <Details>70 (normal)</Details>
        </PokeData>
        <PokeData>
          <Title>Base Exp</Title>
          <Details>64</Details>
        </PokeData>
        <PokeData>
          <Title>Growth Rate</Title>
          <Details>Medium Slow</Details>
        </PokeData>
        </>
      </Status>
    </Container>
  );
}
