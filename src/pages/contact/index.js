import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
const [open, closed] = ['9:00am', '5:pm'];
const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={false} />
        </div>
        <div className="col-8">
          <h4 className="mt-4">Business Hours By Appointment Only </h4>
          <h5 className="mt-1 mb-3">(After hours dropbox available) </h5>
          <table className="table table-sm opening-hours-table">
            <tbody>
              <tr>
                <td className="day font-weight-bold">Monday</td>
                <td className="opens">{open}</td>
                <td>-</td>
                <td className="closes">{closed}</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Tuesday</td>
                <td className="opens">{open}</td>
                <td>-</td>
                <td className="closes">{closed}</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Wednesday</td>
                <td className="opens">{open}</td>
                <td>-</td>
                <td className="closes">{closed}</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Thursday</td>
                <td className="opens">{open}</td>
                <td>-</td>
                <td className="closes">{closed}</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Friday</td>
                <td className="opens">{open}</td>
                <td>-</td>
                <td className="closes">{closed}</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Saturday</td>
                <td className="opens">{open}</td>
                <td>-</td>
                <td className="closes">{closed}</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Sunday</td>
                <td className="opens">Closed</td>
                <td />
                <td className="closes" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
