import { __experimentalBorderControl as BorderControl, PanelBody, PanelRow, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React from 'react';
import { Background, Label } from '../../../../../../Components';
import { Device } from '../../../../../../Components/Device/Device';
import { updateData } from '../../../../utils/functions';
import { BBoxControl } from '../../../../../../Components/BBoxControl/BBoxControl';



const Icon = ({ attributes, setAttributes, device, setDevice }) => {
  const { iconStyle } = attributes;
  const colors = [
    { name: 'Black', color: 'black' },
    { name: 'Red', color: 'red' },
    { name: 'Gray', color: 'Gray' }
  ];

  return (
    <div>
      <PanelBody title={__("Icon Styles", "b-features-lists")} initialOpen={false}>
        {/* Background Color */}
        <div>
          <p>Background</p>
          <div className="background-tab" style={{ margin: "10px 0" }}>
            <div
              className={`normal-btn ${iconStyle.backgroundFor === 'normal' ? 'activeBackgroundFor' : ''}`}
              onClick={() => setAttributes({ iconStyle: updateData(iconStyle, "normal", "backgroundFor") })}
            > Normal</div>
            <div
              className={`hover-btn ${iconStyle.backgroundFor === 'hover' ? 'activeBackgroundFor' : ''}`}
              onClick={() => setAttributes({ iconStyle: updateData(iconStyle, "hover", "backgroundFor") })}
            >Hover</div>
          </div>
          <div className="background-tab-content" style={{ margin: "10px 0" }}>

            {/* Normal Background Content */}
            <div className={`background-tab-item ${iconStyle.backgroundFor === 'normal' ? 'activeBackgroundFor' : ''}`}>
              <Background
                label={__('Normal Background Color', 'b-feature-lists')}
                value={iconStyle.normalBackground}
                onChange={val => setAttributes({ iconStyle: updateData(iconStyle, val, "normalBackground") })}
                defaults={{ color: '#000' }}
                isImage={false}
              />
            </div>

            {/* Hover Background Content */}
            <div className={`background-tab-item ${iconStyle.backgroundFor === 'hover' ? 'activeBackgroundFor' : ''}`}>
              <Background
                label={__('Hover Background Color', 'b-feature-lists')}
                value={iconStyle.hoverBackground}
                onChange={val => setAttributes({ iconStyle: updateData(iconStyle, val, "hoverBackground") })}
                defaults={{ color: '#000' }}
                isImage={false}
              />
            </div>

          </div>
        </div>

        {/* Icon Div Border */}
        <div style={{ margin: "15px 0" }} >
          <BorderControl
            label={__("Border", "b-feature-lists")}
            colors={colors}
            onChange={value => setAttributes({ iconStyle: updateData(iconStyle, value, "border") })}
            value={iconStyle.border}
          />
          <div style={{ margin: "10px 0" }}>
            <RangeControl
              label={__("Border Radius", "b-feature-lists")}
              value={iconStyle.borderRadius}
              onChange={value => setAttributes({ iconStyle: updateData(iconStyle, value, "borderRadius") })}
            />
          </div>
        </div>

        {/* Icon Div Size */}
        <div style={{ marginTop: "10px" }}>
          <div>
            <PanelRow>
              <Label className='mb5'>{__("Size", "b-feature-list")}</Label>
              <Device onChange={val => setDevice(val)} />
            </PanelRow>
            <RangeControl
              value={iconStyle.iconDivSize[device]}
              onChange={(value) => setAttributes({ iconStyle: updateData(iconStyle, value, "iconDivSize", device) })}
              min={5}
              max={200}
            />
          </div>
        </div>

        {/* Icon Size */}
        <div>
          <div>
            <PanelRow>
              <Label className='mb5'>{__("Icon Size", "b-feature-list")}</Label>
              <Device onChange={val => setDevice(val)} />
            </PanelRow>
            <RangeControl
              value={iconStyle.iconSize[device]}
              onChange={(value) => setAttributes({ iconStyle: updateData(iconStyle, value, "iconSize", device) })}
              min={5}
              max={200}
            />
          </div>
        </div>

        {/* Padding */}
        <div>
          <PanelRow>
            <Label className='mb5'>{__("Padding", "b-feature-list")}</Label>
            <Device onChange={val => setDevice(val)} />
          </PanelRow>
          <BBoxControl
            values={iconStyle.padding[device]}
            onChange={val => setAttributes({ iconStyle: updateData(iconStyle, val, "padding", device) })}
          />
        </div>

        {/* Spacing */}
        <div>
            <PanelRow>
              <Label className='mb5'>{__("Spacing", "b-feature-list")}</Label>
              <Device onChange={val => setDevice(val)} />
            </PanelRow>
            <RangeControl
              value={iconStyle.spaceFromContent[device]}
              onChange={(value) => setAttributes({ iconStyle: updateData(iconStyle, value, "spaceFromContent", device) })}
              min={5}
              max={200}
            />
          </div>
      </PanelBody>
    </div>
  );
};

export default Icon;