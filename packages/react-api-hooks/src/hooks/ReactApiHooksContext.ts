export type OnUnexpectedHookErrorCallback = (error: Error) => void;
export type UnregisterCallback = () => void;

export class ReactApiHooksContext {
    private readonly onErrorCallbacks = new Set<OnUnexpectedHookErrorCallback>();

    public static instance: ReactApiHooksContext = new ReactApiHooksContext();

    private constructor() {}

    public onUnexpectedError(callback: OnUnexpectedHookErrorCallback): UnregisterCallback {
        this.onErrorCallbacks.add(callback);

        const deleteCallback: UnregisterCallback = () => {
            this.onErrorCallbacks.delete(callback);
        };

        return () => {
            // Keeps this-context
            deleteCallback();
        };
    }

    public handleUnexpectedError(error: Error): void {
        this.onErrorCallbacks.forEach((cb) => cb(error));
    }
}
