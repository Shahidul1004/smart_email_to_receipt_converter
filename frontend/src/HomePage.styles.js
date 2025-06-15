import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const HomePageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const PlayGround = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`;

export const Title = styled(Typography)`
  && {
    font-size: 2rem;
    font-weight: 500;
  }
`