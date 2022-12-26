import Goals from "./goals/Goals";
import NewCollection from "./new-collection/NewCollection";
import Team from "./team/Team";
import MainTop from "./top-page/MainTop";    

function MainPage(){
    return (
        <div>
            <MainTop />
            <NewCollection />
            <Goals />
            <Team />
        </div>
    )
}

export default MainPage;