<>

          {Projectcomments.map((Projectcomment) => (
<>
  <div className="wt-author">
    <div className="wt-authordetails">
      <figure>
        <a href="javascript:void(0);">
          <img src={Projectcomment.user.image} alt="image description" />
        </a>
      </figure>
      <div className="wt-authorcontent">
        <div className="wt-authorhead">
          <div className="wt-boxleft">
            <h3>
              <a href="javascript:void(0);"> {Projectcomment.user.name}</a>
            </h3>
            <span>
              <i className="lnr lnr-clock" /> Author Since:  {Projectcomment.user.date}
            </span>
          </div>
          <div className="wt-boxright">
            <ul className="wt-socialiconssimple">
              <li className="wt-facebook">
                <div className="wt-rightarea">
                  <span className="wt-starsvtwo">
                    {Array.from(
                      { length: Projectcomment.rating },
                      (_, index) => (
                        <i key={index} className="fa fa-star fill" />
                      )
                    )}
                  </span>

                  <span className="wt-starcontent">
                    {Projectcomment.rating}/<sub>5</sub>
                  </span>
                </div>
              </li>
              <li className="wt-twitter">
                <a href="javascript:void(0);">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="wt-linkedin">
                <a href="javascript:void(0);">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li className="wt-googleplus">
                <a href="javascript:void(0);">
                  <i className="fab fa-google" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wt-description">
          <p>
          {Projectcomment.comment}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="wt-replaybox">
    <h2>Leave Your Comment</h2>
    <form className="wt-formtheme wt-formleavecomment">
      <fieldset>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name*"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email*"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="Phone"
            className="form-control"
            placeholder="Phone"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="Subect"
            className="form-control"
            placeholder="Subect*"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            className="form-control"
            placeholder="Message*"
            defaultValue=
          />
        </div>
        <div className="form-group">
          <button className="wt-btn" type="submit">
            Send
          </button>
        </div>
      </fieldset>
    </form>
  </div>
  </>
          ))};
</>;
