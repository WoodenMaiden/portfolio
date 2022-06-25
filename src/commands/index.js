import echo from "./echo";
import help from "./help";
import whoami from "./whoami";
import contact from "./contact";
import repo from "./repo";

export default new Map (
    [["echo", echo],
    ["help", help],
    ["whoami", whoami],
    ["contact", contact],
    ["repo", repo]]
);
