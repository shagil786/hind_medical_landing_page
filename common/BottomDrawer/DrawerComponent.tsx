import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import React from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { Button, Input, Spinner } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Card, CardFooter, CardHeader, CardBody } from "@nextui-org/react";
import Tick from "@/modules/Section5/tick";
import { Controller, Form } from "react-hook-form";
import useScreenSize from "@/utils/useScreenSize";

interface Props {
  show: boolean;
  onChange: (value: boolean) => void;
  children?: React.ReactNode;
}

const DrawerComponent: React.FC<Props> = (props) => {
  const { show, onChange, children } = props;
  const { width, height } = useScreenSize();

  if (width > 768) return null;

  return (
    <Drawer open={show} onOpenChange={onChange}>
      <DrawerContent className="dark:text-white text-black">
        {children}
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
