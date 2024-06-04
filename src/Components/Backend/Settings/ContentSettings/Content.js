import { Button, PanelBody, RangeControl, SelectControl, TextControl, TextareaControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React, { useState } from 'react';
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa6";
import { BColor } from '../../../../../../Components';
import '../../../../editor.scss';
import { updateData } from '../../../../utils/functions';
import UseInlineFeatureLists from './UseInlineFeatureLists';
import UploadIcon from './uploadIcon';

const Content = ({ attributes, setAttributes }) => {
  const { items, valueForEachItem } = attributes;
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);


  const toggleEditOption = (index) => {
    if (selectedItemIndex === index) {
      setSelectedItemIndex(null);
    } else {
      setSelectedItemIndex(index);
    }
  };

  // Delete Item Function
  const deleteItem = (index) => {
    const newItems = produce(items, draft => {
      draft.splice(index, 1);
    });
    setAttributes({ items: newItems });
  };

  // Add Item Function
  const addItem = () => {
    const newItems = produce(items, draft => {
      draft.push({
        "icon": { "type": "icon", "url": "http://localhost/tanin-wp/wp-content/uploads/2024/04/favicon.svg", "width": "", "bgColor": "" },
        "title": { "text": "New Feature", "link": "", "openNewTab": false },
        "description": "Description of B Feature Lists Content."
      });
    });
    setAttributes({ items: newItems });
  };



  return (
    <div>
      <PanelBody title={__("Content Setting", "b-feature-list")}>
        {
          items.map((item, index) => {
            return (
              <>
                <div key={index} className='feature'>
                  <div onClick={() => toggleEditOption(index)} className='title'>
                    <p>{item.title.text.length > 21 ? `${item.title.text.slice(0, 21)}....` : item.title.text} </p>
                  </div>
                  <div className='icons'>
                    <Button onClick={() => deleteItem(index)} icon={"trash"}></Button>
                  </div>
                </div>

                {/* Edit Option of Content */}
                {selectedItemIndex === index && (
                  <>
                    <div>
                      {/* Title Text */}
                      <TextControl
                        label={__("Title", "b-feature-lists")}
                        value={item.title.text}
                        onChange={(value) => {
                          const newItems = produce(items, draft => {
                            draft[index].title.text = value;
                          });
                          setAttributes({ items: newItems });
                        }}
                      />
                      {/* Description Text */}
                      <TextareaControl
                        label={__("description", "b-feature-lists")}
                        value={item.description}
                        onChange={(value) => {
                          const newItems = produce(items, draft => {
                            draft[index].description = value;
                          });
                          setAttributes({ items: newItems });
                        }}
                      />
                    </div>

                    {/* Icon Upload Setting */}
                    <div>
                      <p>Icon Type</p>

                      <div className="tab-buttons">
                        <div
                          className={`tab-button ${item.icon.type === 'none' ? 'active' : ''}`}
                          onClick={() => {
                            const newItems = produce(items, draft => {
                              draft[index].icon.type = "none";
                            });
                            setAttributes({ items: newItems });
                          }}
                        >None
                        </div>
                        <div
                          className={`tab-button ${item.icon.type === 'icon' ? 'active' : ''}`}
                          onClick={() => {
                            const newItems = produce(items, draft => {
                              draft[index].icon.type = "icon";
                            });
                            setAttributes({ items: newItems });
                          }}
                        >Icon
                        </div>
                      </div>
                      <div className="tab-content">
                        {/* <div className={`tab-item ${item.icon.type === 'none' ? 'active' : ''}`}>
                            <p>This is the None section.</p>
                          </div> */}
                        <div className={`tab-item ${item.icon.type === 'icon' ? 'active' : ''}`}>
                          <UploadIcon attributes={attributes} setAttributes={setAttributes} index={index} />

                          <BColor
                            label={__('Background Color', 'b-feature-lists')}
                            value={item.icon.bgColor}
                            onChange={value => {
                              const newItems = produce(items, draft => {
                                draft[index].icon.bgColor = value;
                              });
                              setAttributes({ items: newItems });
                            }}
                            defaultColor='null' />

                          {/* Hover Background Color */}
                          <BColor
                            label={__('Hover Background Color', 'b-feature-lists')}
                            value={item.icon.hoverBg}
                            onChange={value => {
                              const newItems = produce(items, draft => {
                                draft[index].icon.hoverBg = value;
                              });
                              setAttributes({ items: newItems });
                            }}
                            defaultColor='null' />

                        </div>
                      </div>
                    </div>

                    {/* Feature Link Settings */}
                    <div>
                      {/* Feature Link */}
                      <div style={{ marginTop: "20px" }}>
                        <TextControl
                          label={__("Link", "b-feature-list")}
                          value={item.title.link}
                          onChange={value => {
                            const newItems = produce(items, draft => {
                              draft[index].title.link = value;
                            });
                            setAttributes({ items: newItems });
                          }}
                        />

                        {/* Open New Tab Toggler */}
                        <ToggleControl
                          label={__("Open in New Tab", "b-feature-list")}
                          checked={item.title.openNewTab}
                          onChange={(e) => {
                            const newItems = produce(items, draft => {
                              draft[index].title.openNewTab = e;
                            });
                            setAttributes({ items: newItems });
                          }}
                        />

                      </div>


                    </div>
                  </>
                )}

              </>
            )
          })
        }

        {/* Add New Feature Button */}
        <Button
          style={{
            width: "100%",
            marginTop: "15px",
            marginBottom: "20px",
            background: "#4527a4",
            display: "flex",
            justifyContent: "center",
          }}
          icon={"plus f132"}
          variant="primary"
          onClick={addItem}
        >
          {__("Add New Feature", "b-feature-lists")}
        </Button>

        <hr />


        {/* Title HTML Tag */}
        <SelectControl
          label={__("Title HTML Tag", "b-feature-lists")}
          value={valueForEachItem.titleTag}
          options={[
            { label: 'H1', value: 'H1' },
            { label: 'H2', value: 'H2' },
            { label: 'H3', value: 'H3' },
            { label: 'H4', value: 'H4' },
            { label: 'H5', value: 'H5', checked: true },
            { label: 'H6', value: 'H6' },
            { label: 'P', value: 'P' },
            { label: 'Div', value: 'Div' },
          ]}
          onChange={(newTag) => setAttributes({ valueForEachItem: updateData(valueForEachItem, newTag, "titleTag") })}
        />


        {/* Select Icon Shape */}
        <SelectControl
          label={__("Icon Shape", "b-feature-lists")}
          value={valueForEachItem.iconShape}
          options={[
            { label: 'None', value: 'none' },
            { label: 'Circle', value: 'circle', checked: true },
            { label: 'Square', value: 'square' },
            { label: 'Rhombus', value: 'rhombus' }
          ]}
          onChange={(newShape) => setAttributes({ valueForEachItem: updateData(valueForEachItem, newShape, "iconShape") })}
        />


        {/* Icon Position */}


        <p>Icon Position</p>

        <div className="item-position-tab">
          <div
            className={`leftAlign-btn ${valueForEachItem.iconPosition === 'left' ? 'activeIconPosition' : ''}`}
            onClick={() => setAttributes({ valueForEachItem: updateData(valueForEachItem, "left", "iconPosition") })}
          > <FaAlignLeft /> </div>
          <div
            className={`centerAlign-btn ${valueForEachItem.iconPosition === 'center' ? 'activeIconPosition' : ''}`}
            onClick={() => setAttributes({ valueForEachItem: updateData(valueForEachItem, "center", "iconPosition") })}
          ><FaAlignCenter /> </div>
          <div
            className={`rightAlign-btn ${valueForEachItem.iconPosition === 'right' ? 'activeIconPosition' : ''}`}
            onClick={() => setAttributes({ valueForEachItem: updateData(valueForEachItem, "right", "iconPosition") })}
            icon={"rig"}
          ><FaAlignRight /> </div>
        </div>

        {/* Icon Position Tab Content Starts Here */}
        <div className="icon-position-tab-content">

          {/* Left Align Content */}
          <div className={`icon-position-tab-item ${valueForEachItem.iconPosition === 'left' ? 'activeIconPosition' : ''}`}>
            {/* Toggle Icon Vertically Center  */}
            <ToggleControl
              label={__("Content Vertically Center", "b-feature-list")}
              checked={valueForEachItem.iconVerticallyCenter}
              onChange={(e) => setAttributes({ valueForEachItem: updateData(valueForEachItem, e, "iconVerticallyCenter") })}
            />

            {/* Show Connector Line */}
            {
              !valueForEachItem.useInlineFeatures && (
                <>
                  <ToggleControl
                    label={__("Show Connector Line", "b-feature-list")}
                    checked={valueForEachItem.showConnectorLine}
                    onChange={(e) => setAttributes({ valueForEachItem: updateData(valueForEachItem, e, "showConnectorLine") })}
                  />
                  {/* Connector Line Color */}
                  {
                    valueForEachItem.showConnectorLine && <div style={{ margin: "10px 0" }}>
                      <BColor
                        label={__('Connector Line Color', 'b-feature-lists')}
                        value={valueForEachItem.connectorLineColor}
                        onChange={value => setAttributes({ valueForEachItem: updateData(valueForEachItem, value, "connectorLineColor") })}
                        defaultColor='#000' />
                    </div>
                  }
                  {/* Connector Line Width */}
                  {
                    valueForEachItem.showConnectorLine && <div>
                      <RangeControl
                        label={__("Connector Line Width", "b-feature-lists")}
                        value={valueForEachItem.connectorLineWidth}
                        onChange={(value) => setAttributes({ valueForEachItem: updateData(valueForEachItem, value, "connectorLineWidth") })}
                        min={1}
                        max={200}
                      />
                    </div>
                  }
                </>
              )
            }


            <UseInlineFeatureLists attributes={attributes} setAttributes={setAttributes} />

          </div>

          {/* Center Align Content */}
          <div className={`icon-position-tab-item ${valueForEachItem.iconPosition === 'center' ? 'activeIconPosition' : ''}`}>
            <UseInlineFeatureLists attributes={attributes} setAttributes={setAttributes} />
          </div>

          {/* Right Align Content */}
          <div className={`icon-position-tab-item ${valueForEachItem.iconPosition === 'right' ? 'activeIconPosition' : ''}`}>
            {/* Toggle Icon Vertically Center  */}
            <ToggleControl
              label={__("Content Vertically Center", "b-feature-list")}
              checked={valueForEachItem.iconVerticallyCenter}
              onChange={(e) => setAttributes({ valueForEachItem: updateData(valueForEachItem, e, "iconVerticallyCenter") })}
            />

            {/* Show Connector Line */}
            {
              !valueForEachItem.useInlineFeatures && (
                <>
                  <ToggleControl
                    label={__("Show Connector Line", "b-feature-list")}
                    checked={valueForEachItem.showConnectorLine}
                    onChange={(e) => setAttributes({ valueForEachItem: updateData(valueForEachItem, e, "showConnectorLine") })}
                  />
                  {/* Connector Line Color */}
                  {
                    valueForEachItem.showConnectorLine && <div style={{ margin: "10px 0" }}>
                      <BColor
                        label={__('Connector Line Color', 'b-feature-lists')}
                        value={valueForEachItem.connectorLineColor}
                        onChange={value => setAttributes({ valueForEachItem: updateData(valueForEachItem, value, "connectorLineColor") })}
                        defaultColor='#000' />
                    </div>
                  }
                  {/* Connector Line Width */}
                  {
                    valueForEachItem.showConnectorLine && <div>
                      <RangeControl
                        label={__("Connector Line Width", "b-feature-lists")}
                        value={valueForEachItem.connectorLineWidth}
                        onChange={(value) => setAttributes({ valueForEachItem: updateData(valueForEachItem, value, "connectorLineWidth") })}
                        min={1}
                        max={50}
                      />
                    </div>
                  }
                </>
              )
            }


            <UseInlineFeatureLists attributes={attributes} setAttributes={setAttributes} />
          </div>



        </div>

      </PanelBody>
    </div>
  );
};

export default Content;