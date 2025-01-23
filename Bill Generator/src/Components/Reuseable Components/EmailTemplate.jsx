export const EmailTemplate = ({ formData }) => {
  return `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333;
            }
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #ddd;
              background-color: #f9f9f9;
            }
            h2 {
              color: #4CAF50;
            }
            .email-content {
              margin-top: 20px;
            }
            .email-content div {
              margin-bottom: 15px;
            }
            .email-content label {
              font-weight: bold;
            }
            .footer {
              margin-top: 20px;
              font-size: 0.9em;
              color: #888;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <h2>New Contact Form Submission</h2>
            <div class="email-content">
              <div>
                <label>First Name:</label>
                <p>${formData.firstName}</p>
              </div>
              <div>
                <label>Last Name:</label>
                <p>${formData.lastName}</p>
              </div>
              <div>
                <label>Email:</label>
                <p>${formData.email}</p>
              </div>
              <div>
                <label>Message:</label>
                <p>${formData.message}</p>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from Bill Generator contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `;
};
