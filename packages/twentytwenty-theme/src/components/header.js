import { connect, styled } from "frontity";
import Link from "./link";
import Navigation from "./navigation/navigation";
import SearchButton from "./search/search-button";
import SearchModal from "./search/search-modal";
import MobileSearchButton from "./mobile/search-button";
import MobileMenuButton from "./mobile/menu-button";
import MobileMenuModal from "./mobile/menu-modal";
import Sitelogo from '../assets/Shongshoy_Logo.gif';
const Header = ({ state }) => {
  const { title, description } = state.frontity;
  const { headerBg } = state.theme.colors;

  return (
    <PageHeader bg={headerBg} id="site-header">
      <div >
      <a href="/">
      <img src={Sitelogo} alt="Shongshoy" className="center"
          
        /> </a>
        </div>
      <HeaderInner>
     
        <TitleWrapper>
          {/* Search button on mobile */}
          {state.theme.showSearchInHeader && <MobileSearchButton />}

          {/* Heading and Description of the site */}
        

          {/* Mobile menu button and modal */}
          <MobileMenuButton />
          <MobileMenuModal />
        </TitleWrapper>

        <HeaderNavigationWrapper>
          {/* Desktop navigation links */}
          <Navigation />
          {/* Desktop search button */}
          {state.theme.showSearchInHeader && <SearchButton />}
        </HeaderNavigationWrapper>
      </HeaderInner>
      {/* Global search modal */}
      <SearchModal />
     <Slogan>
     <div className="btn">
  <span className="noselect">
      "জ্ঞান যেখানে সীমাবদ্ধ, <br />
যুক্তি যেখানে আড়ষ্ট, <br />
মুক্তি সেখানে অসম্ভব"<br /></span>
</div>
</Slogan>

<Description>
সংশয় - চিন্তার মুক্তির আন্দোলন
<br /><br />
</Description>
    </PageHeader>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);


const Description = styled.div`
    font-family: Shobuj;
    font-size: 1.5em;
    padding: 0.5rem 0.5rem;
    justify-content: center;
    margin: auto;
    text-align: center;
    color: red;
    
    
      
  
  @media (max-width: 700px) {
      font-size: 1.1em;
      width: calc(100% - 8rem);
    }
  


`;



const Slogan = styled.div`


.btn::before, .btn::after {
position: absolute;
background: #eee;
z-index: -1;
transition: 1s;
content: '';
}

.btn::before {
height: 50px;
width: 130px;
}

.btn::after {
width: 150px;
height: 30px;
}

.noselect {
-webkit-touch-callout: none;
  -webkit-user-select: none;
   -khtml-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.btn:hover::before {
width: 0px;
background: #Yellow;
}

.btn:hover::after {
height: 0px;
background: Yellow;
}

.btn:hover {
background: #f5efe0;
}


    font-family: Shobuj;
    font-size: 2em;
    padding: 0.4rem 0.6rem;
    justify-content: center;
    margin: auto;
    text-align: center;
    color: green;
    @media (max-width: 700px) {
      font-size: 1.4em;
      width: calc(100% - 8rem);
    }
`;

const TitleGroup = styled.div`
  @media (min-width: 1000px) {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: -1rem 0 0 -2.4rem;
  }
`;

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 4rem;
  text-align: center;
  width: 100%;

  @media (min-width: 1000px) {
    width: auto;
    margin-right: 4rem;
    max-width: 50%;
    padding: 0;
    text-align: left;
  }
`;

const PageHeader = styled.header`
  z-index: 1;
  background: ${(props) => props.bg};
  position: relative;
`;

const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 0;
  max-width: 168rem;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
  }
`;

const SiteTitle = styled.h1`
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;

  @media (min-width: 1000px) {
    margin: 1rem 0 0 2.4rem;
  }
  @media (min-width: 700px) {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

const SiteDescription = styled.div`
  margin: 0;
  margin-top: 1rem;
  color: #6d6d6d;
  font-size: 1.8rem;
  font-weight: 500;
  display: none;
  letter-spacing: -0.0311em;
  transition: all 0.15s linear;

  @media (min-width: 1000px) {
    margin: 1rem 0 0 2.4rem;
  }

  @media (min-width: 700px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderNavigationWrapper = styled.div`
  display: none;

  @media (min-width: 1000px) {
    align-items: center;
    display: flex;
  }
`;
