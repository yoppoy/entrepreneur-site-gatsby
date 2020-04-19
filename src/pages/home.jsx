import React, {Component} from "react";
import Layout from "../layout";
import About from "../components/About/About";

class HomePage extends Component {
    render() {
        return (
            <Layout>
                <div className="about-container">
                    <About/>
                </div>
            </Layout>
        );
    }
}

export default HomePage;
