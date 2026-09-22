import invariant from "tiny-invariant";

import type { ArticleType } from "../types";

import { HardwareSpecs } from "../../../project/internal";
import { Bytes } from "../../../common";
import {
  StorageArticleAttribute,
  StorageArticleModifier,
  ArticleCommon,
  ServerArticle,
  type Article,
} from "../internal";

export abstract class HostingArticle extends ArticleCommon {
  public get baseStorageAttribute(): StorageArticleAttribute {
    return this.getRequiredAttribute(StorageArticleAttribute);
  }

  // Stateless lazy getters: computed on access (never in the constructor)
  // because getRequired*() throws when the attribute is absent and these facets
  // are only conditionally valid per article subtype. See implementation-patterns.
  public get hardwareSpecs(): HardwareSpecs {
    return HardwareSpecs.fromArticle(this);
  }

  public get storageModifier(): StorageArticleModifier {
    return this.getRequiredModifier(StorageArticleModifier);
  }

  public static assert(article: Article): asserts article is HostingArticle {
    invariant(
      article instanceof HostingArticle,
      "Expected article to be an instance of HostingArticle",
    );
  }

  public getDefaultStorageOption(
    articleType: ArticleType,
    storageModifierBytes: Bytes,
  ) {
    const storageOptions = this.getStorageOptions(storageModifierBytes);

    if (articleType === "vServer" || articleType === "webhosting") {
      return storageOptions[1]?.gib ?? storageOptions[0].gib;
    }

    return storageOptions[0].gib;
  }

  public getRecommendedStorageFromArticle(): string | undefined {
    if (this.isOfType(ServerArticle)) {
      return this.machineTypeSpecs.getRecommendedStorage();
    }
    return this.hardwareSpecs.getRecommendedStorage();
  }

  public getStorageOptions(storageModifierBytes: Bytes): [Bytes, ...Bytes[]] {
    const modifierBytes = this.getModifierBytes();

    modifierBytes.forEach((gb) => {
      invariant(
        (gb - this.baseStorageAttribute.bytes.gib) %
          storageModifierBytes.gib ===
          0,
        `must be a multiple of ${storageModifierBytes.gib}`,
      );
    });

    return [
      this.baseStorageAttribute.bytes,
      ...modifierBytes.map((s) => Bytes.of(s, "GiB")),
    ];
  }

  protected abstract getModifierBytes(): number[];
}
