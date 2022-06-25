import { Typography, List, Box } from "@mui/material"
import commands from "./index"

function help(input) {

    function parse(input) { 
        const all = Array.from(commands.keys())
        if (!input) return (
            <>
                <Typography>List of commands here</Typography>
                <List>
                    {all.map((value) => <Box key={value} sx={{display: "flex", gap: "20px", flexWrap: "wrap", flexDirection: "row"}}><Typography sx={{cursor: "pointer", textDecoration: "underline"}}>{value}</Typography><Typography> {commands.get(value).help}</Typography></Box>)}
                </List>
            </>
        )
        return (!commands.get(input)) ? "❌ Not such command" : commands.get(input.split(' ')[0]).help
    }

    return parse(input)
}

help.help = "help [Any command you wish to see the usage]" 

export default help