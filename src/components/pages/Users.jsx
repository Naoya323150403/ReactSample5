import styled from "styled-components";
import { SarchInput } from "../molecules/SearchInput";
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

export const Users = () => {
  return (
    <Scontainer>
      <h2>ユーザー一覧</h2>
      {user.company}
      <SarchInput />
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
