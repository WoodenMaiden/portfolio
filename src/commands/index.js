import echo from "./echo";
import help from "./help";
import whoami from "./whoami";

export default new Map (
                        [["echo", echo],
                        ["help", help],
                        ["whoami", whoami]]
);
