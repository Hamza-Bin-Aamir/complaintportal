function Submitted() {
  return (
    <div className="SubmittedContainer">
      <div className="SubmittedCard">
        <div className="SubmittedIcon">✓</div>
        <h2>complaint submitted!</h2>
        <p>thank you for submitting your complaint. hamza will get back to you soon :'(</p>
        <p><small>Reference ID: <strong>#CPL-{Math.random().toString(36).substring(2, 11).toUpperCase()}</strong></small></p>
        <button className="PrimaryBtn" onClick={() => window.location.reload()}>Submit Another</button>
      </div>
    </div>
  );
}

export default Submitted;
