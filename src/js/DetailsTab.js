import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import RepositoryTab from "./RepositoryTab";
import Members from "./Members";

function DetailsTab(props) {
  
    return (
        props.userDetails ?
        <Tabs defaultActiveKey="Repositories">
            <Tab eventKey="Repositories" title={`Repositories (${props.userDetails.public_repos})`}>
                <RepositoryTab userName={props.userDetails.login} reposUrl={props.userDetails.repos_url}/>
            </Tab>
            <Tab eventKey="Followers" title={`Followers (${props.userDetails.followers})`}>
                <Members tabName="Followers" userName={props.userDetails.login} url={props.userDetails.followers_url}/>
            </Tab>
            <Tab eventKey="Following" title={`Following (${props.userDetails.following})`}>
                <Members tabName="Following" userName={props.userDetails.login} url={props.userDetails.following_url.slice(0,-13)}/>
            </Tab>
        </Tabs> : null
    );
  }

  export default DetailsTab;
  