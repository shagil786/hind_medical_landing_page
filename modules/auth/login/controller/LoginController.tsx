"use client";
import React, {useEffect, useState} from "react";

const LoginController = (props: any) => {
    const {children, ...rest} = props;
    const [loading, setLoading] = useState(true);

    const validatePassword = (password: string) => {
        if (password.length < 8) {
          return "Password must be at least 8 characters long";
        }
        if (!/[a-zA-Z]/.test(password)) {
          return "Password must contain at least one letter";
        }
        if (!/\d/.test(password)) {
          return "Password must contain at least one number";
        }
        if (!/[^\w\s]/.test(password)) {
          return "Password must contain at least one special character";
        }
        return true; // Return true if all validation checks pass
      };

    const viewProps = {
        loading,
        validatePassword
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
