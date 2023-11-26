// displays user info in profile component of '/profile' url
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Heading } from "grommet";
import PropTypes from "prop-types";
const UserInfo = ({ userName, profileImg, emailID }) => {
    const [linkStyle, setlinkStyle] = useState({
        textDecoration: "none",
        color: "#1F2328"
    });

    const onMouseOver = () => {
        setlinkStyle({ textDecoration: "underline", color: "#0074CC" });
    };
    const onMouseOut = () => {
        setlinkStyle({ textDecoration: "none", color: "#1F2328" });
    };

    return (
        <>
            <Avatar
                size="5xl"
                src={profileImg}
                border={{ color: "#7D4CDB", size: "small" }}
                style={{ minHeight: "192px" }}
            />
            {/* will be replaced by userObj.name */}
            <Heading
                level={1}
                margin="none"
                style={{
                    fontFamily: "sans-serif",
                    textTransform: "capitalize"
                }}
            >
                {userName}
            </Heading>
            <Link
                to={`mailto:${emailID}`}
                style={linkStyle}
                onMouseOver={() => onMouseOver()}
                onMouseOut={() => onMouseOut()}
            >
                {emailID}
            </Link>
        </>
    );
};
UserInfo.propTypes = {
    userName: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
    emailID: PropTypes.string.isRequired
};
export default UserInfo;
