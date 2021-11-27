import { styled, connect } from "frontity";
import Link from "./link";
import SectionContainer from "./styles/section-container";
import { Wave } from 'react-animated-text';

// Component that provides scroll to top functionality
const BackToTop = () => {
  // scroll to top function
  const scrollToTop = (event) => {
    // prevent the default behaviors
    event.preventDefault();
    // scroll to the top smoothly
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <a href="#site-header" onClick={scrollToTop} style={{ cursor: "pointer" }}>
      <span style={{ marginRight: 8 }}>To the top</span>
      <span className="arrow" aria-hidden="true">
        ↑
      </span>
    </a>
  );
};

const Footer = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <SiteFooter bg={footerBg} role="contentinfo">
       <SiteFooterTag>
      <a href="/tag/guest-writers">অতিথি লেখক(32)</a>&nbsp;
      <a href="/tag/allah-related">আল্লাহ সম্পর্কিত প্রবন্ধ(5)</a>&nbsp;
      <a href="/tag/conflict-in-islam">ইসলামে অন্তর্দ্বন্দ্ব(3)</a>&nbsp;
      <a href="/tag/inhumane-islam">ইসলামে অমানবিক বিষয়(38)</a>&nbsp;
      <a href="/tag/irrational-islam">ইসলামে অযৌক্তিক বিষয়(22)</a>&nbsp;
      <a href="/tag/islam-women">ইসলামে নারী(20)</a>&nbsp;
      <a href="/tag/quran-related">কোরআন সম্পর্কিত প্রবন্ধ(14)</a>&nbsp;
      <a href="/tag/christianity-related">খ্রিস্টধর্ম(6)</a>&nbsp;
      <a href="/tag/jizya">জিযিয়া/জিজিয়া(4)</a>&nbsp;
      <a href="/tag/jihad-communalism">জিহাদ ও সাম্প্রদায়িকতা(9)</a>&nbsp;
      <a href="/tag/islamic-propaganda">দাইয়ীদের প্রপাগাণ্ডার জবাব(12)</a>&nbsp;
      <a href="/tag/answers">দাবী সমূহের উত্তর(52)</a>&nbsp;
      <a href="/tag/experiences">ধর্মত্যাগের অভিজ্ঞতা(9)</a>&nbsp;
      <a href="/tag/freedom-of-speech">বাক-স্বাধীনতা(1)</a>&nbsp;
      <a href="/tag/science">বিজ্ঞান(27)</a>&nbsp;
      <a href="/tag/buddhism">বৌদ্ধধর্ম(6)</a>&nbsp;
      <a href="/tag/humanism">মানববাদ(7)</a>&nbsp;
      <a href="/tag/muhammad-related">মুহাম্মদ সম্পর্কিত প্রবন্ধ(27)</a>&nbsp;
      <a href="/tag/rationalism">যুক্তিবাদ(37)</a>&nbsp;
      <a href="/tag/ramya">রম্যরচনা(12)</a>&nbsp;
      <a href="/tag/politics">রাজনীতি(8)</a>&nbsp;
      <a href="/tag/hadith">হাদিস সম্পর্কিত প্রবন্ধ(3)</a>&nbsp;
      <a href="/tag/hindu">হিন্দুধর্ম(75)</a>&nbsp;
      <a href="/tag/hinduism-beef">হিন্দুধর্মে গোমাংস(11)</a>&nbsp;
      <a href="/tag/hinduism-caste-system">হিন্দুধর্মে জাতিভেদ বা বর্ণপ্রথা(18)</a>&nbsp;
    </SiteFooterTag>
      
      <SiteFooterInner>
        <Credits>
          <Copyright>
          
            <Link link={state.frontity.url}>{state.frontity.title}</Link> 
             &copy; {currentYear}{" "}
          </Copyright>
          <div className="brighttext">
          <Wave text=" | Shongshoy: Bengali blog about Skepticism" /></div>

          <PoweredBy>| সর্বসত্ত্ব মানুষের জন্য সংরক্ষিত </PoweredBy>
        </Credits>
        <BackToTop />
       
      
      </SiteFooterInner>


  
    
     
    </SiteFooter>
  );
};

export default connect(Footer);




const SiteFooterInner = styled(SectionContainer)`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`;

const SiteFooterTag = styled(SectionContainer)`
  
 
`;

const SiteFooter = styled.footer`
  margin-top: 5rem;
  border-color: #dcd7ca;
  border-style: solid;
  border-width: 0;
  padding: 3rem 0;
  background-color: ${(props) => props.bg};
  color: #000000;

  @media (min-width: 700px) {
    margin-top: 8rem;
    font-size: 1.8rem;
    padding: 4.3rem 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Credits = styled.div`
  @media (min-width: 700px) {
    display: flex;
  }
`;

const Copyright = styled.p`
  font-weight: 600;
  margin: 0;

  @media (min-width: 700px) {
    font-weight: 700;
  }
`;

const PoweredBy = styled.p`
  color: black;
  display: none;
  margin: 0 0 0 2.4rem;

  @media (min-width: 700px) {
    display: block;
  }
`;
