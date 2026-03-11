import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-start w-full relative z-0 pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl w-full mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-emerald dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p><strong>Last Updated: March 2026</strong></p>
            
            <p>At piowsee, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            
            <h2 className="text-xl font-semibold text-foreground mt-8">1. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when communicating with us.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, and the dates/times of your visits.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and offer customer support.</li>
              <li>Improve our website and services.</li>
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p><strong>piowsee</strong><br />Email: poc.helpteam@gmail.com<br />Sumedang, West Java, Indonesia</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
