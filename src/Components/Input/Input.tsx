import React from "react";
import { IInput } from "./Input.interface";
import * as S from "./Input.styles";

const Input: React.FC<IInput> = ({ label, icon, ...props }) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...props} />
    </S.Container>
  );
};

export default Input;
