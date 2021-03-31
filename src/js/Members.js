import React, { useEffect, useState } from "react";

function Members(props) {
    const [ members, setMembers ] = useState([]);

    useEffect(() => {
        fetch(props.url)
            .then((response) => response.json())
            .then((response) => setMembers(response));
    });

    return (
        members.length ? <div>
            <ul className="ul-list-style">
            {members.map(member => (
                <li className="pt-3 pb-3 border-bottom" key={member.login}>
                    <div className="flex-display col-12">
                        <div className="col-1">
                            <img width="70" height="70" src={member.avatar_url} />
                        </div>
                        <div className="col-11 pl-5 pt-3">
                            <span className="text-gray font-lg">{member.login}</span>
                        </div>
                    </div>
                </li>
            ))}
            </ul>
        </div>
        :
        <div>
            <div className="no-data">
                { props.tabName === 'followers' ? <h4>{props.userName} don't have any followers yet.</h4> :
                    <h4>{props.userName} isn't following anybody.</h4> }
            </div>
        </div>
    );
  }

  export default Members;
  