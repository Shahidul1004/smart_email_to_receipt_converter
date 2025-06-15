import { memo } from "react";
import { InputEmailContainer, InputEmailHeader, StyledTextField } from "./InputEmail.styles";

const InputEmail = () => {
  return (
    <InputEmailContainer>
      <InputEmailHeader>Paste email body (plain-text)</InputEmailHeader>
      <StyledTextField rows={10} multiline />
    </InputEmailContainer>
  );
};

export default memo(InputEmail);
