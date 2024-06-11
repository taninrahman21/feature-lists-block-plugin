import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};


export const getBorderCSS = (border) => {
  const { width = '0px', style = 'solid', color = '#0000', side = 'all', radius = '0px' } = border || {};

  const borderSideCheck = s => {
    const bSide = side?.toLowerCase();
    return bSide?.includes('all') || bSide?.includes(s);
  }

  const noWidth = width === '0px' || !width;
  const borderCSS = `${width} ${style} ${color}`;

  const styles = `
		${noWidth ? '' : ['top', 'right', 'bottom', 'left'].map(side => borderSideCheck(side) ? `border-${side}: ${borderCSS};` : '').join('')}
	`;

  return styles;
}

export const getBoxCss = (value, property) => {
  if (value) {
    const result = Object.keys(value).map(
      (key) => `${property}-${key}:${value[key]};`
    );
    return result.join("");
  }
  return "";
};


export const getBorderRadiusCSS = (value) => {
  const { top, right, bottom, left } = value
  return `${top ? "border-top-left-radius:" + top + ";" : ""}
  ${right ? "border-top-right-radius:" + right + ";" : ""}
  ${bottom ? "border-bottom-right-radius:" + bottom + ";" : ""}
  ${left ? "border-bottom-left-radius:" + left + ";" : ""}
  `.replace(/\s+/g, " ").trim();
}
