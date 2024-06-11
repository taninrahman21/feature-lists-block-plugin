import { PanelBody, PanelRow } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { __ } from "@wordpress/i18n";
import React from 'react';
import { Label } from '../../../../../../Components';
import { Device } from '../../../../../../Components/Device/Device';
import { BBoxControl } from '../../../../Panel/BBoxControl/BBoxControl';
import '../../../../editor.scss';
import { updateData } from '../../../../utils/functions';
import HoverContentBoxStyles from './HoverContentBoxStyles';
import NormalContentBoxStyles from './NormalContentBoxStyles';

const ContentBox = compose(withSelect((select) => { return { device: select("core/edit-post").__experimentalGetPreviewDeviceType()?.toLowerCase() } }))(({ attributes, setAttributes, device }) => {
  const { contentBox } = attributes;

  return (
    <div>
      <PanelBody title={__('Content Box', "feature-lists")} initialOpen={false}>

        {/* Content Box Padding */}
        <div style={{ marginTop: "10px" }}>
          <PanelRow>
            <Label className='mb5'>{__("Padding", 'feature-lists')}</Label>
            <Device />
          </PanelRow>
          <BBoxControl
            values={contentBox.padding[device]}
            onChange={val => setAttributes({ contentBox: updateData(contentBox, val, "padding", device) })}
          />
        </div>

        <div>
          <p>Background and Border</p>
          <div className="content-box-style-tab" style={{ margin: "10px 0" }}>
            <div
              className={`normal-btn ${contentBox.contentBoxStyleFor === 'normal' ? 'activeContentBoxStyleFor' : ''}`}
              onClick={() => setAttributes({ contentBox: updateData(contentBox, "normal", "contentBoxStyleFor") })}
            > Normal</div>
            <div
              className={`hover-btn ${contentBox.contentBoxStyleFor === 'hover' ? 'activeContentBoxStyleFor' : ''}`}
              onClick={() => setAttributes({ contentBox: updateData(contentBox, "hover", "contentBoxStyleFor") })}
            >Hover</div>
          </div>
          <div className="content-box-style-tab-content" style={{ margin: "10px 0" }}>

            {/* Normal Background Content */}
            <div className={`content-box-style-tab-item ${contentBox.contentBoxStyleFor === 'normal' ? 'activeContentBoxStyleFor' : ''}`}>
              <NormalContentBoxStyles attributes={attributes} setAttributes={setAttributes} />
            </div>

            {/* Hover Background Content */}
            <div className={`content-box-style-tab-item ${contentBox.contentBoxStyleFor === 'hover' ? 'activeContentBoxStyleFor' : ''}`}>
              <HoverContentBoxStyles attributes={attributes} setAttributes={setAttributes} />
            </div>

          </div>
        </div>
      </PanelBody>
    </div>
  );
});

export default ContentBox;