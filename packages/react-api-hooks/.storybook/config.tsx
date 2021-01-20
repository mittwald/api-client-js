import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

addDecorator(withKnobs);

configure(require.context("../src", true, /\.stories\.tsx?$/), module);
