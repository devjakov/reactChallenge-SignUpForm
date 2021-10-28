import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

function TermsButton() {
    return (
        <div className="termsButton">
            <input type="checkbox" id="checbkox" />
            <label htmlFor="checkbox"> I agree to the <span>Terms</span> and <span>Privacy Policy</span></label>
        </div>

    );
}

function FormInput(type) {
    console.log(type.value)

    if (type.value === 0) {
        return (
            <input type="text" placeholder="Name" />
        );
    }
    else if (type.value === 1) {
        return (
            <input type="email" placeholder="Email" />
        );
    }
    else if (type.value === 2) {
        return (
            <input type="password" placeholder="Password" />
        );
    }

    return null;

}

function Icon(type) {
    console.log(type.value)

    if (type.value === 0) {
        return (
            <i className="fab fa-google"></i>
        );
    }
    else if (type.value === 1) {
        return (
            <i className="fab fa-facebook"></i>
        );
    }
    else if (type.value === 2) {
        return (
            <i className="fab fa-twitter"></i>
        );
    }
    else if (type.value === 3) {
        return (
            <i className="fab fa-discord"></i>
        );
    }

    return null;

}

function Button(props) {
    return (
        <button className={props.style === 0 ? 'filled' : 'unfilled'}>
            {props.text}
        </button>
    );


}


class GridContainer extends React.Component {
    render() {
        return (
            <div className="gridParent">
                <div className="gridChild gridChild-1">
                    <h1>Create Account</h1>

                    <div className="icons">
                        <Icon value={0} />
                        <Icon value={1} />
                        <Icon value={2} />
                        <Icon value={3} />
                    </div>

                    <p>or use your email for registration:</p>

                    <form>
                        <FormInput value={0} />
                        <FormInput value={1} />
                        <FormInput value={2} />
                    </form>

                    <TermsButton />

                    <div className="buttons">
                        <Button text={"Sign Up"} style={0} />
                        <Button text={"Sign In"} />
                    </div>

                </div>
                <div className="gridChild gridChild-2">
                    {/* img */}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <GridContainer />,
    document.getElementById('root')
);