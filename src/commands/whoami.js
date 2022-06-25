import { Container, Avatar, Stack, Typography } from '@mui/material'


function whoami(input) {

    function parse(input) {
        return (
        <Container>
            <Stack sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Stack sx={{ display: "flex", flexDirection: "row"}}>
                    <Avatar sx={{ backgroundColor: "blue" }}>YP</Avatar>
                    <Typography>Yann POMIE</Typography>
                </Stack>
                <Typography variant="body1">
                    My name is Yann POMIE, I am currently a {new Date(Date.now() - new Date('June 19, 2001').getTime()).getFullYear() - 1970} years old french DevOps apprentice at <a href="https://www.polytech.umontpellier.fr/formation/cycle-ingenieur/devops/en-quelques-mots-do">Polytech Montpllier</a>. 
                    Prior to this I studied IT at the <a href='https://iut.univ-amu.fr/diplomes/but-informatique-info-aix'>Aix-en-Provence's IUT</a> for two Years.
                    <br />
                    I discovered computer science around 2017 during high school thanks to lua and a framework called <a href='https://love2d.org/'>LÖVE2D</a>, and never stopped learning ever since! I am currently working as a DevOps engineer at the <a href='https://www.ird.fr/'>IRD</a>, a French national instutute that leads researches concerning sustainable development. I am working on their agronomic knowledge platform <a href='http://agrold.southgreen.fr/agrold/'>AgroLD</a>
                    <br />
                    Besides code and linux, I am a mostly a huge fan of video games such as League of Legends, Warframe or even the XCOM franchise. I also listen to a lot of heavy-metal and rock-n-roll, My favourite bands are <a href='https://www.youtube.com/watch?v=WmPTxrJ-kHI'>Iron Maiden</a>, <a href='https://www.youtube.com/watch?v=MlzTET_8SQg'>Motörhead</a>, <a href='https://www.youtube.com/watch?v=l482T0yNkeo'>ACDC</a> and <a href='https://www.youtube.com/watch?v=o1tj2zJ2Wvg'>Guns N' Roses</a>.
                    <br />
                    If you wish to know more about me you can:
                    <ul>
                        <li>Get my contacts via the <code>contact</code> command</li>
                        <li>Get my git and gitlab repositories via the <code>repo</code> command</li>
                        <li>Get my projects via the <code>project</code> command</li>
                    </ul>
                </Typography>
            </Stack>
        </Container>
        )
    }

    return parse(input)
}

whoami.help = "Prints presentation" 

export default whoami