import "./styles.css";
import { Router } from "./router/Router";

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
  return <Router />;
}
