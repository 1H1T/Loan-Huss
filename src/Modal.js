export default function Modal({ isVisible, errorMessage = null }) {
    if (isVisible) {
        return (<div id="model">
            <div id="model-content">
                <h1 style={{ color: errorMessage ? "red" : "rgb(12, 248, 12)" }}>{errorMessage != null ? errorMessage : "The Form Has Been Submitted Successfully"}</h1>
            </div>
        </div>);

    } else { return (<></>); }


}