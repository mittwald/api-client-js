import type { FrontendFragmentAnchor, FrontendFragmentData } from "./types";
import type { ContributorExtension } from "../ContributorExtension";
import type { ExtensionInstanceCommon } from "../ExtensionInstance";
import type { UserCommon } from "../../user";

import { replaceUrlTemplateValues } from "../../lib/replaceUrlTemplateValues";
import { LocalizedText } from "../../common";
import { DataModel } from "../../base";

export class FrontendFragment extends DataModel<FrontendFragmentData> {
  public readonly anchor: FrontendFragmentAnchor;
  public readonly contributorExtension: ContributorExtension;
  public readonly icon?: string;
  public readonly title: LocalizedText;
  public readonly url: string;

  public constructor(
    anchor: FrontendFragmentAnchor,
    data: FrontendFragmentData,
    extensionName: string,
    extension: ContributorExtension,
  ) {
    super(data);

    this.anchor = anchor;
    this.title = LocalizedText.fromJsonString(
      data.additionalProperties?.title ?? extensionName,
    );
    this.icon = data.additionalProperties?.icon;
    this.url = data.url;
    this.contributorExtension = extension;
  }

  public buildUrl(data: {
    extensionInstance: ExtensionInstanceCommon;
    pathParams?: Record<string, string>;
    fragmentDevUrl?: string;
    user: UserCommon;
  }) {
    const { extensionInstance, fragmentDevUrl, pathParams, user } = data;

    const templatedFragmentUrl = replaceUrlTemplateValues(
      fragmentDevUrl ?? this.url,
      {
        ...pathParams,
        contextId: extensionInstance.context.value.id,
        extensionInstanceId: extensionInstance.id,
        context: extensionInstance.context.type,
        userId: user.id,
      },
    );

    return new URL(templatedFragmentUrl);
  }

  public async delete() {
    const extension = await this.contributorExtension.getCommon();

    const frontendFragments = {
      ...extension.data.frontendFragments,
    };
    delete frontendFragments[this.anchor];

    return await extension.update({
      frontendFragments,
    });
  }

  public async edit(name: string, url: string, newAnchor: string) {
    const originalAnchor = this.anchor;

    const extension = await this.contributorExtension.getCommon();

    const newFragment = {
      additionalProperties: {
        title: JSON.stringify({ de: name }),
        anchor: newAnchor,
      },
      url,
    };

    const fragments = { ...(extension.data.frontendFragments ?? {}) };

    if (originalAnchor !== newAnchor) {
      delete fragments[originalAnchor];
    }

    fragments[newAnchor] = newFragment;

    return await extension.update({
      frontendFragments: fragments,
    });
  }
}
