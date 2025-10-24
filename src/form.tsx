interface FormProps {
  onSubmit?: (formData: FormData) => void;
}

function Form({ onSubmit }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // collect form data
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    // trigger callback if provided
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="Form">
      <form className="Card" id="complaint-form" onSubmit={handleSubmit}>
        <h2>submit complaint</h2>
        <label htmlFor="Complaintant">pls enter your full name</label>
        <input type="text" id="Complaintant" name="Complaintant" required />

        <label htmlFor="Complaint">pls enter the complaint</label>
        <textarea id="Complaint" name="Complaint" required />

        <label htmlFor="ComplaintAgainst">who is this complaint against?</label>
        <select id="ComplaintAgainst" name="ComplaintAgainst" required>
          <option value="">-- select --</option>
          <option value="HamzaBinAamir">hamza bin aamir</option>
          <option value="HamzaBAamir">hamza baamir</option>
          <option value="HamzaAamir">hamza aamir</option>
          <option value="Other">other</option>
        </select>

        <div className="Row">
          <button type="submit" className="PrimaryBtn">submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;