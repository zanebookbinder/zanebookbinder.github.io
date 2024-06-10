function Timeline() {
    return (
        <div className="bcr-timeline-div">
            <h1 className="homepage-title">Our Development Timeline</h1>
            <ul className="bcr-timeline">
                <div className="timeline-left">
                    <li className="bcr-timeline-item">
                        <h3 className="bcr-timeline-title">December 2022</h3>
                        <p className="bcr-timeline-text">
                            Olivia and I began planning out the website's
                            architecture and basic functionality. For the site's
                            tech stack, we chose a MySQL backend, a Flask API,
                            and a React frontend.
                        </p>
                    </li>
                    <li className="bcr-timeline-item">
                        <h3 className="bcr-timeline-title">January 2023</h3>
                        <p className="bcr-timeline-text">
                            We migrated the database from the 2012 version of
                            Bowdoin Course Reviews and hosted it on AWS RDS. We
                            then began working on the API and frontend. We
                            created a home page, course pages, professor pages,
                            and department pages.
                        </p>
                    </li>
                    <li className="bcr-timeline-item">
                        <h3 className="bcr-timeline-title">
                            February and March 2023
                        </h3>
                        <p className="bcr-timeline-text">
                            We added a login system, a create review page, and a
                            user profile page. With the help of Professor
                            Stephen Houser, we also moved the API and front end
                            to AWS App Runner.
                        </p>
                    </li>
                    <li className="bcr-timeline-item">
                        <h3 className="bcr-timeline-title">April 2023</h3>
                        <p className="bcr-timeline-text">
                            We started adding extra features: a stats page, the
                            ability to sort and filter review data, and smooth
                            loading animations.
                        </p>
                    </li>
                </div>
                <div className="timeline-right">
                    <li className="bcr-timeline-item">
                        <h3 className="bcr-timeline-title">Summer 2023</h3>
                        <p className="bcr-timeline-text">
                            We improved the site's UI by making it fully
                            responsive and fixing visual bugs. We asked a small
                            group of family and friends to test the site and
                            give us feedback.
                        </p>
                    </li>
                    <li className="bcr-timeline-item">
                        <h3 className="bcr-timeline-title">
                            September and October 2023
                        </h3>
                        <p className="bcr-timeline-text">
                            We integrated our site with Okta for login and
                            session management! Bowdoin students can now login
                            to the website with their school account.
                        </p>
                    </li>
                    <li className="bcr-timeline-item">
                        <h3 className="bcr-timeline-title">November 6, 2023</h3>
                        <p className="bcr-timeline-text">
                            We launched the site to Bowdoin's 1,900 students and
                            received a ton of positive feedback, including that
                            the site "looks like a spaceship" and that using it
                            is a "very smooth software experience." In the first
                            three days after launch, we received 500 unique site
                            visitors, nearly 400 new reviews for courses, and
                            over 1,600 home page visits.
                        </p>
                    </li>
                    <li className="bcr-timeline-item">
                        <h3 className="bcr-timeline-title">What's next?</h3>
                        <p className="bcr-timeline-text">
                            We will fix any bugs that arise on the site and
                            continue to add features. One idea we'd like to
                            implement is a 'Next Semester' page where people can
                            plan their schedule for the next semester by looking
                            at class times and availability, all in one place.
                        </p>
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default Timeline;