import React from "react";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import "./configCustom";
import { customDecorator } from "./customDecorator";

addDecorator(withKnobs);
addDecorator(customDecorator);

const newViewports = {
    mobile: {
        name: "Mobile",
        styles: {
            width: "375px",
            height: "812px",
        },
    },
    tablet: {
        name: "Tablet",
        styles: {
            width: "768px",
            height: "1024px",
        },
    },
    desktop: {
        name: "Desktop",
        styles: {
            width: "1200px",
            height: "900px",
        },
    },
};

addParameters({
    viewport: {
        viewports: newViewports,
    },
    options: {
        showRoots: true,
    },
});

configure(require.context("../src", true, /\.stories\.tsx?$/), module);
