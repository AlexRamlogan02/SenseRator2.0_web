// src/pages/LandingPage.js
import React from "react";
import Navbar from "../components/Navbar";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<main className="container mx-auto p-4">
				<section className="my-8">
					<h2 className="text-2xl font-bold">
						UCF Senior Design 2024
					</h2>
					<h3 className="text-xl font-semibold mt-4">Goals</h3>
					<p className="mt-2">
						(Project Goal. What are we doing, Why we did it, etc)
					</p>
				</section>
				<section className="my-8">
					<h3 className="text-xl font-semibold">How we did it</h3>
					<p className="mt-2">
						(A short Section on our research. Include what
						Architecture we are looking for, How we made our index,
						and how AI is included in our project. Include Images
						and Video)
					</p>
				</section>
				<button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
					Our Surveys
				</button>
			</main>
		</div>
	);
};

export default LandingPage;
