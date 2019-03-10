import React, { Component } from 'react';
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";
export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        };
        this.HandleSuccessfulFormSubmission = this.HandleSuccessfulFormSubmission.bind(this);
        this.hadleFormSubmissionError = this.hadleFormSubmissionError.bind(this);
    }

    HandleSuccessfulFormSubmission(portfolioItem) {
        //TODO
        //update the portfolioItems state
        // and add the portfolioItem to the list
    }

    hadleFormSubmissionError(error) {
        console.log("hadleFormSubmissionError error", error);
    } 

    getPortfolioItems() {
        axios.get("https://randybarker.devcamp.space/portfolio/portfolio_items", {
            withCredentials: true
        }).then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        }).catch(error => {
            console.log("error in getPortfolioItems", error);
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
          <div className="portfolio-manager-wrapper">
            <div className="left-column">
                <PortfolioForm 
                HandleSuccessfulFormSubmission={this.HandleSuccessfulFormSubmission}
                hadleFormSubmissionError={this.hadleFormSubmissionError}
                />
            </div>

            <div className="right-column">
            	<PortfolioSidebarList data={this.state.portfolioItems}/>
            </div>
          </div>
        );
    }
}