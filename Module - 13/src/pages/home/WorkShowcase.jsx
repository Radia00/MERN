function WorkShowcase() {
  return (
    <div className="my-5">
      <h1 className="text-center py-5">Portfolio</h1>

      <div className="row row-cols-1 row-cols-md-3 row-cols-4 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="images/banner.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                How develop a website for your business
              </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img src="images/banner2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                How to grow up your business on online
              </h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="images/banner3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">why you need a website</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkShowcase;
