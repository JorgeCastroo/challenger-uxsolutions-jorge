import React from "react";
import { IButton } from "./Button.interface";
import * as S from "./Button.styles";

const Button: React.FC<IButton> = ({ type, text, ...props }) => {
  return (
    <S.Container>
      <S.Button {...props}>
        <S.Title>{text}</S.Title>
      </S.Button>
    </S.Container>
  );
};

export default Button;
