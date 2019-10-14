import React from "react";
import "./App.css";
import News from "./News";

function App() {
    return (<div>
        <News date="Oct. 8th, 2019"
            header="NYU Shanghai students are greatly suffering from midterm"
            des="Perspective on Humanities/IMA Projects/Club Issues..."
            author="Juanru"
            newspic="https://bit.ly/2VGiEiW" /
        >
        <News date="Oct. 8th, 2019"
            header="Greta Thunberg Won the Nobel Peace Price"
            des="The Norwegian Nobel Committee has decided to award the Nobel Peace Prize for 2019 to Greta Thunberg."
            author="James Zhu"
            newspic="https://bit.ly/2pomP6L" /
        >
        <News date="Oct. 8th, 2019"
            header="NYU Students Claim to Have Invented a Robot for Auto Web-Coding"
            des="'I wish in the future people won't need to do the dirty work of CSS, so I hope I could find a efficient way to create a website', said by a NYU Shanghai student who is greatly suffering from non-sense CSS work"
            author="Yanru"
            newspic="https://bit.ly/2IPXNo5" />
    </div>
    );
}

export default App; 