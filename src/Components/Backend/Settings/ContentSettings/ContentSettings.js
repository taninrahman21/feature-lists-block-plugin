import React from 'react';
import Content from './Content';

const ContentSettings = ({ attributes, setAttributes, activeFeature }) => {
  return (
    <div>
      <Content attributes={attributes} setAttributes={setAttributes} activeFeature={activeFeature}/>
    </div>
  );
};

export default ContentSettings;