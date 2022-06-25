import echo from "./echo";
import help from "./help";
import whoami from "./whoami";
import contact from "./contact";

export default new Map (
                        [["echo", echo],
                        ["help", help],
                        ["whoami", whoami]
                        ,["contact", contact]]
);
