import React, { useRef } from 'react';
import SVG from 'react-inlinesvg';
import '../../editor.scss';
import Styles from '../Common/Styles';

const FeatureLists = ({ attributes, titleElement, descriptionEl, setActiveFeature }) => {
  const { cId, items } = attributes;
  const iconRef = useRef();
  const width = iconRef.current?.getBoundingClientRect().width;

  return (
    <>
      <Styles width={width} attributes={attributes} />


      <div id={`main-wrapper-${cId}`}>
        <div className='items-container'>
          {0 < items.length - 1 && <div className="connector-line"></div>}
          {
            items.map((item, index) => {
              return (
                <div key={index} className='feature-item' onClick={() => setActiveFeature(index)}>


                  {/* Icon */}
                  <div ref={iconRef} className={`feature-icon icon-${index} rhombus`}>
                    <div className='img-icon'>
                      {
                        item?.icon?.type === "image" && item?.icon?.imgUrl && <img src={item.icon.imgUrl} alt='' />
                      }
                      {
                        item.icon.type === "icon" && <SVG
                          src={item.icon.svgIcon?.url}
                          width={30}
                          height={30}
                        />
                      }

                    </div>
                    {index < items.length - 1 && <div className="line"></div>}
                  </div>


                  {/* Content */}
                  <div className='feature-content'>
                    {/* Feature Title */}
                    {
                      titleElement(item, index)
                    }

                    {/* Feature Description */}
                    {
                      descriptionEl(item, index)
                    }
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

export default FeatureLists;