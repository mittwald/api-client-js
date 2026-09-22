import type { FileAccessTokenProvider } from "../../file/index.js";
import type { Server } from "./Server.js";

import { config } from "../../config/index.js";

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
