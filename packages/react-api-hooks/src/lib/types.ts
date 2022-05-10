export type Resolved<T> = T extends Promise<infer TResolved> ? TResolved : T;
