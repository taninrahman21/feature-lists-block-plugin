import { __experimentalBorderControl as BorderControl, PanelBody, PanelRow, RangeControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React from 'react';
import { Background, Label } from '../../../../../../Components';
import { Device } from '../../../../../../Components/Device/Device';
import { BBoxControl } from '../../../../../../Components/BBoxControl/BBoxControl';
import { updateData } from '../../../../utils/functions';
import '../../../../editor.scss';

const Item = ({ attributes, setAttributes, device, setDevice }) => {
  const { itemStyles } = attributes;
  const colors = [
    { name: 'Black', color: 'black' },
    { name: 'Red', color: 'red' },
    { name: 'Gray', color: 'Gray' }
  ];
  return (
    <div>
      <PanelBody title={__("Item Style", "b-features-lists")} initialOpen={false}>

        {/* Space Between Item */}
        <div>
          <PanelRow>
            <Label className='mb5'>{__("Space Between Item", 'b-feature-lists')}</Label>
            <Device onChange={val => setDevice(val)} />
          </PanelRow>
          <RangeControl
            value={itemStyles.spaceBetweenItem[device]}
            onChange={(value) => setAttributes({ itemStyles: updateData(itemStyles, value, "spaceBetweenItem", device) })}
            min={5}
            max={200}
          />
        </div>

        {/* Background Color */}
        <Background
          label={__('Background Color', 'b-feature-lists')}
          value={itemStyles.backgroundColor}
          onChange={val => setAttributes({ itemStyles: updateData(itemStyles, val, "backgroundColor") })}
          defaults={{ color: '#000' }}
          isImage={false}
        />

        {/* Border */}
        <ToggleControl
          className='my-toggle'
          label={__("Add Border Line", "b-feature-list")}
          checked={itemStyles.addBorder}
          onChange={(e) => setAttributes({ itemStyles: updateData(itemStyles, e, "addBorder") })}
        />

        {/* Border Settings */}
        {
          itemStyles.addBorder && (
            <div>
              <BorderControl
                label={__("Border", "b-feature-lists")}
                colors={colors}
                onChange={value => setAttributes({ itemStyles: updateData(itemStyles, value, "border") })}
                value={itemStyles.border}
              />
              <div
                style={{ marginTop: "10px" }}>
                <RangeControl
                  label={__("Border Radius", "b-feature-lists")}
                  value={itemStyles.borderRadius}
                  onChange={value => setAttributes({ itemStyles: updateData(itemStyles, value, "borderRadius") })}
                />
              </div>

            </div>
          )
        }

        {/* Padding */}
        <div style={{ marginTop: "10px" }}>
          <PanelRow>
            <Label className='mb5'>{__("Padding", "b-feature-list")}</Label>
            <Device onChange={val => setDevice(val)} />
          </PanelRow>
          <BBoxControl
            values={itemStyles.padding[device]}
            onChange={val => setAttributes({ itemStyles: updateData(itemStyles, val, "padding", device) })}
          />
        </div>



      </PanelBody>
    </div>
  );
};

export default Item;