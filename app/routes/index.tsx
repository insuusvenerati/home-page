import { Link } from "@remix-run/react";
import { Accordion } from "~/components/Accordion/Accordion";
import { Button } from "~/components/Button";
import { Container } from "~/components/Container";
import beholdMp4 from "../assets/behold.mp4";

export default function Index() {
  return (
    <>
      <article
        style={{ opacity: 0.9, width: 1080, top: 25 }}
        className="large-elevate center fixed top"
      >
        <div className="row">
          <img src="/favicon.ico" alt="" className="medium" />
          <div className="row">
            <Button>Item 1</Button>
            <h5>Item 2</h5>
            <h5>Item 3</h5>
            <h5>Item 4</h5>
            <Link to="/">
              <h5 className="right">Item 5</h5>
            </Link>
          </div>
        </div>
      </article>

      <div style={{ zIndex: -1 }}>
        <video
          style={{
            width: "100%",
            objectFit: "cover",
            height: "90vh",
            maxHeight: 1050,
            minHeight: 800,
            position: "relative",
          }}
          playsInline
          autoPlay
          loop={true}
          muted
        >
          <source src={beholdMp4} type="video/mp4" />
        </video>
      </div>
      <Container>
        <Accordion leftIconUrl="/favicon.ico" headerText="Header">
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
          <Accordion.Footer fixed>Footer Text</Accordion.Footer>
        </Accordion>
      </Container>
    </>
  );
}
