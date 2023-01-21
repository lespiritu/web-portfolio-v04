import React from 'react';
import { Typography } from './typography';

export default {
  component: Typography,
  title: 'UI/Typography',
};

interface TemplateHolderProps {
  variant:
    | `header1`
    | `header2`
    | `header3`
    | `header4`
    | `paragraph`
    | `header5`
    | `input`
    | `button`
    | `subtext`
    | `label`;
}

const TemplateHolder = (props: TemplateHolderProps) => {
  return (
    <div style={{ borderBottom: '1px dashed #c0c0c0', padding: '15px' }}>
      <div style={{ fontWeight: 700, color: '#d0d0d0' }}>{props.variant}</div>
      <div>
        <Typography variant={props.variant}>This is a {props.variant} typography</Typography>
      </div>
    </div>
  );
};

export const Main = () => {
  return (
    <div>
      <TemplateHolder variant="header1" />
      <TemplateHolder variant="header2" />
      <TemplateHolder variant="header3" />
      <TemplateHolder variant="header4" />
      <TemplateHolder variant="header5" />
      <TemplateHolder variant="paragraph" />
      <TemplateHolder variant="input" />
      <TemplateHolder variant="button" />
      <TemplateHolder variant="subtext" />
      <TemplateHolder variant="label" />
    </div>
  );
};
