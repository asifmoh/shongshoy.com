import { styled, connect } from "frontity";
import Link from "./link";
import SectionContainer from "./styles/section-container";
import Social from "./social";

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
        <SiteFooterCategory>
      
        <Social />
      
       <h4>বিভাগ সমূহ </h4>
       <div style={{ border: '2px solid #F4B400', padding: "2rem 2rem 2rem 2rem" }}>
      
      <a href="/category/sticky">অবশ্যপাঠ্য</a> |&nbsp;
      <a href="/category/editorial">সম্পাদকীয়</a> |&nbsp;
      <a href="/category/philosophy">দর্শন</a> |&nbsp;
      <a href="/category/feminism">নারীবাদ</a> |&nbsp;
      <a href="/category/science">বিজ্ঞান</a> |&nbsp;
      <a href="/category/origin-of-life">জীবের উদ্ভব</a> |&nbsp;
      <a href="/category/science/evolution">বিবর্তন</a> |&nbsp;
      <a href="/category/science/genetics">জেনেটিক্স</a> |&nbsp;
      <a href="/category/science/archeology">আর্কিওলজি</a> |&nbsp;
      <a href="/category/science/physics">পদার্থবিদ্যা</a> |&nbsp;
      <a href="/category/science/space">মহাকাশ</a> |&nbsp; 
      <a href="/category/science/big-bang">বৃহৎ সম্প্রসারণ</a> |&nbsp;
      <a href="/category/pseudoscience">ছদ্মবিজ্ঞান</a> |&nbsp;
      <a href="/category/human-rights">মানবাধিকার</a> |&nbsp;
      <a href="/category/science/psychology">মনোবিজ্ঞান</a> |&nbsp;
      <a href="/category/history">ইতিহাস</a> |&nbsp;
      <a href="/category/history/religion-in-bengali-history">বাংলায় ধর্মের ইতিহাস</a> |&nbsp;
      <a href="/category/sociology-of-religion">ইতিহাসে ধর্ম</a> |&nbsp;
      <a href="/category/theism">আস্তিক্য</a> |&nbsp;
      <a href="/category/religion">ধর্ম</a> |&nbsp;
      <a href="/category/skepticism">সংশয়বাদ</a> |&nbsp;
      <a href="/category/psychology-of-religion">ধর্মের মনস্তত্ত্ব</a> |&nbsp;
      <a href="/category/satire">স্যাটায়ার</a> |&nbsp;
      <a href="/category/sticky-notes">স্টিকি</a> |&nbsp;
      <a href="/category/response">প্রতিক্রিয়া</a> |&nbsp;
      <a href="/category/thoughts">স্বতন্ত্র ভাবনা</a> |&nbsp;
      <a href="/category/rationalism">যুক্তিবাদ</a> |&nbsp;
      <a href="/category/religion/islam">ইসলাম</a> |&nbsp;
      <a href="/category/feminism/women-in-islam">ইসলামে নারী</a> |&nbsp;
      <a href="/category/religion/islam/error-in-quran">কোরআনের ভুল</a> |&nbsp;
      <a href="/category/religion/islam/error-in-hadith">হাদিসের ভুল</a> |&nbsp;
      <a href="/category/religion/hinduism">হিন্দুধর্ম</a> |&nbsp;
      <a href="/category/feminism/women-in-hinduism">হিন্দুধর্মে নারী</a> |&nbsp;
      <a href="/category/religion/christianity">খ্রিস্টধর্ম</a> |&nbsp;
      <a href="/category/religion/buddhism">বৌদ্ধ</a> |&nbsp;
      <a href="/category/propaganda">প্রোপাগান্ডা</a> |&nbsp;
      <a href="/category/question-answer">প্রশ্নোত্তর</a> |&nbsp;
      <a href="/category/books">বই</a> 
     
      </div>
      <hr />
       </SiteFooterCategory>
       
       <SiteFooterTag>
         <h4>ট্যাগ ক্লাউড</h4>
         <div style={{ border: '2px solid #F4B400', padding: "2rem 2rem 2rem 2rem" }}>
      <a href="/tag/guest-writers">অতিথি লেখক(32)</a> |&nbsp; 
      <a href="/tag/allah-related">আল্লাহ সম্পর্কিত প্রবন্ধ(5)</a> |&nbsp;
      <a href="/tag/conflict-in-islam">ইসলামে অন্তর্দ্বন্দ্ব(3)</a> |&nbsp;
      <a href="/tag/inhumane-islam">ইসলামে অমানবিক বিষয়(38)</a> |&nbsp;
      <a href="/tag/irrational-islam">ইসলামে অযৌক্তিক বিষয়(22)</a> |&nbsp;
      <a href="/tag/islam-women">ইসলামে নারী(20)</a> |&nbsp;
      <a href="/tag/quran-related">কোরআন সম্পর্কিত প্রবন্ধ(14)</a> |&nbsp;
      <a href="/tag/christianity-related">খ্রিস্টধর্ম(6)</a> |&nbsp;
      <a href="/tag/jizya">জিযিয়া/জিজিয়া(4)</a> |&nbsp;
      <a href="/tag/jihad-communalism">জিহাদ ও সাম্প্রদায়িকতা(9)</a> |&nbsp;
      <a href="/tag/islamic-propaganda">দাইয়ীদের প্রপাগাণ্ডার জবাব(12)</a> |&nbsp;
      <a href="/tag/answers">দাবী সমূহের উত্তর(52)</a> |&nbsp;
      <a href="/tag/experiences">ধর্মত্যাগের অভিজ্ঞতা(9)</a> |&nbsp;
      <a href="/tag/freedom-of-speech">বাক-স্বাধীনতা(1)</a> |&nbsp;
      <a href="/tag/science">বিজ্ঞান(27)</a> |&nbsp;
      <a href="/tag/buddhism">বৌদ্ধধর্ম(6)</a> |&nbsp;
      <a href="/tag/humanism">মানববাদ(7)</a> |&nbsp;
      <a href="/tag/muhammad-related">মুহাম্মদ সম্পর্কিত প্রবন্ধ(27)</a> |&nbsp;
      <a href="/tag/rationalism">যুক্তিবাদ(37)</a> |&nbsp;
      <a href="/tag/ramya">রম্যরচনা(12)</a> |&nbsp;
      <a href="/tag/politics">রাজনীতি(8)</a> |&nbsp;
      <a href="/tag/hadith">হাদিস সম্পর্কিত প্রবন্ধ(3)</a> |&nbsp;
      <a href="/tag/hindu">হিন্দুধর্ম(75)</a> |&nbsp;
      <a href="/tag/hinduism-beef">হিন্দুধর্মে গোমাংস(11)</a> |&nbsp;
      <a href="/tag/hinduism-caste-system">হিন্দুধর্মে জাতিভেদ বা বর্ণপ্রথা(18)</a>&nbsp;
      </div>
      <hr />
    </SiteFooterTag>
     
    <SiteInfo>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
“সংশয় – চিন্তার মুক্তির আন্দোলন” একটি অলাভজনক ওয়েবসাইট। এই ওয়েবসাইটের সকল লেখা কপিরাইট মুক্ত, শুধুমাত্র আমাদের ওয়েবসাইট এবং মূল লেখকের নাম যুক্ত করার শর্তে। পাঠকদের বুদ্ধিবৃত্তিক বিতর্ক এবং আলোচনাকে উৎসাহিত করা আমাদের উদ্দেশ্য। বাঙলাদেশ সরকার কর্তৃক ইতিমধ্যে আমাদের অনেক লেখক এবং গোটা ওয়েবসাইটই নিষিদ্ধ ঘোষিত হয়েছে। যা আমাদের জন্য গর্বের, সম্মানের এবং আনন্দের। অসংখ্য আক্রমণ এবং রাজনৈতিক নির্যাতনের পরেও, জেল জুলুম এবং মামলার পরেও আমরা লিখে যাচ্ছি- সত্য, যুক্তি এবং মুক্তচিন্তা প্রসারের স্বার্থে। আপনাদের সহযোগিতা আমাদের কাম্য। অনুগ্রহ করে ওয়েবসাইটটি বন্ধুদের সাথে শেয়ার করুন। অলাভজনক ওয়েবসাইট হওয়ার কারণে আমাদের সামর্থ্য সীমিত। আপনি কোন ডোনেশন পাঠাতে চাইলে সম্পাদকের কাছে <a style={{ color: 'red' }} href = "mailto: info@shongshoy.com">ইমেইল</a> করুন।

</SiteInfo>

<hr />
      <SiteFooterInner>
        
        <Credits>
          <Copyright>
          
            <Link link={state.frontity.url}>{state.frontity.title}</Link> 
            &nbsp;&copy; {currentYear}{" "}
          </Copyright>
         
          <PoweredBy> | সর্বসত্ত্ব মানুষের জন্য সংরক্ষিত  | </PoweredBy>
        </Credits>

       
        <BackToTop />
       
      
      </SiteFooterInner>


  
    
     
    </SiteFooter>
  );
};

export default connect(Footer);


const SiteInfo = styled.div`
font-size: 1.5rem;
width: calc(100% - 8rem);
justify-content: space-between;
  margin: auto;
  
  @media (min-width: 700px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
 

`;

const SiteFooterInner = styled(SectionContainer)`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  border: .1rem solid red;
  padding-left: 1rem;
  @media (min-width: 700px) {
    padding-left: 8rem;
  }
  
  
`;

const SiteFooterTag = styled(SectionContainer)`
  
 
`;

const SiteFooterCategory = styled(SectionContainer)`
  
 
`;



const SiteFooter = styled.footer`
  margin-top: 2rem;
  border-color: #dcd7ca;
  border-style: solid;
  border-width: 0;
  padding: 3rem 0;
  background-color: ${(props) => props.bg};
  color: #000000;

  @media (min-width: 700px) {
    margin-top: 4rem;
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
margin: 0 0 0 2rem;

  @media (min-width: 700px) {
    display: block;
  }
`;