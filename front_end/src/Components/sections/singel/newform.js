export default () => {
    return (
      <>
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
              <textarea
                name="message"
                className="form-control"
                placeholder="Message*"
                defaultValue={""} // Provide a default value if needed
              />
            </div>
          </fieldset>
          <div className="form-group">
            <button className="wt-btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </>
    );
}