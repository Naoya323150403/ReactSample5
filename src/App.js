import { PrimaryButton } from "./components/atoms/button/PrimaryButtons";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SarchInput } from "./components/molecules/SearchInput";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SarchInput />
    </div>
  );
}
