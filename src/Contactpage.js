import Resume from './resume.pdf';

const Contactpage = () => {

    return (
        <div className="contactpage" id="contactpage">
            <div className="contactsection">
                <h2>Contact Me</h2>
                <p>Please reach out to me if you have any questions</p>
                <br/>
                <br/>
                <div className="info">
                    <a href="mailto:toufikaminew@gmail.com">Email</a>
                    <p>Phone #: (919) 589-2797</p>
                    <a href={ Resume } id="resume">Resume</a>
                </div>
                <br/>
                <br/>
                <div className="sociallinks">
                    <a href="https://github.com/lbladma">GitHub</a>
                    <a href="https://www.linkedin.com/in/taoufika/">LinkedIn</a>
                    <a href="">Instagram</a>
                    <a href="">Snapchat</a>
                </div>
            </div>
            <div className="formsection">
                <h2>Questions or Feedback</h2>
                <form className="form">
                    <label />Name:
                    <input type="text" required />
                    <label />E-Mail:
                    <input type="text" required />
                    <label />Phone #:
                    <input type="text" required />
                    <label />Comment/Feedback:
                    <textarea type="text" required />
                </form>
            </div>
        </div>
    );
}

export default Contactpage;