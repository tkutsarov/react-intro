import React from 'react';

const Button = ({clickHandler, imageUrl, buttonName}) => {
    return <button data-url={imageUrl} onClick={clickHandler}>
        {buttonName}
    </button>
};

class RenderImages extends React.Component {
    constructor(props) {
        super(props);

        this.imageUrls ={
            computerImage: 'https://cdn.pixabay.com/photo/2015/05/15/14/38/computer-768608_960_720.jpg',
            stupidCorpImage: 'https://cdn.pixabay.com/photo/2017/07/28/09/35/agreement-2548138_960_720.jpg',
            noteImage: 'https://cdn.pixabay.com/photo/2015/05/15/14/47/computer-768696_960_720.jpg'
        };

        this.state = {
            imageUrl: this.imageUrls.computerImage
        };

        this.changeImage = this.changeImage.bind(this);
    }

    changeImage(e) {
        const imageUrl = e.currentTarget.getAttribute('data-url');
        this.setState({imageUrl});
    }

    render() {
        return <div>
            <div className="image-container">
                <img src={this.state.imageUrl} alt="" style={{width: '500px', height: '350px'}}/>
            </div>
            <Button clickHandler={this.changeImage}
                    imageUrl={this.imageUrls.computerImage}
                    buttonName="set first image"
            />
            <Button clickHandler={this.changeImage}
                    imageUrl={this.imageUrls.stupidCorpImage}
                    buttonName="set second image"
            />
            <Button clickHandler={this.changeImage}
                    imageUrl={this.imageUrls.noteImage}
                    buttonName="set third image"
            />
        </div>
    }
}

export default RenderImages;
