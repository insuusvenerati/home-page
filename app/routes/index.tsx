export default function Index() {
  return (
    <>
      <nav className="left m l medium-elevate">
        <img alt="icon" src="https://www.beercss.com/favicon.png" className="circle margin" />
        <a>
          <i>home</i>
          <div>Home</div>
        </a>
        <a>
          <i>search</i>
          <div>Search</div>
        </a>
        <a>
          <i>share</i>
          <div>Share</div>
        </a>
        <a>
          <i>more_vert</i>
          <div>More</div>
        </a>
      </nav>

      <nav className="bottom s">
        <a>
          <i>home</i>
        </a>
        <a>
          <i>search</i>
        </a>
        <a>
          <i>share</i>
        </a>
        <a>
          <i>more_vert</i>
        </a>
      </nav>

      <main className="responsive">
        <img
          src="/beer_woman.jpg"
          className="responsive round large-elevate cover-fill"
          alt="beer and woman"
        />
        <article>
          <h3>Welcome</h3>
          <h5>The beer is ready!</h5>
        </article>

        <article>
          <button className="large-elevate responsive">Hello</button>
        </article>
      </main>
    </>
  );
}
