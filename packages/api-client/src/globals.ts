type Sleeper = () => Promise<void>;

const defaultSleeper: Sleeper = () => new Promise((res) => setTimeout(() => res(), Math.random() * 500 + 200));

export const globals = {
    mockRequestSleeper: defaultSleeper,
    setMockRequestSleeper: (sleeper: Sleeper) => {
        globals.mockRequestSleeper = sleeper;
    },
    resetMockRequestSleeper: () => {
        globals.mockRequestSleeper = defaultSleeper;
    },
};

export default globals;
