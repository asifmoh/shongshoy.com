import { useRef } from "react";
import { styled, connect, Global } from "frontity";
import Link from "../link";
import { CloseNavToggle } from "../navigation/nav-toggle";
import { CloseIcon } from "../icons";
import useFocusTrap from "../hooks/use-trap-focus";
import useFocusEffect from "../hooks/use-focus-effect";
import SectionContainer from "../styles/section-container";

const MobileMenuModal = ({ state, actions }) => {
  // Get the menu state and action
  const { menu, isMobileMenuOpen } = state.theme;
  const { closeMobileMenu } = actions.theme;

  // Check if there are links in the state
  const isThereLinks = menu != null && menu.length > 0;

  /**
   * Keep a reference to the close button so we can focus on it when
   * the modal opens
   */
  const closeButtonRef = useRef();

  // Keep a reference to the menu so we can trap focus within it
  const menuRef = useRef();

  // Focus on the close button when the mobile menu is open
  useFocusEffect(closeButtonRef, isMobileMenuOpen);

  // Trap focus within the menu when the mobile menu is open
  useFocusTrap(menuRef, isMobileMenuOpen);

  return (
    <Modal data-open={isMobileMenuOpen} role="dialog" aria-modal="true">
      {/* Global styles to prevent body scroll when the menu is open */}
      {isMobileMenuOpen && (
        <Global styles={{ body: { overflowY: "hidden" } }} />
      )}
      <ModalInner>
        <MenuWrapper ref={menuRef}>
          <div style={{ flexShrink: 0 }}>
            <CloseNavToggle
              ref={closeButtonRef}
              aria-expanded={isMobileMenuOpen}
              onClick={closeMobileMenu}
            >
              <ToggleText> মেন্যু বন্ধ করুন</ToggleText>
              <CloseIcon />
            </CloseNavToggle>

            <MenuContent
              as="nav"
              role="navigation"
              aria-label="Mobile menu links"
            >
              <MenuList>
                {isThereLinks &&
                  menu.map(([name, link]) => (
                    <MenuListItem key={name}>
                      <MenuLinkWrapper>
                        <MenuLink
                          link={link}
                          aria-current={
                            state.router.link === link ? "page" : undefined
                          }
                        >
                          {name}
                        </MenuLink>
                      </MenuLinkWrapper>
                    </MenuListItem>
                  ))}
              </MenuList>
            </MenuContent>
          </div>
        </MenuWrapper>
      </ModalInner>
    </Modal>
  );
};

const Modal = styled.div`
  background: #fff;
  display: none;
  opacity: 0;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  bottom: 0;
  right: 99999rem;
  top: 0;
  z-index: 99;

  &[data-open="true"] {
    display: flex;
    left: 0;
    opacity: 1;
    right: 0;
    transition: opacity 0.25s ease-out;
  }
`;

const ModalInner = styled.div`
  background: linear-gradient(90deg, rgba(58,159,180,1) 0%, rgba(116,200,92,0.9332107843137255) 65%, rgba(217,252,69,1) 100%);
  display: flex;
  justify-content: stretch;
  overflow: auto;
  width: 100%;
  border-radius: 1rem;
`;

const MenuWrapper = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const MenuContent = styled.nav`
  display: block;
`;

const MenuList = styled.ul`
  position: relative;
  list-style: none;
  margin: 0;
  /* left: calc(50% - 50vw);
  width: 100vw; */
`;

const ToggleText = styled.span`
color: Yellow;  
margin-right: 1.6rem;
  * {
    fill: currentColor;
  }
`;

const MenuListItem = styled.li`
  position: relative;
  border-style: solid;
  border-width: 0.1rem 0 0 0;
  border-color: #dcd7ca;
  display: flex;
  flex-wrap: wrap;
  line-height: 1;
  justify-content: flex-start;
  margin: 0;
`;

const MenuLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MenuLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.0375em;
  display: block;
  padding: 1.4rem 2.5rem;
  text-decoration: none;
  width: 100%;
  text-align: left;
  

  @media (min-width: 700px) {
    font-size: 2.4rem;
    padding: 2.5rem 0;
   
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
  /* styles for active link */
  &[aria-current="page"] {
    text-decoration: underline;
  }
`;

export default connect(MobileMenuModal);