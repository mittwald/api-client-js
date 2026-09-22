import type { FileAccessTokenProvider } from "../../file";
import type { Server } from "./Server";

import { config } from "../../config";

export class ServerAvatarAccessTokenProvider
  implements FileAccessTokenProvider
{
  public readonly server: Server;

  public constructor(server: Server) {
    this.server = server;
  }

  public createUploadToken() {
    return config.behaviors.server.createAvatarUploadToken(this.server.id);
  }
}
