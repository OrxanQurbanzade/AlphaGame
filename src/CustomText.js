import React from "react";
import { Text } from "react-native";




export const CustomText = ({children,style,weight, ...rest}) => {
    return (
        <Text >
            {children}
        </Text>
    )
};