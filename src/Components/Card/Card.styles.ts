import normalize from "react-native-normalize";
import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  margin: ${normalize(10)}px;
  align-items: center;
  padding: ${normalize(10)}px;
  border: 2.5px solid ${(Props) => Props.color};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.lato_bold};
  font-size: ${normalize(18)}px;
  margin-bottom: ${normalize(10)}px;
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.lato_regular};
  font-size: ${normalize(16)}px;
  margin-bottom: ${normalize(10)}px;
`;

export const SectionType = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SectionDescription = styled.View`
  width: 100%;
  align-items: center;
`;

export const SectionVariables = styled.ScrollView`
  width: 100%;
  margin-top: ${normalize(20)}px;
`;
