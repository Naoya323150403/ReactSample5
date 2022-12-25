import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

export const DefaultLayout = (props) => {
  const { chiledren } = props;
  return (
    <>
      <Header />
      {chiledren}
      <Footer />
    </>
  );
};
