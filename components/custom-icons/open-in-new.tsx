import React from 'react';

export const OpenInNewIcon: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({ ...props }) => (
  <svg
    fill="currentColor"
    height="22"
    viewBox="0 0 24 24"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="grey" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h14v-6q0-.425.288-.712T20 12q.425 0 .713.288T21 13v6q0 .825-.587 1.413T19 21zM19 6.4L10.4 15q-.275.275-.7.275T9 15q-.275-.275-.275-.7T9 13.6L17.6 5H15q-.425 0-.712-.288T14 4q0-.425.288-.712T15 3h6v6q0 .425-.288.713T20 10q-.425 0-.712-.288T19 9z"></path>
  </svg>
);
