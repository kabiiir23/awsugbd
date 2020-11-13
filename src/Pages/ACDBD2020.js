import React from 'react';

import './ACDBD2020.scss';

export default function ACDBD2020() {
  return (
    <section id='schedules' className='ts-schedule ts-schedule-white'>
      {/* <div className='container'>
        <div className='row'>
          <div className='col-lg-8 mx-auto'>
            <h2 className='section-title white'>
              <span>Schedule Details</span>
              Event Schedule
            </h2>
          </div>
        </div>
        <div className='row'>
          <div align='center' className='col-lg-12'>
            <div className='tab-content schedule-tabs'>
              <div role='tabpanel' className='tab-pane active' id='date1'>
                <div className='schedule-listing'>
                  <div className='schedule-slot-time '>
                    <div className='schedule-slot-sec '>
                      <a
                        href='https://www.linkedin.com/in/farzana-afrin-tisha/'
                        target='_blank'
                      >
                        <img
                          className='schedule-slot-speakers'
                          src='images/speakers/Farzana Afrin Tisha.jpeg'
                          alt=''
                        />
                        <br />
                        <h3 className='schedule-slot-title'>
                          Farzana Afrin Tisha
                        </h3>
                        <h5 className='text-muted'>
                          Director, Women in Big Data Bangladesh
                          <br />
                          AWS Community Leader
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    <div className='schedule-slot-info-content'>
                      <span>
                        {' '}
                        10.00 AM - 10.25 AM
                        <br />{' '}
                      </span>
                      <h3>Welcome</h3>
                      <p>Welcome Speech</p>
                    </div>
                  </div>
                </div>
                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>
                      <a
                        href='https://www.facebook.com/mohammad.zaman'
                        target='_blank'
                      >
                        <img
                          className='schedule-slot-speakers'
                          src='images/speakers/Mohammad Mahdee Uz Zaman.jpg'
                          alt=''
                        />
                        <br />
                        <h3 className='schedule-slot-title'>
                          Mohammad Mahdee Uz Zaman
                        </h3>
                        <h5 className='text-muted'>
                          Leader & Solutions Architect
                          <br />
                          Amazon Web Services
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    <span> 10.30 AM - 11.00 AM </span>
                    <h3>Keynote</h3>
                    <p>
                      <b>Innovation @ Disruption</b>
                      <br />
                      How Cloud Computing provides accelerated journey when
                      disruption is mandatory (like COVID) or intentional. Cloud
                      technologies provide the tools and capabilities necessary
                      for us to re-innovate ourselves and our organization.{' '}
                    </p>
                  </div>
                </div>
                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>
                      <a
                        href='https://www.facebook.com/profile.php?id=100019014580119'
                        target='_blank'
                      >
                        <img
                          className='schedule-slot-speakers'
                          src='images/speakers/Tina Jabeen.jpg'
                          alt=''
                        />
                        <br />
                        <h3 className='schedule-slot-title'>Tina Jabeen</h3>
                        <h5 className='text-muted'>
                          Managing Director
                          <br />
                          Startup Bangladesh Limited
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    <span> 11.05 AM - 11.10 AM </span>
                    <h3>Panel Discussion</h3>
                    <p>
                      <b>Potential of Cloud in Startups In Bangladesh</b>
                      <br />
                      This session will illustrate how Bangladesh has now gained
                      the capability of being the new big market for the cloud
                      business as emerging IT startups are potentially growing
                      to be billion dollar companies.
                    </p>
                  </div>
                </div>
                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>
                      <a
                        href='https://www.linkedin.com/in/snewaj/'
                        target='_blank'
                      >
                        <img
                          className='schedule-slot-speakers'
                          src='images/speakers/Topu Newaj.jpg'
                          alt=''
                        />
                        <br />
                        <h3 className='schedule-slot-title'>Topu Newaj</h3>
                        <h5 className='text-muted'>
                          Director SELISE
                          <br />
                          SVP Shohoz{' '}
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    <span> 11.15 AM - 11.45 AM </span>
                    <h3>Panel Discussion</h3>
                    <p>
                      <b>
                        Building ride-sharing application with AWS Managed
                        Services
                      </b>
                      <br />
                      This session teaches us how easily any ride-sharing
                      application can be built with AWS Managed Services.
                    </p>
                  </div>
                </div>
                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>
                      <a
                        href='https://www.linkedin.com/in/thisisshubho/'
                        target='_blank'
                      >
                        <img
                          className='schedule-slot-speakers'
                          src='images/speakers/Shubho Al-Farooque.jpg'
                          alt=''
                        />
                        <br />
                        <h3 className='schedule-slot-title'>
                          Shubho Al-Farooque
                        </h3>
                        <h5 className='text-muted'>
                          {' '}
                          CEO
                          <br />
                          Zantrik
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    <span> 11.50 AM - 12.00 PM </span>
                    <h3>Panel Discussion</h3>
                    <p>
                      <b>AWS cloud credits for Startups</b>
                      <br />
                      This session delves into AWS cloud credits for Startups.
                      For example, Founder Friendly Labs startups can receive up
                      to $25,000 USD in AWS credits good for two years or apply
                      for up to $100,000 USD in AWS credits good for one year. A
                      startup can receive up to $100,000 USD in AWS credits from
                      AWS Activate in total.{' '}
                    </p>
                  </div>
                </div>
                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>
                      <a
                        href='https://www.linkedin.com/in/mjferdous/'
                        target='_blank'
                      >
                        <img
                          className='schedule-slot-speakers'
                          src='images/speakers/MJ Ferdous 1.jpg'
                          alt=''
                        />
                        <br />
                        <h3 className='schedule-slot-title'>MJ Ferdous</h3>
                        <h5 className='text-muted'>
                          COO
                          <br />
                          Brain Station 23 Ltd
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    <span> 12.05 PM - 12.15 PM </span>
                    <h3>Session</h3>
                    <p>
                      <b>Era of fintech disruption: how AWS is adding value </b>
                      <br />
                      The hybrid cloud is gaining popularity and becoming
                      mainstream in banking as well. Let us learn about the
                      scope & opportunities that AWS offers for providing
                      solutions for fintech specifically. In this session, we
                      will deep-dive into the disruption in Banking industry in
                      Bangladesh.{' '}
                    </p>
                  </div>
                </div>
                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>
                      <a
                        href='https://www.linkedin.com/in/knowledgeindia/'
                        target='_blank'
                      >
                        <img
                          className='schedule-slot-speakers'
                          src='images/speakers/Mayank.jpeg'
                          alt=''
                        />
                        <h3 className='schedule-slot-title'>Mayank Pandey</h3>
                        <h5 className='text-muted'>
                          Founder
                          <br />
                          KnowledgeIndia
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    <span> 12.20 PM - 01.00 PM </span>
                    <h3>Session</h3>
                    <p>
                      <b>
                        Why is Infrastructure as Code (IaC) an essential skill
                        for your Cloud team?
                        <br />
                      </b>
                      Let us understand what makes Cloud so user-friendly,
                      compliant & agile. In this session, we discuss the
                      advantages of handling Infrastructure as Code and how to
                      achieve the same using AWS native tools. Join in to see a
                      working demo and learn strategy to standardize the
                      infrastructure in your organization.{' '}
                    </p>
                  </div>
                </div>
                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <a
                            href='https://www.linkedin.com/in/ariful-hasan-opu-83322025/'
                            target='_blank'
                          >
                            <img
                              className='schedule-slot-speakers'
                              src='images/speakers/Ariful Hasan Opu.jpg'
                              alt=''
                            />
                            <br />
                            <h3 className='schedule-slot-title'>
                              Ariful Hasan Opu
                            </h3>
                            <h5 className='text-muted'>
                              Founder
                              <br />
                              Bangladesh Innovation Forum
                            </h5>
                          </a>
                        </div>
                        <div className='col-md-6'>
                          <a href='https://www.facebook.com/mohammad.zaman'>
                            <img
                              className='schedule-slot-speakers'
                              src='images/speakers/Mohammad Mahdee Uz Zaman.jpg'
                              alt=''
                            />
                            <br />
                            <h3 className='schedule-slot-title'>
                              Mohammad Mahdee Uz Zaman
                            </h3>
                            <h5 className='text-muted'>
                              Leader & Solutions Architect <br />
                              Amazon Web Services
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    {' '}
                    <span> 01.00 PM - 01.30 PM </span>
                    <h3>Panel Discussion</h3>
                    <p>
                      <b>Career Talk in AWS</b>
                      <br />
                      This session will teach us about career opportunities for
                      students & professionals in AWS.
                    </p>
                  </div>
                </div>

                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>Break</div>
                  </div>
                  <div className='schedule-slot-info'>
                    <a href='#' target='_blank'>
                      <img className='schedule-slot-speakers' src='' alt='' />

                      <span> 01.30 PM - 02.00 PM</span>
                      <h3>Lunch Break</h3>
                    </a>
                  </div>
                </div>
                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>
                      <a
                        href='https://www.linkedin.com/in/mattbol/'
                        target='_blank'
                      >
                        <img
                          className='schedule-slot-speakers'
                          src='images/speakers/Matt Bollinger.jpeg'
                          alt=''
                        />
                        <br />
                        <h3 className='schedule-slot-title'>Matt Bollinger</h3>
                        <h5 className='text-muted'>
                          Senior Solutions Architect
                          <br />
                          Amazon Web Services
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    <span> 02.10 PM - 02.55 PM </span>
                    <h3>Session</h3>
                    <p>
                      <b>How to Train a Robot Using Reinforcement Learning</b>
                      <br />
                      This session illustrates the use of AWS RoboMaker sample
                      application to generate simulated training data used for
                      RL. The RL model will teach the robot to track and follow
                      an object. This is a simple demonstration that can be
                      extended into use cases like worker assistance in a
                      warehouse or an entertainment robot following a consumer
                      in their home.
                    </p>
                  </div>
                </div>

                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>
                      <a
                        href='https://www.linkedin.com/in/julie-elkins-33b30430/'
                        target='_blank'
                      >
                        <img
                          className='schedule-slot-speakers'
                          src='images/speakers/Julie Elkins.jpg'
                          alt=''
                        />
                        <br />
                        <div className='schedule-slot-info-content'>
                          <h3 className='schedule-slot-title'>Julie Elkins</h3>
                          <h5 className='text-muted'>
                            AWS Training Architect
                            <br />A Cloud Guru
                          </h5>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    <span> 03.00 PM - 03.45 PM </span>
                    <h3>Session</h3>
                    <p>
                      <b>Getting started with Serverless and Lambda</b>
                      <br />
                      In this talk, we will learn how to get started with
                      serverless computing and Lambda to build and run
                      applications without the need for provisioning or managing
                      servers. We will cover Lambda fundamentals along with
                      other AWS services that we can use to build our serverless
                      applications with Lambda.{' '}
                    </p>
                  </div>
                </div>

                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>
                      <a href='#' target='_blank'>
                        <img className='schedule-slot-speakers' src='' alt='' />
                        <div className='schedule-slot-info-content'>
                          <h3 className='schedule-slot-title'></h3>
                          <h5 className='text-muted'></h5>
                          <p>Break</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    <span> 03.45 PM - 04.00 PM </span>
                    <h3>Tea / Coffee Break</h3>
                  </div>
                </div>

                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>
                      <a
                        href='https://www.linkedin.com/in/mizans/'
                        target='_blank'
                      >
                        <img
                          className='schedule-slot-speakers'
                          src='images/speakers/Mohammad Mizanur Rahman.jpg'
                          alt=''
                        />
                        <br />
                        <h3 className='schedule-slot-title'>
                          Mohammad Mizanur Rahman
                        </h3>
                        <h5 className='text-muted'>
                          Head of Global Business & Partner
                          <br />
                          Brain Station 23 Ltd
                          <br />
                          AWS Community Leader
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    <span> 04.05 PM - 04.50 PM </span>
                    <h3>Session</h3>
                    <p>
                      <b>Advanced Conversational Chatbot with Amazon Lex</b>
                      <br />
                      This sessions dives into how we can build bots using
                      Amazon Lex to increase contact center productivity,
                      automate simple tasks, and drive operational efficiencies
                      across the enterprise.
                    </p>
                  </div>
                </div>

                <div className='schedule-listing'>
                  <div className='schedule-slot-time'>
                    <div className='schedule-slot-sec'>
                      <a
                        href='https://www.facebook.com/mohammad.zaman'
                        target='_blank'
                      >
                        <img
                          className='schedule-slot-speakers'
                          src='images/speakers/Mohammad Mizanur Rahman.jpg'
                          alt=''
                        />
                        <br />
                        <h3 className='schedule-slot-title'>
                          Mohammad Mizanur Rahman
                        </h3>
                        <h5 className='text-muted'>
                          Head of Global Business & Partner
                          <br />
                          Brain Station 23 Ltd
                          <br />
                          AWS Community Leader
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div className='schedule-slot-info'>
                    <span> 04.50 PM -05.00 PM</span>
                    <h3>Keynote</h3>
                    <p>
                      <b>Closing Keynote</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
