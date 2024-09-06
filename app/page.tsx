"use client";
import BottomContent from "@/common/TableComponent/BottomContent";
import TopContent from "@/common/TableComponent/TopContent";
import { useTable } from "@/provider/TableProvider";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Spinner,
} from "@nextui-org/react";
import React, { Fragment } from "react";
import { columns, aboutData } from "@/public/data";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import moment from "moment";
import Cards from "@/common/Cards/Cards";
import DrawerComponent from "@/common/BottomDrawer/DrawerComponent";
import Section1 from "@/modules/Section1/Section1";
import Section2 from "@/modules/Section2/Section2";
import Section3 from "@/modules/Section3/Section3";
import Section4 from "@/modules/Section4/Section4";
import { medicalData } from "@/public/data";
import { useProduct } from "@/provider/ProductProvider";
import Section5 from "@/modules/Section5/Section5";

export default function Dashboard() {
  const { products } = useTable();
  const {
    findProduct,
    addProduct,
    formSubmit,
    showSuccess,
    dropdown,
    handleShow,
  } = useProduct();

  return (
    <Fragment>
      <Section1 />
      <Section2 cardData={columns} />
      <Section3 aboutData={aboutData} />
      <Section4
        featuredProduct={medicalData}
        findProduct={findProduct}
        handleProduct={addProduct}
      />
      <Section5
        formSubmit={formSubmit}
        showSuccess={showSuccess}
        dropdown={dropdown}
        handleShow={handleShow}
      />
      {/* <DrawerComponent
        show={showDropdown}
        onChange={(value: boolean) => setShowDropdown(value)}
        data={traceData}
        traceLoading={traceLoading}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setIsLastStep={setIsLastStep}
        setIsFirstStep={setIsFirstStep}
      /> */}
    </Fragment>
  );
}
