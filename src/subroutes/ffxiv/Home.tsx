import Banner1 from "../../res/img/group-p4s.png";
import Banner2 from "../../res/img/group-map.png";
import Banner3 from "../../res/img/group-p6s.png";
import { useEffect, useState } from "react";

function Home() {
  const [banner, setBanner] = useState(Banner1);
  
  useEffect(() => {
    const banners = [Banner1, Banner2, Banner3].map((b: string) => {
      const image = new Image();
      image.src = b;
      return image;
    });

    const interval = setInterval(() => {
      banners.unshift(banners.pop() || new Image());
      setBanner(banners[0].src);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <header className="home-header" style={{backgroundImage: `url(${banner})`}}>
          <h1 style={{backgroundImage: `url(${banner})`}}>
            Final Fantasy XIV<br />Bean Club
          </h1>
      </header>

      <div className="section home-content">
        <h1>Welcome to Bean Club!</h1>
        <p>Final Fantasy XIV resources, guides and more, all in one convenient location.</p>
        <p>I do not know how to pad the rest of this page.</p> 
      </div>
    </>
  )
}

export default Home;