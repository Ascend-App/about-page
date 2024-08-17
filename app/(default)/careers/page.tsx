import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

import Image from "next/image";
import Footer from "../../../components/ui/footer";

const CareersPage: React.FC = () => {
  return (
    <div>
      <section>
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4 mt-24">Careers</h2>
              <p className="text-xl text-gray-400">
                We're always looking for talented, driven individuals to join
                our team.
              </p>
              <p className="text-xl text-gray-400 mt-4">
                Here are some of the roles we're currently looking to fill for:
              </p>
            </div>

            <div
              className="max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
                <h3 className="h3 text-xl font-semibold text-white mb-2">
                  Frontend UI/UX Designer
                </h3>
                <p className="text-lg text-gray-400 mb-4">
                  We're seeking a creative and passionate Frontend UI/UX
                  Designer to help shape the look and feel of our products.
                  You'll work closely with our development team to design
                  intuitive and engaging user interfaces.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="h3 text-xl font-semibold text-white mb-2">
                  User Engagement Specialist
                </h3>
                <p className="text-lg text-gray-400 mb-4">
                  We're looking for a dynamic User Engagement Specialist to
                  build and maintain strong relationships with our users. You'll
                  develop strategies to improve user retention and satisfaction,
                  ensuring our community remains active and engaged.
                </p>
              </div>

              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="text-lg text-gray-400">
                  If you're interested in any of these roles, please email us at
                  <a
                    href="mailto:support@ascendmeditations.app"
                    className="text-blue-400 underline ml-1"
                  >
                    support@ascendmeditations.app
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
