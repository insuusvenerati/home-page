import { Nav } from "~/components/Nav";
import beholdWebm from "../assets/behold.webm";
import beholdMp4 from "../assets/behold.mp4";
import { Container } from "~/components/Container";
import { Card } from "~/components/Card";
import { Accordion } from "~/components/Accordion/Accordion";

export default function Index() {
  return (
    <>
      <Nav />

      <Container>
        <Card no-padding>
          <video playsInline autoPlay loop={true} muted className="responsive medium-elevate">
            <source src={beholdWebm} type="video/webm" />
            <source src={beholdMp4} type="video/mp4" />
          </video>
        </Card>

        <Accordion footerText="this is a footer" leftIconUrl="/favicon.ico" headerText="Header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupILayoutt non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupILayoutt non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Accordion>
      </Container>
    </>
  );
}
