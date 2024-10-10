import { CustomNavbar } from "lab6/components";
import { Container } from "react-bootstrap";

const PracticeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <CustomNavbar />
      <Container>{children}</Container>
    </>
  );
};

export default PracticeLayout;
