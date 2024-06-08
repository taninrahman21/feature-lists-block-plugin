import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React from 'react';
import Description from './Description';
import Title from './Title';
import ContentBox from './ContentBox';

const Content = ({ attributes, setAttributes }) => {
  return (
    <div>
      <PanelBody title={__("Content Styles", "b-features-lists")} initialOpen={false}>
        <Title attributes={attributes} setAttributes={setAttributes} />
        <Description attributes={attributes} setAttributes={setAttributes} />
        <ContentBox attributes={attributes} setAttributes={setAttributes} />
      </PanelBody>
    </div>
  );
};

export default Content;