"use client";
import React, {useEffect, useState} from "react";

const LoginController = (props: any) => {
    const {children, ...rest} = props;
    const [loading, setLoading] = useState(true);

    const viewProps = {
        loading,
    }

    const childWithProps = React.Children.map(children, (child) => {
        if(React.isValidElement(child)) {
            return React.cloneElement(child, {...rest, ...viewProps});
        }

        return child;
    });

    return <>{childWithProps}</>
};

export { LoginController };
