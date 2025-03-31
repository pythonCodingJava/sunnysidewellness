import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ReviewCard from "./components/ReviewCard";
import Hero from "./hero";
import Footer from "./Footer";
import Background from "./Background";

function App() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 1470px)").matches)
      
      useEffect(() => {
        window
        .matchMedia("(min-width: 1470px)")
        .addEventListener('change', e => {
          console.log(e.matches);
          setMatches(e.matches);
        })
      }, []);
    
  const comp = () => {
    const rows = [];
    let span = 0.3;
    let index = -1;
    if(reviews.length%2 != 0){
      index = Math.floor(Math.random()*reviews.length/2)
    }
    for (let i = 0; i < reviews.length / 2; i++) {
      let ran = Math.random() * 2 - 1;
      ran = Math.max(ran, -ran);
      ran /= 2.5;
      ran += 0.35;
      rows.push(
        <div key={i+2000} style={{ display: "flex", flexDirection: "row" }}>
          <ReviewCard
            key={i+(i>index?1:0)}
            name={reviews[i+(i>index?1:0)].name}
            picture={reviews[i+(i>index?1:0)].pictures}
            place={reviews[i+(i>index?1:0)].place}
            stars={reviews[i+(i>index?1:0)].stars}
            review={reviews[i+(i>index?1:0)].reviews}
            width={ran}
            matches={matches}
          />
          <ReviewCard
            key={i + 1+(i>index?1:0)}
            name={reviews[i + 1+(i>index?1:0)].name}
            picture={reviews[i+1+(i>index?1:0)].pictures}
            place={reviews[i + 1+(i>index?1:0)].place}
            stars={reviews[i + 1+(i>index?1:0)].stars}
            review={reviews[i + 1+(i>index?1:0)].reviews}
            width={1 - ran}
            matches={matches}
          />
          {i==index?
          <ReviewCard
            key={i + 2}
            name={reviews[i + 2].name}
            picture={reviews[i+2].pictures}
            place={reviews[i + 2].place}
            stars={reviews[i + 2].stars}
            review={reviews[i + 2].reviews}
            width={1 - ran}
            matches={matches}
          />:<></>}
          
        </div>
      );
    }
    return <>{rows}</>;
  };

  const [reviews, setReviews] = useState([
    {
      name: "DaGunny Rivera",
      place: "California, USA",
      pictures:"dummy.png",
      stars: 5,
      reviews:
        "Ive noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes. The Doc has a way of hitting the right spots to help your wellness. I recommend their services with enthusiasm. Thank you.",
    },
    {
      name: "DaGunny Rivera",
      place: "California, USA",
      pictures:"dummy.png",
      stars: 5,
      reviews:
        "Ive noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes. The Doc has a way of hitting the right spots to help your wellness. I recommend their services with enthusiasm. Thank you.",
    },
    {
      name: "DaGunny Rivera",
      place: "California, USA",
      pictures:"dummy.png",
      stars: 5,
      reviews:
        "Ive noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes. The Doc has a way of hitting the right spots to help your wellness. I recommend their services with enthusiasm. Thank you.",
    },
    {
      name: "DaGunny Rivera",
      place: "California, USA",
      pictures:"dummy.png",
      stars: 5,
      reviews:
        "Ive noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes. The Doc has a way of hitting the right spots to help your wellness. I recommend their services with enthusiasm. Thank you.",
    },
    {
      name: "DaGunny Rivera",
      place: "California, USA",
      pictures:"dummy.png",
      stars: 5,
      reviews:
        "Ive noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes. The Doc has a way of hitting the right spots to help your wellness. I recommend their services with enthusiasm. Thank you.",
    },
    {
      name: "DaGunny Rivera",
      place: "California, USA",
      pictures:"dummy.png",
      stars: 5,
      reviews:
        "Ive noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes. The Doc has a way of hitting the right spots to help your wellness. I recommend their services with enthusiasm. Thank you.",
    },
    {
      name: "DaGunny Rivera",
      place: "California, USA",
      pictures:"dummy.png",
      stars: 5,
      reviews:
        "Ive noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes. The Doc has a way of hitting the right spots to help your wellness. I recommend their services with enthusiasm. Thank you.",
    },
    {
      name: "DaGunny Rivera",
      place: "California, USA",
      pictures:"dummy.png",
      stars: 5,
      reviews:
        "Ive noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes. The Doc has a way of hitting the right spots to help your wellness. I recommend their services with enthusiasm. Thank you.",
    },
    {
      name: "DaGunny Rivera",
      place: "California, USA",
      pictures:"dummy.png",
      stars: 5,
      reviews:
        "Ive noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes. The Doc has a way of hitting the right spots to help your wellness. I recommend their services with enthusiasm. Thank you.",
    },
    {
      name: "DaGunny Rivera",
      place: "California, USA",
      pictures:"dummy.png",
      stars: 5,
      reviews:
        "Ive noticed a difference and highly recommend the service of this office. No long waits, office personnel are very courteous and work with you if you need assistance with schedule changes. The Doc has a way of hitting the right spots to help your wellness. I recommend their services with enthusiasm. Thank you.",
    },
  ]);

  return (
    <div className="relative m-0">
      <Background />
      <div
      className="absolute top-[10px] left-[64px] h-full flex flex-col items-center"
      style={{width:"calc(99.8% - 128px)"}}
      >
        <Navbar matches={matches} />
        <Hero />

        <div style={{ marginTop: "calc(0.0388*100vw)" }}>{comp()}</div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
 