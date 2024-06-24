import { PanelBody } from '@wordpress/components';
import { __ } from "@wordpress/i18n";
import React from 'react';
import { BColor, Typography } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';

const Description = ({ attributes, setAttributes }) => {
  const { description } = attributes;

  

  return (
    <div>
      <PanelBody title={__('Description', "feature-lists")} initialOpen={false}>
        {/* Color */}
        <BColor
          label={__('Color', 'feature-lists')}
          value={description.color}
          onChange={value => setAttributes({ description: updateData(description, value, "color") })}
          defaultColor='#000' />

        {/* Title Typography */}
        <Typography
          label={__('Typography', 'feature-lists')}
          value={description.typo}
          onChange={val => setAttributes({ description: updateData(description, val, "typo") })}
          defaults={{ fontSize: 16 }} />
      </PanelBody>
    </div>
  );
};

export default Description;