import { connect, styled } from "frontity";
import Img from "@frontity/components/image";
import SectionContainer from "../styles/section-container";

/**
 * The featured image/video of the post.
 *
 * @param props -
 * - `state`: The Frontity state
 * - `id`: The ID of the featured image/video.
 * - `className`: Required in order to wrap the component with `styled()`.
 * @returns React element.
 */
const FeaturedMedia = ({ state, id, className }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <Figure className={className}>
      <SectionContainer size="medium">
        <Image 
          alt={media.title.rendered}
          src={media.source_url}
          srcSet={srcset}
        />
      </SectionContainer>
    </Figure>
  );
};

export default connect(FeaturedMedia);

const Figure = styled.figure`
  margin-top: 2rem;
  position: relative;

  @media (min-width: 700px) {
    margin-top: 6rem;
  }
`;

const Image = styled(Img)`
  margin: 0 auto;
  width: 750px;
  max-height: 400px;
  display: block;
  
  border-radius: 2rem;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
  
`;
