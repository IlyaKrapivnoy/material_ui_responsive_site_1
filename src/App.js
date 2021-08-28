import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
    return (
        <div>
            <Header />
            <Grid container>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    <Feed />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
