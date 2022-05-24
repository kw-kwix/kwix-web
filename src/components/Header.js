import { Link } from "react-router-dom";

export function Header() {
	return (
		<header id="header" className="header">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="text-container">
							<h1 className="h1-large">
								Human activity recognition and recommendation
								system
							</h1>
							<Link
								to="/input"
								className="btn-solid-lg page-scroll"
							>
								Start
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
