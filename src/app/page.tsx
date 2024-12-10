import Blogs from "./components/Blog";
import Hero from "./components/Hero";
import Heroone from "./components/Heroone";
import Instagram from "./components/Instagram";
import Newarrivals from "./components/Newarrivals";
import TopPicks from "./components/TopPicks";



export default function Home() {
  return (
    <div>
      <Hero/>
      <TopPicks/>
      <Newarrivals/>
      <Heroone/>
      <Blogs/>
      <Instagram/>
    </div>
  );
}

