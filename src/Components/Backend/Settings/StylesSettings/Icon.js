import { PanelBody, PanelRow, RangeControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import React from 'react';
import { BColor, Label, Background } from '../../../../../../Components';
import { Device } from '../../../../../../Components/Device/Device';
import { BBoxControl } from '../../../../../../Components/BBoxControl/BBoxControl';
import { updateData } from '../../../../utils/functions';
import BorderControl from '../../../../Panel/BorderControl/BorderControl';



const Icon = compose(withSelect((select) => { return { device: select("core/edit-post").__experimentalGetPreviewDeviceType()?.toLowerCase() } }))(({ attributes, setAttributes, device }) => {
  const { iconStyle } = attributes;
  const colors = [
    { name: 'Black', color: 'black' },
    { name: 'Red', color: 'red' },
    { name: 'Gray', color: 'Gray' }
  ];

  return (
    <div>
      <PanelBody title={__("Icon Styles", "b-features-lists")} initialOpen={false}>
        {/* SVG Icon Color */}
        <BColor
          label={__('Icon Color', 'feature-lists')}
          value={iconStyle.iconColor}
          onChange={value => setAttributes({ iconStyle: updateData(iconStyle, value, "iconColor") })}
          defaultColor='null' />
        {/* Hover Icon Color */}
        <BColor
          label={__('Hover Icon Color', 'feature-lists')}
          value={iconStyle.iconColorHover}
          onChange={value => setAttributes({ iconStyle: updateData(iconStyle, value, "iconColorHover") })}
          defaultColor='null' />

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
                label={__('Normal Background Color', 'feature-lists')}
                value={iconStyle.normalBackground}
                onChange={val => setAttributes({ iconStyle: updateData(iconStyle, val, "normalBackground") })}
                defaults={{ color: '#000' }}
                isImage={false}
              />
            </div>

            {/* Hover Background Content */}
            <div className={`background-tab-item ${iconStyle.backgroundFor === 'hover' ? 'activeBackgroundFor' : ''}`}>
              <Background
                label={__('Hover Background Color', 'feature-lists')}
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
            label={__('Border:', 'feature-lists')}
            value={iconStyle.borderControl}
            onChange={val => setAttributes({ iconStyle: updateData(iconStyle, val, "borderControl") })}
          />

          <div style={{ margin: "10px 0" }}>
            <BBoxControl
              label={__("Border Radius", "feature-lists")}
              values={iconStyle.borderRadius}
              onChange={val => setAttributes({ iconStyle: updateData(iconStyle, val, "borderRadius") })}
            />
          </div>
        </div>

        {/* Icon Div Size */}
        <div style={{ marginTop: "10px" }}>
          <div>
            <PanelRow>
              <Label className='mb5'>{__("Size", "b-feature-list")}</Label>
              <Device />
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
              <Device />
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
            <Device />
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
            <Device />
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
});

export default Icon;