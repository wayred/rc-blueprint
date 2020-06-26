/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from "react";

type RowProps = {
  children?: any;
  styles?: any;
}

const Row = (props: RowProps) => {
  return (
    <div css={{...row, ...props.styles}}>
      {props.children}
    </div>
  )
};

export default Row;

const row = {
  display: 'flex',
  flexDirection: 'row'
} as const;