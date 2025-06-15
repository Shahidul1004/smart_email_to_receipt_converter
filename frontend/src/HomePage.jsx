import { useSelector } from "react-redux";
import { InputEmail } from "./components";
import {
  Container,
  HomePageWrapper,
  PlayGround,
  Title,
} from "./HomePage.styles";
import { parseEmailSelector } from "./redux/slices/app/selectors";

const HomePage = () => {
  const x = useSelector(parseEmailSelector());
  console.log({ x });

  return (
    <HomePageWrapper>
      <Container>
        <Title>Welcome to smart email to receipt converter</Title>
        <PlayGround>
          <InputEmail />
          <InputEmail />
        </PlayGround>
      </Container>
    </HomePageWrapper>
  );
};

export default HomePage;
