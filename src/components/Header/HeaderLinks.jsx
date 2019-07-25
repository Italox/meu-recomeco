/*eslint-disable*/
import React from "react"
// react components for routing our app without refresh
import { Link } from "gatsby"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"

// @material-ui/icons
// import { Apps, CloudDownload } from "@material-ui/icons"

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

// core components
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx"
import Button from "components/CustomButtons/Button.jsx"

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="https://forms.gle/GFxu69ZA11RjBAna7"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Preciso ser tatuado
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://forms.gle/hsX3teRpgjbTcGSa9"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Faça parte do projeto
        </Button>
        {/* <CustomDropdown
          noLiPadding
          buttonText="Faça parte do projeto"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Faça parte do projeto
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
              target="_blank"
              className={classes.dropdownLink}
            >
              Dúvidas Frequentes
            </a>,
          ]}
        /> */}
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Dúvidas Frequentes
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Siga no Twitter"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/HellgirlNp"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Siga no instagram"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/helotattoo_"
            target="_blank"
            className={classes.navLink}
          >
            <FaInstagram />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
