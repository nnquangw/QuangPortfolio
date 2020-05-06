import React, { Component } from 'react';

class GeneralInformation extends Component {
    render() {
        return (
            <div className="general-information">
                <p>Full name: Nguyen Nhat Quang</p>
                <p>Born in: 1997</p>
                <p>Hometown: Tay Ninh province, Vietnam</p>
                <p>Hobbies: Playing video games; Listening to music;</p>
                <p>
                    Why does this website exist? I constructed this website for showing that at least I can code after graduating from University. 
                    Honestly, it's like somewhere I can put things I love into one place, playing music and coding. 
                    Hope you enjoy it! Contact me if you think I could do something.
                </p>
            </div>
        );
    }
}

export default GeneralInformation;