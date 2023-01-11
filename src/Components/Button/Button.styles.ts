import normalize from "react-native-normalize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${normalize(45)}px;
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${normalize(45)}px;
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: ${normalize(8)}px;
`;

export const Title = styled.Text`
  font-size: ${normalize(18)}px;
  color: ${({ theme }) => theme.colors.background};
`;
