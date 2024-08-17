import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

import Image from "next/image";
import Footer from "../../../components/ui/footer";

const CareersPage: React.FC = () => {
  return (
    <div>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            {/* Section header */}
            <div
              className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="h2 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400">
                Have questions? We're here to help. Below are some of the most
                common questions we receive.
              </p>
            </div>

            {/* FAQ Categories */}
            <div className="max-w-3xl mx-auto space-y-16">
              {/* General Questions */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="h3 text-xl font-semibold text-white mb-8">
                  General Questions
                </h3>
                <div
                  className="mb-10"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h4 className="text-lg font-medium text-gray-200">
                    Q: What devices are compatible with Ascend?
                  </h4>
                  <p className="text-gray-400">
                    A: Ascend is compatible with both iOS and Android devices.
                    You can download the app from the App Store or Google Play
                    Store.
                  </p>
                </div>
                <div data-aos="fade-right" data-aos-delay="300">
                  <h4 className="text-lg font-medium text-gray-200">
                    Q: Is there a subscription fee for Ascend?
                  </h4>
                  <p className="text-gray-400">
                    A: Yes. Ascend offers a free subscription with limited
                    weekly meditations and sleep stories, after which you can
                    choose from various subscription plans to continue enjoying
                    our personalized content.
                  </p>
                </div>
              </div>

              {/* Customization and Personalization */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="h3 text-xl font-semibold text-white mb-8">
                  Customization and Personalization
                </h3>
                <div
                  className="mb-10"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h4 className="text-lg font-medium text-gray-200">
                    Q: How do I customize my meditation sessions?
                  </h4>
                  <p className="text-gray-400">
                    A: You can customize your meditation sessions by inputting
                    your goals, preferences, mood, and state of mind. Ascend
                    will use this information to create personalized meditations
                    tailored to your needs.
                  </p>
                </div>
                <div data-aos="fade-right" data-aos-delay="300">
                  <h4 className="text-lg font-medium text-gray-200">
                    Q: Can I create my own sleep stories?
                  </h4>
                  <p className="text-gray-400">
                    A: Yes, you can input your desired genre, theme, characters,
                    and setting, and Ascend will generate a unique sleep story
                    for you.
                  </p>
                </div>
              </div>

              {/* Technical Support */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="h3 text-xl font-semibold text-white mb-8">
                  Technical Support
                </h3>
                <div
                  className="mb-10"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h4 className="text-lg font-medium text-gray-200">
                    Q: What should I do if the app crashes or freezes?
                  </h4>
                  <p className="text-gray-400">
                    A: If the app crashes or freezes, try restarting your device
                    and reopening the app. If the problem persists, contact our
                    support team at{" "}
                    <a
                      href="mailto:support@ascendapp.com"
                      className="text-blue-400 underline"
                    >
                      support@ascendapp.com
                    </a>{" "}
                    for assistance.
                  </p>
                </div>
                <div
                  className="mb-10"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h4 className="text-lg font-medium text-gray-200">
                    Q: How do I report a bug or provide feedback?
                  </h4>
                  <p className="text-gray-400">
                    A: You can report bugs or provide feedback by navigating to
                    the "Settings" menu in the app and selecting "Feedback" or
                    "Report a Bug." Alternatively, you can email us at{" "}
                    <a
                      href="mailto:support@ascendapp.com"
                      className="text-blue-400 underline"
                    >
                      support@ascendapp.com
                    </a>
                    .
                  </p>
                </div>
                <div data-aos="fade-right" data-aos-delay="300">
                  <h4 className="text-lg font-medium text-gray-200">
                    Q: How do I update my account information?
                  </h4>
                  <p className="text-gray-400">
                    A: To update your account information, go to the "Profile"
                    section in the app and select "Edit Profile." From there,
                    you can update your personal details, preferences, and
                    subscription plan.
                  </p>
                </div>
              </div>

              {/* Privacy and Security */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="h3 text-xl font-semibold text-white mb-8">
                  Privacy and Security
                </h3>
                <div
                  className="mb-10"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h4 className="text-lg font-medium text-gray-200">
                    Q: How is my data protected?
                  </h4>
                  <p className="text-gray-400">
                    A: Ascend takes your privacy and data security seriously. We
                    use advanced encryption and security measures to protect
                    your personal information. For more details, please refer to
                    our Privacy Policy.
                  </p>
                </div>
                <div data-aos="fade-right" data-aos-delay="300">
                  <h4 className="text-lg font-medium text-gray-200">
                    Q: Can I delete my account?
                  </h4>
                  <p className="text-gray-400">
                    A: Yes, you can delete your account by going to the
                    "Settings" menu in the app and selecting "Delete Account."
                    Please note that this action is irreversible and will delete
                    all your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />{" "}
    </div>
  );
};

export default CareersPage;
