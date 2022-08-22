import IntroText from "@/components/IntroText";

const Home = () => {
  return (
    <>
      <IntroText>Web developer</IntroText>
      <IntroText tag="p" size="sm" ruleAnimationDelay={350}>
        I build things for the web
      </IntroText>
      <IntroText tag="p" size="sm" ruleAnimationDelay={650}>
        Javascript &#8226; React &#8226; Nextjs &#8226; HTML &#8226; CSS
      </IntroText>
    </>
  );
};

export default Home;
