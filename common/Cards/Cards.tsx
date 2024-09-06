import React from "react";
import { Card, CardFooter, CardHeader, CardBody } from "@nextui-org/react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps as IconProps,
} from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  children: React.ReactNode;
  footerText?: string;
  titleIcon: IconDefinition;
}

const Cards: React.FC<Props> = ({ title, children, footerText, titleIcon }) => {
  return (
    <Card className="w-full p-2 md:px-4 px-0">
      <CardHeader className="flex justify-between">
        <p className="uppercase md:text-base text-xs">{title}</p>
        <FontAwesomeIcon icon={titleIcon} className="md:text-base text-xs" />
      </CardHeader>
      <CardBody>{children}</CardBody>
      <CardFooter className="md:block hidden">{footerText}</CardFooter>
    </Card>
  );
};

export default Cards;
