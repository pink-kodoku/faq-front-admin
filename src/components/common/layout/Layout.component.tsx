import React from 'react';
import HeaderComponent from "../header";
import FooterComponent from "../footer";

interface LayoutComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutComponentProps> = (props) => {
  return (
    <div>
      <HeaderComponent/>
      {props.children}
    </div>
  );
};

export default LayoutComponent;