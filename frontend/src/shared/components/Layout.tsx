import type { ReactNode } from "react";
import { Container } from "react-bootstrap";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return <Container className="py-5">{children}</Container>;
};

export default Layout;
