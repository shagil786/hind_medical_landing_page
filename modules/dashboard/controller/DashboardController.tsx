"use client";
import { useProduct } from "@/provider/ProductProvider";
import React, {useEffect, useState} from "react";
import {columns, aboutData, medicalData} from '@/public/data';

const DashboardController = (props: any) => {
    const {children, ...rest} = props;
    const [loading, setLoading] = useState(true);
    const {findProduct, addProduct, formSubmit, showSuccess, dropdown, handleShow} = useProduct();

    const viewProps = {
        loading,
        columns,
        aboutData,
        medicalData,
        findProduct,
        addProduct,
        formSubmit,
        showSuccess,
        dropdown,
        handleShow
    }

    const childWithProps = React.Children.map(children, (child) => {
        if(React.isValidElement(child)) {
            return React.cloneElement(child, {...rest, ...viewProps});
        }

        return child;
    });

    return <>{childWithProps}</>
};

export { DashboardController };
