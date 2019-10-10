import React from "react";
import "./App.css";
import News from "./News";

function App() {
    return (<div>
        <News date="Oct. 8th, 2019"
            header="NYU Shanghai students are greatly suffering from midterm"
            des="Perspective on Humanities/IMA Projects/Club Issues..."
            author="Juanru"
            newspic="https://bit.ly/2xTmiug" /
        >
        <News date="Oct. 8th, 2019"
            header="NYU Shanghai students suffer from midterm"
            des="Literally"
            author="Xi"
            newspic="https://bit.ly/2xTmiug" /
        >
        <News date="Oct. 8th, 2019"
            header="NYU Shanghai students suffer from midterm"
            des="Literally"
            author="Xi"
            newspic="https://bit.ly/2xTmiug" />
        </div>
    );
}

export default App; 