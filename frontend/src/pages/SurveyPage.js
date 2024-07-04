import React from "react";
import Navbar from "../components/Navbar";
const SurveyPage = () => {
	return (
		<div>
			<Navbar />
			<main className="container mx-auto p-4">
				<section className="my-8">
					<h2 className="text-2xl font-bold">Our Orlanoo Surveys</h2>
					<h3 className="text-xl font-semibold mt-4">How it works</h3>
					<p className="mt-2">(How does the surveys work)</p>
				</section>
		
				<section className="my-8">
					<h3 className="text-xl font-semibold">Neighborhoods</h3>
					<p className="mt-2">
						<ul>
							<li><a href="#">UCF</a></li>
							<li><a href="#">Winter Park</a></li>
							<li><a href="#">Lake Nona</a></li>
						</ul>
					</p>
				</section>
		
			</main>
		</div>
	);
};
export default SurveyPage;
