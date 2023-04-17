import { HttpMediaType, HttpPayload, HttpStatus } from "./http";
import { AxiosResponse } from "axios";

export type Response<
  TContent extends HttpPayload = HttpPayload,
  TStatus extends HttpStatus = HttpStatus,
  TMediaType extends HttpMediaType | null = HttpMediaType,
> = AxiosResponse<TContent> & {
  status: TStatus;
  mediaType: TMediaType;
};

// eslint-disable-next-line
export type AnyResponse = Response<any, any, any>;
