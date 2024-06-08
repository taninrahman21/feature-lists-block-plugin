import React, { useState } from 'react';
import BFeatureLists from '../BFeatureLists/BFeatureLists';

const Frontend = ({ attributes }) => {
  const { valueForEachItem } = attributes;
  const [activeFeature, setActiveFeature] = useState(0);

  

  const renderTitleEl = (item) => {
    if (!item.title.text) {
      return null;
    }

    return (
      <valueForEachItem.titleTag
        className="title"
        {...(item.title.link ? {
          onClick: () => window.open(`${item.title.link}`, item.title?.openNewTab ? '_blank' : '_self'),
          href: item.title.link // Add href for the 'a' tag
        } : {})}
      >
        {item.title.text}
      </valueForEachItem.titleTag>
    );
  };

  const renderDescriptionEl = (item) => {
    if (!item.description) {
      return null;
    }
    return (
      <p className="description">{item.description}</p>
    );
  };

  return (
    <div>
      <BFeatureLists
        attributes={attributes}
        setActiveFeature={setActiveFeature}
        titleElement={(item) => renderTitleEl(item)}
        descriptionEl={(item) => renderDescriptionEl(item)} />
    </div>
  );
};

export default Frontend;