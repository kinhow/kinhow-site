import { Header } from ".";
import { ComponentWithChildrenType } from "@/types";

const Layout = ({ children }: ComponentWithChildrenType) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout;
