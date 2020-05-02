import styled from 'styled-components/native';

export const Card = styled.View`
    margin-bottom: 20px;
    height: 115px;
    border-radius: 10px;
    padding: 20px;
    background-color: #8BBE8A;
    flex-direction: row;
`;

export const Info = styled.View``;

export const Number = styled.Text`
    font-size: 12px;
    line-height: 14px;
    font-weight: bold;
    color: #465a47;
`;

export const PokemonName = styled.Text`
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #fff;
`;

export const TypesContainer = styled.View`
    flex-direction: row;
`;

export const Types = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #A552CC;
    padding: 5px;
    border-radius: 3px;
    margin-top: 5px;
    margin-right: 5px;
`;

export const TypeName = styled.Text`
    margin-left: 5px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #fff;
`;

export const Pokemon = styled.Image`
    top: -45px;
    width: 130px;
    height: 130px;
    margin-left: 20px;
`
