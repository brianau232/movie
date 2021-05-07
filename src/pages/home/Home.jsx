import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { style } from "./style";
import axios from "axios";
class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          className={classes.myBtn}
          variant="contained"
          color="primary"
          size="large"
        >
          Nút nhấn
        </Button>
      </div>
    );
  }
  async componentDidMount() {
    try {
      const res = await axios({
        method: "GET",
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default withStyles(style)(Home);
