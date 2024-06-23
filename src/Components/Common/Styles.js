import React from "react";
import {
  getBackgroundCSS,
  getShadowCSS,
  getTypoCSS,
} from "../../../../Components/utils/getCSS";
import { getBorderCSS, getBorderRadiusCSS, getBoxCss } from "../../utils/functions";

const Styles = ({ attributes }) => {
  const { cId, items, valueForEachItem, itemStyles, iconStyle, title, description, contentBox } = attributes;
  const { iconShape, iconPosition, iconVerticallyCenter, useInlineFeatures, itemsPerLine, gapBetweenItem, showConnectorLine, connectorLineColor, connectorLineWidth, showIcon } = valueForEachItem;
  const { spaceBetweenItem, borderRadius, border, addBorder, padding, backgroundColor } = itemStyles;
  const styleRef = React.useRef()

  const mainWrapper = `#main-wrapper-${cId}`;
  const connectionLine = `${mainWrapper} .connector-line`;
  const itemsContainer = `${mainWrapper} .items-container`;
  const item = `${itemsContainer} .feature-item`;
  const featureIcon = `${item} .feature-icon`;
  const content = `${item} .feature-content`;
  const featureTitle = `${content} .title`;
  const featureDescription = `${content} .description`;


  return (
    <>
      <style ref={styleRef} >
        {` 

        ${getTypoCSS("", title.typo)?.googleFontLink}
        ${getTypoCSS(featureTitle, title.typo)?.styles}

        ${getTypoCSS("", description.typo)?.googleFontLink}
        ${getTypoCSS(featureDescription, description.typo)?.styles}

        ${itemsContainer} {
          display: ${useInlineFeatures ? "grid" : "block"};
          grid-template-columns: repeat(${itemsPerLine.desktop}, 1fr);
          gap: ${gapBetweenItem.desktop}px;
        }

          ${items
            .map((item, index) => {
              return `
                    ${featureIcon}.icon-${index} {
                      display: ${showIcon === false ? "none" : item.icon.type === "none" ? "none" : "flex"};
                      background: ${item.icon.bgColor ? item.icon.bgColor : iconStyle.normalBackground};
                      }
                    ${featureIcon}.icon-${index}:hover { background: ${item.icon.hoverBg ? item.icon.hoverBg : iconStyle.hoverBackground};
                    }
                    ${featureIcon}.icon-${index} .img-icon svg {
                      fill: ${item.icon.iconColor};
                    }

                    `;
            }).join("")}

          ${item} {
            ${iconPosition === "right" && "flex-direction: row-reverse; text-align: right;"};
            ${iconPosition === "center" && "flex-direction: column; justify-content: center; text-align: center"};
            ${iconVerticallyCenter ? "align-items: center;" : "align-items: flex-start;"};
            margin-bottom: ${!useInlineFeatures ? `${spaceBetweenItem.desktop}px` : undefined};
            ${addBorder && `border: ${border.width} ${border.style} ${border.color};`};
             ${getBoxCss(padding.desktop, "padding")}
            border-radius: ${borderRadius}px;
            ${getBackgroundCSS(backgroundColor)};
          }
          ${item}:last-child::after {
            display: none;
          }
         
          ${featureIcon} {
            ${getBorderCSS(iconStyle.borderControl)}
            height: ${iconStyle.iconDivSize.desktop}px;
            width: ${iconStyle.iconDivSize.desktop}px;
            ${getBorderRadiusCSS(iconStyle.borderRadius)}
            ${iconShape === "rhombus" && "transform: rotate(45deg);"};
            ${iconShape === "circle" && "border-radius: 50%;"};
            ${iconShape === "none" && "border: none;"};
            display: ${showIcon === false ? "none" : "flex"};
            justify-content: center;
            align-items: center;
            transition: transform 0.5s linear;
            ${getBoxCss(iconStyle.padding.desktop, "padding")}
            ${getBackgroundCSS(iconStyle.normalBackground)};
            ${iconPosition === "left" && `margin-right:  ${iconStyle.spaceFromContent.desktop}px`};
            ${iconPosition === "right" && `margin-left: ${iconStyle.spaceFromContent.desktop}px;`};
            ${iconPosition === "center" && `margin-bottom: ${iconStyle.spaceFromContent.desktop}px;`};
          } 

          ${featureIcon}:hover {
             ${getBackgroundCSS(iconStyle.hoverBackground)};
            cursor: pointer;
          }
           
          ${featureIcon} .img-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            height: ${iconStyle.iconSize.desktop}px;
            width: ${iconStyle.iconSize.desktop}px;
          }
          ${featureIcon} .img-icon img, ${featureIcon} .img-icon svg {
            height: 100%;
            width: 100%;
            ${iconShape === "rhombus" && "transform: rotate(-45deg) ! important;"};
            fill: ${iconStyle.iconColor};
          }
          ${featureIcon}:hover .img-icon svg {
            fill: ${iconStyle.iconColorHover};
          }

          ${featureTitle} {
            margin-bottom: ${title.bottomSpace.desktop}px;
            color: ${title.color};
          }
          ${featureDescription} {
            color: ${description.color};
          }
          ${item}:hover .feature-content .title{
            color: ${title.hoverColor};
            cursor: pointer;
          }

          ${content} {
             ${getBackgroundCSS(contentBox.normalBackground)};
            border-color: ${contentBox.normalBorder.color};
            border-style: ${contentBox.normalBorder.style};
            ${getBoxCss(contentBox.normalBorder.width.desktop, "border-width")}
            ${getBoxCss(contentBox.padding.desktop, "padding")}
            ${getBorderRadiusCSS(contentBox.normalBorderRadius.desktop)}
            transition: box-shadow ${contentBox.boxShadowTransition}s, border-radius ${contentBox.borderRadiusTransition}s, background-color ${contentBox.backgroundTransition}s, border-color ${contentBox.borderTransition}s, border-width ${contentBox.borderTransition}s, border-style ${contentBox.borderTransition}s;
            box-shadow: ${getShadowCSS(contentBox.boxShadowNormal)};
          }
          ${content}:hover {
             ${getBackgroundCSS(contentBox.hoverBackground)};
            border-color: ${contentBox.hoverBorder.color};
            border-style: ${contentBox.hoverBorder.style};
            ${getBoxCss(contentBox.hoverBorder.width.desktop, "border-width")}
            ${getBorderRadiusCSS(contentBox.hoverBorderRadius.desktop)}
            box-shadow: ${getShadowCSS(contentBox.boxShadowHover)};
            cursor: pointer;
          }

          ${connectionLine} {
            display: ${!(iconPosition === "center") && !(useInlineFeatures) && showConnectorLine ? "block" : "none"};
            width: ${connectorLineWidth}px;
            background-color: ${connectorLineColor};
            ${iconPosition === "right" && `right: calc(${iconStyle.iconDivSize.desktop / 2}px + ${padding.desktop.left} + ${iconStyle.padding.desktop.left} + ${iconShape !== 'none' ? `${iconStyle.borderControl.width}` : '0px'});`};
            transform: translateX(-50%);
            ${iconPosition === "left" && `left: calc(${iconStyle.iconDivSize.desktop / 2}px + ${padding.desktop.left} + ${iconStyle.padding.desktop.left} + ${iconShape !== 'none' ? `${iconStyle.borderControl.width}` : '0px'});`};
            transform: translateX(-50%);
            top: ${padding.desktop.top};
            height: calc(100% - ${padding.desktop.top} - ${padding.desktop.bottom});
          }

       @media only screen and (max-width:640px){
         ${itemsContainer} {
          grid-template-columns: repeat(${itemsPerLine.mobile}, 1fr);
          gap: ${gapBetweenItem.mobile}px;
         }
          ${item}{
          margin-bottom: ${spaceBetweenItem.mobile}px;
          ${getBoxCss(padding.mobile, "padding")}
         }
          ${featureTitle} {
            margin-bottom: ${title.bottomSpace.mobile}px;
          }
          ${featureIcon} {
            ${getBoxCss(iconStyle.padding.mobile, "padding")}
            height: ${iconStyle.iconDivSize.mobile}px;
            width: ${iconStyle.iconDivSize.mobile}px;
            ${iconPosition === "left" && `margin-right:  ${iconStyle.spaceFromContent.mobile}px`};
            ${iconPosition === "right" && `margin-left: ${iconStyle.spaceFromContent.mobile}px;`};
            ${iconPosition === "center" && `margin-bottom: ${iconStyle.spaceFromContent.mobile}px;`};
          }
          ${featureIcon} img {
            height: ${iconStyle.iconSize.mobile}px;
            width: ${iconStyle.iconSize.mobile}px;
          }
          ${content} {
            ${getBoxCss(contentBox.normalBorder.width.mobile, "border-width")}
            ${getBoxCss(contentBox.padding.mobile, "padding")}
            ${getBorderRadiusCSS(contentBox.normalBorderRadius.mobile)}
            }
          ${content}:hover {
            ${getBoxCss(contentBox.hoverBorder.width.mobile, "border-width")}
            ${getBorderRadiusCSS(contentBox.hoverBorderRadius.mobile)}
          }
      }


      @media only screen and (min-width:641px) and (max-width: 1024px){
         ${itemsContainer} {
          grid-template-columns: repeat(${itemsPerLine.tablet}, 1fr);
          gap: ${gapBetweenItem.tablet}px;
         }
          ${item}{
          margin-bottom: ${spaceBetweenItem.tablet}px;
          ${getBoxCss(padding.tablet, "padding")}
         }
          ${featureTitle} {
            margin-bottom: ${title.bottomSpace.tablet}px;
          }
           ${featureIcon} {
            ${getBoxCss(iconStyle.padding.tablet, "padding")}
            height: ${iconStyle.iconDivSize.tablet}px;
            width: ${iconStyle.iconDivSize.tablet}px;
            ${iconPosition === "left" && `margin-right:  ${iconStyle.spaceFromContent.tablet}px`};
            ${iconPosition === "right" && `margin-left: ${iconStyle.spaceFromContent.tablet}px;`};
            ${iconPosition === "center" && `margin-bottom: ${iconStyle.spaceFromContent.tablet}px;`};
          }
          ${featureIcon} img {
            height: ${iconStyle.iconSize.tablet}px;
            width: ${iconStyle.iconSize.tablet}px;
          }
           ${content} {
            ${getBoxCss(contentBox.normalBorder.width.tablet, "border-width")}
            ${getBoxCss(contentBox.padding.tablet, "padding")}
            ${getBorderRadiusCSS(contentBox.normalBorderRadius.tablet)}
            }
          ${content}:hover {
            ${getBoxCss(contentBox.hoverBorder.width.tablet, "border-width")}
            ${getBorderRadiusCSS(contentBox.hoverBorderRadius.tablet)}
          }
      }
        


        `}
      </style>
    </>
  );
};

export default Styles;
