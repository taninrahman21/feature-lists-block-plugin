import React from "react";
import {
  getBackgroundCSS,
  getBoxCSS,
  getShadowCSS,
  getTypoCSS,
} from "../../../../Components/utils/getCSS";

const Styles = ({ attributes }) => {
  const { cId, items, valueForEachItem, itemStyles, iconStyle, title, description, contentBox } = attributes;
  const { iconShape, iconPosition, iconVerticallyCenter, useInlineFeatures, itemsPerLine, gapBetweenItem, showConnectorLine, connectorLineColor, connectorLineWidth, showIcon } = valueForEachItem;
  const { spaceBetweenItem, borderRadius, border, addBorder, padding, backgroundColor } = itemStyles;

  const mainWrapper = `#main-wrapper-${cId}`;
  const itemsContainer = `${mainWrapper} .items-container`;
  const item = `${itemsContainer} .feature-item`;
  const featureIcon = `${item} .feature-icon`;
  const connectionLine = `${featureIcon} .line`;
  const content = `${item} .feature-content`;
  const featureTitle = `${content} .title`;
  const featureDescription = `${content} .description`;


  return (
    <>
      <style>
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
            padding: ${getBoxCSS(padding.desktop)};
            border-radius: ${borderRadius}px;
            ${getBackgroundCSS(backgroundColor)};
          }
          ${item}:last-child::after {
            display: none;
          }
         
          ${featureIcon} {
            border: ${iconStyle.border.width} ${iconStyle.border.style} ${iconStyle.border.color};
            border-radius: ${iconStyle.borderRadius}px;
            ${iconShape === "rhombus" && "transform: rotate(45deg);"};
            ${iconShape === "circle" && "border-radius: 50%;"};
            ${iconShape === "none" && "border: none;"};
            display: ${showIcon === false ? "none" : "flex"};
            justify-content: center;
            align-items: center;
            transition: transform 0.5s linear;
            padding: ${getBoxCSS(iconStyle.padding.desktop)};
            ${getBackgroundCSS(iconStyle.normalBackground)};
            height: ${iconStyle.iconDivSize.desktop}px;
            width: ${iconStyle.iconDivSize.desktop}px;
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
            fill: ${iconStyle.hoverIconColor};
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
            border-width: ${getBoxCSS(contentBox.normalBorder.width.desktop)};
            padding: ${getBoxCSS(contentBox.padding.desktop)};
            border-radius: ${getBoxCSS(contentBox.normalBorderRadius.desktop)};
            transition: box-shadow ${contentBox.boxShadowTransition}s, border-radius ${contentBox.borderRadiusTransition}s, background-color ${contentBox.backgroundTransition}s, border-color ${contentBox.borderTransition}s, border-width ${contentBox.borderTransition}s, border-style ${contentBox.borderTransition}s;
            box-shadow: ${getShadowCSS(contentBox.boxShadowNormal)};
          }
          ${content}:hover {
             ${getBackgroundCSS(contentBox.hoverBackground)};
            border-color: ${contentBox.hoverBorder.color};
            border-style: ${contentBox.hoverBorder.style};
            border-width: ${getBoxCSS(contentBox.hoverBorder.width.desktop)};
            border-radius: ${getBoxCSS(contentBox.hoverBorderRadius.desktop)};
            box-shadow: ${getShadowCSS(contentBox.boxShadowHover)};
            cursor: pointer;
          }

          ${connectionLine} {
            display: ${!(iconPosition === "center") && !(useInlineFeatures) && showConnectorLine ? "block" : "none"};
            width: ${connectorLineWidth}px;
            background-color: ${connectorLineColor};
            height: calc(${padding.desktop.bottom}  + ${spaceBetweenItem.desktop}px + ${padding.desktop.top} + ${contentBox.padding.desktop.bottom ? contentBox.padding.desktop.bottom : "0px"} + (${contentBox.padding.desktop.top ? `calc(${contentBox.padding.desktop.top} - 5px)` : "0px"}) + 5px);
          }


       @media only screen and (max-width:640px){
         ${itemsContainer} {
          grid-template-columns: repeat(${itemsPerLine.mobile}, 1fr);
          gap: ${gapBetweenItem.mobile}px;
         }
          ${item}{
          margin-bottom: ${spaceBetweenItem.mobile}px;
          padding: ${getBoxCSS(padding.mobile)};
         }
          ${featureTitle} {
            margin-bottom: ${title.bottomSpace.mobile}px;
          }
          ${featureIcon} {
            padding: ${getBoxCSS(iconStyle.padding.mobile)};
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
            border-width: ${getBoxCSS(contentBox.normalBorder.width.mobile)};
            padding: ${getBoxCSS(contentBox.padding.mobile)};
            border-radius: ${getBoxCSS(contentBox.normalBorderRadius.mobile)};
            }
          ${content}:hover {
            border-width: ${getBoxCSS(contentBox.hoverBorder.width.mobile)};
            border-radius: ${getBoxCSS(contentBox.hoverBorderRadius.mobile)};
          }
      }


      @media only screen and (min-width:641px) and (max-width: 1024px){
         ${itemsContainer} {
          grid-template-columns: repeat(${itemsPerLine.tablet}, 1fr);
          gap: ${gapBetweenItem.tablet}px;
         }
          ${item}{
          margin-bottom: ${spaceBetweenItem.tablet}px;
          padding: ${getBoxCSS(padding.tablet)};
         }
          ${featureTitle} {
            margin-bottom: ${title.bottomSpace.tablet}px;
          }
           ${featureIcon} {
            padding: ${getBoxCSS(iconStyle.padding.tablet)};
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
            border-width: ${getBoxCSS(contentBox.normalBorder.width.tablet)};
            padding: ${getBoxCSS(contentBox.padding.tablet)};
            border-radius: ${getBoxCSS(contentBox.normalBorderRadius.tablet)};
            }
          ${content}:hover {
            border-width: ${getBoxCSS(contentBox.hoverBorder.width.tablet)};
            border-radius: ${getBoxCSS(contentBox.hoverBorderRadius.tablet)};
          }
      }
        


        `}
      </style>
    </>
  );
};

export default Styles;
