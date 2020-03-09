import { Command } from "./Types";

export const doCommand = (command: Command) => {
  if (command.type === "ADD") {
    const start = Date.now();
    while (Date.now() - start < 3000) {
      // heavy process, it takes 3 seconds
      // If call this on UI thread, it blocks UI events
    }
    return command.args[0] + command.args[1];
  }
};
