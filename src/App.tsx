import Header from "./Components/Header/Header";
import { CalcList } from "./Components/CalcList/CalcList";
import Welcom from "./Components/Welcome/Welcome";
import { useSelector } from 'react-redux';
import { arrListSelector } from "redux/selectors/arrListSelector";
import Container from "@mui/material/Container";


function App() {

    const calcArr = useSelector(arrListSelector);

    return (
        <>
            
            <Container maxWidth="xl" disableGutters={true} >
                <Header/>
                {calcArr.length > 0 ? null : <Welcom/>}
                <CalcList/>
            </Container>
        </> 
    );
}

export default App;
