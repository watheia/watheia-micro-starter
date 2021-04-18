import React from 'react';

export type HomeProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Home({ text }: HomeProps) {
  return (
    <div>
      {text}
    </div>
  );
}
