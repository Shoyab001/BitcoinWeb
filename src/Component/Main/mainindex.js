import React from "react";
import "./main.css";
import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";

const mainindex = () => {
  return (
    <div>
      <Container className="App">
        <h2 className="mainhead">How to use Bitcoinexch7</h2>

        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3 subtab"
        >
          <Tab eventKey="home" title="Inform yourself">
            <Row className="subRow">
              <Col style={{ margin: "20px 0px 20px" }}>
                <div className="titlecol">
                  <h1>Inform yourself</h1>
                  <p>
                    Bitcoin is different than what you know and use every day.
                    Before you start using Bitcoin, there are a few things that
                    you need to know in order to use it securely and avoid
                    common pitfalls.
                  </p>
                  <a href="" className="btnleft">
                    Read More
                  </a>
                </div>
              </Col>
              <Col>
                <img src="job.png" alt="" width={"100%"} className="infoimg" />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title=" Choose your wallet">
            <Row className="subRow">
              <Col>
                <img
                  src="https://img.freepik.com/premium-vector/isometric-locked-bitcoin-wallet_47328-1929.jpg"
                  alt=""
                  width={"380px"}
                  className="infoimg"
                />
              </Col>
              <Col style={{ margin: "20px 0px 20px" }}>
                <div className="titlecol2">
                  <h1>Choose your wallet</h1>
                  <p>
                    Free bitcoin wallets are available for all major operating
                    systems and devices to serve a variety of your needs. For
                    example, you can install an app on your mobile device for
                    everyday use or you can have a wallet only for online
                    payments on your computer. In any case, choosing a wallet is
                    easy and can be done in minutes.
                  </p>
                  <a href="" className="btnleft">
                    Choose your wallet
                  </a>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="longer-tab" title="Buy Bitcoin">
            <Row className="subRow">
              <Col style={{ margin: "20px 0px 20px" }}>
                <div className="titlecol">
                  <h1>Get Bitcoin</h1>
                  <p>
                    You can get Bitcoin by accepting it as a payment for goods
                    and services. There are also several ways you can buy
                    Bitcoin.
                  </p>
                  <a href="" className="btnleft">
                    Buy Bitcoin
                  </a>
                </div>
              </Col>
              <Col>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7047/7047060.png"
                  alt=""
                  width={"380px"}
                  className="infoimg"
                  style={{ transform: "scaleX(-1)" }}
                />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="contact" title="Spend Bitcoin">
            <Row className="subRow">
              <Col>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/385/728/original/bitcoin-icon-sign-symbol-design-free-png.png"
                  alt=""
                  width={"380px"}
                  className="infoimg"
                />
              </Col>
              <Col style={{ margin: "20px 0px 20px" }}>
                <div className="titlecol2">
                  <h1>Spend Bitcoin</h1>
                  <p>
                    There are a growing number of services and merchants
                    accepting Bitcoin all over the world. Use Bitcoin to pay
                    them and rate your experience to help them gain more
                    visibility.
                  </p>
                  <a href="" className="btnleft">
                    Find merchants and products
                  </a>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>

        <h2 className="mainhead">How to accept Bitcoinexch7</h2>
        <Tabs
          defaultActiveKey="Inform yourself"
          id="uncontrolled-tab-example"
          className="mb-3 subtab2"
        >
          <Tab eventKey="Inform yourself" title="Inform yourself">
            <Row className="subRow">
              <Col style={{ margin: "20px 0px 20px" }}>
                <div className="titlecol">
                  <h1>Inform yourself</h1>
                  <p>
                    Bitcoin does not require merchants to change their habits.
                    However, Bitcoin is different than what you know and use
                    every day. Before you start using Bitcoin, there are a few
                    things that you need to know in order to use it securely and
                    avoid common pitfalls.
                  </p>
                  <a href="" className="btnleft">
                    Read More
                  </a>
                </div>
              </Col>
              <Col>
                <img
                  src="/bitcoincash.png"
                  alt=""
                  width={"100%"}
                  className="infoimg"
                />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Processing payments" title="Processing payments">
            <Row className="subRow">
              <Col>
                <img
                  src="https://img.freepik.com/free-vector/gradient-cryptocurrency-concept-with-wallet_23-2149154182.jpg?w=2000"
                  alt=""
                  width={"380px"}
                  className="infoimg"
                />
              </Col>
              <Col style={{ margin: "20px 0px 20px" }}>
                <div className="titlecol2">
                  <h1>Processing payments</h1>
                  <p>
                    You can process payments and invoices by yourself or you can
                    use merchant services and deposit money in your local
                    currency or bitcoins. Most point of sales businesses use a
                    tablet or a mobile phone to let customers pay with their
                    mobile phones.
                  </p>
                  <a href="" className="btnleft">
                    Find merchant services
                  </a>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Accounting and taxes" title="Accounting and taxes">
            <Row className="subRow">
              <Col style={{ margin: "20px 0px 20px" }}>
                <div className="titlecol">
                  <h1>Accounting and taxes</h1>
                  <p>
                    Merchants often deposit and display prices in their local
                    currency. In other cases, Bitcoin works similarly to a
                    foreign currency. To get appropriate guidance regarding tax
                    compliance for your own jurisdiction, you should contact a
                    qualified accountant.
                  </p>
                  <a href="" className="btnleft">
                    Read More
                  </a>
                </div>
              </Col>
              <Col>
                <img
                  src="https://img.freepik.com/free-vector/monthly-expense-planning-reminder-appointment-payment-deadline-worker-with-timetable-organizer-schedule-countdown-payday-vector-isolated-concept-metaphor-illustration_335657-4322.jpg"
                  alt=""
                  width={"380px"}
                  className="infoimg"
                />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Gaining visibility" title="Gaining visibility">
            <Row className="subRow">
              <Col>
                <img
                  src="https://attentive.ai/blog/wp-content/uploads/2023/02/Business-people-working-together-on-project-1024x683.jpg"
                  alt=""
                  width={"380px"}
                  className="infoimg"
                />
              </Col>
              <Col style={{ margin: "20px 0px 20px" }}>
                <div className="titlecol2">
                  <h1>Gaining visibility</h1>
                  <p>
                    There is a growing number of users searching for ways to
                    spend their bitcoins. You can submit your business in online
                    directories to help them easily find you. You can also
                    display the Bitcoin logo on your website or your brick and
                    mortar business.
                  </p>
                  <a href="" className="btnleft">
                    Submit your business
                  </a>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>

        <br />
        <br />
      </Container>
    </div>
  );
};

export default mainindex;
