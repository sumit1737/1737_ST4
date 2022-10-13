import React from "react";
import Card from '../components/Card/Card';
import ControlledCarousel from "../components/Carousel/ControlledCarousel";
import { Card as Crd } from "react-bootstrap";
import "./css/home.css";
import settingLogo from "./res/setting.svg"
import toolsLogo from "./res/wrench.svg"
import starLogo from "./res/rating-star.svg"
import Typewriter from "typewriter-effect";

function Home(){
    return(
        <div>
        <Card heading="Home" showCard={false} showHeading={false}>
            <Card heading="Home" showCard={false} showHeading={false}>
                <div className="first-div-siri">
                    <Card heading="Home" showCard={false} showHeading={false}>
                        <div className="content-siri">
                            <Card heading="Home" showCard={false} showHeading={false}><center><h1 className="heading">
                            <Typewriter
                                onInit={(typewriter) => {
                                typewriter
                                .typeString("Hi,Sumit Here")
                                .pauseFor(100)
                                .deleteAll()
                                .typeString(
                                    "Welcome To MyWorld"
                                )
                                .start();
                                }}
                            />
                            </h1></center></Card>
                            <Card heading="Home" showCard={false} showHeading={false}>
                                <span className="card-content-siri intro-siri"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p></span>
                            </Card>
                        </div>
                    </Card>
                    <Card heading="We Rice your System" showCard={false} showHeading={true}>
                        <ControlledCarousel toggleW={false} ImgList={["","",""]}/>
                    </Card>
                    
                </div>
            </Card>

            <Card heading="Features" showCard={false} showHeading={true}>
                <div className="second-div-siri">
                    <Crd className="feature-style-siri" style={{ width: '20rem'}}>
                        <Crd.Img variant="top" src={settingLogo} width="200" height="200" />
                        <center><Crd.Body>
                            <Crd.Title><span className="card-title-siri">Card Title</span></Crd.Title>
                            <Crd.Text>
                            <span className="card-content-siri">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</span>
                            </Crd.Text>
                        </Crd.Body></center>
                    </Crd>
                    <Crd className="feature-style-siri" style={{ width: '18rem'}}>
                        <Crd.Img variant="top" src={starLogo} width="200" height="200" />
                        <center><Crd.Body>
                            <Crd.Title><span className="card-title-siri">Card Title</span></Crd.Title>
                            <Crd.Text>
                            <span className="card-content-siri">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</span>
                            </Crd.Text>
                        </Crd.Body></center>
                    </Crd>
                    <Crd className="feature-style-siri" style={{ width: '18rem'}}>
                        <Crd.Img variant="top" src={toolsLogo} width="200" height="200" />
                        <center><Crd.Body>
                            <Crd.Title><span className="card-title-siri">Card Title</span></Crd.Title>
                            <Crd.Text>
                            <span className="card-content-siri">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</span>
                            </Crd.Text>
                        </Crd.Body></center>
                    </Crd>
                </div>
            </Card>

            <Card heading="Our Riced System" showCard={false} showHeading={true}>
                <div className="third-div-siri">
                    <ControlledCarousel toggleW={true}/>
                </div>
            </Card>
            </Card>
        </div>
    );
}

export default Home;