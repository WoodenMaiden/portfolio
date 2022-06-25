import { Card, List, Avatar } from "@mui/material";
function contact(input) {

    function parse(input) {
        const toPrompt = [];
        const values = input.split(" ");
        const style= {
            backgroundColor: "#cfcaca",
        }
        
        const components = {
            mail: (
                <>
                    <Card sx={style} key="per" variant="outlined">Personnal: <a href='mailto:yann.pomie@laposte.net'>yann.pomie@laposte.net</a></Card>
                    <Card sx={style} key="pro" variant="outlined">Professional: <a href='mailto:yann.pomie@ird.fr'>yann.pomie@ird.fr</a></Card>
                    <Card sx={style} key="sch" variant="outlined">Scholar: <a href='mailto:yann.pomie@etu.umontpellier.fr'>yann.pomie@etu.umontpellier.fr</a></Card>
                </>
            ),
            linkedin: <Card sx={style} variant="outlined"  key={"cardLD"}>
                <a href='https://www.linkedin.com/in/yann-pomie-732421204/'>Linkedin</a>
            </Card>,
            discord: <Card  variant="outlined" key={"cardDiscord"} sx={{...style, display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                <Avatar src="/assets/discord.png" sx={{ backgroundColor: "grey" }}>
                    YP
                </Avatar>
                Toupastis#8667
            </Card>
        }

        for( let v of values ) {
            if (!components.hasOwnProperty(v) || toPrompt.includes(components[v])) continue;
            toPrompt.push(components[v]);
        }

        if ( !toPrompt.length ) toPrompt.push(Object.values(components));

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