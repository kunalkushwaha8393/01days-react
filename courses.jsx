import React from 'react'

const Courses = () => {


    const courses_data = [
        {
            id: 1,
            title: 'Python c',
            price: 299,
            duration: '4 weeks',
            level: 'Beginner',
            instructor: 'Rahul Sharma',
            rating: 4.5,
            students: 1200,
            image: 'https://dummyimage.com/200x200'
        },
        {
            id: 2,
            title: 'HTML Basic',
            price: 199,
            duration: '2 weeks',
            level: 'Beginner',
            instructor: 'Amit Verma',
            rating: 4.2,
            students: 900,
            image: 'https://dummyimage.com/200x200'
        },
        {
            id: 3,
            title: 'CSS Basic',
            price: 699,
            duration: '3 weeks',
            level: 'Beginner',
            instructor: 'Neha Singh',
            rating: 4.6,
            students: 1500,
            image: 'https://dummyimage.com/200x200'
        },
        {
            id: 4,
            title: 'Java Basic',
            price: 499,
            duration: '5 weeks',
            level: 'Intermediate',
            instructor: 'Vikas Kumar',
            rating: 4.3,
            students: 800,
            image: 'https://dummyimage.com/200x200'
        },
        {
            id: 5,
            title: 'JavaScript Basic',
            price: 299,
            duration: '4 weeks',
            level: 'Beginner',
            instructor: 'Ankit Jain',
            rating: 4.7,
            students: 2000,
            image: 'https://dummyimage.com/200x200'
        },
        {
            id: 6,
            title: 'Excel Basic',
            price: 699,
            duration: '3 weeks',
            level: 'Beginner',
            instructor: 'Priya Mehta',
            rating: 4.4,
            students: 1100,
            image: 'https://dummyimage.com/200x200'
        },
        {
            id: 7,
            title: 'DSA Basic',
            price: 999,
            duration: '8 weeks',
            level: 'Advanced',
            instructor: 'Sandeep Sir',
            rating: 4.8,
            students: 2500,
            image: 'https://dummyimage.com/200x200'
        },
        {
            id: 8,
            title: 'ReactJS Basic',
            price: 399,
            duration: '6 weeks',
            level: 'Intermediate',
            instructor: 'Kunal Dev',
            rating: 4.6,
            students: 1300,
            image: 'https://dummyimage.com/200x200'
        }
    ]


    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR  COURSES</h1>
                        <
                            p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">


                        {courses_data.map(course => (

                            <div key={course.id} className="p-4 lg:w-1/2">

                                <div className="h-full bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row items-center">

                                    {/* Image */}
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full sm:w-48 h-48 object-cover"
                                    />

                                    {/* Content */}
                                    <div className="p-4 sm:pl-6 flex flex-col gap-2">

                                        <h2 className="text-xl font-semibold text-gray-900">
                                            {course.title}
                                        </h2>

                                        <p className="text-gray-600 text-sm">
                                            Instructor: <span className="font-medium">{course.instructor}</span>
                                        </p>

                                        <p className="text-gray-600 text-sm">
                                            Duration: {course.duration} • Level: {course.level}
                                        </p>

                                        <p className="text-yellow-500 text-sm">
                                            ⭐ {course.rating} ({course.students} students)
                                        </p>

                                        <div className="flex items-center justify-between mt-2">

                                            <span className="text-lg font-bold text-green-600">
                                                ₹ {course.price}
                                            </span>

                                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
                                                Enroll
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>
                            
                        ))}

                    </div>
                </div>
            </section>


        </div>
    )
}

export default Courses
