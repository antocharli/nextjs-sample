function SingleCompany(props) {
  const {
    isPremium = false,
    type,
    image,
    title,
    salary,
    openings,
    requirements,
  } = props;

  const classNames = {
    Freelancer: "freelanc",
    "Full Time": "full-time",
    "Part Time": "part-time",
    Internship: "enternship",
  };

  return (
    <div className="col-md-3 col-sm-6">
      <div className="job-instructor-layout">
        {isPremium && (
          <span className="tg-themetag tg-featuretag">Premium</span>
        )}
        <div className="brows-job-type">
          <span className={classNames[type]}>{type}</span>
        </div>
        <div className="job-instructor-thumb">
          <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/job-detail.html">
            <img src={image} className="img-fluid" alt="" />
          </a>
        </div>
        <div className="job-instructor-content">
          <h4 className="instructor-title">
            <a href="https://codeminifier.com/job-stock-5.4.1/job-stock/job-detail.html">
              {title}
            </a>
          </h4>
          <div className="instructor-skills">{requirements}</div>
        </div>
        <div className="job-instructor-footer">
          <div className="instructor-students">
            <h5 className="instructor-scount">{salary}</h5>
          </div>
          <div className="instructor-corses">
            <span className="c-counting">{openings}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyBrand() {
  const offers = [
    {
      isPremium: true,
      type: "Freelancer",
      title: "Web Designing",
      image: "/images/com-2.jpg",
      requirements: "CSS3, HTML5, Javascript, Bootstrap, Jquery",
      salary: "$3.2K - $5K",
      openings: "07 Open",
    },
    {
      type: "Full Time",
      title: "App Developer",
      image: "/images/com-3.jpg",
      requirements: "CSS3, HTML5, Javascript, Bootstrap, Jquery",
      salary: "$4.2K - $5K",
      openings: "02 Open",
    },
    {
      type: "Part Time",
      title: "Software Developer",
      image: "/images/com-4.jpg",
      requirements: "CSS3, HTML5, Javascript, Bootstrap, Jquery",
      salary: "$6.5K - $8K",
      openings: "02 Open",
    },
    {
      isPremium: true,
      type: "Freelancer",
      title: "iPhone Developer",
      image: "/images/com-5.jpg",
      requirements: "CSS3, HTML5, Javascript, Bootstrap, Jquery",
      salary: "$3.7K - $6K",
      openings: "04 Open",
    },
    {
      type: "Part Time",
      title: "UI/UX Designer",
      image: "/images/com-6.jpg",
      requirements: "CSS3, HTML5, Javascript, Bootstrap, Jquery",
      salary: "$3.2K - $5K",
      openings: "05 Open",
    },
    {
      isPremium: true,
      type: "Full Time",
      title: "Content Writer",
      image: "/images/com-7.jpg",
      requirements: "CSS3, HTML5, Javascript, Bootstrap, Jquery",
      salary: "$3.4K - $6K",
      openings: "02 Open",
    },
    {
      type: "Internship",
      title: "Project Manager",
      image: "/images/com-7.jpg",
      requirements: "CSS3, HTML5, Javascript, Bootstrap, Jquery",
      salary: "$3.7K - $8K",
      openings: "07 Open",
    },
    {
      isPremium: true,
      type: "Full Time",
      title: "Wordpress Expert",
      image: "/images/com-1.jpg",
      requirements: "CSS3, HTML5, Javascript, Bootstrap, Jquery",
      salary: "$10.2K - $16K",
      openings: "02 Open",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="main-heading">
            <p>200 New Jobs</p>
            <h2>
              New &amp; Random <span>Jobs</span>
            </h2>
          </div>
        </div>
        <div className="row extra-mrg">
          {offers.map((offer, idx) => (
            <SingleCompany {...offer} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { CompanyBrand };
