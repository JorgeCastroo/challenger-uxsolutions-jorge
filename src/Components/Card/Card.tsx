import React from "react";
import * as S from "./Card.styles";
import color from "../../styles/theme";
import { TouchableOpacityProps } from "react-native";

interface ICard extends TouchableOpacityProps {
  date: string;
  title: string;
  description: string;
  legislation: string;
  type: string;
  startTime: string;
  endTime: string;
  variableDates: {};
  color: string;
}

const Card: React.FC<ICard> = ({
  title,
  type,
  date,
  description,
  legislation,
  variableDates,
  color,
  ...props
}) => {
  return (
    <S.Container color={color} {...props}>
      <S.Title>{title}</S.Title>
      <S.SectionType>
        <S.Title>{type}</S.Title>
        <S.Title>{date}</S.Title>
      </S.SectionType>
      <S.SectionDescription>
        <S.Title>Descrição</S.Title>
        <S.Info>{description}</S.Info>
      </S.SectionDescription>
      <S.SectionDescription>
        <S.Title>Legislação</S.Title>
        <S.Info>{legislation}</S.Info>
      </S.SectionDescription>
      {Object.keys(variableDates).length > 0 ? (
        <S.Title>Datas variáveis</S.Title>
      ) : (
        <S.Title />
      )}

      <S.SectionVariables horizontal={true}>
        {Object.keys(variableDates).map((dates) => (
          <S.Info>{dates}</S.Info>
        ))}
      </S.SectionVariables>
    </S.Container>
  );
};

export default Card;
