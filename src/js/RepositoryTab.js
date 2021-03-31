import React, { useEffect, useState, useRef } from "react";

function RepositoryTab(props) {
    const [ repos, setRepos ] = useState([]);
    const [name, setName] = useState('');
    const prevNameRef = useRef();

    useEffect(() => {
        prevNameRef.current = name;
        setName(props.userName);
        fetch(props.reposUrl)
            .then((response) => response.json())
            .then((response) => setRepos(response));
    });

    return (
        repos.length ? <div>
            <ul className="ul-list-style">
            {repos.map(repo => (
                <li className="pt-5 border-bottom" key={repo.name}>
                    <div className="d-inline-block">
                        <h3 className="wb-break-all">{repo.name}</h3>
                    </div>
                    <div>
                        <p className="pr-4 mb-4 d-inline-block text-gray">
                            {repo.description}
                        </p>
                    </div>
                    <div className="text-gray mb-3">
                        <span className="ml-0 mr-3">
                            {repo.language && (<span className="language-color mr-2"></span>)}
                            <span>{repo.language}</span>
                        </span>
                    </div>
                </li>
            ))}
            </ul>
        </div>
        :
        <div>
            <div className="no-data">
                <h4>{props.userName} doesn't have any public repositories yet.</h4>
            </div>
        </div>
    );
  }

  export default RepositoryTab;
  