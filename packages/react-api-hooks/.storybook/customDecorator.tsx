import React from "react";
import { DecoratorFn } from "@storybook/react";
import GlobalStyle from "@mittwald/frontend-styles/dist/global/GlobalStyle";

export const customDecorator: DecoratorFn = (story) => (
    <>
        <div style={{ margin: 25 }}>
            <GlobalStyle />
            {story()}
        </div>
    </>
);
