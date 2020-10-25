module.exports = ({ refNo, complainType, fname, lname, officer_incharge, nic, dateOfBirth, religion, sex, address, phone, relationType}) => {
    const today = new Date();
    return `
    <!doctype html>
    <html>
       <head>
          <meta charset="UTF-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             font-family: 'Abhaya Libre',
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
          <center>
            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Emblem_of_Sri_Lanka.svg/800px-Emblem_of_Sri_Lanka.svg.png" style="max-width:56px;">
          </center>
          <center>
            <img src="https://firebasestorage.googleapis.com/v0/b/police-management.appspot.com/o/DOMComplains%2Fpolice_name.png?alt=media&token=c206252a-f9f3-4dd5-9948-aed6ab5cca34" style="max-width:96px;">
          </center>
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                        <tr>
                           <td>
                              <h6>Police Station : Kirulapone<h6>
                              <h6>High Level Rd, Colombo 00500</h6>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}`}
                           </td>
                        </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Reference Number: ${refNo}
                            </td>
                            <td>
                               Division : Domestic Abuse Affairs
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">  
                  <td colspan="2">Details of Complain</td>
                </tr>
                <tr>
                  <td>&nbsp</td>
                </tr>
                <tr class="item">
                   <td>Complain Type : </td>
                   <td>${complainType}</td>
                </tr>
                <tr class="item">
                   <td>First Name : </td>
                   <td>${fname}</td>
                </tr>
                <tr class="item">
                   <td>Last Name : </td>
                   <td>${lname}</td>
                </tr>
                <tr class="item">
                   <td>NIC Number : </td>
                   <td>${nic}</td>
                </tr>
                <tr class="item">
                   <td>Date of Birth : </td>
                   <td>${dateOfBirth}</td>
                </tr>
                <tr class="item">
                   <td>Religion : </td>
                   <td>${religion}</td>
                </tr>
                <tr class="item">
                   <td>Relation Type : </td>
                   <td>${relationType}</td>
                </tr>
                <tr class="item">
                   <td>Gender : </td>
                   <td>${sex}</td>
                </tr>
                <tr class="item">
                   <td>Address : </td>
                   <td>${address}</td>
                </tr>
                <tr class="item">
                   <td>Contact No : </td>
                   <td>${phone}</td>
                </tr>
                <tr class="item">
                   <td>Case handled by : </td>
                   <td>${officer_incharge}</td>
                </tr>
             </table>
             <br />
          </div>
       </body>
    </html>
    `;
};
