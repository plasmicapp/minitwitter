import * as React from "react";
import {
  PlasmicFeed,
  DefaultFeedProps,
} from "./plasmic/minitwitter/PlasmicFeed";
import { PostEntry } from "../model";
import Post from "./Post";
import moment from "moment";

interface FeedProps extends DefaultFeedProps {
  children?: never;
  entries: PostEntry[];
}

function Feed({ entries, ...rest }: FeedProps) {
  return (
    <PlasmicFeed
      {...rest}
      postList={{
        children: entries.map((entry) => (
          <Post timestamp={moment(entry.createdAt).fromNow()}>
            {entry.content}
          </Post>
        )),
      }}
    />
  );
}

export default Feed;
