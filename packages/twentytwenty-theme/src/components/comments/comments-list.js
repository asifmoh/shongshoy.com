import React from "react";
import { connect, styled } from "frontity";

const CommentsList = ({ state, libraries, postId }) => {
  const data = state.source.get(`@comments/${postId}`);
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <Container>
        {data.items.map(({ id }) => {
          return (
            <>
              <Comment>
                <div>
                  {state.source.comment[id].author_name || "Anonymous"}:
                </div>
                <CommentContent>
                  <Html2React
                    html={state.source.comment[id].content.rendered}
                  />


                </CommentContent>
              </Comment><hr />
            </>
          );
        })}
      </Container>
    </>
  );
};

export default connect(CommentsList);

const Container = styled.div`
  margin: 40px;
`;

const Comment = styled.div`
  border: 1px solid black;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 10px 10px 5px #aaaaaa
`;
const CommentContent = styled.div`
  padding-left: 10px;
`;