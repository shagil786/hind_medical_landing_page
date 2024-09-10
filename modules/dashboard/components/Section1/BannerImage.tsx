import React from "react";

interface Props {
  className?: string;
}

const BannerImage: React.FC<Props> = (props) => {
  const { className } = props;
  return <div className={className}>BannerImage</div>;
};

export default BannerImage;
