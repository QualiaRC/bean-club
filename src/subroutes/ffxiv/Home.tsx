import Banner1 from "../../res/img/group-p4s.png";
import Banner2 from "../../res/img/group-map.png";
import Banner3 from "../../res/img/group-p6s.png";
import Banner4 from "../../res/img/group-p8s.png";

import MemberMesmerith from "../../res/img/member_mesmerith.png";
import MemberFaine from "../../res/img/member_faine.png";
import MemberCynthia from "../../res/img/member_cynthia.png";
import MemberFleurette from "../../res/img/member_fleurette.png";
import MemberZenith from "../../res/img/member_zenith.png";
import MemberDema from "../../res/img/member_dema.png";
import MemberAzera from "../../res/img/member_azera.png";
import MemberKas from "../../res/img/member_kas.png";

import CharacterCard from "./components/CharacterCard";
import { eIcon } from "./components/Icon";
import { useEffect, useState } from "react";

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
              <CharacterCard firstName="Mesmerith" lastName="Luminas" color="#223862" description="Designated Danger Dorito (DDD). Tank stance is in his opener." job={eIcon.PLD} image={MemberMesmerith} />
              <CharacterCard firstName="Faine" lastName="Esperia" color="#223862" description="Omni-tank, somehow knows every RP venue in the entire game." job={eIcon.WAR} image={MemberFaine} />
              <CharacterCard firstName="Cynthia" lastName="Ashmore" color="#3b6629" description="Greediest healer this side of the Mississippi. Unreasonably hates lalafells." job={eIcon.SCH} image={MemberCynthia} />
              <CharacterCard firstName="Fleurette" lastName="Jantelloux" color="#3b6629" description="Super clutch heals, enabler of triple energy drain cohealers." job={eIcon.WHM} image={MemberFleurette} />
              <CharacterCard firstName="Zenith" lastName="Wright" color="#653535" description="Fearless leader, frog man, loves napping." job={eIcon.MCH} image={MemberZenith} />
              <CharacterCard firstName="Dema" lastName="Morgendammerung" color="#653535" description="Favorite verb is swish-swish. Frequents Limsa Lominsa." job={eIcon.SAM} image={MemberDema} />
              <CharacterCard firstName="Azera" lastName="Melia" color="#653535" description="Banter is only good when he says it's good. Third healer, unless it's burst time." job={eIcon.RDM} image={MemberAzera} />
              <CharacterCard firstName="Kas" lastName="Ryujin" color="#653535" description="Resident scientist and Powerpoint master. Indifferent towards bunnies." job={eIcon.NIN} image={MemberKas} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;