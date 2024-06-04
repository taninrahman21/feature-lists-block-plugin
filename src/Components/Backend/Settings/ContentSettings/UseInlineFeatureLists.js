import { PanelRow, RangeControl, ToggleControl } from '@wordpress/components';
import { __ } from "@wordpress/i18n";
import React, { useState } from 'react';
import { Label } from '../../../../../../Components';
import { Device } from '../../../../../../Components/Device/Device';
import { updateData } from '../../../../utils/functions';

const UseInlineFeatureLists = ({ attributes, setAttributes }) => {
  const { valueForEachItem } = attributes;
  const [device, setDevice] = useState('desktop');
  return (
    <div>
      <ToggleControl
        label={__("Use Inline Features", "b-feature-list")}
        checked={valueForEachItem.useInlineFeatures}
        onChange={(e) => {
          setAttributes({ valueForEachItem: updateData(valueForEachItem, e, "useInlineFeatures") });
        }}
      />

      {/* Items Per Line */}
      {
        valueForEachItem.useInlineFeatures &&
        <>
          <div>
            <PanelRow>
              <Label className='mb5'>{__("Space Between Item", 'b-feature-lists')}</Label>
              <Device onChange={val => setDevice(val)} />
            </PanelRow>
            <RangeControl
              label={__("Items Per Line", "b-feature-list")}
              value={valueForEachItem.itemsPerLine[device]}
              onChange={(value) => setAttributes({ valueForEachItem: updateData(valueForEachItem, value, "itemsPerLine", device) })}
              min={1}
              max={5}
            />
          </div>

          <div>
            <PanelRow>
              <Label className='mb5'>{__("Space Between Item", 'b-feature-lists')}</Label>
              <Device onChange={val => setDevice(val)} />
            </PanelRow>
            <RangeControl
              label={__("Gap Between Item", "b-feature-list")}
              value={valueForEachItem.gapBetweenItem[device]}
              onChange={(value) => setAttributes({ valueForEachItem: updateData(valueForEachItem, value, "gapBetweenItem", device) })}
              min={5}
              max={50}
            />
          </div>

        </>
      }

    </div>
  );
};

export default UseInlineFeatureLists;