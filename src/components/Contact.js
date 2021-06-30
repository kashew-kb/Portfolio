import React from "react";
import "./Contact.css";
import rec2 from "../assets/rec.32779635.jpg";

export default class Contact extends React.Component {
	render() {
		return (
			<div className="cContainer">
				<div className="cLeft">
					<h2 className="heading leftH" style={{ zIndex: "2" }}>
						LET'S TALK
					</h2>
					<img src={rec2} alt="rec2" className="rec2"></img>
					{/* <Rectangle2></Rectangle2> */}
				</div>
				<div className="cRight">
					<div>
						<p className="cHead">Email</p>
						<p className="cContent">
							<a>kashishbakshi12@gmail.com</a>
						</p>
					</div>
					<div>
						<p className="cHead">Github</p>
						<p className="cContent">
							<a href="https://github.com/tkartik">github.com/kashishbakshi12</a>
						</p>
					</div>
					<div>
						<p className="cHead">Social</p>
						<div style={{ display: "flex", height: "justifyContent" }}>
							<p>
								<a
									href="https://www.linkedin.com/in/kashishbakshi12/"
									className="cContent"
								>
									LinkedIn
								</a>
							</p>
							<p>
								<a
									href="https://www.facebook.com/kashish.bakshi.16/"
									className="cContent"
								>
									Facebook
								</a>
							</p>
							<p>
								<a href="https://twitter.com/kashishbakshi12" className="cContent">
									Twitter
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
