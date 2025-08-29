import React from "react";

export default function PrivacyPolicy() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black/90 py-16 px-6 text-gray-100">
      <article className="mx-auto max-w-4xl bg-gradient-to-tr from-white/3 via-white/2 to-white/1 border border-gray-800 rounded-2xl p-8 shadow-2xl">

        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="mt-1 text-sm text-gray-300">
              Effective Date:{" "}
              <span className="font-semibold text-white">August 29, 2025</span>
            </p>
          </div>

          <div className="flex gap-3">
            {/* Contact Support */}
            <a
              href="/contact-us"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
            >
              📩 Contact Support
            </a>
          </div>
        </header>

        {/* Policy Body */}
        <section className="prose prose-invert max-w-none text-gray-200">
          <h2 className="text-xl text-white font-semibold">1. Introduction</h2>
          <p>
            Welcome to <strong>Respondrz</strong>, operated by{" "}
            <strong>TOS Technologies Pvt Ltd</strong>, a registered entity
            under SECP, Pakistan. Respondrz connects users with verified
            ambulance service providers. We do not operate ambulances
            directly.
          </p>

          <h2 className="text-xl text-white font-semibold">2. Data We Collect</h2>
          <ul>
            <li>Full Name</li>
            <li>Phone Number</li>
            <li>City</li>
            <li>Country</li>
          </ul>
          <p>
            This information helps us provide accurate and timely emergency
            services.
          </p>

          <h2 className="text-xl text-white font-semibold">3. How We Use Data</h2>
          <p>
            We use your data strictly to connect you with emergency ambulance
            services. We do not sell, rent, or trade your personal information.
          </p>

          <h2 className="text-xl text-white font-semibold">4. Data Security</h2>
          <p>
            Your privacy is important to us. All personal data is stored with
            strict security measures to prevent unauthorized access.
          </p>

          <h2 className="text-xl text-white font-semibold">5. Third-Party Services</h2>
          <p>
            Respondrz works only with verified third-party ambulance providers.
            We are not responsible for their internal privacy practices but we
            ensure they follow safety and compliance standards.
          </p>

          <h2 className="text-xl text-white font-semibold">6. Cookies & Tracking</h2>
          <p>
            Our website may use cookies to enhance user experience, analyze
            traffic, and improve our services. You can disable cookies in your
            browser settings.
          </p>

          <h2 className="text-xl text-white font-semibold">7. User Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your
            personal information. For support, please{" "}
            <a href="/contact-us" className="text-blue-400 underline">
              contact us
            </a>.
          </p>

          <h2 className="text-xl text-white font-semibold">8. Policy Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with the updated effective date.
          </p>

          <h2 className="text-xl text-white font-semibold">9. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy or your
            personal data, please reach out to our support team at{" "}
            <a
              href="mailto:support@respondrz.com"
              className="text-blue-400 underline"
            >
              support@respondrz.com
            </a>.
          </p>
        </section>
      </article>
    </main>
  );
}
