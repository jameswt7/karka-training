import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';

function App() {
	const [courses, setCourses] = useState([
		{
			id: 1,
			name: 'Red T-shirt',
			price: 499,
			image:
				'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/k/h/j/m-mp-tp01-carrot-metronaut-original-imaghfzkknmzyygf.jpeg?q=70'
		},
		{
			id: 2,
			name: 'Blue T-shirt',
			price: 699,
			image:
				'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/l/z/a/40-rmsx12760-b6-raymond-original-imagtjgjx8udt9an.jpeg?q=70'
		},
		{
			id: 3,
			name: 'Marroon T-shirt',
			price: 799,
			image:
				'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/b/d/f/3xl-13-lstr-wine-vtexx-original-imagnzbummhkgr7p.jpeg?q=70'
		},
		{
			id: 4,
			name: 'Typography T-Shirt',
			price: 855,
			image:
				'https://rukminim2.flixcart.com/image/832/832/xif0q/kids-t-shirt/s/n/k/9-10-years-kian-kids-all-prnt-navy-caloya-original-imagqbucb6zurunj.jpeg?q=70'
		}
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
			.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? {
					...item, quantity: item.quantity + 1
				}
					: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
			.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) =>
				total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchCourse={searchCourse}
				courseSearchUserFunction=
				{courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default App;
