import React from 'react';

export type BlogProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Blog({ text }: BlogProps) {
  return (
    <div>
      {text}
    </div>
  );
}
