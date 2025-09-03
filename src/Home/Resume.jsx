

const Resume = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center p-6">
      <div>
        <h1 className="text-6xl my-9 font-bold text-center" >How to Write Resume </h1>
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="bg-white rounded-2xl shadow p-6 space-y-6">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Skills</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Classroom Management</li>
            <li>Lesson Planning</li>
            <li>Curriculum Development</li>
            <li>Computer Skills</li>
            <li>Grading and Assessment</li>
          </ul>
        </div>

        {/* Right Column - Main Content */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-6 space-y-6">
          {/* Profile */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Profile</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Caring and compassionate elementary school teacher with 5+ years
              of experience and Arizona State Educator License. Improved student
              test scores by 20% and pass rate by 30% in one year. Excited to
              leverage lesson planning skills and proven classroom management
              techniques as a 3rd grade teacher at Oasis Elementary School.
            </p>
          </section>

          {/* Employment */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Employment</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">
                  Elementary School Teacher (4th Grade)
                </h3>
                <p className="text-sm text-gray-600">
                  Central Tucson Elementary, Tucson, AZ | Aug 2021 – Present
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                  <li>
                    Improved student test scores by 20% and pass rate by 30%.
                  </li>
                  <li>Won Teacher of the Year Award in 2021.</li>
                  <li>
                    Implemented new quiz structure to increase knowledge
                    retention.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium">
                  Elementary School Teacher (3rd Grade)
                </h3>
                <p className="text-sm text-gray-600">
                  Hills Elementary, Flagstaff, AZ | Aug 2018 – Aug 2021
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                  <li>Created a nurturing and engaging environment.</li>
                  <li>
                    Liaised with parents, school board, and staff to support
                    students.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-semibold mb-2">Education</h2>
            <div>
              <h3 className="font-medium">
                Bachelor of Science in Elementary Education
              </h3>
              <p className="text-sm text-gray-600">
                Northern Arizona University, Flagstaff, AZ | Sep 2016 – Sep 2018
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Relevant Coursework: Foundations of Education, Computer
                Literacy, Classroom Management, Student Engagement, Early
                Childhood Development, Instruction for Elementary Students.
              </p>
            </div>
          </section>
        </div>
      </div>
     </div>
    
    </div>
  );
};

export default Resume;
