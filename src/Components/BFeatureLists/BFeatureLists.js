import React from 'react';
import SVG from 'react-inlinesvg';
import '../../editor.scss';
import Styles from '../Common/Styles';

const BFeatureLists = ({ attributes, titleElement, descriptionEl, setActiveFeature }) => {
  const { cId, items } = attributes;



  return (
    <>
      <Styles attributes={attributes} />
      

      <div id={`main-wrapper-${cId}`}>
        <div className='items-container'>
          {
            items.map((item, index) => {
              return (
                <div key={index} className='feature-item' onClick={() => setActiveFeature(index)}>

                  {/* Icon */}
                  <div className={`feature-icon icon-${index} rhombus`}>
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

export default BFeatureLists;