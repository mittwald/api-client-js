import { HttpHeaders, HttpPayload, PathParameters } from "./http.js";

type EmptyObject = Record<string, never>;
type EmptyRequestComponent = EmptyObject | null;
type RequestWithOptionalHeaders = { headers?: HttpHeaders };

type RequestWithData<TData> = TData extends EmptyRequestComponent
  ? RequestWithOptionalHeaders
  : {
      data: TData;
    };

type RequestWithPathParameters<TPathParameters> =
  TPathParameters extends EmptyRequestComponent
    ? RequestWithOptionalHeaders
    : { pathParameters: TPathParameters };

type RequestWithHeaders<THeaders> = THeaders extends EmptyRequestComponent
  ? RequestWithOptionalHeaders
  : {
      headers: THeaders & HttpHeaders;
    };

export type RequestType<
  TData extends HttpPayload = EmptyRequestComponent,
  TPathParameters extends
    | PathParameters
    | EmptyRequestComponent = EmptyRequestComponent,
  THeader extends HttpHeaders | EmptyRequestComponent = EmptyRequestComponent,
> = TData | TPathParameters | THeader extends EmptyRequestComponent
  ? RequestWithOptionalHeaders
  : RequestWithData<TData> &
      RequestWithPathParameters<TPathParameters> &
      RequestWithHeaders<THeader>;

// eslint-disable-next-line
export type AnyRequest = RequestType<any, any, any>;
