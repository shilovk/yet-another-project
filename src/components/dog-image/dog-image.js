import React from 'react';
import dogImagePath from '../../images/dog.png';

class DogImage extends React.Component {
    render() {
        return (
            <img src={dogImagePath} alt='Грустная собачка' />
        );
    }
}

export default DogImage;