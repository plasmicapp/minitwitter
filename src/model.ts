import { v4 } from 'uuid';

export interface PostEntry {
  id: string;
  createdAt: Date;
  content: string;
}

export function createPost(props: Omit<PostEntry, 'id'>): PostEntry {
  return {
    id: v4(),
    ...props
  };
}
