import * as React from "react";
import {
  PlasmicNewPost,
  DefaultNewPostProps,
} from "./plasmic/minitwitter/PlasmicNewPost";
import { createPost, PostEntry } from "../model";
import { useState } from "react";
import { useHistory } from "react-router";

interface NewPostProps extends DefaultNewPostProps {
  children?: never;
  onAdd: (entry: PostEntry) => void;
}

function NewPost({ onAdd, ...rest }: NewPostProps) {
  const [content, setContent] = useState("");
  const history = useHistory();
  return (
    <PlasmicNewPost
      {...rest}
      postContent={{
        autoFocus: true,
        value: content,
        onChange: (e) => {
          setContent(e.target.value);
        },
      }}
      postButton={{
        onClick: () => {
          onAdd(
            createPost({
              content,
              createdAt: new Date(),
            })
          );
          history.push("/");
        },
      }}
    />
  );
}

export default NewPost;
