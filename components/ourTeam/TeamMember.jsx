import Image from "next/image";
import Link from "next/link";
import team_member_1 from "/public/img/team-member-1.png";
import team_member_2 from "/public/img/team-member-2.png";
import team_member_3 from "/public/img/team-member-3.png";
import team_member_4 from "/public/img/team-member-4.png";
import team_member_5 from "/public/img/team-member-5.png";
import team_member_6 from "/public/img/team-member-6.png";
import team_member_7 from "/public/img/team-member-7.png";
import team_member_8 from "/public/img/team-member-8.png";

const TeamMember = () => {
  return (
    <section className="team-member">
      <div className="overlay pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 d-flex justify-content-center">
              <div className="section-header text-center">
                <h2 className="title">
                  Our team is an incredible group of people
                </h2>
                <p>
                  We are a team of entrepreneurs, payment specialists and
                  blockchain enthusiasts. Dedicated to simplifying global
                  payments for your business
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-lg-3 col-md-6">
              <div className="single-item">
                <Image src={team_member_1} alt="icon" />
                <div className="text-area">
                  <Link href="/team-details">
                    <h6>Mark Price</h6>
                  </Link>
                  <span className="smr">CEO & Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-item">
                <Image src={team_member_2} alt="icon" />
                <div className="text-area">
                  <Link href="/team-details">
                    <h6>Abel Rivera</h6>
                  </Link>
                  <span className="smr">CEO & Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-item">
                <Image src={team_member_3} alt="icon" />
                <div className="text-area">
                  <Link href="/team-details">
                    <h6>Paul Ryan</h6>
                  </Link>
                  <span className="smr">CEO & Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-item">
                <Image src={team_member_4} alt="icon" />
                <div className="text-area">
                  <Link href="/team-details">
                    <h6>Erika Silva</h6>
                  </Link>
                  <span className="smr">CEO & Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-item">
                <Image src={team_member_5} alt="icon" />
                <div className="text-area">
                  <Link href="/team-details">
                    <h6>Mark Price</h6>
                  </Link>
                  <span className="smr">CEO & Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-item">
                <Image src={team_member_6} alt="icon" />
                <div className="text-area">
                  <Link href="/team-details">
                    <h6>Abel Rivera</h6>
                  </Link>
                  <span className="smr">CEO & Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-item">
                <Image src={team_member_7} alt="icon" />
                <div className="text-area">
                  <Link href="/team-details">
                    <h6>Paul Ryan</h6>
                  </Link>
                  <span className="smr">CEO & Founder</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-item">
                <Image src={team_member_8} alt="icon" />
                <div className="text-area">
                  <Link href="/team-details">
                    <h6>Erika Silva</h6>
                  </Link>
                  <span className="smr">CEO & Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
