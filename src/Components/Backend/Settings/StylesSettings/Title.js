import { PanelBody, PanelRow, RangeControl } from '@wordpress/components';
import { __ } from "@wordpress/i18n";
import React from 'react';
import { BColor, Label, Typography } from '../../../../../../Components';
import { Device } from '../../../../../../Components/Device/Device';
import { updateData } from '../../../../utils/functions';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const Title = compose(withSelect((select) => { return { device: select("core/edit-post").__experimentalGetPreviewDeviceType()?.toLowerCase() } }))(({ attributes, setAttributes, device }) => {
  const { title } = attributes;
  return (
    <div>
      <PanelBody title={__('Title', "b-feature-lists")} initialOpen={false}>

        {/* Title Bottom Space */}
        <div>
          <PanelRow>
            <Label className='mb5'>{__("Title Bottom Space", 'b-feature-lists')}</Label>
            <Device />
          </PanelRow>
          <RangeControl
            value={title.bottomSpace[device]}
            onChange={(value) => setAttributes({ title: updateData(title, value, "bottomSpace", device) })}
            min={0}
            max={200}
          />
        </div>

        {/* Color */}
        <BColor
          label={__('Color', 'b-feature-lists')}
          value={title.color}
          onChange={value => setAttributes({ title: updateData(title, value, "color") })}
          defaultColor='#000' />

        {/* Hover Color */}
        <BColor
          label={__('Hover Color', 'b-feature-lists')}
          value={title.hoverColor}
          onChange={value => setAttributes({ title: updateData(title, value, "hoverColor") })}
          defaultColor='#000' />
        
        {/* Title Typography */}
        <Typography
          label={__('Typography', 'b-feature-lists')}
          value={title.typo}
          onChange={val => setAttributes({ title: updateData(title, val, "typo") })}
          defaults={{ fontSize: 25 }} />

      </PanelBody>
    </div>
  );
});

export default Title;