import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { chiledren } = props;
  return (
    <>
      <Header />
      {chiledren}
    </>
  );
};
