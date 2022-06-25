import { List, Card, Typography } from '@mui/material'
import { GitHub } from '@mui/icons-material'
function repo(input) {

    function parse(input) {
        return (
            <List>
                <Card variant="outlined">
                    <Typography variant='body2'><GitHub /><a href='https://github.com/WoodenMaiden'>WoodenMaiden</a></Typography>
                </Card>
                <Card variant="outlined">
                    <Typography variant='body2'>GitLab: <a href='https://gitlab.com/WoodenMaiden'>WoodenMaiden</a></Typography>
                </Card>
            </List>
        )
    }

    return parse(input)
}

repo.help = "repo" 

export default repo