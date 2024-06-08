import { RichText } from '@wordpress/block-editor';
import { produce } from 'immer';
import React from 'react';
import BFeatureLists from '../../BFeatureLists/BFeatureLists';

const BFeatureListsBack = ({ attributes, setAttributes, setActiveFeature }) => {
  const { items, valueForEachItem } = attributes;

  const renderTitleEl = (item, index) => (
    <RichText
      className='title'
      tagName={valueForEachItem.titleTag}
      value={item.title.text}
      onChange={(value) => {
        const newItems = produce(items, draft => {
          draft[index].title.text = value;
        });
        setAttributes({ items: newItems });
      }}
      {...(item.title.link ? {
        onClick: () => window.open(`${item.title.link}`, item.title?.openNewTab ? '_blank' : '_self')
      } : {})}
    />
  );


  const renderDescriptionEl = (item, index) => (
    <RichText
      className='description'
      tagName='p'
      value={item.description}
      onChange={(value) => {
        const newItems = produce(items, draft => {
          draft[index].description = value;
        });
        setAttributes({ items: newItems });
      }}
    />
  );

  return (
    <div>
      <BFeatureLists
        attributes={attributes}
        setActiveFeature={setActiveFeature}
        setAttributes={setAttributes}
        titleElement={(item, index) => renderTitleEl(item, index)}
        descriptionEl={(item, index) => renderDescriptionEl(item, index)} />
    </div>
  );
};

export default BFeatureListsBack;