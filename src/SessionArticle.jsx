import React from 'react'
import PropTypes from 'prop-types';

function SessionArticle (props) {
    const {fromTime, toTime, title, text} = props

    // <br/>で改行されるようにtextを整形
    const textSplit = text.split("<br/>").map((item, index) => {
        return (
            <React.Fragment key={index}>{item}<br /></React.Fragment>
        );
    })

    return(
        <>
            <tr>
                <th className="session-table__time">{fromTime}<br className="sp" />{toTime}</th>
                <td>
                    <h3 className="session-table__title">{title}</h3>
                    <p>{textSplit}</p>
                </td>
            </tr>
        </>
    )
}

SessionArticle.propTypes = {
    fromTime: PropTypes.string,
    toTime: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  };

export default SessionArticle