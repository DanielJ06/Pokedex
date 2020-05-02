import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #8BBE8A;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 95px;
  padding: 35px;
  align-items: center;
`;

export const PokemonImg = styled.Image`
  height: 125px;
  width: 125px;
`;

export const PokemonDesc = styled.View`
  margin-left: 25px;
`;

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

export const SectionArea = styled.View`
  margin-top: 35px;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Section = styled.TouchableOpacity``;

export const SectionText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

export const Status = styled.ScrollView`
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: 100%;
  padding: 40px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #747476;
`;

export const CategorieType = styled.Text`
  margin-top: 30px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #62b957;
`;

export const PokeData = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 12px;
  line-height: 14px;
  font-weight: bold;
`;

export const Details = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #747476;
`;
