import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
    return (
        <div>
            <Header />
            <Grid container>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    <Content />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
