import { Button } from "~/components/Button";
import { Card } from "~/components/Card";
import { Nav } from "~/components/Nav";

export default function Index() {
  return (
    <>
      <Nav />

      <main className="responsive">
        <img
          src="/beer_woman.jpg"
          className="responsive round large-elevate"
          alt="beer and woman"
        />

        <Card>
          <Card.Header>
            <img className="responsive" src="/beer_woman.jpg" alt="test" />
          </Card.Header>
          this is some long text this is some long text this is some long text this is some long
          text this is some long text this is some long text this is some long text this is some
          long text this is some long text this is some long text this is some long text this is
          some long text this is some long text this is some long text this is some long text this
          is some long text this is some long text this is some long text this is some long text
          this is some long text this is some long text this is some long text this is some long
          this is some long text this is some long text this is some long text this is some long
          text this is some long text this is some long text this is some long text this is some
          long text this is some long text this is some long text this is some long text this is
          some long text this is some long text this is some long text this is some long text this
          is some long text this is some long text this is some long text this is some long text
          this is some long text this is some long text this is some long text this is some long
          <Card.Footer>This is the footer</Card.Footer>
        </Card>

        <Card>
          <Button>Hello</Button>
        </Card>
      </main>
    </>
  );
}
