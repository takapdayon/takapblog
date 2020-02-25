import React, { Component } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

class Share extends Component {
  render() {
    const { postNode, postPath, siteUrl } = this.props;
    const post = postNode.frontmatter;
    const site = siteUrl + postPath;
    const iconSize = 36;

    return (
      <div className="social-links">
        <TwitterShareButton url={site} title={post.title} via="takapdayon">
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <LineShareButton url={site} title={post.title}>
          <LineIcon round size={iconSize} />
        </LineShareButton>
        <FacebookShareButton url={site}>
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
        <EmailShareButton url={site} subject={post.title}>
            <EmailIcon round size={iconSize} />
        </EmailShareButton>
      </div>
    );
  }
}

export default Share;