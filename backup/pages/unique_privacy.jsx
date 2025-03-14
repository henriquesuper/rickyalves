import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy for Unique Punch</title>
      </Head>
      <main>
        <h1>Privacy Policy for Unique Punch</h1>
        <p><strong>Last Updated: </strong>{new Date().toLocaleDateString()}</p>
        
        <p>
          Thank you for choosing to be part of our community at Unique Punch. We take your privacy very seriously and are committed to protecting it. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Unique Punch mobile application.
        </p>
        
        <h2>Collection of Information</h2>
        <h3>Personal Data</h3>
        <p>
          When you use our app, we collect the following personal information:
        </p>
        <ul>
          <li><strong>Identification:</strong> We capture a photograph at the start and end of your shift to verify your identity and location.</li>
          <li><strong>Location Data:</strong> We collect your location data at the start and end of your shift to ensure you are at the designated work location.</li>
        </ul>

        <h3>Usage Data</h3>
        <p>
          We may collect data related to how you use the app, including how many hours you've worked, your role, and other operational data necessary for the functionality of the app.
        </p>

        <h2>Use of Information</h2>
        <p>
          We use the information we collect for various purposes, including to:
        </p>
        <ul>
          <li>Monitor the usage of the service.</li>
          <li>Assess the hours you've worked, your role, and calculate pay accordingly.</li>
          <li>Verify your identity and location for the shift you are working.</li>
        </ul>

        <h2>Retention of Data</h2>
        <p>
          Photographs are deleted once the shift is approved by a supervisor. Location data and usage data are stored securely and are only accessible by authorized personnel.
        </p>

        <h2>Disclosure of Data</h2>
        <p>
          We will not share your personal information with any third parties unless required by law or with your explicit consent.
        </p>

        <h2>Security of Data</h2>
        <p>
          We use various security measures to protect your data, including secure servers and encrypted data transmission.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information at any time by contacting us.
        </p>

        <h2>Changes to this Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date of this Privacy Policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <ul>
          <li>Email: <a href="mailto:hike.lika@gmail.com">hike.lika@gmail.com</a></li>
          <li>Phone: 508-315-7572</li>
        </ul>
      </main>
    </div>
  );
}
