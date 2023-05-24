import Wrapper from "./components/Wrapper/Wrapper";
import Screen from "./components/Screen/Screen";
import ButtonBox from "./components/NumberPad";
import Button from "./components/Buttons/Button";

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        <Button
          className=""
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default App;