import { Card, Typography, List, Avatar } from "@mui/material";
function contact(input) {

    function parse(input) {
        const toPrompt = [];
        const values = input.split(" ");
        
        const components = {
            mail: (
                <List>
                    <Card variant="outlined">Personnal: <a href='mailto:yann.pomie@laposte.net'>yann.pomie@laposte.net</a></Card>
                    <Card variant="outlined">Professional: <a href='mailto:yann.pomie@ird.fr'>yann.pomie@ird.fr</a></Card>
                    <Card variant="outlined">Scholar: <a href='mailto:yann.pomie@etu.umontpellier.fr'>yann.pomie@etu.umontpellier.fr</a></Card>
                </List>
            ),
            linkedin: <Card variant="outlined">
                <a href='https://www.linkedin.com/in/yann-pomie-732421204/'>Linkedin</a>
            </Card>,
            discord: <Card variant="outlined" sx={{display: "flex", flexDirection: "row"}}>
                <Avatar  sx={{ backgroundColor: "grey" }}>YP</Avatar>
                <Typography variant="body2">Toupastis#8667</Typography>
            </Card>
        }

        for( let v of values ) {
            if (!components.hasOwnProperty(v) || toPrompt.includes(components[v])) continue;
            toPrompt.push(components[v]);
        }

        return (
            <List className="contactList">
                {toPrompt.map(v => v)}
            </List>
        )
    }

    return parse(input)
}

contact.help = "contact [mails] [linkedin] [discord]" 

export default contact