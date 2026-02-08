type GoatCounterCountOptions = {
    path?: string;
    title?: string;
    event?: boolean;
    referrer?: string;
};

type GoatCounter = {
    no_onload?: boolean;
    count?: (options?: GoatCounterCountOptions) => void;
};

interface Window {
    goatcounter?: GoatCounter;
}
