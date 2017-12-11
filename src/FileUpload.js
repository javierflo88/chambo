import React, {
    Component
} from 'react';


class FileUpload extends Component {
    constructor() {
        super();
        this.state={
            uploadValue: 0
        };
    }

    render() {
        return ( <div >
            <progress value={
                this.state.uploadValue
            }
            max='100'> {
                this.state.uploadValue
            } %
            </progress> <br/>
            <br/>
            <label className="file" title="">
            <input type="file"
            className="input"onChange={
                this.props.onUpload
            }/></label>
            <img width="150"src={
                this.state.picture
            }
            alt="" / >
            </div>
        )
    }
}

export default FileUpload;
