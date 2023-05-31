import React from 'react'
import { Link } from 'react-router-dom';
import { Avatar02, Avatar03, Avatar04, CardImage } from '../../EntryFile/imagePath';

const ComponentsPage = () => {
    return (
        <>
            <div className="page-wrapper">
                    <div className="comp-sec-wrapper">
                        <section className="comp-section">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card bg-white">
                                        <div className="card-body">
                                            <ul className="nav nav-tabs nav-tabs-solid">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link active"
                                                        href="#solid-tab1"
                                                        data-bs-toggle="tab"
                                                    >
                                                        Home
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        href="#solid-tab2"
                                                        data-bs-toggle="tab"
                                                    >
                                                        Profile
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        href="#solid-tab3"
                                                        data-bs-toggle="tab"
                                                    >
                                                        Messages
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
            </div>
        </>
    )
}

export default ComponentsPage;
