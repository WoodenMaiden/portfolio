import { List, Card } from '@mui/material'
function repo(input) {

    function parse(input) {
        const style= {
            backgroundColor: "#cfcaca",
        }
        return (
            <List>
                <Card sx={style} variant="outlined">
                    GitHub🐙: <a href='https://github.com/WoodenMaiden'>WoodenMaiden</a>
                </Card>
                <Card sx={style} variant="outlined">
                    GitLab🦊: <a href='https://gitlab.com/WoodenMaiden'>WoodenMaiden</a>
                </Card>
            </List>
        )
    }

    return parse(input)
}

repo.help = "repo" 

export default repo