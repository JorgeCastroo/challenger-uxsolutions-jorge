import styled from "styled-components/native";
import normalize from "react-native-normalize";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Form = styled.View`
  flex: 1;
`;
export const SectionTop = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${normalize(50)}px ${normalize(16)}px ${normalize(50)}px
    ${normalize(16)}px;
`;

export const TitleTop = styled.Text`
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.lato_black};
  font-size: ${normalize(22)}px;
`;

export const Errors = styled.Text`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.danger};
  font-weight: 500;
  font-size: ${normalize(14)}px;
  margin-bottom: ${normalize(20)}px;
`;

export const ContainerScroll = styled.ScrollView`
  width: 100%;
`;

export const Padding = styled.View`
  width: 100%;
  align-items: center;
  padding-left: ${normalize(25)}px;
  padding-right: ${normalize(25)}px;
`;

export const SectionBottom = styled.View`
  width: 100%;
  height: 100px;
  border-top-left-radius: ${normalize(20)}px;
  border-top-right-radius: ${normalize(20)}px;
  border-top-width: ${normalize(2.5)}px;
  border-top-color: ${({ theme }) => theme.colors.gray_one};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${normalize(20)}px;
`;
