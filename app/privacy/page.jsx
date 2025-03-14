export const metadata = {
  title: 'Privacy Policy for Unique Punch',
  description: 'Privacy policy regarding the collection and use of data in the Unique Punch app',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <main>
        <h1 className="text-3xl font-bold mb-4">Privacy Policy for Unique Punch</h1>
        <p className="mb-6"><strong>Last Updated: </strong>{new Date().toLocaleDateString()}</p>
        
        <p className="mb-6">
          Thank you for choosing to be part of our community at Unique Punch. We take your privacy very seriously and are committed to protecting it. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Unique Punch mobile application.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Collection of Information</h2>
        <h3 className="text-xl font-semibold mt-6 mb-2">Personal Data</h3>
        <p className="mb-4">
          When you use our app, we collect the following personal information:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2"><strong>Identification:</strong> We capture a photograph at the start and end of your shift to verify your identity and location.</li>
          <li className="mb-2"><strong>Location Data:</strong> We collect your location data at the start and end of your shift to ensure you are at the designated work location.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Usage Data</h3>
        <p className="mb-4">
          We may collect data related to how you use the app, including how many hours you've worked, your role, and other operational data necessary for the functionality of the app.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Use of Your Information</h2>
        <p className="mb-4">We use the collected data for various purposes:</p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">To verify your identity and location during shift check-ins and check-outs</li>
          <li className="mb-2">To calculate your working hours accurately</li>
          <li className="mb-2">To improve our app and customer experience</li>
          <li className="mb-2">To comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Disclosure of Your Information</h2>
        <p className="mb-4">
          We may share your information with:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Your employer or the company that contracts our services</li>
          <li className="mb-2">Service providers who assist us in operating our app</li>
          <li className="mb-2">Law enforcement if required by law</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
        <p className="mb-6">
          We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-6">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-2">Email: privacy@uniquepunch.com</p>
        <p className="mb-2">Phone: (555) 123-4567</p>
      </main>
    </div>
  );
} 