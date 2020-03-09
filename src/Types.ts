export type Command =
  | {
      type: "ADD";
      args: [number, number];
    }
  | {
      type: "FIB";
      args: number;
    };
