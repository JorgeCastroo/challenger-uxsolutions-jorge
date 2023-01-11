import normalize from "react-native-normalize";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: ${normalize(10)}px;
  height: ${normalize(60)}px;
  width: 100%;
  background-color: #fff;
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  justify-content: center;
  flex-direction: column;
  padding-left: ${normalize(30)}px;
`;

export const Label = styled.Text`
  font-weight: 500;
  font-size: ${normalize(16)}px;

  color: ${({ theme }) => theme.colors.title_text};
`;

export const Input = styled.TextInput`
  width: 100%;
  color: ${({ theme }) => theme.colors.title_text};
  font-size: ${normalize(16)}px;
`;
