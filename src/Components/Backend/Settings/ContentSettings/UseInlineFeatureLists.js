import { PanelRow, RangeControl, ToggleControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { __ } from "@wordpress/i18n";
import React from 'react';
import { Label } from '../../../../../../Components';
import { Device } from '../../../../../../Components/Device/Device';
import { updateData } from '../../../../utils/functions';

const UseInlineFeatureLists = compose(withSelect((select) => { return { device: select("core/edit-post").__experimentalGetPreviewDeviceType()?.toLowerCase() } }))(({ attributes, setAttributes, device }) => {
  const { valueForEachItem } = attributes;


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
              <Label className='mb5'>{__("Space Between Item", 'feature-lists')}</Label>
              <Device />
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
              <Label className='mb5'>{__("Space Between Item", 'feature-lists')}</Label>
              <Device />
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
});

export default UseInlineFeatureLists