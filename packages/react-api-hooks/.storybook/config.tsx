import React from "react";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import "./configCustom";
import { ImportModuleResult, IntlMessageDefinition } from "@mittwald/frontend-lib/dist/utils/i18n/types";
import { IntlProvider } from "@mittwald/frontend-lib/dist/utils/i18n/IntlProvider";
import { customDecorator } from "./customDecorator";

// ATTENTION IN ORDER TO LAZY LOAD CORRECTLY WITH
// REQUIRE AND IMPORT - DONT USE PATH VARIABLES!
export const lazyImportLanguageFile = (language: string): Promise<ImportModuleResult<IntlMessageDefinition>> =>
    import(`../src/i18n/${language}.json`);

addDecorator(withKnobs);
addDecorator((story) => (
    <IntlProvider importLanguage={lazyImportLanguageFile} default={require("../src/i18n/de.json")}>
        {story()}
    </IntlProvider>
));
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
});

configure(require.context("../src", true, /\.stories\.tsx?$/), module);
