import { LeftFilter, CompanyListApplyView } from "components";

function BrowseJobsWithFilter() {
  return (
    <section className="advance-search">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <LeftFilter />
          </div>
          <div className="col-md-8 col-sm-12">
            <CompanyListApplyView />
          </div>
        </div>
      </div>
    </section>
  );
}

export { BrowseJobsWithFilter };
export default BrowseJobsWithFilter;
