import PropTypes from 'prop-types';

function SessionArticle (props) {
    const {fromTime, toTime, title, text} = props

    return(
        <>
            <tr>
                <th className="session-table__time">{fromTime}<br className="sp" />{toTime}</th>
                <td>
                    <h3 className="session-table__title">{title}</h3>
                    <p>{text}</p>
                </td>
            </tr>
        </>
    )
}

SessionArticle.propTypes = {
    fromTime: PropTypes.string,
    toTime: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.object,
  };

export default SessionArticle