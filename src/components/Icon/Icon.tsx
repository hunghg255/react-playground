/* eslint-disable react/prop-types */
import React from 'react';

import classNames from 'classnames';
import { IconClassname } from '~styles/fontIcon/icon';

export const Icon = ({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement> & { icon: IconClassname }) => {
  // @ts-ignore
  return <i className={classNames(props.icon, className)} {...props} />;
};
