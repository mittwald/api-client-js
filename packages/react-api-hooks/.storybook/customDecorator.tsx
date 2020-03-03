import React from "react";
import { DecoratorFn } from "@storybook/react";

export const customDecorator: DecoratorFn = (story) => <>{story()}</>;
