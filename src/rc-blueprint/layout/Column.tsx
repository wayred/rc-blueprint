/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from "react";

type ColumnProps = {
  children?: any;
  styles?: any;
}

const Column = (props: ColumnProps) => {
  return (
    <div css={{...column, ...props.styles}}>
      {props.children}
    </div>
  )
};

export default Column;

const column = {
  display: 'flex',
  flexDirection: 'column'
} as const;