import { PrimaryButton } from "./components/atoms/button/PrimaryButtons";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SarchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";

import { BrowserRouter } from "react-router-dom";
import "./styles.css";

const user = {
  name: "あああ",
  email: "aa.com",
  phone: "9090",
  image: "https://source.unsplash.com/%E5%86%99%E7%9C%9F/T-0EW-SEbsE",
  company: {
    name: "aaaaa"
  },
  website: "aaaa"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>Test</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SarchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
