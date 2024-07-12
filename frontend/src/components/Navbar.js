// src/components/Navbar.js
import React, { useState } from "react";

const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<header className="bg-blue-900 text-white py-4">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-xl font-bold">SenseRator 2.0 at UCF</h1>
				<nav className="relative">
					<ul className="flex space-x-4">
						<li>
							<a
								href="#team"
								className="text-white hover:text-gray-300"
							>
								Our Team
							</a>
						</li>
						<li className="relative">
							<button
								onClick={toggleDropdown}
								className="text-white hover:text-gray-300 focus:outline-none"
							>
								Surveys
							</button>
							{dropdownOpen && (
								<ul className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
									<li>
										<a
											href="#city1"
											className="block px-4 py-2 hover:bg-gray-200"
										>
											City
										</a>
									</li>
									<li>
										<a
											href="#city2"
											className="block px-4 py-2 hover:bg-gray-200"
										>
                                            City
										</a>
									</li>
									<li>
										<a
											href="#city3"
											className="block px-4 py-2 hover:bg-gray-200"
										>
											City
										</a>
									</li>
								</ul>
							)}
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
