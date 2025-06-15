import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export const InputEmailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputEmailHeader = styled(Typography)`
  && {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    padding: 16px;
    padding-right: 4px;
    background-color: #f9f9f9;
    border-radius: 8px;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    white-space: pre-wrap; /* Preserves line breaks */
  }
`;
