/**
 *
 * @param {} getData
 * @param {} options
  @return {void}
 */
export declare function useAsyncDataEffect(getData: () => Promise<any>, options: {
    stateName: string;
    otherStatesToMonitor?: unknown[];
    setter: (arg: any) => void;
}): void;
