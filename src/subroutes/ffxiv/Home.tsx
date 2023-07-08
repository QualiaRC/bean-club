import Banner1 from "../../res/img/group-p4s.png";
import Banner4 from "../../res/img/group-p8s.png";
import Banner3 from "../../res/img/group-p12s.png";
import Banner2 from "../../res/img/group-map.png";

import CharacterCard from "./components/CharacterCard";
import { eIcon } from "./components/Icon";
import { useEffect, useState } from "react";

const MEMBERS = [
  { firstName: "Mesmerith", lastName: "Luminas", color: "#223862", description: "Designated Danger Dorito (DDD). Tank stance is in his opener.", jobIcon: eIcon.PLD, image: "/img/member_mesmerith.png" },
  { firstName: "Dylise", lastName: "Peldecloud", color: "#223862", description: "Actually decided to come back to Bean Club for some reason.", jobIcon: eIcon.DRK, image: "/img/member_dylise.png" },
  { firstName: "Fleurette", lastName: "Jantelloux", color: "#3b6629", description: "Super clutch heals, enabler of triple energy drain cohealers.", jobIcon: eIcon.AST, image: "/img/member_fleurette.png" },
  { firstName: "Jarom", lastName: "Ezona", color: "#3b6629", description: "Literally the same person as David. Nothing else to say.", jobIcon: eIcon.SGE, image: "/img/member_jarom.png" },
  { firstName: "Dema", lastName: "Morgendammerung", color: "#653535", description: "Favorite verb is swish-swish. Perpetually stuck in The Goblet.", jobIcon: eIcon.SAM, image: "/img/member_dema.png" },
  { firstName: "David", lastName: "Bunnyman", color: "#653535", description: "Literally the same person as Jarom. Nothing else to say.", jobIcon: eIcon.DRG, image: "/img/member_david.png" },
  { firstName: "Zenith", lastName: "Wright", color: "#653535", description: "Fearless leader, frog man, loves napping. Reliant on NoClippy to function.", jobIcon: eIcon.MCH, image: "/img/member_zenith.png" },
  { firstName: "Azera", lastName: "Melia", color: "#653535", description: "Hates everything. Refuses to play red mage.", jobIcon: eIcon.RDM, image: "/img/member_azera.png" }
];

function Home() {
  const [banner, setBanner] = useState(Banner1);

  useEffect(() => {
    const banners = [Banner1, Banner2, Banner3, Banner4].map((b: string) => {
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
      <header className="home-header" style={{ backgroundImage: `url(${banner})` }}>
        <h1 style={{ backgroundImage: `url(${banner})` }}>
          Final Fantasy XIV<br />Bean Club
        </h1>
      </header>

      <div className="home-content">
        <div className="section">
          <h1>Welcome to Bean Club!</h1>
          <p>Final Fantasy XIV resources, guides and more, all in one convenient location.</p>
        </div>

        <div className="section members">
          <h1>Current Raid Group</h1>
          <div className="character-cards">
            {
              MEMBERS.map(m => {
                return <CharacterCard key={m.firstName} firstName={m.firstName} lastName={m.lastName} color={m.color} description={m.description} job={m.jobIcon} image={m.image} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;