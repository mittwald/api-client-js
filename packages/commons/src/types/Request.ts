import { HttpHeaders, HttpPayload, PathParameters } from "./http.js";

type RequestWithData<TData> = TData extends null
  ? object
  : {
      data: TData;
    };

type RequestWithPathParameters<TPathParameters> = TPathParameters extends null
  ? object
  : { pathParameters: TPathParameters };

type RequestWithHeaders<THeaders> = THeaders extends null
  ? object
  : {
      headers: THeaders;
    };

type EmptyRequest = Record<string, never>;

export type Request<
  TData extends HttpPayload = null,
  TPathParameters extends PathParameters | null = null,
  THeader extends HttpHeaders | null = null,
> = TData | TPathParameters | THeader extends null
  ? EmptyRequest
  : RequestWithData<TData> &
      RequestWithPathParameters<TPathParameters> &
      RequestWithHeaders<THeader>;

// eslint-disable-next-line
export type AnyRequest = Request<any, any, any>;
