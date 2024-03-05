import resume from "../resume/Holly_Wheeler_Resume.pdf"
function Resume() {
    return (
        <div>
            <iframe src={resume} width="100%" height="900px" allowFullScreen allowTransparency="true"></iframe>
        </div>
    )
}

export default Resume;