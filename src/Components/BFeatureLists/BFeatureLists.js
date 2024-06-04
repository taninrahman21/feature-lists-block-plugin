import React, { useRef, useEffect } from 'react';
import Styles from '../Common/Styles';
import '../../editor.scss';

const BFeatureLists = ({ attributes, setAttributes }) => {
  const { cId, items, valueForEachItem } = attributes;

 
  
  return (
    <>
      <Styles attributes={attributes} />


      <div id={`main-wrapper-${cId}`}>
        <div className='items-container'>
          {
            items.map((item, index) => {
              return (
                <div key={index} className='feature-item'>

                  {/* Icon */}
                  <div className={`feature-icon icon-${index} rhombus`}>
                    <img src={item?.icon?.url} alt=' ' />
                    {index < items.length - 1 && <div className="line"></div>}
                  </div>


                  {/* Content */}
                  <div className='feature-content'>
                    {
                      item?.title?.link ? <valueForEachItem.titleTag className='title' onClick={() => window.open(`${item.title.link}`, item.title?.openNewTab ? '_blank' : '_self')}>{item?.title?.text}</valueForEachItem.titleTag> :
                        <valueForEachItem.titleTag className='title'>{item?.title?.text}</valueForEachItem.titleTag>
                    }
                    <p className='description'>{item?.description}</p>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default BFeatureLists;