import MainContainer from "../components/MainCointainter";
import classes from './HomePage.module.css'


function HomePage(){
    return(
        <div className={classes.home}>
            <MainContainer />
        </div>
    )
}

export default HomePage;

export async function loader(){
    const response = await fetch('https://dolarapi.com/v1/dolares/', {
        method: 'GET'
    });
    const data = await response.json()
    return data;
}