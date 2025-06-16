import NavBar from "../components/common/NavBar";

interface Props {
  isLogin: boolean;
}

export const Applayout = ({ isLogin }: Props) => {
  return <NavBar isLogin={isLogin}></NavBar>;
};
