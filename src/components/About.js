import React from 'react';

export default function About() {
    return (
        <>
            <header className="bg-primary text-center py-5 my-4">
                <div className="team-header">
                    <h1>Meet the Team</h1>
                </div>
            </header>

            {/* <!-- Page Content --> */}
            <div className="team">
                <div className="row">
                    {/* <!-- Team Member 1 --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img src="https://i.ibb.co/ynsj1dY/word.jpg" className="card-img-top" alt="word" border="0" />
                            {/* <img src="https://ibb.co/kgcCf59img" className="card-img-top" alt="..."/> */}
                            <div className={`card-body text-center `}>
                                <h5 className="card-title mb-0" id="imbalance">Team Member</h5>
                                <div className={`card-text `}>Web Developer</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team Member 2 --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" id="myImage" alt="..." />
                            <div className={`card-body text-center `}>
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className={`card-text `}>Web Developer</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team Member 3 --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img src="https://source.unsplash.com/sNut2MqSmds/500x350" className="card-img-top" alt="..." />
                            <div className={`card-body text-center `}>
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className={`card-text `}>Web Developer</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team Member 4 --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img src="https://source.unsplash.com/7u5mwbu7qLg/500x350" className="card-img-top" alt="..." />
                            <div className={`card-body text-center `}>
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className={`card-text `}>Web Developer</div>
                            </div>
                        </div>
                    </div>   
                </div>
                {/* <!-- /.row --> */}

            </div>
            {/* <!-- /.container --> */}
        </>
    )
}
