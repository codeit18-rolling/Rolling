import { ALL_CARD_LIST } from "../MockData";
import HeaderService from "../features/HeaderService/HeaderService";

function Home() {
  return (
    <>
      <HeaderService recipients={ALL_CARD_LIST.results[4]} />
    </>
  );
}

export default Home;
