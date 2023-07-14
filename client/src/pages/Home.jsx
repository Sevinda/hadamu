import React from "react";
import Hero from "../components/HomePage/Hero";
import MainNews from "../components/HomePage/MainNews";

const Home = () => {
  return (
    <>
      <Hero />
      <MainNews
        topic="Train Accident"
        summary="14 people died and 40 injured in a train accident in India."
        photo="/images/train_accident.webp"
        description="Tragedy struck in India as a devastating train accident claimed the lives of 14 individuals, while leaving 40 others injured. The incident, which unfolded with a sudden and profound impact, has sent shockwaves throughout the nation. As authorities and emergency responders work tirelessly to unravel the cause of the accident, communities are left grieving the loss of their loved ones. This catastrophic event serves as a stark reminder of the importance of prioritizing safety measures and ensuring the well-being of passengers on railways. The injured victims are receiving immediate medical attention, with hopes for their swift recovery. As the nation mourns this heartbreaking incident, questions arise regarding the steps that can be taken to prevent such tragedies in the future, emphasizing the need for continuous vigilance and enhancements in rail safety protocols."
      />
    </>
  );
};

export default Home;
