import Mock = jest.Mock;

/**
 * This function provides an easier way to create typed jest mock functions based on a existing function type.
 * ```typescript
 * function doStuff = (): string => { ... }
 *
 * const stuffMock = mockFunc<typeof doStuff>();
 *
 * // Then you can define mock behaviours
 * stuffMock.mockReturnValue("did some stuff");
 * ```
 *
 * @typeparam T - The type of the mock object
 */
export const mockFunc = <T extends (...args: any[]) => any>(): Mock<ReturnType<T>, Parameters<T>> =>
    jest.fn<ReturnType<T>, Parameters<T>>();
