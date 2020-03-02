type Func<TArgs extends any[], TResult> = (...args: TArgs) => TResult;
type FuncArgs<T> = T extends Func<infer TArg, any> ? TArg : never;
type FuncResult<T> = T extends Func<any, infer TResult> ? TResult : never;
type KeyGenerator<T> = T extends Func<infer TArgs, any> ? (args: TArgs) => string : never;

export class ExecutionSubscriber<TFunc extends Func<any, any>> {
    private readonly keyGenerator: KeyGenerator<TFunc>;

    public constructor(keyGenerator: KeyGenerator<TFunc>) {
        this.keyGenerator = keyGenerator;
    }

    public subscribe<TThisFunc extends TFunc>(func: TThisFunc, ...args: FuncArgs<TThisFunc>): void {
        func.apply(func, args);
    }
}

// const client = new SignupClient("https://apiv2.dev.mittwald.systems/");
//
// const exec = new ExecutionSubscriber<RequestFunction>((request) => {
//     return "xswsw";
// });
//
// exec.subscribe(client.catalogGet, {
//     header: {
//         "X-Broker-API-Version": "!",
//     },
// });
