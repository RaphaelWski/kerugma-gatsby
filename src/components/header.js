import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 style={{ margin: 0 }}>
        <Link
          to="/messages/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Messages
        </Link>
      </h3>
      <h3 style={{ margin: 0 }}>
        <Link
          to="/orateurs/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Orateurs
        </Link>
      </h3>
      <h3 style={{ margin: 0 }}>
        <Link
          to="/themes/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Themes
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
