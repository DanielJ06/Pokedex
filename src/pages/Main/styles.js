import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    padding: 40px;
    margin-bottom: 5px;
`;

export const FilterBtn = styled.TouchableOpacity``;

export const Filters = styled.View`
    justify-content: flex-end;
    flex-direction: row;
    margin-top: 42px;
`;

export const Title = styled.Text`
    margin-top: 38px;
    color: #17171B;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
`;

export const Description = styled.Text`
    margin-top: 10px;
    color: #747476;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
`;

export const Input = styled.TextInput`
    margin-top: 25px;
    padding: 20px 45px;
    align-self: stretch;
    border-radius: 10px;
    height: 60px;
    background-color: #F2F2F2;
`;

export const List = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    padding: 40px;
`;

export const PokemonBtn = styled.TouchableOpacity``;
