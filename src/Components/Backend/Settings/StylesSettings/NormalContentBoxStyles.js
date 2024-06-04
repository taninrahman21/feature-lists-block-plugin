import { PanelRow, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React from 'react';
import { BColor, Background, Label, ShadowControl } from '../../../../../../Components';
import { Device } from '../../../../../../Components/Device/Device';
import { updateData } from '../../../../utils/functions';
import { BBoxControl } from '../../../Panel/BBoxControl/BBoxControl';

const NormalContentBoxStyles = ({ attributes, setAttributes, device, setDevice }) => {
  const { contentBox } = attributes;
  return (
    <div>
      {/* Background Color */}
      <Background
        label={__('Background Color', 'b-feature-lists')}
        value={contentBox.normalBackground}
        onChange={val => setAttributes({ contentBox: updateData(contentBox, val, "normalBackground") })}
        defaults={{ color: '#000' }}
        isImage={false}
      />

      {/* Border Style */}
      <SelectControl
        label={__("Border Style", "b-feature-lists")}
        value={contentBox.normalBorder.style}
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
        onChange={(newStyle) => setAttributes({ contentBox: updateData(contentBox, newStyle, "normalBorder", "style") })}
      />

      {
        contentBox.normalBorder.style !== "none" && (
          <>
            {/* Border Color */}
            <BColor
              label={__('Border Color', 'b-feature-lists')}
              value={contentBox.normalBorder.color}
              onChange={value => setAttributes({ contentBox: updateData(contentBox, value, "normalBorder", "color") })}
              defaultColor='null' />

            {/* Border Width */}
            <div style={{ marginTop: "10px" }}>
              <PanelRow>
                <Label className='mb5'>{__("Border Width", 'b-feature-lists')}</Label>
                <Device onChange={val => setDevice(val)} />
              </PanelRow>
              <BBoxControl
                values={contentBox.normalBorder.width[device]}
                onChange={val => {
                  const newContentBox = produce(contentBox, draft => {
                    draft.normalBorder.width[device] = val;
                  })
                  setAttributes({ contentBox: newContentBox });
                }}
              />
            </div>
          </>
        )
      }

      {/* Border Radius */}
      <div style={{ marginTop: "10px" }}>
        <PanelRow>
          <Label className='mb5'>{__("Border Radius", 'b-feature-lists')}</Label>
          <Device onChange={val => setDevice(val)} />
        </PanelRow>
        <BBoxControl
          values={contentBox.normalBorderRadius[device]}
          onChange={val => setAttributes({ contentBox: updateData(contentBox, val, "normalBorderRadius", device) })}
        />
      </div>


      {/* Content Box Shadow */}
      <ShadowControl
        label={__("Box Shadow", "b-feature-lists")}
        value={contentBox.boxShadowNormal}
        onChange={val => setAttributes({ contentBox: updateData(contentBox, val, "boxShadowNormal") })}
      />


    </div>
  );
};

export default NormalContentBoxStyles;