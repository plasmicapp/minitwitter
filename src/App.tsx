import React, { useState } from "react";
import Feed from "./components/Feed";
import { createPost, PostEntry } from "./model";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NewPost from "./components/NewPost";

export function dumpPosts(entries: PostEntry[]) {
  return JSON.stringify(entries);
}

export function loadPosts(json: string): PostEntry[] {
  const parsed: any[] = JSON.parse(json);
  for (const item of parsed) {
    item.createdAt = new Date(item.createdAt);
  }
  return parsed;
}

function App() {
  const [entries, setEntries] = useState(() => {
    let loaded = localStorage["entries"];
    if (loaded) {
      return loadPosts(loaded);
    }
    return [
      createPost({ content: "Hello world", createdAt: new Date() }),
      createPost({ content: "Another post", createdAt: new Date() }),
    ];
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/post"}>
          <NewPost
            onAdd={(entry) => {
              const newEntries = [entry, ...entries];
              setEntries(newEntries);
              localStorage["entries"] = dumpPosts(newEntries);
            }}
          />
        </Route>
        <Route path={"/"}>
          <Feed entries={entries} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
