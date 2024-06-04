import { PanelRow, RangeControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React from 'react';
import { BColor, Background, Label, ShadowControl } from '../../../../../../Components';
import { Device } from '../../../../../../Components/Device/Device';
import { updateData } from '../../../../utils/functions';
import { BBoxControl } from '../../../Panel/BBoxControl/BBoxControl';

const HoverContentBoxStyles = ({ attributes, setAttributes, device, setDevice }) => {
  const { contentBox } = attributes;

  return (
    <div>
      {/* Background Color */}
      <Background
        label={__('Background Color', 'b-feature-lists')}
        value={contentBox.hoverBackground}
        onChange={val => setAttributes({ contentBox: updateData(contentBox, val, "hoverBackground") })}
        defaults={{ color: '#000' }}
        isImage={false}
      />

      {/* Background Transition  */}
      <RangeControl
        label={__("Background Transition", "b-feature-lists")}
        value={contentBox.backgroundTransition}
        onChange={value => setAttributes({ contentBox: updateData(contentBox, value, "backgroundTransition") })}
        min={0}
        max={5}
        step={0.01}
      />

      {/* Border Style */}
      <SelectControl
        label={__("Border Style", "b-feature-lists")}
        value={contentBox.hoverBorder.style}
        options={[
          { label: 'None', value: 'none' },
          { label: 'Solid', value: 'Solid' },
          { label: 'Dashed', value: 'dashed' },
          { label: 'Dotted', value: 'dotted' },
          { label: 'Double', value: 'double' },
          { label: 'Grove', value: 'grove' },
          { label: 'Ridge', value: 'ridge' },
          { label: 'Inset', value: 'inset' },
          { label: 'Outset', value: 'outset' },
          { label: 'Ridge', value: 'ridge' },
          { label: 'Hidden', value: 'hidden' }
        ]}
        onChange={(newStyle) => setAttributes({ contentBox: updateData(contentBox, newStyle, "hoverBorder", "style") })}
      />

      {
        contentBox.hoverBorder.style !== "none" && (
          <>
            {/* Border Color */}
            <BColor
              label={__('Border Color', 'b-feature-lists')}
              value={contentBox.hoverBorder.color}
              onChange={value => setAttributes({ contentBox: updateData(contentBox, value, "hoverBorder", "color") })}
              defaultColor='null' />

            {/* Border Width */}
            <div style={{ marginTop: "10px" }}>
              <PanelRow>
                <Label className='mb5'>{__("Border Width", 'b-feature-lists')}</Label>
                <Device onChange={val => setDevice(val)} />
              </PanelRow>
              <BBoxControl
                values={contentBox.hoverBorder.width[device]}
                onChange={val => {
                  const newContentBox = produce(contentBox, draft => {
                    draft.hoverBorder.width[device] = val;
                  })
                  setAttributes({ contentBox: newContentBox });
                }}
              />
            </div>

            {/* Border Transition  */}
            <RangeControl
              label={__("Border Transition", "b-feature-lists")}
              value={contentBox.borderTransition}
              onChange={value => setAttributes({ contentBox: updateData(contentBox, value, "borderTransition") })}
              min={0}
              max={5}
              step={0.01}
            />

          </>
        )
      }

      <div style={{ marginTop: "10px" }}>
        <PanelRow>
          <Label className='mb5'>{__("Border Radius", 'b-feature-lists')}</Label>
          <Device onChange={val => setDevice(val)} />
        </PanelRow>
        <BBoxControl
          values={contentBox.hoverBorderRadius[device]}
          onChange={val => setAttributes({ contentBox: updateData(contentBox, val, "hoverBorderRadius", device) })}
        />
      </div>

      {/* Border Radius Transition  */}
      <RangeControl
        label={__("Border Radius Transition", "b-feature-lists")}
        value={contentBox.borderRadiusTransition}
        onChange={value => setAttributes({ contentBox: updateData(contentBox, value, "borderRadiusTransition") })}
        min={0}
        max={5}
        step={0.01}
      />

      {/* Box Shadow */}
      <ShadowControl
        label={__("Box Shadow", "b-feature-lists")}
        value={contentBox.boxShadowNormal}
        onChange={val => setAttributes({ contentBox: updateData(contentBox, val, "boxShadowNormal") })}
      />

      {/* Box Shadow Transition  */}
      <RangeControl
        label={__("Box Shadow Transition", "b-feature-lists")}
        value={contentBox.boxShadowTransition}
        onChange={value => setAttributes({ contentBox: updateData(contentBox, value, "boxShadowTransition") })}
        min={0}
        max={5}
        step={0.01}
      />


    </div>
  );
};

export default HoverContentBoxStyles;