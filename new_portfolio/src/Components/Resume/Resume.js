import './Resume.css';

function Resume() {
  return (
    <section className='Resume'>
        <div className="resume_info">
            <div className="title"><h1 className='About_Me'><span style={{color:"#FF9800"}}>R</span>esume</h1></div>
            <div className="circle"></div>
            <table>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </table>
        </div>
        <div className="Skilss">
            <div className="title"><h1 className='About_Me'><span style={{color:"#FF9800"}}>S</span>kills</h1></div>
            <div className="circle"></div>
            <table>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </table>
            <table>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </table>
        </div>
        <div className="Quote"></div>
    </section>
  );
}

export default Resume;