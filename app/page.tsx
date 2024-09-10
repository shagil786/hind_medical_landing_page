
import { LoginController } from "@/modules/auth/login/controller/LoginController";
import LoginView from "@/modules/auth/login/views/LoginView";
import React, { Fragment } from "react";

export default function Dashboard(props: any) {

  return (
    <LoginController>
      <LoginView {...props}/>
    </LoginController>
  );
}
