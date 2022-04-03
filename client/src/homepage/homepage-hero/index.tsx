import "./index.scss";
import { Search } from "../../ui/molecules/search";
import Mandala from "../../ui/molecules/mandala";

export function HomepageHero() {
  return (
    <div className="homepage-hero dark">
      <section>
        <h1>TechnoBureau</h1>
        <p>
          A System will provide technical information through guides and tools
          for various topic such as Linux, Docker, Ansible and other DevOps.
        </p>
        <Search id="hp-search" isHomepageSearch={true} />
      </section>
      <Mandala rotate={true} extraClasses="homepage-hero-bg" />
    </div>
  );
}
