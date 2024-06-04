import React from 'react';
import Content from './Content';

const ContentSettings = ({attributes, setAttributes}) => {
  return (
    <div>
      <Content attributes={attributes} setAttributes={setAttributes} />
    </div>
  );
};

export default ContentSettings;