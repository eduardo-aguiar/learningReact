import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post extends Component {

    constructor(props) {

        super(props);
    }
    componentDidMount() {
        // calling the new action creator
        this.props.getData();
    }
    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map(el => (
                    <li className="list-group-item" key={el.key} >
                        {el.title}
                    </li>
                ))}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.remoteArticles.slice(0, 20)
    };
}

export default connect( mapStateToProps, { getData })(Post);