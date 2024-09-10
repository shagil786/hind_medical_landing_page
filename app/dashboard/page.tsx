"use client"
import { DashboardController } from "@/modules/dashboard/controller/DashboardController";
import DashboardView from "@/modules/dashboard/views/DashboardView";
import React, { Fragment } from "react";

export default function Dashboard(props: any) {
  return (
    <DashboardController>
      <DashboardView {...props}/>
    </DashboardController>
  );
}
