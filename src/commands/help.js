import commandes from "./index"

function help(input) {

    function parse(input) {
        if (!input) return "List of commands here"
        return (!commandes.get(input)) ? "❌ Not such command" : commandes.get(input.split(' ')[0]).help
    }

    return parse(input)
}

help.help = "help [Any command you wish to see the usage]" 

export default help