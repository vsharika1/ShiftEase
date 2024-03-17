import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function HelloWorld({ children }: Props) {
  return <h1>hello world {children}</h1>;
}
