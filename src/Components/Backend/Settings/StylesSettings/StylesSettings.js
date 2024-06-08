import React from 'react';
import Content from './Content';
import Icon from './Icon';
import Item from './Item';


const StylesSettings = ({ attributes, setAttributes }) => {
  const { valueForEachItem } = attributes;

  return (
    <div>
      <Item attributes={attributes} setAttributes={setAttributes} />
      {valueForEachItem.showIcon && <Icon attributes={attributes} setAttributes={setAttributes} />}
      <Content attributes={attributes} setAttributes={setAttributes} />
    </div>
  );
};

export default StylesSettings;