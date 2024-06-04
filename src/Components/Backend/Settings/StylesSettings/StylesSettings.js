import React, { useState } from 'react';
import Content from './Content';
import Icon from './Icon';
import Item from './Item';


const StylesSettings = ({ attributes, setAttributes }) => {
  const [device, setDevice] = useState('desktop');

  return (
    <div>
      <Item attributes={attributes} setAttributes={setAttributes} setDevice={setDevice} device={device} />
      <Icon attributes={attributes} setAttributes={setAttributes} setDevice={setDevice} device={device} />
      <Content attributes={attributes} setAttributes={setAttributes} setDevice={setDevice} device={device} />
    </div>
  );
};

export default StylesSettings;